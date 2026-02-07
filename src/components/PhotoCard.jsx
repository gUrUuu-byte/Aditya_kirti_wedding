import React from 'react';
import { motion } from 'framer-motion';

const PhotoCard = ({ src, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="relative group overflow-hidden rounded-sm shadow-md cursor-pointer border-[5px] border-white bg-white"
        >
            <div className="aspect-[3/4] overflow-hidden">
                <img
                    src={src}
                    alt={`Wedding moment ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 sepia-[0.2] group-hover:sepia-0"
                />
            </div>

            {/* Overlay Frame */}
            <div className="absolute inset-0 border border-royal-gold/20 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
        </motion.div>
    );
};

export default PhotoCard;
