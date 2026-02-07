import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const ContactSection = () => {
    const { language } = useLanguage();
    const t = translations[language];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section className="py-16 bg-gradient-to-b from-cool-cream to-white relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                    src="/images/bg_contact.png"
                    alt="Background"
                    className="w-full h-full object-cover opacity-[0.25] pointer-events-none blur-[2px]"
                />
            </div>
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-lg h-px bg-gradient-to-r from-transparent via-soft-gold to-transparent"></div>
            <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-soft-gold/30 rounded-tl-xl"></div>
            <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-soft-gold/30 rounded-tr-xl"></div>

            <div className="max-w-[90rem] mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-heading text-indian-maroon mb-3">{t.contact_title}</h2>
                    <div className="flex justify-center items-center gap-2 text-soft-gold">
                        <span className="h-px w-8 bg-soft-gold"></span>
                        <span className="text-lg">❖</span>
                        <span className="h-px w-8 bg-soft-gold"></span>
                    </div>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                >
                    {(t.contacts || []).map((contact, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-soft-gold/30 flex flex-col items-center text-center hover:bg-white transition-colors duration-300 relative group h-full"
                        >
                            {/* Card Ornaments */}
                            <div className="absolute inset-1 border border-soft-gold/10 rounded-xl pointer-events-none"></div>

                            <div className="w-12 h-12 mb-4 bg-sage-green/10 rounded-full flex items-center justify-center text-indian-maroon">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>

                            <h3 className="text-xl font-heading text-royal-gold-dark mb-1">{contact.name}</h3>
                            <p className="text-royal-charcoal/60 font-serif italic text-sm mb-4">{contact.role}</p>

                            <a
                                href={`tel:${contact.phone.replace(/\s/g, '')}`}
                                className="text-indian-maroon font-bold font-sans tracking-wide hover:text-indian-saffron transition-colors"
                            >
                                {contact.phone}
                            </a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;
