import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const CountdownTimer = ({ targetDate }) => {
    const { language } = useLanguage();
    const t = translations[language];

    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-16 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Side: Timer */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="uppercase tracking-[0.3em] text-indian-saffron text-sm font-bold mb-6 flex items-center gap-4"
                    >
                        <span className="w-8 h-[1px] bg-indian-saffron lg:hidden"></span>
                        {t.timer_title}
                        <span className="w-8 h-[1px] bg-indian-saffron"></span>
                    </motion.h3>

                    <h2 className="text-4xl md:text-5xl font-heading text-indian-maroon mb-8">
                        {t.timer_subtitle}
                    </h2>

                    <div className="flex flex-wrap justify-center lg:justify-start items-center bg-white/40 backdrop-blur-sm px-6 py-6 rounded-2xl border border-indian-maroon/20 shadow-sm w-fit">
                        <TimeUnit value={timeLeft.days || 0} label={t.days} />
                        <span className="text-2xl text-indian-maroon/40 font-serif -mt-6">:</span>
                        <TimeUnit value={timeLeft.hours || 0} label={t.hours} />
                        <span className="text-2xl text-indian-maroon/40 font-serif -mt-6 md:block hidden">:</span>
                        <TimeUnit value={timeLeft.minutes || 0} label={t.minutes} />
                        <span className="text-2xl text-indian-maroon/40 font-serif -mt-6">:</span>
                        <TimeUnit value={timeLeft.seconds || 0} label={t.seconds} />
                    </div>
                </div>

                {/* Right Side: Image Block */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative h-[400px] w-full rounded-tr-[100px] rounded-bl-[100px] overflow-hidden border-4 border-white shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 cursor-pointer"
                >
                    <div className="absolute inset-0 bg-royal-gold/10 z-10 hover:bg-transparent transition-colors duration-300"></div>
                    <img
                        src="/images/countdown.jpeg"
                        alt="Countdown Moment"
                        className="w-full h-full object-cover"
                        style={{ objectPosition: '50% 15%' }}
                    />

                    {/* Corner Accent */}
                    <div className="absolute bottom-4 right-4 w-20 h-20 border-b-2 border-r-2 border-white/80 z-20"></div>
                </motion.div>

            </div>
        </div>
    );
};

const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center mx-2 md:mx-4 w-16 md:w-20 relative">
        <div className="h-16 md:h-20 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={value}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="text-4xl md:text-5xl font-serif text-royal-gold font-bold drop-shadow-sm tabular-nums absolute"
                >
                    {String(value).padStart(2, '0')}
                </motion.div>
            </AnimatePresence>
        </div>
        <span className="text-xs uppercase tracking-widest text-royal-charcoal/60 mt-1 font-sans border-t border-royal-gold/30 pt-1 w-full text-center">
            {label}
        </span>
    </div>
);

export default CountdownTimer;
