import React, { useEffect, useRef } from 'react';

const FallingLeaves = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let leaves = [];
        let pile = []; // Array to store settled leaves

        const resizeCanvas = () => {
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.offsetWidth;
                canvas.height = parent.offsetHeight;
            }
        };

        class Leaf {
            constructor() {
                this.reset(true); // true = initial spawn
            }

            reset(initial = false) {
                this.x = Math.random() * canvas.width;

                // CRITICAL CHANGE: Start ABOVE the screen
                // If initial, scatter them far up (e.g., -canvas.height to 0) so they rain down sequentially.
                // If recycling, strictly just above (-20).
                this.y = initial ? -Math.random() * canvas.height : -20;

                this.size = Math.random() * 10 + 5;
                this.speedY = Math.random() * 1 + 0.5;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.rotation = Math.random() * 360;
                this.rotationSpeed = Math.random() * 2 - 1;
                this.color = `rgba(212, 175, 55, ${Math.random() * 0.5 + 0.4})`;
                this.swayAmplitude = Math.random() * 2;
                this.swayFrequency = Math.random() * 0.05;
                this.time = Math.random() * 100;
            }

            update() {
                this.time += 0.05;
                this.y += this.speedY;
                this.x += Math.sin(this.time * this.swayFrequency) * this.swayAmplitude + this.speedX;
                this.rotation += this.rotationSpeed;

                // Ground collision
                if (this.y + this.size >= canvas.height - 10) {
                    // Add to pile
                    if (pile.length < 200) { // Limit pile size
                        pile.push({
                            x: this.x,
                            y: canvas.height - 10 - this.size + Math.random() * 5,
                            rotation: this.rotation,
                            size: this.size,
                            color: this.color
                        });
                    }
                    // Recycle this falling leaf to the top
                    this.reset(false);
                }
            }

            draw() {
                // Draw falling leaf
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate((this.rotation * Math.PI) / 180);
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.ellipse(0, 0, this.size, this.size / 2, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        }

        const init = () => {
            resizeCanvas();
            // Reduced intensity: Increased divisor from 10000 to 25000
            const leafCount = Math.floor((canvas.width * canvas.height) / 25000);
            leaves = Array.from({ length: leafCount }, () => new Leaf());
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw Pile
            pile.forEach(p => {
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate((p.rotation * Math.PI) / 180);
                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.ellipse(0, 0, p.size, p.size / 2, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            });

            // Update & Draw Falling Leaves
            leaves.forEach(leaf => {
                leaf.update();
                leaf.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resizeCanvas);

        init();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />;
};

export default FallingLeaves;
