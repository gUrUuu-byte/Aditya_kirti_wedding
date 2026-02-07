import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

// Temple Arch Frame SVG
const TempleFrame = ({ className }) => (
    <svg
        viewBox="0 0 400 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    >
        {/* Frame Outline - Temple Arch Shape */}
        <motion.path
            d="M20,600 L20,200 Q 20,20 200,20 Q 380,20 380,200 L380,600 Z"
            stroke="#D4AF37"
            strokeWidth="3"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
        />

        {/* Inner Decorative Arch */}
        <motion.path
            d="M40,600 L40,220 Q 40,60 200,60 Q 360,60 360,220 L360,600"
            stroke="#8B0000" // Maroon accent
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
        />

        {/* Hanging Bell (Center Top) */}
        <motion.g
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 2, duration: 1, type: "spring" }}
        >
            <line x1="200" y1="20" x2="200" y2="60" stroke="#D4AF37" strokeWidth="2" />
            <circle cx="200" cy="65" r="5" fill="#FF9933" />
            <path d="M190 65 Q 200 80 210 65 Z" fill="#D4AF37" />
        </motion.g>
    </svg>
);

const Profile = ({ name, title, bio, image, align = 'left' }) => {
    const isLeft = align === 'left';

    return (
        <div className={`flex flex-col ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-6 lg:gap-12 mb-12 relative`}>

            {/* IMAGE CONTAINER */}
            <div className="relative w-full lg:w-1/2 flex justify-center">
                {/* Reduced Dimensions */}
                <div className="relative w-[220px] h-[300px] md:w-[280px] md:h-[380px] p-4">
                    {/* Animating Temple Frame */}
                    <TempleFrame />

                    {/* Image Masked by Arch */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="w-full h-full overflow-hidden"
                        style={{ clipPath: "path('M0,600 L0,180 Q 0,0 180,0 Q 360,0 360,180 L360,600 Z')" }}
                    >
                        {/* Use standard rectangular image masked by CSS or container overflow */}
                        <div className="w-full h-full relative overflow-hidden rounded-t-[100px]">
                            <img src={image} alt={name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000 ease-in-out" />

                            {/* Gradient Overlay for atmosphere */}
                            <div className="absolute inset-0 bg-gradient-to-t from-indian-maroon/40 to-transparent opacity-60"></div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* TEXT CONTAINER */}
            <div className={`w-full lg:w-1/2 text-center ${isLeft ? 'lg:text-left' : 'lg:text-right'} px-4`}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <h3 className="text-indian-maroon text-xs tracking-[0.3em] uppercase font-bold mb-2 flex items-center gap-2 justify-center lg:justify-start">
                        {isLeft ? <span className="text-xl">🕉️</span> : null}
                        {title}
                        {!isLeft ? <span className="text-xl">🕉️</span> : null}
                    </h3>
                    {/* Reduced Font Size */}
                    <h2 className="text-4xl md:text-5xl font-heading text-royal-gold-dark mb-4 drop-shadow-sm">{name}</h2>

                    <div className="w-16 h-[2px] bg-indian-saffron mx-auto lg:mx-0 mb-4"></div>

                    <p className="text-royal-charcoal/80 font-sans leading-relaxed text-base italic max-w-md mx-auto lg:mx-0">
                        {bio}
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

const CoupleIntroduction = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section className="py-8 md:py-12 lg:py-16 relative z-10 overflow-hidden bg-gradient-to-b from-cool-cream to-blush-pink/20">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                    src="/images/bg_couple.png"
                    alt="Background"
                    className="w-full h-full object-cover opacity-[0.25] pointer-events-none blur-[2px]"
                />
            </div>
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-indian-maroon/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-indian-saffron/5 rounded-full blur-3xl pointer-events-none"></div>

            {/* MOBILE LAYOUT (< lg) - Side by side rows */}
            <div className="lg:hidden w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6">

                {/* GROOM ROW - Image Left, Text Right */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="flex flex-row items-center gap-3 sm:gap-4 md:gap-6 mb-6 md:mb-8"
                >
                    <div className="w-1/2">
                        <div className="relative aspect-[3/4] w-full group overflow-hidden rounded-r-3xl md:rounded-r-[50px] shadow-lg border-r-2 md:border-r-4 border-indian-saffron/30">
                            <img
                                src="/images/groom.jpeg"
                                alt="Aditya Mittal"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-indian-maroon/60 to-transparent opacity-40"></div>
                        </div>
                    </div>
                    <div className="w-1/2 pr-2">
                        <h3 className="text-indian-maroon text-sm sm:text-base md:text-lg tracking-widest uppercase font-bold mb-1 flex items-center gap-1">
                            <span className="text-2xl sm:text-3xl md:text-4xl">🕉️</span> {t.the_groom}
                        </h3>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-indian-maroon mb-2 md:mb-3 leading-tight">{t.groom_name}</h2>
                        <div className="w-8 sm:w-12 md:w-16 h-[1.5px] bg-indian-saffron mb-2 md:mb-3"></div>
                        <p className="text-royal-charcoal/80 font-sans leading-relaxed text-xs sm:text-sm italic">
                            "{t.groom_bio}"
                        </p>
                    </div>
                </motion.div>

                {/* BRIDE ROW - Text Left, Image Right */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="flex flex-row items-center gap-3 sm:gap-4 md:gap-6"
                >
                    <div className="w-1/2 pl-2 text-right">
                        <h3 className="text-indian-maroon text-sm sm:text-base md:text-lg tracking-widest uppercase font-bold mb-1 flex items-center justify-end gap-1">
                            {t.the_bride} <span className="text-2xl sm:text-3xl md:text-4xl">🕉️</span>
                        </h3>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-indian-maroon mb-2 md:mb-3 leading-tight">{t.bride_name}</h2>
                        <div className="w-8 sm:w-12 md:w-16 h-[1.5px] bg-indian-saffron mb-2 md:mb-3 ml-auto"></div>
                        <p className="text-royal-charcoal/80 font-sans leading-relaxed text-xs sm:text-sm italic">
                            "{t.bride_bio}"
                        </p>
                    </div>
                    <div className="w-1/2">
                        <div className="relative aspect-[3/4] w-full group overflow-hidden rounded-l-3xl md:rounded-l-[50px] shadow-lg border-l-2 md:border-l-4 border-indian-saffron/30">
                            <img
                                src="/images/bride.png"
                                alt="Kirti Sharma"
                                className="w-full h-full object-cover scale-125 transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-indian-maroon/60 to-transparent opacity-40"></div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* DESKTOP LAYOUT (lg+) - 3 Column: Photo | Text | Photo */}
            <div className="hidden lg:block w-full max-w-[1400px] mx-auto px-4 lg:px-0">
                <div className="flex flex-row items-stretch justify-between gap-0">

                    {/* LEFT: GROOM PHOTO */}
                    <div className="w-1/4">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className="h-[700px] w-full relative group overflow-hidden rounded-r-[100px] shadow-xl border-r-4 border-indian-saffron/30"
                        >
                            <img
                                src="/images/groom.jpeg"
                                alt="Aditya Mittal"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-indian-maroon/60 to-transparent opacity-40"></div>
                        </motion.div>
                    </div>

                    {/* CENTER: TEXT */}
                    <div className="w-1/2 flex flex-col justify-center items-center px-12 py-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="text-center w-full h-1/2 flex flex-col justify-end pb-12 border-b border-indian-maroon/20"
                        >
                            <h3 className="text-indian-maroon text-xl tracking-[0.3em] uppercase font-bold mb-3 flex items-center justify-center gap-3">
                                <span className="text-4xl">🕉️</span> {t.the_groom} <span className="text-4xl">🕉️</span>
                            </h3>
                            <h2 className="text-6xl font-heading text-indian-maroon mb-4">{t.groom_name}</h2>
                            <p className="text-royal-charcoal/80 font-sans leading-relaxed text-base italic max-w-md mx-auto">
                                "{t.groom_bio}"
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="text-center w-full h-1/2 flex flex-col justify-start pt-12"
                        >
                            <h3 className="text-indian-maroon text-xl tracking-[0.3em] uppercase font-bold mb-3 flex items-center justify-center gap-3">
                                <span className="text-4xl">🕉️</span> {t.the_bride} <span className="text-4xl">🕉️</span>
                            </h3>
                            <h2 className="text-6xl font-heading text-indian-maroon mb-4">{t.bride_name}</h2>
                            <p className="text-royal-charcoal/80 font-sans leading-relaxed text-base italic max-w-md mx-auto">
                                "{t.bride_bio}"
                            </p>
                        </motion.div>
                    </div>

                    {/* RIGHT: BRIDE PHOTO */}
                    <div className="w-1/4">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className="h-[700px] w-full relative group overflow-hidden rounded-l-[100px] shadow-xl border-l-4 border-indian-saffron/30"
                        >
                            <img
                                src="/images/bride.png"
                                alt="Kirti Sharma"
                                className="w-full h-full object-cover scale-125 transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-indian-maroon/60 to-transparent opacity-40"></div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CoupleIntroduction;
