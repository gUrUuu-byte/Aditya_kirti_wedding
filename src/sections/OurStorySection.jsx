import React from 'react';
import { motion } from 'framer-motion';

const storyData = [
    {
        title: "First Glance",
        year: "2018",
        content: "It started with a chance meeting at the Royal Gala. Across the crowded ballroom, their eyes met, sparking a connection that would transcend time.",
        image: "https://images.unsplash.com/photo-1511285560982-1351c4f809b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "The Proposal",
        year: "2023",
        content: "Under the starlit sky of the palace gardens, Arthur knelt on one knee. With the ancient ring of his ancestors, he asked Guinevere to be his queen.",
        image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
];

const OurStorySection = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                    src="/images/bg_story.png"
                    alt="Background"
                    className="w-full h-full object-cover opacity-[0.25] pointer-events-none blur-[2px]"
                />
            </div>
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-royal-gold uppercase tracking-[0.3em] text-sm">A Royal Tale</span>
                    <h2 className="text-5xl md:text-7xl text-royal-gold-dark mt-2 font-serif">Our Love Story</h2>
                </motion.div>

                <div className="space-y-24">
                    {storyData.map((item, index) => (
                        <div key={index} className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>

                            {/* Image Side */}
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="flex-1 relative"
                            >
                                <div className="absolute inset-4 border-2 border-royal-gold/30 translate-x-4 translate-y-4"></div>
                                <div className="relative aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                </div>
                            </motion.div>

                            {/* Text Side */}
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="flex-1 text-center md:text-left space-y-6"
                            >
                                <div className="text-royal-gold/20 text-9xl font-serif font-bold absolute -z-10 -translate-y-12 select-none">
                                    {item.year}
                                </div>
                                <h3 className="text-4xl text-royal-charcoal font-serif z-10 relative">{item.title}</h3>
                                <p className="text-lg text-gray-600 leading-loose font-light relative z-10">
                                    {item.content}
                                </p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurStorySection;
