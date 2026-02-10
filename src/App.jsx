import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EventPage from './pages/EventPage';
import PrintableCard from './pages/PrintableCard';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import LanguageSelector from './components/LanguageSelector';
import FloatingLanguageSwitcher from './components/FloatingLanguageSwitcher';
import CustomCursor from './components/CustomCursor';
import MusicPlayer from './components/MusicPlayer';

const AppContent = () => {
    const { language } = useLanguage();

    if (!language) {
        return <LanguageSelector />;
    }

    return (
        <>
            <FloatingLanguageSwitcher />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/event/:id" element={<EventPage />} />
                    <Route path="/card" element={<PrintableCard />} />
                </Routes>
            </Router>
        </>
    );
};

function App() {
    return (
        <LanguageProvider>
            <CustomCursor />
            <MusicPlayer />
            <AppContent />
        </LanguageProvider>
    );
}

export default App;
