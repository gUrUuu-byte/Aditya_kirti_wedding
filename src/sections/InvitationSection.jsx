import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';



const RoyalScroll = ({ children, cornerName }) => (
    <div className="relative p-6 md:p-10 max-w-3xl mx-auto my-6">
        {/* Scroll Background - CSS/SVG */}
        <div className="absolute inset-0 bg-[#FFFBF0] shadow-2xl rounded-sm transform rotate-[-1deg] border border-indian-saffron/20"></div>
        <div className="absolute inset-0 bg-[#FFFBF0] shadow-lg rounded-sm transform rotate-[1deg] border border-indian-maroon/10 z-0"></div>

        {/* Corner Decorations */}
        <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-indian-maroon z-10"></div>
        <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-indian-maroon z-10"></div>
        <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-indian-maroon z-10"></div>
        <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-indian-maroon z-10"></div>

        {/* Corner Name - Bottom Right Corner */}
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute bottom-2 right-4 md:bottom-2 md:right-6 z-20"
        >
            <p className="text-right text-lg md:text-xl lg:text-2xl text-indian-maroon font-medium leading-tight" style={{ fontFamily: "'Rozha One', serif" }}>
                {cornerName}
            </p>
        </motion.div>

        {/* Content */}
        <div className="relative z-10">
            {children}
        </div>
    </div>
);

const SideSway = ({ children, delay = 0 }) => (
    <motion.div
        animate={{ rotate: [0, 2, 0, -2, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
    >
        {children}
    </motion.div>
);

const InvitationSection = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section className="py-12 px-2 md:px-4 min-h-[50vh] flex items-center justify-center relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                    src="/images/bg_invitation.png"
                    alt="Background"
                    className="w-full h-full object-cover opacity-[0.25] pointer-events-none blur-[2px]"
                />
            </div>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#800000 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>

            {/* Side Ornaments: Royal Pillars / Hanging Bells */}
            <div className="absolute top-24 left-[10%] md:left-[20%] h-full hidden md:flex flex-col items-center justify-between py-6 opacity-30 pointer-events-none">
                <SideSway delay={0}>
                    <svg width="40" height="300" viewBox="0 0 60 400" className="text-indian-maroon fill-current">
                        <path d="M30 0 L32 400 M28 400 L30 0" stroke="currentColor" strokeWidth="2" />
                        <circle cx="30" cy="400" r="10" />
                        <path d="M10 50 Q30 80 50 50 T10 120 Q30 150 50 120" fill="none" stroke="currentColor" strokeWidth="2" />
                        {/* Hanging Bell */}
                        <path d="M20 380 Q30 400 40 380 L30 350 Z" />
                    </svg>
                </SideSway>
            </div>

            <div className="absolute top-24 right-[10%] md:right-[20%] h-full hidden md:flex flex-col items-center justify-between py-6 opacity-30 pointer-events-none">
                <SideSway delay={2}>
                    <svg width="40" height="300" viewBox="0 0 60 400" className="text-indian-maroon fill-current">
                        <path d="M30 0 L32 400 M28 400 L30 0" stroke="currentColor" strokeWidth="2" />
                        <circle cx="30" cy="400" r="10" />
                        <path d="M10 50 Q30 80 50 50 T10 120 Q30 150 50 120" fill="none" stroke="currentColor" strokeWidth="2" />
                        <path d="M20 380 Q30 400 40 380 L30 350 Z" />
                    </svg>
                </SideSway>
            </div>

            <RoyalScroll cornerName={t.mittal_family}>
                <div className="text-center space-y-4 md:space-y-6 px-2 md:px-8">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="mb-2"
                    >
                        <h3 className="font-devotional text-indian-saffron text-lg md:text-xl tracking-[0.2em] mb-1 uppercase font-bold drop-shadow-sm">
                            ✨ {t.cordial_invitation} ✨
                        </h3>
                        <h2 className="font-heading text-4xl md:text-5xl text-indian-maroon drop-shadow-md leading-tight">
                            {t.from_hearts}
                        </h2>
                    </motion.div>

                    {/* Hindi Text */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, delay: 0.3 }}
                        className="relative py-4 md:py-6"
                    >
                        {/* Decorative Lines */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[1px] bg-indian-maroon/40"></div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-[1px] bg-indian-maroon/40"></div>

                        <p className="font-devotional text-indian-maroon text-xl md:text-3xl leading-relaxed">
                            <span className="text-indian-saffron text-2xl md:text-4xl">❝</span> विघ्नहर्ता की असीम कृपा<br />
                            और पूर्वजों के आशीर्वाद से,<br />
                            हम आपको इस मांगलिक अवसर पर<br />
                            सादर आमंत्रित करते हैं। <span className="text-indian-saffron text-2xl md:text-4xl">❞</span>
                        </p>
                    </motion.div>

                    {/* Invitation Date */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="py-4"
                    >
                        <h3 className="font-heading text-3xl md:text-4xl text-indian-maroon drop-shadow-sm border-y-2 border-indian-saffron/40 py-2 inline-block px-8">
                            {t.invitation_date}
                        </h3>
                    </motion.div>

                    {/* English Body */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="font-script text-royal-charcoal text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto"
                        style={{ fontFamily: language === 'hi' ? "'Rozha One', serif" : "'Great Vibes', cursive" }}
                    >
                        {t.invitation_body}
                    </motion.p>

                    {/* Signature */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="pt-2"
                    >
                        <p className="font-heading text-sm md:text-base text-royal-charcoal tracking-widest uppercase mb-1">
                            {t.warm_regards}
                        </p>
                        <p className="font-devotional text-2xl md:text-4xl text-indian-maroon drop-shadow-sm">
                            {t.grandfather_name}
                        </p>
                    </motion.div>

                </div>
            </RoyalScroll>
        </section>
    );
};

export default InvitationSection;
