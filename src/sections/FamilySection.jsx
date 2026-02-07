import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';



const FamilySection = () => {
    const { language } = useLanguage();
    const t = translations[language];

    // Helper text styles
    const styles = {
        name: "font-heading text-3xl md:text-5xl text-indian-maroon mb-3 drop-shadow-md",
        relation: "font-serif text-royal-gold-dark text-lg md:text-xl italic mb-1 uppercase tracking-widest",
        lineageText: "font-sans text-royal-charcoal text-base md:text-lg mb-2 leading-relaxed"
    };

    const Divider = () => (
        <div className="flex items-center justify-center gap-4 my-2 opacity-40">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-indian-maroon to-transparent"></div>
            <div className="w-1 h-1 rounded-full bg-indian-maroon"></div>
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-indian-maroon to-transparent"></div>
        </div>
    );

    return (
        <section className="py-20 bg-cool-cream/50 relative overflow-hidden flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                    src="/images/bg_family.png"
                    alt="Background"
                    className="w-full h-full object-cover opacity-[0.25] pointer-events-none blur-[2px]"
                />
            </div>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(#E6CFA0 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>

            <div className="max-w-4xl w-full mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-white/90 backdrop-blur-xl rounded-2xl p-8 md:p-12 border-2 border-soft-gold/50 shadow-2xl relative overflow-hidden text-center"
                >
                    {/* Ornamental Borders */}
                    <div className="absolute top-4 left-4 w-16 h-16 border-t-[3px] border-l-[3px] border-indian-maroon/30 rounded-tl-2xl"></div>
                    <div className="absolute top-4 right-4 w-16 h-16 border-t-[3px] border-r-[3px] border-indian-maroon/30 rounded-tr-2xl"></div>
                    <div className="absolute bottom-4 left-4 w-16 h-16 border-b-[3px] border-l-[3px] border-indian-maroon/30 rounded-bl-2xl"></div>
                    <div className="absolute bottom-4 right-4 w-16 h-16 border-b-[3px] border-r-[3px] border-indian-maroon/30 rounded-br-2xl"></div>

                    {/* Main Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mb-10"
                    >
                        <h2 className="text-4xl md:text-6xl font-heading text-indian-maroon drop-shadow-md tracking-wide">
                            ✨ {t.family_heading} ✨
                        </h2>
                        <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-indian-saffron to-transparent mx-auto mt-4"></div>
                    </motion.div>

                    {/* Content Container */}
                    <div className="space-y-8">
                        {/* Groom's Side */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="bg-cool-cream/30 p-6 rounded-xl border border-soft-gold/20"
                        >
                            <h3 className={styles.name}>{t.groom_lineage.name}</h3>
                            <Divider />
                            <p className={styles.lineageText}>{t.groom_lineage.parents}</p>
                            <p className={styles.lineageText}>{t.groom_lineage.grandparents}</p>
                            <p className={styles.lineageText}>{t.groom_lineage.great_grandparents}</p>
                            <p className="font-heading text-lg md:text-xl text-indian-maroon mt-4 opacity-90">{t.groom_lineage.address}</p>
                        </motion.div>

                        {/* Connector */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.7 }}
                            className="flex items-center justify-center gap-4 py-2"
                        >
                            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-royal-gold"></div>
                            <span className="font-script text-3xl md:text-5xl text-royal-gold drop-shadow-sm px-4">
                                {t.bride_lineage.connector}
                            </span>
                            <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-royal-gold"></div>
                        </motion.div>

                        {/* Bride's Side */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                            className="bg-cool-cream/30 p-6 rounded-xl border border-soft-gold/20"
                        >
                            <h3 className={styles.name}>{t.bride_lineage.name}</h3>
                            <Divider />
                            <p className={styles.lineageText}>{t.bride_lineage.parents}</p>
                            <p className={styles.lineageText}>{t.bride_lineage.grandparents}</p>
                            <p className="font-heading text-lg md:text-xl text-indian-maroon mt-4 opacity-90">{t.bride_lineage.address}</p>
                        </motion.div>
                    </div>

                    {/* Decorative Bottom */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="mt-12 opacity-60 flex justify-center"
                    >
                        <span className="text-royal-gold text-2xl">❖</span>
                    </motion.div>
                </motion.div>

                {/* Optional Footer Text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                    className="text-center mt-8 text-indian-maroon/60 font-script text-xl"
                >
                    With Best Compliments from All Relatives & Friends
                </motion.div>
            </div>
        </section>
    );
};

export default FamilySection;
