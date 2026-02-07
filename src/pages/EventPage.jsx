import React from 'react';
import { useParams, Link } from 'react-router-dom';
import OrnamentalBorder from '../components/OrnamentalBorder';
import AmbientDust from '../components/AmbientDust';
import { events } from '../data/events';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const EventPage = () => {
    const { id } = useParams();
    const { language } = useLanguage();
    const t = translations[language];
    const event = events.find(e => e.id === id);
    const [imageError, setImageError] = React.useState(false);

    // Dynamic Text selection
    const title = language === 'hi' ? (event.title_hi || event.title) : event.title;
    const description = language === 'hi' ? (event.description_hi || event.description) : event.description;
    const details = language === 'hi' ? (event.details_hi || event.details) : event.details;

    // Dynamic Date/Time selection
    const date = language === 'hi' ? (event.date_hi || event.date) : event.date;
    const time = language === 'hi' ? (event.time_hi || event.time) : event.time;

    // Reset error state when event changes
    React.useEffect(() => {
        setImageError(false);
    }, [id]);

    if (!event) {
        return (
            <div className="min-h-screen bg-royal-cream text-royal-charcoal flex flex-col items-center justify-center p-8 relative">
                <h1 className="text-4xl font-heading text-indian-maroon">Event Not Found</h1>
                <Link to="/" className="mt-4 text-indian-saffron hover:underline">Return Home</Link>
            </div>
        );
    }

    // Dynamic Theme Colors
    const isMehandi = event.theme === 'mehandi';
    const isHaldi = event.theme === 'haldi';
    const isBhaat = event.theme === 'bhaat';
    const isSangeet = event.theme === 'sangeet';
    const isGhudChadi = event.theme === 'ghudchadi';
    const isRingCeremony = event.theme === 'ringceremony';
    const isVarmala = event.theme === 'varmala';
    const isPhere = event.theme === 'phere';
    const isReception = event.theme === 'reception';

    // Theme classes
    let themeClasses = {
        wrapper: "bg-royal-cream",
        card: "bg-white/80 border-indian-maroon/20",
        textPrimary: "text-indian-maroon",
        textSecondary: "text-indian-maroon",
        bgBadge: "bg-indian-maroon/10 text-indian-maroon",
        iconMain: "text-indian-maroon",
        divider: "bg-indian-saffron",
        border: "border-indian-maroon/20",
        link: "text-indian-maroon border-indian-maroon/20 hover:border-indian-maroon"
    };

    if (isMehandi) {
        themeClasses = {
            wrapper: "bg-gradient-to-br from-[#f1f8e9] via-[#dcedc8] to-[#c5e1a5]",
            card: "bg-white/90 border-[#33691E]/30",
            textPrimary: "text-[#1B5E20]", // Dark Green
            textSecondary: "text-[#33691E]",
            bgBadge: "bg-[#33691E] text-white",
            iconMain: "text-[#2E7D32]",
            divider: "bg-[#558B2F]",
            border: "border-emerald-800/20",
            link: "text-[#1B5E20] border-[#1B5E20]/30 hover:border-[#1B5E20]"
        };
    } else if (isHaldi) {
        themeClasses = {
            wrapper: "bg-gradient-to-br from-[#FFFDE7] via-[#FFF9C4] to-[#FFF176]", // Yellow Gradient
            card: "bg-white/90 border-[#FBC02D]/30",
            textPrimary: "text-[#F57F17]", // Deep Orange/Gold
            textSecondary: "text-[#F9A825]",
            bgBadge: "bg-[#FBC02D] text-white",
            iconMain: "text-[#FBC02D]",
            divider: "bg-[#FBC02D]",
            border: "border-yellow-600/20",
            link: "text-[#F57F17] border-[#F57F17]/30 hover:border-[#F57F17]"
        };
    } else if (isBhaat) {
        themeClasses = {
            wrapper: "bg-gradient-to-br from-[#E8EAF6] via-[#C5CAE9] to-[#9FA8DA]", // Indigo/Blue Gradient
            card: "bg-white/90 border-[#283593]/30",
            textPrimary: "text-[#1A237E]", // Deep Indigo
            textSecondary: "text-[#303F9F]",
            bgBadge: "bg-[#283593] text-white",
            iconMain: "text-[#283593]",
            divider: "bg-[#3949AB]",
            border: "border-indigo-800/20",
            link: "text-[#1A237E] border-[#1A237E]/30 hover:border-[#1A237E]"
        };
    } else if (isSangeet) {
        themeClasses = {
            wrapper: "bg-gradient-to-br from-[#EFEBE9] via-[#D7CCC8] to-[#BCAAA4]", // Bronze/Brown Gradient
            card: "bg-white/90 border-[#5D4037]/30",
            textPrimary: "text-[#3E2723]", // Dark Brown
            textSecondary: "text-[#5D4037]",
            bgBadge: "bg-[#4E342E] text-white",
            iconMain: "text-[#4E342E]",
            divider: "bg-[#6D4C41]",
            border: "border-amber-900/20",
            link: "text-[#3E2723] border-[#3E2723]/30 hover:border-[#3E2723]"
        };
    } else if (isGhudChadi) {
        themeClasses = {
            wrapper: "bg-gradient-to-br from-[#8D6E63] via-[#6D4C41] to-[#4E342E]", // Deep Royal Wood/Brown
            card: "bg-white/90 border-[#3E2723]/30",
            textPrimary: "text-[#3E2723]", // Very Dark Brown
            textSecondary: "text-[#4E342E]",
            bgBadge: "bg-[#3E2723] text-white",
            iconMain: "text-[#3E2723]",
            divider: "bg-[#5D4037]",
            border: "border-stone-800/20",
            link: "text-[#3E2723] border-[#3E2723]/30 hover:border-[#3E2723]"
        };
    } else if (isRingCeremony) {
        themeClasses = {
            wrapper: "bg-gradient-to-br from-[#FCE4EC] via-[#F8BBD0] to-[#F48FB1]", // Royal Pink Gradient
            card: "bg-white/90 border-[#D81B60]/30",
            textPrimary: "text-[#880E4F]", // Deep Pink/Maroon
            textSecondary: "text-[#AD1457]",
            bgBadge: "bg-[#C2185B] text-white",
            iconMain: "text-[#C2185B]",
            divider: "bg-[#E91E63]",
            border: "border-pink-800/20",
            link: "text-[#880E4F] border-[#880E4F]/30 hover:border-[#880E4F]"
        };
    } else if (isVarmala) {
        themeClasses = {
            wrapper: "bg-gradient-to-br from-[#FFEBEE] via-[#FFCDD2] to-[#EF9A9A]", // Royal Red/Ruby Gradient
            card: "bg-white/90 border-[#C62828]/30",
            textPrimary: "text-[#B71C1C]", // Deep Red/Crimson
            textSecondary: "text-[#D32F2F]",
            bgBadge: "bg-[#C62828] text-white",
            iconMain: "text-[#C62828]",
            divider: "bg-[#E53935]",
            border: "border-red-800/20",
            link: "text-[#B71C1C] border-[#B71C1C]/30 hover:border-[#B71C1C]"
        };
    } else if (isPhere) {
        themeClasses = {
            wrapper: "bg-gradient-to-br from-[#FFF3E0] via-[#FFCC80] to-[#FF9800]", // Sacred Saffron/Fire Gradient
            card: "bg-white/90 border-[#E65100]/30",
            textPrimary: "text-[#E65100]", // Deep Orange/Saffron
            textSecondary: "text-[#EF6C00]",
            bgBadge: "bg-[#E65100] text-white",
            iconMain: "text-[#E65100]",
            divider: "bg-[#F57C00]",
            border: "border-orange-800/20",
            link: "text-[#E65100] border-[#E65100]/30 hover:border-[#E65100]"
        };
    } else if (isReception) {
        themeClasses = {
            wrapper: "bg-gradient-to-br from-[#F3E5F5] via-[#CE93D8] to-[#AB47BC]", // Royal Purple/Violet Gradient
            card: "bg-white/90 border-[#6A1B9A]/30",
            textPrimary: "text-[#4A148C]", // Deep Purple
            textSecondary: "text-[#6A1B9A]",
            bgBadge: "bg-[#7B1FA2] text-white",
            iconMain: "text-[#7B1FA2]",
            divider: "bg-[#8E24AA]",
            border: "border-purple-900/20",
            link: "text-[#4A148C] border-[#4A148C]/30 hover:border-[#4A148C]"
        };
    }

    return (
        <div className={`min-h-screen flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden ${themeClasses.wrapper}`}>
            <AmbientDust />
            <OrnamentalBorder />

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`max-w-6xl w-full backdrop-blur-md p-6 md:p-12 rounded-xl border ${themeClasses.card} shadow-2xl relative z-10`}
            >
                {/* Royal Ornaments - Left Side */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-24 h-64 hidden xl:block opacity-60 pointer-events-none">
                    <svg viewBox="0 0 100 300" className={`w-full h-full ${themeClasses.iconMain} fill-current`}>
                        <path d="M50 0 C20 50 0 100 20 150 C0 200 20 250 50 300 C80 250 100 200 80 150 C100 100 80 50 50 0 Z M50 20 C70 60 80 100 60 150 C80 200 70 240 50 280 C30 240 20 200 40 150 C20 100 30 60 50 20 Z" />
                        <circle cx="50" cy="150" r="10" />
                    </svg>
                </div>

                {/* Royal Ornaments - Right Side */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-24 h-64 hidden xl:block opacity-60 pointer-events-none">
                    <svg viewBox="0 0 100 300" className={`w-full h-full ${themeClasses.iconMain} fill-current`}>
                        <path d="M50 0 C20 50 0 100 20 150 C0 200 20 250 50 300 C80 250 100 200 80 150 C100 100 80 50 50 0 Z M50 20 C70 60 80 100 60 150 C80 200 70 240 50 280 C30 240 20 200 40 150 C20 100 30 60 50 20 Z" />
                        <circle cx="50" cy="150" r="10" />
                    </svg>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                    {/* Left Column: Image */}
                    <div className="w-full h-full flex items-center justify-center">
                        {/* Event Image (If Available and No Error) */}
                        {event.image && !imageError && (
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="rounded-lg overflow-hidden shadow-lg border-4 border-white transform hover:scale-[1.02] transition-transform duration-500 w-full aspect-[4/5] relative group"
                            >
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover object-center"
                                    onError={() => setImageError(true)}
                                />
                            </motion.div>
                        )}

                        {/* Icon Placeholder if no image or error */}
                        {(!event.image || imageError) && (
                            <div className={`text-9xl opacity-80 ${themeClasses.iconMain}`}>
                                {event.icon}
                            </div>
                        )}
                    </div>

                    {/* Right Column: Text Content */}
                    <div className="text-center md:text-left">
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 }}
                            className={`inline-block px-5 py-2 ${themeClasses.bgBadge} font-bold tracking-[0.2em] rounded-full text-sm mb-6 uppercase shadow-sm`}
                        >
                            {date} • {time}
                        </motion.span>

                        <h1 className={`text-4xl md:text-6xl ${themeClasses.textPrimary} font-heading mb-6 leading-tight drop-shadow-sm`}>
                            {title}
                        </h1>

                        <div className={`w-32 h-[2px] mx-auto md:mx-0 mb-8 opacity-60 ${themeClasses.divider}`}></div>

                        <p className={`text-xl md:text-2xl ${themeClasses.textPrimary} font-script leading-relaxed mb-8 italic opacity-90`} style={{ fontFamily: (isMehandi || isHaldi || isBhaat || isSangeet || isGhudChadi || isRingCeremony || isVarmala || isPhere || isReception || language === 'hi') ? "'Rozha One', serif" : "'Great Vibes', cursive" }}>
                            "{description}"
                        </p>

                        <p className="text-lg md:text-xl text-royal-charcoal/90 font-serif leading-loose mb-10">
                            {details}
                        </p>

                        {/* Navigation Buttons */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-between">
                            {/* Back to Events - Using standard hash link which Home.jsx now handles */}
                            <Link
                                to="/#events"
                                className={`inline-flex items-center gap-2 border-b-2 pb-1 transition-all uppercase tracking-widest text-sm font-bold cursor-pointer ${themeClasses.link}`}
                            >
                                {t.back_to_wedding}
                            </Link>

                            {/* Next/Prev Event Navigation */}
                            <div className="flex items-center gap-3">
                                {/* Previous Event Button */}
                                {events.findIndex(e => e.id === event.id) > 0 && (
                                    <Link
                                        to={`/event/${events[events.findIndex(e => e.id === event.id) - 1].id}`}
                                        className={`inline-flex items-center gap-2 px-4 py-2 border-2 rounded transition-all text-xs uppercase tracking-wider font-semibold ${themeClasses.link} hover:bg-opacity-10`}
                                    >
                                        {t.prev_event}
                                    </Link>
                                )}

                                {/* Next Event Button */}
                                {events.findIndex(e => e.id === event.id) < events.length - 1 && (
                                    <Link
                                        to={`/event/${events[events.findIndex(e => e.id === event.id) + 1].id}`}
                                        className={`inline-flex items-center gap-2 px-4 py-2 border-2 rounded transition-all text-xs uppercase tracking-wider font-semibold ${themeClasses.link} hover:bg-opacity-10`}
                                    >
                                        {t.next_event}
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default EventPage;
