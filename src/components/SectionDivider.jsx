import React from 'react';
import { motion } from 'framer-motion';

const DiyaFlame = () => (
    <motion.div
        className="absolute top-[-15px] left-1/2 -translate-x-1/2 w-4 h-6 rounded-full bg-gradient-to-t from-orange-500 via-yellow-400 to-transparent blur-[1px]"
        animate={{
            scale: [1, 1.2, 0.9, 1.1],
            opacity: [0.8, 1, 0.7, 0.9],
            rotate: [-2, 2, -1, 1]
        }}
        transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse"
        }}
    >
        {/* Inner blue core of flame */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-2 bg-blue-300/40 rounded-full blur-[1px]"></div>
    </motion.div>
);

const SectionDivider = () => {
    return (
        <div className="py-24 flex justify-center items-center relative overflow-hidden w-full">
            {/* Ambient Background Glow */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-24 bg-indian-saffron/10 blur-[60px] rounded-full pointer-events-none"></div>

            <div className="relative flex items-center justify-center w-full max-w-4xl px-4">

                {/* Left Floral Vine */}
                <motion.svg
                    className="w-full h-12 md:h-16 flex-1 opacity-80"
                    viewBox="0 0 300 60"
                    fill="none"
                    preserveAspectRatio="none"
                    style={{ transform: "scaleX(-1)" }} // Mirror for symmetry
                >
                    <motion.path
                        d="M0 30 C 50 30, 80 50, 120 40 C 160 30, 180 10, 220 20 C 250 28, 280 30, 300 30"
                        stroke="url(#goldGradientLeft)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                    {/* Leaves/Buds */}
                    <motion.path d="M120 40 Q 130 55 140 45" stroke="#8B0000" strokeWidth="1" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 0.5, duration: 1 }} />
                    <motion.path d="M220 20 Q 230 5 240 15" stroke="#8B0000" strokeWidth="1" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 0.8, duration: 1 }} />

                    <defs>
                        <linearGradient id="goldGradientLeft" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="20%" stopColor="#D4AF37" />
                            <stop offset="100%" stopColor="#D4AF37" />
                        </linearGradient>
                    </defs>
                </motion.svg>

                {/* Central Motif: Royal Lotus */}
                <div className="relative mx-4 md:mx-8 shrink-0">
                    {/* Main Lotus Icon */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", duration: 1.5, bounce: 0.5 }}
                        className="relative z-10"
                    >
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="drop-shadow-lg">
                            {/* Petals */}
                            <path d="M30 10 Q 40 30 30 50 Q 20 30 30 10" fill="#8B0000" stroke="#FFD700" strokeWidth="1" />
                            <path d="M30 50 Q 50 45 55 25 Q 40 35 30 50" fill="#D4AF37" stroke="#8B0000" strokeWidth="0.5" opacity="0.9" />
                            <path d="M30 50 Q 10 45 5 25 Q 20 35 30 50" fill="#D4AF37" stroke="#8B0000" strokeWidth="0.5" opacity="0.9" />
                            <path d="M30 50 Q 45 55 50 40" fill="none" stroke="#D4AF37" strokeWidth="1" />
                            <path d="M30 50 Q 15 55 10 40" fill="none" stroke="#D4AF37" strokeWidth="1" />
                            {/* Base */}
                            <circle cx="30" cy="52" r="3" fill="#D4AF37" />
                        </svg>
                    </motion.div>
                </div>

                {/* Right Floral Vine */}
                <motion.svg
                    className="w-full h-12 md:h-16 flex-1 opacity-80"
                    viewBox="0 0 300 60"
                    fill="none"
                    preserveAspectRatio="none"
                >
                    <motion.path
                        d="M0 30 C 50 30, 80 50, 120 40 C 160 30, 180 10, 220 20 C 250 28, 280 30, 300 30"
                        stroke="url(#goldGradientRight)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                    {/* Leaves/Buds */}
                    <motion.path d="M120 40 Q 130 55 140 45" stroke="#8B0000" strokeWidth="1" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 0.5, duration: 1 }} />
                    <motion.path d="M220 20 Q 230 5 240 15" stroke="#8B0000" strokeWidth="1" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 0.8, duration: 1 }} />

                    <defs>
                        <linearGradient id="goldGradientRight" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#D4AF37" />
                            <stop offset="80%" stopColor="#D4AF37" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                    </defs>
                </motion.svg>

            </div>
        </div>
    );
};

export default SectionDivider;
