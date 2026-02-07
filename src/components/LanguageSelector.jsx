import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import OrnamentalBorder from './OrnamentalBorder';
import AmbientDust from './AmbientDust';

const LanguageSelector = () => {
    const { setLanguage } = useLanguage();

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-royal-cream text-royal-charcoal overflow-hidden">
            <AmbientDust />
            <OrnamentalBorder />

            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-50 mix-blend-multiply pointer-events-none"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10 text-center p-8 md:p-12 max-w-2xl w-full mx-4"
            >
                {/* Decorative Top Icon */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mb-8 flex justify-center"
                >
                    <span className="text-4xl text-indian-maroon opacity-80">ॐ</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-4xl md:text-6xl font-heading text-indian-maroon mb-4 drop-shadow-sm"
                >
                    Welcome
                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-3xl md:text-5xl font-heading text-indian-maroon mb-12 opacity-90"
                    style={{ fontFamily: "'Rozha One', serif" }}
                >
                    स्वागतम्
                </motion.h2>

                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setLanguage('en')}
                        className="px-8 py-3 bg-white border border-indian-maroon/30 rounded-full text-indian-maroon font-serif text-lg tracking-widest uppercase hover:bg-indian-maroon hover:text-white transition-all duration-300 shadow-lg min-w-[200px]"
                    >
                        English
                    </motion.button>

                    <div className="hidden md:block w-[1px] h-12 bg-indian-maroon/20"></div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setLanguage('hi')}
                        className="px-8 py-3 bg-white border border-indian-maroon/30 rounded-full text-indian-maroon font-serif text-lg tracking-widest uppercase hover:bg-indian-maroon hover:text-white transition-all duration-300 shadow-lg min-w-[200px]"
                        style={{ fontFamily: "'Rozha One', serif" }}
                    >
                        हिंदी (Hindi)
                    </motion.button>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="mt-12 text-sm text-indian-maroon/60 tracking-[0.2em] uppercase font-sans"
                >
                    Select language to proceed
                </motion.p>
            </motion.div>
        </div>
    );
};

export default LanguageSelector;
