import React from 'react';
import { motion } from 'framer-motion';

const EventCard = ({ event, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex-shrink-0 w-80 md:w-96 bg-white/90 backdrop-blur-sm border border-royal-gold/30 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative group overflow-hidden"
        >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-royal-gold to-transparent opacity-50"></div>

            <div className="flex flex-col items-center text-center space-y-4">
                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-royal-cream border border-royal-gold/50 flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform duration-500">
                    {event.icon}
                </div>

                {/* Time */}
                <div className="px-4 py-1 bg-royal-gold/10 rounded-full border border-royal-gold/20">
                    <p className="text-royal-gold-dark font-bold text-sm tracking-widest uppercase">{event.time}</p>
                </div>

                {/* Content */}
                <div>
                    <h3 className="text-2xl font-script text-royal-charcoal mb-2">{event.title}</h3>
                    <p className="text-royal-charcoal/70 font-sans text-sm leading-relaxed">{event.description}</p>
                </div>
            </div>

            {/* Decorative bottom corner */}
            <div className="absolute bottom-0 right-0 w-12 h-12 bg-royal-gold/5 rounded-tl-full -mr-6 -mb-6"></div>
        </motion.div>
    );
};

export default EventCard;
