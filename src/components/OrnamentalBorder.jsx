import React from 'react';

const OrnamentalBorder = () => {
    return (
        <div className="absolute inset-0 pointer-events-none z-40 hidden lg:block h-full overflow-hidden">
            {/* SVG Definitions for Repeating Pattern */}
            <svg className="absolute w-0 h-0">
                <defs>
                    <pattern id="gold-vine-left" x="0" y="0" width="100" height="400" patternUnits="userSpaceOnUse">
                        <path d="M10,0 Q30,100 10,200 T10,400" fill="none" stroke="#D4AF37" strokeWidth="2" strokeOpacity="0.5" />
                        <path d="M20,0 Q40,100 20,200 T20,400" fill="none" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.3" />
                    </pattern>
                    <pattern id="gold-vine-right" x="0" y="0" width="100" height="400" patternUnits="userSpaceOnUse">
                        <path d="M90,0 Q70,100 90,200 T90,400" fill="none" stroke="#D4AF37" strokeWidth="2" strokeOpacity="0.5" />
                        <path d="M80,0 Q60,100 80,200 T80,400" fill="none" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.3" />
                    </pattern>
                </defs>
            </svg>

            {/* Left Border */}
            <div className="absolute top-0 bottom-0 left-0 w-24 opacity-80"
                style={{
                    backgroundImage: "url('https://www.transparenttextures.com/patterns/black-scales.png')",
                    maskImage: "linear-gradient(to right, black, transparent)",
                    WebkitMaskImage: "linear-gradient(to right, black, transparent)"
                }}>
                <svg className="h-full w-full">
                    <rect width="100%" height="100%" fill="url(#gold-vine-left)" />
                </svg>
            </div>

            {/* Right Border */}
            <div className="absolute top-0 bottom-0 right-0 w-24 opacity-80"
                style={{
                    backgroundImage: "url('https://www.transparenttextures.com/patterns/black-scales.png')",
                    maskImage: "linear-gradient(to left, black, transparent)",
                    WebkitMaskImage: "linear-gradient(to left, black, transparent)"
                }}>
                <svg className="h-full w-full">
                    <rect width="100%" height="100%" fill="url(#gold-vine-right)" />
                </svg>
            </div>

            {/* Top Corners (Only at the very top of the page) */}
            <div className="absolute top-4 left-4 w-32 h-32 border-t-4 border-l-4 border-royal-gold rounded-tl-3xl opacity-60"></div>
            <div className="absolute top-4 right-4 w-32 h-32 border-t-4 border-r-4 border-royal-gold rounded-tr-3xl opacity-60"></div>

            {/* Bottom Corners (Only at the very bottom of the page) */}
            <div className="absolute bottom-4 left-4 w-32 h-32 border-b-4 border-l-4 border-royal-gold rounded-bl-3xl opacity-60"></div>
            <div className="absolute bottom-4 right-4 w-32 h-32 border-b-4 border-r-4 border-royal-gold rounded-br-3xl opacity-60"></div>
        </div>
    );
};

export default OrnamentalBorder;
