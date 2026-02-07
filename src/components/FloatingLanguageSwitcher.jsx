import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const FloatingLanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'hi' : 'en');
    };

    return (
        <div className="fixed top-6 right-6 z-50">
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-md border border-indian-maroon/30 rounded-full shadow-xl text-indian-maroon font-serif font-bold tracking-widest uppercase hover:bg-indian-maroon hover:text-white transition-all duration-300"
            >
                <span className="text-xl">
                    {language === 'en' ? '🇮🇳' : '🇮🇳'}
                </span>
                <span className="text-xs md:text-sm">
                    {language === 'en' ? 'हिंदी' : 'English'}
                </span>
            </motion.button>
        </div>
    );
};

export default FloatingLanguageSwitcher;
