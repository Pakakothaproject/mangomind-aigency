import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { translations, detectLanguage, saveLanguage } from '../lib/i18n';
import type { Language, Translations } from '../lib/i18n';

interface LanguageContextType {
    language: Language;
    t: Translations;
    toggleLanguage: () => void;
    setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLang] = useState<Language>('en');

    useEffect(() => {
        // Detect language on initial load
        const detected = detectLanguage();
        setLang(detected);
    }, []);

    const setLanguage = (lang: Language) => {
        setLang(lang);
        saveLanguage(lang);
    };

    const toggleLanguage = () => {
        const newLang = language === 'en' ? 'bn' : 'en';
        setLanguage(newLang);
    };

    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, t, toggleLanguage, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
