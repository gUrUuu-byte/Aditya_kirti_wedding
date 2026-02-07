import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const RSVPSection = () => {
    const { language } = useLanguage();
    const t = translations[language];

    // REPLACE THIS URL WITH YOUR GOOGLE APPS SCRIPT URL
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxcVv3kkDFj3hYMpZxBVIfduoD8jkeU7VO_C93rGpyBv72n9Qez8S3RROVsrxzhh81oZg/exec";

    const [formData, setFormData] = React.useState({
        name: "",
        name: "",
        email: "",
        attending: "Yes",
        arrival: ""
    });
    const [status, setStatus] = React.useState("idle"); // idle, submitting, success, error
    const [message, setMessage] = React.useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleAttendanceChange = (value) => {
        setFormData(prev => ({
            ...prev,
            attending: value,
            arrival: value === "No" ? "" : prev.arrival
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name) {
            setMessage(language === 'hi' ? "कृपया अपना नाम लिखें" : "Please enter your name");
            setStatus("error");
            return;
        }

        if (formData.attending === "Yes" && !formData.arrival) {
            setMessage(language === 'hi' ? "कृपया आगमन की तारीख चुनें" : "Please select your arrival date");
            setStatus("error");
            return;
        }

        setStatus("submitting");
        setMessage("");

        try {
            // We use 'no-cors' mode because Google Apps Script doesn't support CORS preflight
            // This means we won't get a readable response, but the data will be sent.
            await fetch(SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            // Since we can't read the response in no-cors, we assume success if no network error
            setStatus("success");
            setMessage(language === 'hi' ? "धन्यवाद! आपकी प्रतिक्रिया दर्ज कर ली गई है।" : "Thank you! Your RSVP has been received.");
            setFormData({ name: "", email: "", attending: "Yes", arrival: "" });

        } catch (error) {
            console.error("Error submitting RSVP:", error);
            setStatus("error");
            setMessage(language === 'hi' ? "क्षमा करें, कुछ गलत हो गया। कृपया पुन: प्रयास करें।" : "Sorry, something went wrong. Please try again.");
        }
    };

    return (
        <section className="py-24 bg-royal-charcoal text-royal-cream relative border-t-4 border-sage-green/20">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="max-w-3xl mx-auto px-6 text-center"
            >
                <span className="text-royal-gold tracking-[0.3em] uppercase text-sm">{t.rsvp_title}</span>
                <h2 className="text-5xl md:text-6xl text-royal-gold-light mt-2 mb-8 font-serif">{t.joyfully_join}</h2>
                <p className="mb-12 text-royal-stone/60 font-sans font-light">{t.rsvp_deadline}</p>

                <form className="space-y-6 text-left" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs uppercase tracking-widest text-royal-gold mb-2">{t.rsvp_name}</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-royal-stone/30 py-3 text-white focus:border-royal-gold focus:outline-none transition-colors"
                                placeholder={language === 'hi' ? "आपका नाम" : "Guest Name"}
                            />
                        </div>
                        <div>
                            <label className="block text-xs uppercase tracking-widest text-royal-gold mb-2">{t.rsvp_email}</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-royal-stone/30 py-3 text-white focus:border-royal-gold focus:outline-none transition-colors"
                                placeholder={language === 'hi' ? "वैकल्पिक" : "Optional"}
                            />
                        </div>
                    </div>

                    <div className="pt-4">
                        <label className="block text-xs uppercase tracking-widest text-royal-gold mb-2">{t.rsvp_attending}</label>
                        <div className="flex gap-8">
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <div
                                    className={`w-5 h-5 rounded-full border border-royal-gold/50 flex items-center justify-center transition-colors ${formData.attending === "Yes" ? "bg-royal-gold/20" : ""}`}
                                    onClick={() => handleAttendanceChange("Yes")}
                                >
                                    {formData.attending === "Yes" && <div className="w-2.5 h-2.5 bg-royal-gold rounded-full"></div>}
                                </div>
                                <span className="text-royal-stone">{t.rsvp_yes}</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <div
                                    className={`w-5 h-5 rounded-full border border-royal-gold/50 flex items-center justify-center transition-colors ${formData.attending === "No" ? "bg-royal-gold/20" : ""}`}
                                    onClick={() => handleAttendanceChange("No")}
                                >
                                    {formData.attending === "No" && <div className="w-2.5 h-2.5 bg-royal-gold rounded-full"></div>}
                                </div>
                                <span className="text-royal-stone">{t.rsvp_no}</span>
                            </label>
                        </div>
                    </div>

                    {/* Arrival Date Selection - Only if attending */}
                    {formData.attending === "Yes" && (
                        <div className="pt-4">
                            <label className="block text-xs uppercase tracking-widest text-royal-gold mb-2">{t.rsvp_arrival_date}</label>
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <div
                                        className={`w-5 h-5 rounded-full border border-royal-gold/50 flex items-center justify-center transition-colors ${formData.arrival === "20th April" ? "bg-royal-gold/20" : ""}`}
                                        onClick={() => setFormData(prev => ({ ...prev, arrival: "20th April" }))}
                                    >
                                        {formData.arrival === "20th April" && <div className="w-2.5 h-2.5 bg-royal-gold rounded-full"></div>}
                                    </div>
                                    <span className="text-royal-stone">{t.rsvp_arrival_20}</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <div
                                        className={`w-5 h-5 rounded-full border border-royal-gold/50 flex items-center justify-center transition-colors ${formData.arrival === "21st April" ? "bg-royal-gold/20" : ""}`}
                                        onClick={() => setFormData(prev => ({ ...prev, arrival: "21st April" }))}
                                    >
                                        {formData.arrival === "21st April" && <div className="w-2.5 h-2.5 bg-royal-gold rounded-full"></div>}
                                    </div>
                                    <span className="text-royal-stone">{t.rsvp_arrival_21}</span>
                                </label>
                            </div>
                        </div>
                    )}

                    <div className="mt-8 text-center min-h-[1.5rem]">
                        {message && (
                            <p className={`text-sm tracking-wide ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                                {message}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="w-full mt-4 py-4 border border-royal-gold text-royal-gold hover:bg-royal-gold hover:text-white transition-all duration-300 uppercase tracking-widest font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {status === "submitting" ? (language === 'hi' ? "प्रतिक्षा करें..." : "Submitting...") : t.rsvp_submit}
                    </button>
                </form>
            </motion.div>

            {/* Credit Link - Bottom Right */}
            <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6">
                <a
                    href="https://www.vinciestudios.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm md:text-base text-royal-gold/80 hover:text-royal-gold transition-all duration-300 font-sans font-semibold px-3 py-1.5 rounded bg-royal-charcoal/50 border border-royal-gold/30 hover:border-royal-gold/60 backdrop-blur-sm"
                >
                    {t.credit}
                </a>
            </div>
        </section>
    );
};

export default RSVPSection;
