import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const WardrobeSection = () => {
    const { language } = useLanguage();
    const t = translations[language];

    // Premium Maroon/Gold Typography for Light Background
    const gradientTitleStyle = {
        background: "linear-gradient(to right, #800000, #A0522D, #800000)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        filter: "drop-shadow(0px 1px 0px rgba(0,0,0,0.1))"
    };

    return (
        <section className="py-16 md:py-24 bg-[#FAF9F6] overflow-hidden relative border-t border-[#D4AF37]/30 border-b border-[#D4AF37]/30">
            {/* Light Pattern Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23800000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
            </div>

            {/* Ornamental Corners */}
            <div className="absolute top-0 left-0 w-32 h-32 opacity-20 bg-[url('/images/ornament-corner.png')] bg-contain bg-no-repeat pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-32 h-32 opacity-20 bg-[url('/images/ornament-corner.png')] bg-contain bg-no-repeat scale-x-[-1] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block border border-[#D4AF37]/50 px-4 py-1.5 rounded-full mb-6 bg-white/50 backdrop-blur-sm">
                        <span className="text-[#800000] text-xs uppercase tracking-[0.3em] font-bold">The Royal Lookbook</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-heading mb-8 leading-tight" style={gradientTitleStyle}>
                        {t.wardrobe_section?.title}
                    </h2>

                    <div className="relative p-8 md:p-12 border border-[#D4AF37]/30 rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl max-w-3xl mx-auto">
                        {/* Decorative Quote Icon */}
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#FAF9F6] p-4 rounded-full border border-[#D4AF37]/30">
                            <span className="text-4xl">✨</span>
                        </div>

                        <p className="font-serif text-[#5a2a2a] text-xl md:text-2xl italic leading-relaxed">
                            "{t.wardrobe_section?.quote}"
                        </p>

                        <div className="mt-6 flex justify-center gap-4 text-[#800000]/60">
                            <span>⚜</span>
                            <span>⚜</span>
                            <span>⚜</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WardrobeSection;
