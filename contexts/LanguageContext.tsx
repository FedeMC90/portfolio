'use client';

import { createContext, useContext, useState, useEffect, startTransition, ReactNode } from 'react';
import { es } from '@/locales/es';
import { en } from '@/locales/en';
import { pt } from '@/locales/pt';

export type Language = 'es' | 'en' | 'pt';

type Translations = typeof es;

interface LanguageContextType {
	language: Language;
	setLanguage: (language: Language) => void;
	t: Translations;
	isReady: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Translations> = {
	es,
	en,
	pt,
};

export function LanguageProvider({ children }: { children: ReactNode }) {
	const [state, setState] = useState({ language: 'es' as Language, isReady: false });

	useEffect(() => {
		// Después de montar, restaurar el idioma guardado
		const saved = localStorage.getItem('language') as Language;
		const finalLanguage = saved && ['es', 'en', 'pt'].includes(saved) ? saved : 'es';

		// Usar startTransition para evitar el warning de cascading renders
		startTransition(() => {
			setState({ language: finalLanguage, isReady: true });
		});
	}, []);

	const setLanguage = (newLanguage: Language) => {
		setState({ language: newLanguage, isReady: true });
		localStorage.setItem('language', newLanguage);
	};

	return (
		<LanguageContext.Provider
			value={{
				language: state.language,
				setLanguage,
				t: translations[state.language],
				isReady: state.isReady,
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
