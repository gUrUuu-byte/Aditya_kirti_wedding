import React, { useEffect, useRef } from 'react';

const FallingPetals = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let petals = [];
        let pile = [];

        const resizeCanvas = () => {
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.offsetWidth;
                canvas.height = parent.offsetHeight;
            }
        };

        // Indian Wedding Palette for Petals
        const petalColors = [
            'rgba(255, 153, 51',   // Saffron (Marigold)
            'rgba(255, 204, 0',    // Turmeric Yellow
            'rgba(139, 0, 0',      // Deep Red (Rose)
            'rgba(220, 20, 60',    // Crimson
            'rgba(255, 165, 0'     // Orange
        ];

        class Petal {
            constructor() {
                this.reset(true);
            }

            reset(initial = false) {
                this.x = Math.random() * canvas.width;
                this.y = initial ? -Math.random() * canvas.height : -20;
                this.size = Math.random() * 6 + 4; // Slightly smaller than leaves
                this.speedY = Math.random() * 1.5 + 0.5; // Flutter speed
                this.speedX = Math.random() * 1 - 0.5;
                this.rotation = Math.random() * 360;
                this.rotationSpeed = Math.random() * 4 - 2; // Spin faster like a petal

                const baseColor = petalColors[Math.floor(Math.random() * petalColors.length)];
                this.color = `${baseColor}, ${Math.random() * 0.4 + 0.6})`; // Alpha variation

                this.swayAmplitude = Math.random() * 3;
                this.swayFrequency = Math.random() * 0.05 + 0.02;
                this.time = Math.random() * 100;
            }

            update() {
                this.time += 0.05;
                this.y += this.speedY;
                this.x += Math.sin(this.time * this.swayFrequency) * this.swayAmplitude + this.speedX;
                this.rotation += this.rotationSpeed;

                // Ground/Pile collision
                if (this.y + this.size >= canvas.height - 10) {
                    if (pile.length < 150) { // Reduced from 300 for better performance
                        pile.push({
                            x: this.x,
                            y: canvas.height - 10 - this.size + Math.random() * 5,
                            rotation: this.rotation,
                            size: this.size,
                            color: this.color
                        });
                    }
                    this.reset(false);
                }
            }

            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate((this.rotation * Math.PI) / 180);

                // Gradient for texture
                // Parse base color to create a gradient variant if possible, or just use overlay
                const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size);
                gradient.addColorStop(0, 'rgba(255, 255, 255, 0.2)'); // Light highlight in center
                gradient.addColorStop(0.4, this.color);
                gradient.addColorStop(1, this.color); // Darker edges implicitly by stacking

                ctx.fillStyle = gradient;

                ctx.beginPath();
                // Draw natural petal shape (two bezier curves)
                ctx.moveTo(0, -this.size * 0.8);
                ctx.bezierCurveTo(this.size * 0.8, -this.size * 0.3, this.size * 0.8, this.size * 0.8, 0, this.size * 0.8);
                ctx.bezierCurveTo(-this.size * 0.8, this.size * 0.8, -this.size * 0.8, -this.size * 0.3, 0, -this.size * 0.8);
                ctx.fill();

                // Vein Texture
                ctx.beginPath();
                ctx.moveTo(0, -this.size * 0.6);
                ctx.lineTo(0, this.size * 0.6);
                ctx.strokeStyle = "rgba(0,0,0,0.15)";
                ctx.lineWidth = 1;
                ctx.stroke();

                ctx.restore();
            }
        }

        const init = () => {
            resizeCanvas();
            // Reduced from /45000 to /90000 for 50% fewer petals
            const petalCount = Math.floor((canvas.width * canvas.height) / 90000);
            petals = Array.from({ length: petalCount }, () => new Petal());
        };

        const animate = () => {
            // Clear with slight trail effect? No, clean clear for crispness
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw Pile
            // Reduce opacity of the pile for a softer look
            pile.forEach(p => {
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate((p.rotation * Math.PI) / 180);

                // Texture: Create a gradient for the petal
                const gradient = ctx.createLinearGradient(0, -p.size / 2, 0, p.size / 2);
                gradient.addColorStop(0, p.color); // Base color
                gradient.addColorStop(0.5, p.color.replace('0.9)', '0.7)')); // Lighter center
                gradient.addColorStop(1, p.color); // Base color

                ctx.fillStyle = gradient;

                ctx.beginPath();
                // Irregular shape for realism
                ctx.moveTo(0, -p.size / 2);
                ctx.bezierCurveTo(p.size / 2, -p.size / 2, p.size / 2, p.size / 2, 0, p.size / 2);
                ctx.bezierCurveTo(-p.size / 2, p.size / 2, -p.size / 2, -p.size / 2, 0, -p.size / 2);
                ctx.fill();

                // Add a subtle central vein
                ctx.strokeStyle = "rgba(0,0,0,0.1)";
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(0, -p.size / 2 + 2);
                ctx.lineTo(0, p.size / 2 - 2);
                ctx.stroke();

                ctx.restore();
            });

            // Update & Draw Falling Petals
            petals.forEach(p => {
                p.update();
                p.draw();
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

export default FallingPetals;
