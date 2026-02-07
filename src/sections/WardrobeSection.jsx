import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const WardrobeSection = () => {
    const { language } = useLanguage();
    const t = translations[language];
    const categories = t.wardrobe_section?.categories || [];
    const [activeIndex, setActiveIndex] = useState(0);

    // Manual Navigation Handlers
    const nextSlide = () => setActiveIndex((prev) => (prev + 1) % categories.length);
    const prevSlide = () => setActiveIndex((prev) => (prev - 1 + categories.length) % categories.length);

    // Premium Maroon/Gold Typography for Light Background
    const gradientTitleStyle = {
        background: "linear-gradient(to right, #800000, #A0522D, #800000)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        filter: "drop-shadow(0px 1px 0px rgba(0,0,0,0.1))"
    };

    return (
        <section className="py-16 md:py-28 bg-[#FAF9F6] overflow-hidden relative border-t border-[#D4AF37]/30 border-b border-[#D4AF37]/30">
            {/* Light Pattern Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23800000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
            </div>

            {/* Ornamental Corners */}
            <div className="absolute top-0 left-0 w-32 h-32 opacity-20 bg-[url('/images/ornament-corner.png')] bg-contain bg-no-repeat pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-32 h-32 opacity-20 bg-[url('/images/ornament-corner.png')] bg-contain bg-no-repeat scale-x-[-1] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row gap-8 items-center">

                {/* Left Side: Content & Controls */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/3 text-center md:text-left z-20"
                >
                    <div className="inline-block border border-[#D4AF37]/50 px-3 py-1 rounded-full mb-6 bg-white/50 backdrop-blur-sm">
                        <span className="text-[#800000] text-xs uppercase tracking-[0.3em] font-bold">The Royal Lookbook</span>
                    </div>

                    <h2 className="text-5xl md:text-6xl font-heading mb-4 leading-tight" style={gradientTitleStyle}>
                        {t.wardrobe_section?.title}
                    </h2>

                    <p className="font-serif text-[#555] text-lg md:text-xl italic opacity-90 mb-8 leading-relaxed">
                        "{t.wardrobe_section?.subtitle}"
                    </p>

                    {/* Navigation Controls */}
                    <div className="flex flex-col gap-4">
                        {/* Dots */}
                        <div className="flex justify-center md:justify-start gap-2 mb-2">
                            {categories.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveIndex(idx)}
                                    className={`h-2 rounded-full transition-all duration-300 ${activeIndex === idx ? 'w-8 bg-[#800000]' : 'w-2 bg-[#D4AF37]/40 hover:bg-[#D4AF37]'}`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>

                        {/* Swipe Hint / Buttons */}
                        <div className="flex items-center justify-center md:justify-start gap-4 text-[#800000]/80 text-sm font-bold tracking-widest uppercase">
                            <button onClick={prevSlide} className="p-3 border border-[#D4AF37]/30 rounded-full hover:bg-[#D4AF37]/10 transition-colors">
                                ←
                            </button>
                            <span>Click or Swipe</span>
                            <button onClick={nextSlide} className="p-3 border border-[#D4AF37]/30 rounded-full hover:bg-[#D4AF37]/10 transition-colors">
                                →
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Interactive Card Deck */}
                <div className="w-full md:w-2/3 perspective-1000 relative min-h-[500px]">
                    <div className="relative h-full w-full flex items-center justify-center">
                        <AnimatePresence mode="popLayout" custom={activeIndex}>
                            {categories.map((item, index) => {
                                if (index !== activeIndex) return null;

                                return (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, x: 50, rotateY: -5 }}
                                        animate={{ opacity: 1, x: 0, rotateY: 0 }}
                                        exit={{ opacity: 0, x: -50, rotateY: 5 }}
                                        transition={{ type: "spring", stiffness: 40, damping: 15 }}
                                        className="w-full max-w-md"
                                        drag="x"
                                        dragConstraints={{ left: 0, right: 0 }}
                                        dragElastic={0.2}
                                        onDragEnd={(e, { offset, velocity }) => {
                                            const swipe = offset.x; // positive = right, negative = left
                                            if (swipe < -50) {
                                                nextSlide();
                                            } else if (swipe > 50) {
                                                prevSlide();
                                            }
                                        }}
                                    >
                                        {/* THE CARD */}
                                        <div className="relative group perspective-inner cursor-grab active:cursor-grabbing">
                                            {/* Light Gold Shadow/Glow */}
                                            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[#D4AF37] via-[#FFF8E1] to-[#D4AF37] opacity-60 blur-sm"></div>

                                            <div className="relative bg-white rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl">

                                                {/* Header Image/Gradient Area */}
                                                <div className={`h-36 bg-gradient-to-br ${getThemeGradient(item.id)} relative flex items-center justify-center overflow-hidden`}>
                                                    <div className="absolute inset-0 bg-white/10 mix-blend-overlay"></div>

                                                    {/* Floating Pattern Overlay */}
                                                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply"></div>

                                                    <div className="relative z-10 text-6xl drop-shadow-md transform group-hover:scale-110 transition-transform duration-700">
                                                        {item.icon}
                                                    </div>
                                                </div>

                                                {/* Content */}
                                                <div className="p-8 text-center relative bg-[#FFFDF5]">
                                                    <h3 className="text-3xl font-heading text-[#800000] mb-1 tracking-wide">{item.title}</h3>
                                                    <p className="text-[#A0522D] text-xs uppercase tracking-[0.25em] font-bold mb-6 border-b border-[#D4AF37]/20 inline-block pb-1">
                                                        {item.dress_code}
                                                    </p>

                                                    <div className="space-y-4 text-left">
                                                        {/* His */}
                                                        <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-[#800000]/5 transition-colors border border-transparent hover:border-[#D4AF37]/20">
                                                            <div className="w-10 h-10 rounded-full bg-[#FFF8E1] flex items-center justify-center text-xl border border-[#D4AF37]/30 text-shadow-none">
                                                                🤵
                                                            </div>
                                                            <div>
                                                                <span className="text-[#A0522D] text-[10px] font-bold uppercase tracking-wider block mb-0.5">For Him</span>
                                                                <p className="text-[#333] font-serif leading-snug text-sm md:text-base">{item.male}</p>
                                                            </div>
                                                        </div>

                                                        {/* Her (Highlighted) */}
                                                        <div className="flex items-center gap-4 p-3 rounded-lg bg-[#fff0f0] border-l-2 border-[#800000] shadow-sm">
                                                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-xl border border-[#800000]/20">
                                                                💃
                                                            </div>
                                                            <div>
                                                                <span className="text-[#800000] text-[10px] font-bold uppercase tracking-wider block mb-0.5">For Her</span>
                                                                <p className="text-[#5a2a2a] font-serif leading-snug text-sm md:text-base font-medium">{item.female}</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Color Palette */}
                                                    <div className="mt-8 pt-6 border-t border-[#D4AF37]/20 flex flex-col items-center">
                                                        <span className="text-[#888] text-[10px] uppercase tracking-widest mb-3">Suggested Palette</span>
                                                        <div className="flex gap-4">
                                                            {item.colors.map((color, idx) => (
                                                                <div key={idx} className="relative group/color cursor-pointer">
                                                                    <div
                                                                        className="w-8 h-8 rounded-full border border-gray-200 shadow-md transform transition-transform hover:scale-125"
                                                                        style={{ backgroundColor: color }}
                                                                    />
                                                                    {/* Tooltip */}
                                                                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover/color:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none">
                                                                        {color}
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Helper for lighter, elegant gradients
const getThemeGradient = (id) => {
    switch (id) {
        case 'haldi': return 'from-[#FFF9C4] to-[#FFE082]'; // Light Yellow/Amber
        case 'mayra': return 'from-[#FFCCBC] to-[#FFAB91]'; // Light Orange/Peach
        case 'sangeet': return 'from-[#E1BEE7] to-[#CE93D8]'; // Light Purple/Lilac
        case 'baarat': return 'from-[#F8BBD0] to-[#F48FB1]'; // Pink/Rose
        case 'reception': return 'from-[#CFD8DC] to-[#B0BEC5]'; // Blue Grey/Silver
        default: return 'from-gray-100 to-gray-200';
    }
};

export default WardrobeSection;
