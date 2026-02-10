import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const [hasInteracted, setHasInteracted] = useState(false);

    useEffect(() => {
        // Enforce volume on every render/ref change to ensure unexpected HMR issues don't block it
        if (audioRef.current) {
            audioRef.current.volume = 0.05; // 5% volume
        }
    });

    useEffect(() => {
        const audio = audioRef.current;

        // Add a global click listener to start music if not already playing
        const handleInteraction = () => {
            if (!hasInteracted && audio) {
                audio.play().then(() => {
                    setIsPlaying(true);
                    setHasInteracted(true);
                }).catch(e => console.log("Still blocked", e));
            }
        };

        window.addEventListener('click', handleInteraction);
        return () => window.removeEventListener('click', handleInteraction);

    }, [hasInteracted]);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play().catch(e => console.error("Play failed:", e));
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="fixed bottom-6 left-6 z-50">
            <audio ref={audioRef} loop src="/music/soul_of_varisu.mp3" />
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={togglePlay}
                className="bg-[#800000] text-[#D4AF37] p-3 rounded-full shadow-lg border border-[#D4AF37] flex items-center justify-center cursor-pointer hover:bg-[#5a0000] transition-colors"
                title={isPlaying ? "Mute Music" : "Play Music"}
                aria-label={isPlaying ? "Mute Music" : "Play Music"}
            >
                {isPlaying ? (
                    // Speaker Icon (Playing)
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                    </svg>
                ) : (
                    // Mute Icon (Paused/Muted)
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                        <line x1="23" y1="9" x2="17" y2="15"></line>
                        <line x1="17" y1="9" x2="23" y2="15"></line>
                    </svg>
                )}
            </motion.button>
        </div>
    );
};

export default MusicPlayer;
