import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [ripples, setRipples] = useState([]);
    const [particles, setParticles] = useState([]);

    // Smooth mouse movement for the main cursor
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const springX = useSpring(cursorX, springConfig);
    const springY = useSpring(cursorY, springConfig);

    useEffect(() => {
        let lastParticleTime = 0;

        const moveCursor = (e) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);

            // Generate Stardust Particles (throttled)
            const now = Date.now();
            if (now - lastParticleTime > 50 && !isHovered) { // Less particles when hovering to keep it clean
                const id = now;
                setParticles(prev => [
                    ...prev.slice(-15), // Keep max 15 particles to avoid lag
                    {
                        id,
                        x: e.clientX,
                        y: e.clientY,
                        size: Math.random() * 4 + 1 // Random size 1-5px
                    }
                ]);
                lastParticleTime = now;

                // Cleanup old particles
                setTimeout(() => {
                    setParticles(prev => prev.filter(p => p.id !== id));
                }, 1000);
            }
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button') || e.target.classList.contains('clickable')) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        const handleClick = (e) => {
            const id = Date.now();
            setRipples(prev => [
                ...prev,
                { id, x: e.clientX, y: e.clientY }
            ]);
            setTimeout(() => {
                setRipples(prev => prev.filter(r => r.id !== id));
            }, 800);
        };

        window.addEventListener('mousemove', moveCursor);
        document.body.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.body.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('click', handleClick);
        };
    }, [cursorX, cursorY, isHovered]);

    return (
        <div className="pointer-events-none fixed left-0 top-0 z-[9999] hidden lg:block">
            {/* Stardust Particles */}
            <AnimatePresence>
                {particles.map(particle => (
                    <motion.div
                        key={particle.id}
                        initial={{ opacity: 1, scale: 1, x: particle.x, y: particle.y }}
                        animate={{ opacity: 0, scale: 0, y: particle.y + 20 }} // Drift down
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="absolute rounded-full bg-royal-gold shadow-[0_0_5px_#D4AF37]"
                        style={{
                            width: particle.size,
                            height: particle.size,
                        }}
                    />
                ))}
            </AnimatePresence>

            {/* Click Ripples */}
            <AnimatePresence>
                {ripples.map(ripple => (
                    <motion.div
                        key={ripple.id}
                        initial={{ opacity: 1, scale: 0, x: ripple.x, y: ripple.y }}
                        animate={{ opacity: 0, scale: 2 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="absolute w-8 h-8 rounded-full border border-royal-gold"
                        style={{
                            marginLeft: -16, // Center ripple
                            marginTop: -16,
                        }}
                    />
                ))}
            </AnimatePresence>

            {/* Outer Ring with Glow */}
            <motion.div
                className={`absolute rounded-full border border-royal-gold transition-all duration-200 ease-out ${isHovered
                        ? 'bg-royal-gold/20 scale-150 border-transparent shadow-[0_0_20px_#D4AF37]'
                        : 'w-8 h-8 shadow-[0_0_10px_#D4AF37]' // Added Glow
                    }`}
                style={{
                    translateX: springX,
                    translateY: springY,
                    width: isHovered ? 48 : 32,
                    height: isHovered ? 48 : 32,
                }}
            />

            {/* Inner Dot with Glow */}
            <motion.div
                className="absolute w-2 h-2 bg-indian-maroon rounded-full shadow-[0_0_5px_#800000]"
                style={{
                    translateX: cursorX,
                    translateY: cursorY,
                    marginLeft: 12,
                    marginTop: 12,
                }}
            />
        </div>
    );
};

export default CustomCursor;
