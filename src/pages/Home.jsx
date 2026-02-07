import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../sections/HeroSection';
import OrnamentalBorder from '../components/OrnamentalBorder';
import CoupleIntroduction from '../sections/CoupleIntroduction';
import InvitationSection from '../sections/InvitationSection';
import EventsSection from '../sections/EventsSection';
import VenueSection from '../sections/VenueSection';
import RSVPSection from '../sections/RSVPSection';
import AmbientDust from '../components/AmbientDust';
import SectionDivider from '../components/SectionDivider';
import FamilySection from '../sections/FamilySection';
import CountdownTimer from '../components/CountdownTimer';
import ContactSection from '../sections/ContactSection';
import ImportantFamilySection from '../sections/ImportantFamilySection';
import WardrobeSection from '../sections/WardrobeSection';

const Home = () => {
    const { hash } = useLocation();

    // Handle scroll to section on mount/hash change
    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                // waiting a microtick can help with rendering
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'auto', block: 'start' });
                }, 100);
            }
        }
    }, [hash]);

    // Set wedding date to 6 months from now for demo, or specific date
    const weddingDate = new Date(new Date().setMonth(new Date().getMonth() + 4));

    return (
        <div className="min-h-screen bg-royal-cream text-royal-charcoal overflow-hidden selection:bg-royal-gold selection:text-white relative">
            <AmbientDust />
            <OrnamentalBorder />
            <HeroSection />

            <SectionDivider />
            <FamilySection />

            <SectionDivider />
            <CountdownTimer targetDate="2026-04-22T18:00:00" />

            <SectionDivider />
            <CoupleIntroduction />

            <SectionDivider />
            <InvitationSection />

            <SectionDivider />

            <EventsSection />





            <SectionDivider />
            <ImportantFamilySection />

            <SectionDivider />
            <VenueSection />

            <SectionDivider />
            <WardrobeSection />

            <SectionDivider />
            <ContactSection />

            <SectionDivider />
            <RSVPSection />
        </div>
    );
};

export default Home;
