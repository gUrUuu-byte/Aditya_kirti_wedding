import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import WaxSeal from '../components/WaxSeal';
import FallingPetals from '../components/FallingPetals';

// Subtle Paper Texture Pattern
const PaperTexture = () => (
    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")` }}>
    </div>
);

const CornerOrnament = ({ className, rotate = 0 }) => (
    <motion.svg
        viewBox="0 0 100 100"
        className={`w-32 h-32 md:w-48 md:h-48 absolute text-indian-maroon/20 ${className}`}
        style={{ rotate }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
    >
        <path d="M10,10 L40,10 Q60,10 60,30 L60,40 Q60,60 40,60 L30,60 Q10,60 10,40 Z" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M10,10 L10,40 Q10,60 30,60" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="20" cy="20" r="3" fill="currentColor" />
        <path d="M90,10 Q60,10 40,40 Q20,70 10,90" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 2" />
        {/* Decorative swirls */}
        <path d="M5,5 Q40,5 50,20 T70,50" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </motion.svg>
);

const MandalaBackground = () => (
    <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex items-center justify-center overflow-hidden">
        <motion.svg
            viewBox="0 0 100 100"
            className="w-[120vmax] h-[120vmax] text-indian-maroon"
            animate={{ rotate: 360 }}
            transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        >
            {/* Intricate Mandala Pattern */}
            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.2" fill="none" />
            <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="0.3" fill="none" strokeDasharray="1 1" />
            <path d="M50 5 L55 35 L95 50 L65 55 L50 95 L35 65 L5 50 L45 35 Z" stroke="currentColor" strokeWidth="0.2" fill="none" />
            <path d="M50 0 L100 50 L50 100 L0 50 Z" stroke="currentColor" strokeWidth="0.1" fill="none" />
            {/* Petals */}
            {[...Array(12)].map((_, i) => (
                <path key={i} d={`M50 50 Q${50 + 20 * Math.cos(i * Math.PI / 6)} ${50 + 20 * Math.sin(i * Math.PI / 6)} ${50 + 40 * Math.cos(i * Math.PI / 6)} ${50 + 40 * Math.sin(i * Math.PI / 6)}`} stroke="currentColor" strokeWidth="0.2" fill="none" />
            ))}
        </motion.svg>
    </div>
);

const HeroSection = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section className="relative min-h-screen flex items-center justify-center p-8 overflow-hidden z-10 bg-cool-cream">
            {/* Background Wedding Image */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                    src="/images/phera.jpeg"
                    alt="Wedding Background"
                    className="w-full h-full object-cover opacity-[0.12] pointer-events-none blur-[2px]"
                />
            </div>

            <PaperTexture />
            <FallingPetals />
            <MandalaBackground />

            {/* Ornamental Corners */}
            <CornerOrnament className="top-0 left-0" rotate={0} />
            <CornerOrnament className="top-0 right-0" rotate={90} />
            <CornerOrnament className="bottom-0 right-0" rotate={180} />
            <CornerOrnament className="bottom-0 left-0" rotate={270} />

            <div className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center justify-center h-full gap-4 md:gap-6 pt-10">

                {/* Invocation */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="flex flex-col items-center"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                        className="mb-4"
                    >
                        <img
                            src="/images/ganesh_hero_logo.png"
                            alt="Shree Ganeshay Namah"
                            className="w-24 h-24 object-contain drop-shadow-sm"
                        />
                    </motion.div>
                    <h3 className="font-devotional text-xl md:text-3xl text-indian-maroon/90 tracking-widest drop-shadow-sm">
                        || श्री गणेशाय नमः ||
                    </h3>
                    <div className="text-indian-saffron text-6xl md:text-8xl mt-2 animate-pulse drop-shadow-md">🕉</div>
                </motion.div>

                {/* Grandparents' Invitation (Hero) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.4 }}
                    className="flex flex-col items-center gap-1 my-2"
                >
                    {t.hero_invitation_lines && t.hero_invitation_lines.map((line, index) => (
                        <p
                            key={index}
                            className={`text-indian-maroon font-devotional text-base md:text-xl leading-relaxed ${index === 1 ? 'font-bold text-lg md:text-2xl my-1' : 'opacity-90'}`}
                        >
                            {line}
                        </p>
                    ))}
                </motion.div>

                {/* Main Titles */}
                <div className="space-y-1">
                    <motion.p
                        initial={{ opacity: 0, letterSpacing: "0.2em" }}
                        animate={{ opacity: 1, letterSpacing: "0.4em" }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="uppercase text-indian-saffron font-bold text-lg md:text-2xl tracking-[0.3em] mb-2"
                    >
                        {t.shubh_vivah_title}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                        className="leading-none"
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl text-indian-maroon font-heading drop-shadow-md leading-[0.9]">
                            {t.wedding_invitation}
                        </h1>
                    </motion.div>
                </div>

                {/* Wax Seal / Divider - Compacted
                <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 100, delay: 1.2 }}
                    className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center relative shrink-0"
                >
                    <WaxSeal className="w-full h-full drop-shadow-2xl text-indian-maroon" />
                </motion.div> */}

                {/* Couple Names */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="w-full"
                >
                    <div className="relative inline-block py-4 px-8 border-t border-b border-indian-maroon/20 bg-white/30 backdrop-blur-sm rounded-lg">
                        <p className="font-heading text-3xl md:text-5xl text-royal-charcoal tracking-wide mb-1">
                            Aditya <span className="text-indian-maroon text-2xl align-middle px-1">weds</span> Kirti
                        </p>
                        <p className="font-devotional text-indian-maroon text-lg md:text-xl opacity-80">
                            आदित्य <span className="text-xs align-middle">❤️</span> कीर्ति
                        </p>

                        <p className="font-heading text-lg md:text-2xl text-indian-maroon mt-3 pt-2 border-t border-indian-maroon/20">
                            {t.invitation_date}
                        </p>

                        {/* Decorative dots on border */}
                        <div className="absolute top-[-3px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-indian-maroon rounded-full"></div>
                        <div className="absolute bottom-[-3px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-indian-maroon rounded-full"></div>
                    </div>

                    <p className="font-sans text-royal-charcoal/80 text-xs md:text-sm mt-4 max-w-lg mx-auto italic">
                        "Is Shubh Avsar par humein aapka saath aur aashirwad chahiye."
                    </p>
                </motion.div>

                {/* Scroll Mockup - Moved up slightly */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 5, 0] }}
                    transition={{ delay: 2.5, duration: 2, repeat: Infinity }}
                    className="opacity-60 pt-2"
                >
                    <span className="text-[10px] uppercase tracking-widest text-indian-maroon">Scroll for Events</span>
                    <div className="w-[1px] h-8 bg-indian-maroon/50 mx-auto mt-1"></div>
                </motion.div>

            </div>
        </section >
    );
};

export default HeroSection;
