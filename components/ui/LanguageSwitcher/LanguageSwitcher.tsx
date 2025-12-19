'use client';

import { motion } from 'framer-motion';
import { useTranslation, Language } from '@/contexts/LanguageContext';
import { useState, useRef, useEffect } from 'react';

const flags = {
	es: 'ES',
	en: 'EN',
	pt: 'PT',
};

const languageNames = {
	es: 'Español',
	en: 'English',
	pt: 'Português',
};

export default function LanguageSwitcher() {
	const { language, setLanguage } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	const handleLanguageChange = (lang: Language) => {
		setLanguage(lang);
		setIsOpen(false);
	};

	return (
		<div
			ref={dropdownRef}
			className='relative'
		>
			<motion.button
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				onClick={() => setIsOpen(!isOpen)}
				className='flex items-center gap-2 px-1 py-1.5 sm:px-4 sm:py-2 md:py-2.5 md:border-2 border-[var(--primary-cyan)] text-[var(--primary-cyan)] font-medium text-xs sm:text-sm md:text-base hover:bg-[var(--primary-cyan)]/10 transition-all whitespace-nowrap'
				aria-label='Change language'
			>
				<span
					className='text-[var(--primary-cyan)]'
				>
					{flags[language]}
				</span>
				<svg
					className={`w-4 h-4 text-[var(--primary-cyan)] transition-transform ${isOpen ? 'rotate-180' : ''}`}
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M19 9l-7 7-7-7'
					/>
				</svg>
			</motion.button>

			{isOpen && (
				<motion.div
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -10 }}
					className='absolute right-0 mt-2 w-40 rounded-lg border border-[var(--primary-cyan)]/30 bg-[var(--background-secondary)] shadow-lg overflow-hidden z-50'
				>
					{(Object.keys(flags) as Language[]).map((lang) => (
						<button
							key={lang}
							onClick={() => handleLanguageChange(lang)}
							className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-[var(--primary-cyan)]/10 transition-colors ${
								language === lang ? 'bg-[var(--primary-cyan)]/20' : ''
							}`}
						>
							<span className='text-2xl'>{flags[lang]}</span>
							<span className='text-[var(--text-primary)]'>{languageNames[lang]}</span>
						</button>
					))}
				</motion.div>
			)}
		</div>
	);
}
