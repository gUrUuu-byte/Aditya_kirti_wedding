import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const ImportantFamilySection = () => {
    const { language } = useLanguage();
    const t = translations[language];
    const { important_family } = t;

    if (!important_family) return null;

    return (
        <section className="py-16 md:py-24 bg-royal-cream relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#800000 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">

                {/* Section Title */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-devotional text-indian-maroon drop-shadow-sm mb-4">
                            {important_family.title}
                        </h2>
                        <div className="w-24 h-[3px] bg-indian-saffron mx-auto rounded-full"></div>
                    </motion.div>
                </div>

                {/* 4 Block Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {important_family.sections.map((section, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-indian-maroon/20 hover:border-indian-saffron/50 hover:shadow-lg transition-all text-center group ${index === important_family.sections.length - 1 ? "md:col-span-2 lg:col-span-4" : ""
                                }`}
                        >
                            {/* Decorative Top */}
                            <div className="mb-4 text-indian-maroon/40 flex justify-center">
                                <svg width="40" height="10" viewBox="0 0 100 20" className="fill-current">
                                    <path d="M0 10 Q50 20 100 10 Q50 0 0 10 Z" />
                                </svg>
                            </div>

                            <h3 className="text-xl font-heading text-indian-maroon mb-4 pb-2 border-b border-indian-maroon/10">
                                {section.title}
                            </h3>

                            <ul className="space-y-2">
                                {section.members.map((member, mIndex) => (
                                    <li key={mIndex} className="font-serif text-royal-charcoal/90 text-lg group-hover:text-indian-maroon transition-colors">
                                        {member}
                                    </li>
                                ))}
                            </ul>

                            {/* Decorative Bottom */}
                            <div className="mt-4 text-indian-maroon/40 flex justify-center rotate-180">
                                <svg width="40" height="10" viewBox="0 0 100 20" className="fill-current">
                                    <path d="M0 10 Q50 20 100 10 Q50 0 0 10 Z" />
                                </svg>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Address Footer */}
                {important_family.footer_address && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-16 text-center"
                    >
                        <div className="inline-block bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full border border-indian-maroon/30 shadow-md">
                            <p className="font-heading text-xl md:text-2xl text-indian-maroon">
                                {important_family.footer_address}
                            </p>
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default ImportantFamilySection;
