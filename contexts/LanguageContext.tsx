'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { es } from '@/locales/es';
import { en } from '@/locales/en';
import { pt } from '@/locales/pt';

export type Language = 'es' | 'en' | 'pt';

type Translations = typeof es;

interface LanguageContextType {
	language: Language;
	setLanguage: (language: Language) => void;
	t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Translations> = {
	es,
	en,
	pt,
};

export function LanguageProvider({ children }: { children: ReactNode }) {
	const [language, setLanguageState] = useState<Language>('es');
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		const savedLanguage = localStorage.getItem('language') as Language;
		if (savedLanguage && ['es', 'en', 'pt'].includes(savedLanguage)) {
			setLanguageState(savedLanguage);
		}
	}, []);

	const setLanguage = (newLanguage: Language) => {
		setLanguageState(newLanguage);
		if (mounted) {
			localStorage.setItem('language', newLanguage);
		}
	};

	return (
		<LanguageContext.Provider
			value={{
				language,
				setLanguage,
				t: translations[language],
			}}
		>
			{children}
		</LanguageContext.Provider>
	);
}

export function useTranslation() {
	const context = useContext(LanguageContext);
	if (context === undefined) {
		throw new Error('useTranslation must be used within a LanguageProvider');
	}
	return context;
}
