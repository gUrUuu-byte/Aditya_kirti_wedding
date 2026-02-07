import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { events } from '../data/events';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const EventCardCompact = ({ event, index }) => {
    const { language } = useLanguage();
    const t = translations[language];
    const title = language === 'hi' ? (event.title_hi || event.title) : event.title;
    const description = language === 'hi' ? (event.description_hi || event.description) : event.description;

    const date = language === 'hi' ? (event.date_hi || event.date) : event.date;
    const time = language === 'hi' ? (event.time_hi || event.time) : event.time;
    const venue = language === 'hi' ? (event.venue_hi || event.venue) : event.venue;

    return (
        <Link to={`/event/${event.id}`} className="block w-full">
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 md:gap-4 p-3 md:p-5 bg-white/90 backdrop-blur-md rounded-xl border border-indian-maroon/20 hover:shadow-xl hover:border-indian-saffron/60 transition-all duration-300 group cursor-pointer"
            >
                {/* Smaller Icon on Mobile */}
                <div className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14 rounded-full bg-indian-saffron/10 flex items-center justify-center text-xl md:text-3xl border border-indian-saffron/30 group-hover:scale-110 transition-transform">
                    {event.icon}
                </div>
                <div className="w-full">
                    <div className="flex flex-col items-start mb-2 md:mb-3">
                        {/* Title First - Smaller on Mobile */}
                        <h3 className="text-lg md:text-2xl font-heading text-royal-charcoal leading-none group-hover:text-indian-maroon transition-colors mb-2">{title}</h3>

                        {/* Metadata Blocks - Compact on Mobile */}
                        <div className="flex flex-wrap gap-1.5 md:gap-2 text-[10px] md:text-xs font-bold uppercase tracking-wider">
                            <span className="bg-indian-maroon/10 text-indian-maroon px-2 py-0.5 md:px-3 md:py-1 rounded-md">
                                📅 {date}
                            </span>
                            <span className="bg-indian-saffron/10 text-indian-maroon px-2 py-0.5 md:px-3 md:py-1 rounded-md">
                                ⏰ {time}
                            </span>
                            {venue && (
                                <span className="bg-royal-gold/10 text-indian-maroon px-2 py-0.5 md:px-3 md:py-1 rounded-md">
                                    📍 {venue}
                                </span>
                            )}
                        </div>
                    </div>
                    {/* Description - Smaller/Tighter on Mobile */}
                    <p className="text-royal-charcoal/80 font-sans text-xs md:text-sm leading-relaxed">{description}</p>
                    <p className="text-[10px] md:text-xs text-indian-maroon/60 mt-1.5 md:mt-2 font-bold uppercase tracking-widest opacity-100 transition-opacity">{t.read_more}</p>
                </div>
            </motion.div>
        </Link>
    );
};

const EventsSection = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section id="events" className="py-20 bg-gradient-to-br from-misty-blue/30 to-sage-green/20 relative overflow-hidden flex flex-col justify-center min-h-screen">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                    src="/images/bg_events.png"
                    alt="Background"
                    className="w-full h-full object-cover opacity-[0.25] pointer-events-none blur-[2px]"
                />
            </div>

            {/* Title */}
            <div className="text-center mb-16 relative z-10">
                <h2 className="text-5xl md:text-7xl font-devotional text-indian-maroon drop-shadow-sm mb-2">{t.events_title}</h2>
                <div className="w-32 h-[2px] bg-indian-saffron/40 mx-auto"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 w-full relative z-10">
                {/* 2-Column Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 relative">

                    {/* Central Divider (Desktop) */}
                    <div className="absolute left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-transparent via-indian-maroon/30 to-transparent hidden md:block transform -translate-x-1/2"></div>

                    {events.map((event, index) => (
                        <div key={index}
                            className={`relative
                                ${index % 2 === 0 ? 'md:text-right md:pr-10' : 'md:text-left md:pl-10'}
                                ${index % 2 !== 0 ? 'md:mt-16' : ''}
                             `}
                        // Using margin-top on odd items to stagger connections vertically
                        >
                            {/* Connector Dot */}
                            {/* Line connecting card to center */}
                            <div className={`absolute top-10 h-[1px] bg-indian-maroon/40 w-10 hidden md:block
                                 ${index % 2 === 0 ? '-right-10' : '-left-10'}
                            `}></div>

                            {/* The Dot on the timeline */}
                            <div className={`absolute top-[34px] w-4 h-4 rounded-full bg-indian-saffron border-2 border-white shadow-md hidden md:block z-20
                                ${index % 2 === 0 ? '-right-[50px]' : '-left-[50px]'}
                            `}></div>

                            <EventCardCompact event={event} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EventsSection;
