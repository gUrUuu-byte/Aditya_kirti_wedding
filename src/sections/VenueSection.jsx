import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const VenueSection = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section className="py-8 md:py-12 lg:py-16 bg-gradient-to-t from-cool-cream to-sage-green/10 relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                    src="/images/bg_venue.png"
                    alt="Background"
                    className="w-full h-full object-cover opacity-[0.25] pointer-events-none blur-[2px]"
                />
            </div>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-6 md:mb-8"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-indian-maroon mb-2">{t.venue_header}</h2>
                    <div className="w-16 md:w-24 h-[2px] bg-indian-saffron mx-auto"></div>
                </motion.div>

                {/* Side-by-Side Venues Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
                    {t.venues && t.venues.map((venue, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="bg-white border-2 border-indian-maroon/20 rounded-lg shadow-xl overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300 relative group"
                        >
                            {/* Venue Image */}
                            <div className="relative h-48 md:h-60 overflow-hidden">
                                <img
                                    src={venue.image}
                                    alt={venue.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <span className="inline-block px-3 py-1 bg-indian-saffron/90 text-white text-xs md:text-sm font-bold tracking-wider rounded-sm shadow-sm mb-2 backdrop-blur-sm">
                                        {venue.event}
                                    </span>
                                    <h3 className="text-xl md:text-2xl font-heading text-white drop-shadow-md leading-tight">
                                        {venue.name}
                                    </h3>
                                </div>
                            </div>

                            {/* Venue Details */}
                            <div className="p-5 md:p-6 flex-grow flex flex-col">
                                <div className="space-y-3 text-royal-charcoal/90 text-sm md:text-base mb-6 flex-grow">
                                    <div className="flex items-start gap-3">
                                        <span className="text-lg text-indian-maroon mt-0.5">📍</span>
                                        <p className="leading-snug opacity-90">{venue.address}</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-lg text-indian-maroon">📅</span>
                                        <p className="font-semibold">{venue.time}</p>
                                    </div>
                                </div>

                                {/* Action Button */}
                                <a
                                    href={`https://www.google.com/maps/search/?api=1&query=${venue.mapHash}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full text-center py-3 bg-indian-maroon text-white font-semibold tracking-widest hover:bg-indian-maroon/90 transition-all duration-300 uppercase text-xs md:text-sm border border-transparent rounded shadow-sm hover:shadow-md"
                                >
                                    {t.get_directions}
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VenueSection;
