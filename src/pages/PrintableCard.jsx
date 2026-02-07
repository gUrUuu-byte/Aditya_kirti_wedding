import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const PrintableCard = () => {
    const { language } = useLanguage();
    // Default to 'en' if language context is not yet set or complex, but usually it works.
    // However, if the user navigates directly, language might be null in some implementations,
    // but App.jsx handles it.
    const t = translations[language || 'en'];

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-gray-200 py-10 flex flex-col items-center justify-center font-serif text-red-900">
            {/* Control Bar */}
            <div className="mb-6 print:hidden">
                <button
                    onClick={handlePrint}
                    className="bg-red-800 text-white px-6 py-2 rounded-full hover:bg-red-700 transition shadow-lg flex items-center gap-2"
                >
                    Designed for A4 / Print
                </button>
            </div>

            {/* Card Content - A4 Aspect Ratio */}
            <div className="bg-[#FFD700]/10 relative w-[210mm] min-h-[297mm] bg-amber-50 shadow-2xl print:shadow-none print:w-full print:h-auto overflow-hidden">

                {/* Decorative Border */}
                <div className="absolute inset-4 border-[3px] border-red-800 rounded-lg pointer-events-none z-10"></div>
                <div className="absolute inset-2 border-[1px] border-orange-600 rounded-lg pointer-events-none z-10"></div>

                {/* Corner Ornaments (CSS generic shapes) */}
                <div className="absolute top-4 left-4 w-24 h-24 border-t-4 border-l-4 border-red-800 rounded-tl-3xl z-0"></div>
                <div className="absolute top-4 right-4 w-24 h-24 border-t-4 border-r-4 border-red-800 rounded-tr-3xl z-0"></div>
                <div className="absolute bottom-4 left-4 w-24 h-24 border-b-4 border-l-4 border-red-800 rounded-bl-3xl z-0"></div>
                <div className="absolute bottom-4 right-4 w-24 h-24 border-b-4 border-r-4 border-red-800 rounded-br-3xl z-0"></div>

                {/* Main Content */}
                <div className="relative z-20 p-16 h-full flex flex-col justify-between text-center bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">

                    {/* Top Section */}
                    <div className="space-y-4">
                        <p className="text-xl font-bold text-red-700 tracking-widest uppercase">|| Shree Ganeshay Namah ||</p>

                        <div className="mt-8">
                            <h2 className="text-3xl font-cursive text-amber-700 mb-2">{t.wedding_invitation}</h2>
                            <p className="text-sm uppercase tracking-widest text-gray-600">{t.save_the_date}</p>
                        </div>
                    </div>

                    {/* Inviting Text & Parents */}
                    <div className="space-y-6 my-8">
                        <p className="text-lg italic text-gray-700 leading-relaxed max-w-2xl mx-auto">
                            {t.invitation_body}
                        </p>
                    </div>

                    {/* Bride & Groom Section */}
                    <div className="space-y-8">
                        <div className="relative">
                            <h1 className="text-5xl font-bold text-red-900 font-display mb-2">{t.groom_name}</h1>
                            <p className="text-sm text-gray-600 font-semibold">{t.family_members[1].names[0]} & {t.family_members[1].names[1]}</p>
                            <p className="text-xs text-gray-500">Grandson of {t.family_members[0].names[0]} & {t.family_members[0].names[1]}</p>
                        </div>

                        <div className="text-4xl text-amber-600 font-serif">&</div>

                        <div className="relative">
                            <h1 className="text-5xl font-bold text-red-900 font-display mb-2">{t.bride_name}</h1>
                            <p className="text-sm text-gray-600 font-semibold">{t.family_members[1].names[2]} & {t.family_members[1].names[3]}</p>
                            <p className="text-xs text-gray-500">Granddaughter of {t.family_members[0].names[2]} & {t.family_members[0].names[3]}</p>
                        </div>
                    </div>

                    {/* Date & Time */}
                    <div className="my-10 border-t border-b border-red-200 py-6 bg-red-50/50">
                        <div className="flex justify-center items-center gap-8">
                            <div className="text-right">
                                <p className="text-2xl font-bold text-red-800">APRIL</p>
                                <p className="text-sm text-gray-600">Wednesday</p>
                            </div>
                            <div className="text-6xl font-bold text-amber-700 px-6 border-l border-r border-red-300">
                                22
                            </div>
                            <div className="text-left">
                                <p className="text-2xl font-bold text-red-800">2026</p>
                                <p className="text-sm text-gray-600">6:00 PM Onwards</p>
                            </div>
                        </div>
                    </div>

                    {/* Venue */}
                    <div className="space-y-2 mb-8">
                        <h3 className="text-xl font-bold text-red-900 uppercase tracking-wide">{t.venue_title}</h3>
                        <p className="text-2xl font-bold text-amber-800">{t.venue_name}</p>
                        <p className="text-md text-gray-600 max-w-md mx-auto">{t.venue_address}</p>
                    </div>

                    {/* RSVP & Best Compliments */}
                    <div className="text-sm text-gray-600 space-y-4">
                        <div className="flex justify-center gap-12">
                            <div>
                                <p className="font-bold text-red-800 uppercase mb-1">RSVP</p>
                                {t.contacts.slice(0, 2).map((contact, idx) => (
                                    <p key={idx}>{contact.name} ({contact.phone})</p>
                                ))}
                            </div>
                            <div>
                                <p className="font-bold text-red-800 uppercase mb-1">With Best Compliments</p>
                                <p>{t.mittal_family}</p>
                                <p>Sharma Family</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <style>{`
                @media print {
                    @page {
                        margin: 0;
                        size: auto;
                    }
                    body {
                        background: white;
                    }
                    .print\\:hidden {
                        display: none;
                    }
                    .print\\:shadow-none {
                        box-shadow: none;
                    }
                }
                .font-display {
                    font-family: 'Cinzel Decorative', serif;
                }
            `}</style>
        </div>
    );
};

export default PrintableCard;
