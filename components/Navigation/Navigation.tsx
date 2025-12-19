'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { useTranslation } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher/LanguageSwitcher';
import ThemeToggle from '@/components/ui/ThemeToggle/ThemeToggle';

/**
 * Componente Navigation - Barra de navegación con botones
 * Permite navegar entre las diferentes secciones de la página
 * @param activeSection - Sección actualmente activa
 * @param onSectionChange - Función callback para cambiar de sección
 */

interface NavigationProps {
	activeSection: string;
	onSectionChange: (section: string) => void;
}

export default function Navigation({ activeSection, onSectionChange }: NavigationProps) {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const { theme } = useTheme();
	const { t } = useTranslation();

	// Array with available sections
	const sections = [
		{ id: 'home', label: t.nav.home },
		{ id: 'experiencia', label: t.nav.experience },
		{ id: 'estudios', label: t.nav.education },
		{ id: 'proyectos', label: t.nav.projects },
		{ id: 'contacto', label: t.nav.contact },
	];

	const handleMobileNavClick = (sectionId: string) => {
		onSectionChange(sectionId);
		setIsMobileMenuOpen(false);
	};

	return (
		<>
			<nav className='fixed top-0 left-0 right-0 z-50 w-full bg-[var(--background)]/90 dark:bg-[var(--background)]/90 bg-white/90 backdrop-blur-lg border-b border-[var(--primary-cyan)]/10 dark:border-[var(--primary-cyan)]/10 border-[var(--primary-dark)]/20'>
				<div className='max-w-8xl mx-auto py-2 sm:py-3 flex items-center justify-between px-2 sm:px-4 md:px-15'>
					{/* Logo */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						whileHover={{ scale: 1.1 }}
						className='cursor-pointer flex-shrink-0'
						onClick={() => onSectionChange('home')}
					>
						<Image
							src='/images/fmc-logo.png'
							alt='Logo FMC'
							width={60}
							height={35}
							className={`object-contain sm:w-[90px] sm:h-[50px] ${
								theme === 'dark' ? 'drop-shadow-[0_0_15px_rgba(0,217,255,0.8)]' : ''
							}`}
						/>
					</motion.div>

					{/* Desktop Navigation - Hidden on mobile */}
					<ul className='hidden md:flex flex-wrap justify-center gap-0.5 sm:gap-1 md:gap-2 absolute left-0 right-0 pointer-events-none'>
						{sections.map((section, index) => (
							<motion.li
								key={section.id}
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1, duration: 0.3 }}
							>
								<motion.button
									onClick={() => onSectionChange(section.id)}
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
									className={`relative px-2 py-2 sm:px-3 sm:py-2 md:px-8 md:py-3 font-medium transition-all text-xs sm:text-sm md:text-base text-[var(--primary-cyan)] pointer-events-auto ${
										activeSection === section.id ? 'opacity-100' : 'opacity-60 hover:opacity-100'
									}`}
								>
									{section.label}
									{/* Línea inferior para el botón activo */}
									{activeSection === section.id && (
										<motion.div
											layoutId='activeTab'
											className={`absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--primary-cyan)] ${
												theme === 'dark' ? 'shadow-[0_0_10px_rgba(0,217,255,0.8)]' : ''
											}`}
											transition={{ type: 'spring', stiffness: 380, damping: 30 }}
										/>
									)}
								</motion.button>
							</motion.li>
						))}
					</ul>

					{/* Right side buttons group - Desktop only */}
					<div className='hidden md:flex items-center gap-3'>
						{/* Botón Descargar CV */}
						<motion.a
							href='/docs/Federico_Ciociano_Frontend.pdf'
							download='Federico_Ciociano_Frontend.pdf'
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className='px-2 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2.5 border-2 border-[var(--primary-cyan)] text-[var(--primary-cyan)] font-medium text-xs sm:text-sm md:text-base hover:bg-[var(--primary-cyan)]/10 transition-all whitespace-nowrap'
							title={t.nav.downloadResume}
						>
							{t.nav.downloadResume}
						</motion.a>

						{/* Language Switcher */}
						<LanguageSwitcher />

						{/* Theme Toggle Button */}
						<ThemeToggle />
					</div>

					{/* Theme Toggle Button - Mobile */}
					<div className='md:hidden'>
						<ThemeToggle />
					</div>

					{/* Language Switcher - Mobile*/}
					<motion.div
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}
						className='md:hidden'
					>
						<LanguageSwitcher />
					</motion.div>

					{/* Hamburger Menu Button - Mobile only */}
					<motion.button
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						className='md:hidden flex flex-col gap-1.5 p-2'
						aria-label='Menu'
					>
						<motion.span
							animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
							className={`w-6 h-0.5 bg-[var(--primary-cyan)] block ${
								theme === 'dark' ? 'shadow-[0_0_5px_rgba(0,217,255,0.8)]' : ''
							}`}
						/>
						<motion.span
							animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
							className={`w-6 h-0.5 bg-[var(--primary-cyan)] block ${
								theme === 'dark' ? 'shadow-[0_0_5px_rgba(0,217,255,0.8)]' : ''
							}`}
						/>
						<motion.span
							animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
							className={`w-6 h-0.5 bg-[var(--primary-cyan)] block ${
								theme === 'dark' ? 'shadow-[0_0_5px_rgba(0,217,255,0.8)]' : ''
							}`}
						/>
					</motion.button>
				</div>
			</nav>

			{/* Mobile Sidebar Menu */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<>
						{/* Backdrop */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setIsMobileMenuOpen(false)}
							className='fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden z-[100]'
							style={{ top: '0' }}
						/>

						{/* Sidebar */}
						<motion.div
							initial={{ x: '100%' }}
							animate={{ x: 0 }}
							exit={{ x: '100%' }}
							transition={{ type: 'spring', damping: 25, stiffness: 200 }}
							className='fixed right-0 top-0 h-full w-[280px] bg-[var(--background)] border-l border-[var(--primary-cyan)]/30 shadow-[-10px_0_30px_rgba(0,217,255,0.2)] md:hidden overflow-y-auto z-[101]'
						>
							<div className='flex flex-col h-full py-20 px-6'>
								{/* Close button */}
								<motion.button
									whileHover={{ scale: 1.1, rotate: 90 }}
									whileTap={{ scale: 0.9 }}
									onClick={() => setIsMobileMenuOpen(false)}
									className='absolute top-4 right-4 p-2 text-[var(--primary-cyan)]'
									aria-label='Cerrar menu'
								>
									<svg
										className='w-6 h-6'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M6 18L18 6M6 6l12 12'
										/>
									</svg>
								</motion.button>

								{/* Navigation Links */}
								<nav className='flex flex-col gap-2'>
									{sections.map((section, index) => (
										<motion.button
											key={section.id}
											initial={{ opacity: 0, x: 50 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: index * 0.1 }}
											onClick={() => handleMobileNavClick(section.id)}
											className={`text-left py-3 px-4 rounded-lg transition-all ${
												activeSection === section.id
													? 'bg-[var(--primary-cyan)]/20 text-[var(--primary-cyan)] border-l-4 border-[var(--primary-cyan)]'
													: 'text-[var(--primary-cyan)]/60 hover:bg-[var(--primary-cyan)]/10 hover:text-[var(--primary-cyan)] border-l-4 border-transparent'
											}`}
										>
											<span className='font-medium text-base'>{section.label}</span>
										</motion.button>
									))}
								</nav>

								<motion.a
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.5 }}
									href='/docs/Federico_Ciociano_Frontend.pdf'
									download='Federico_Ciociano_Frontend.pdf'
									onClick={() => setIsMobileMenuOpen(false)}
									className='mt-auto py-3 px-6 border-2 border-[var(--primary-cyan)] text-[var(--primary-cyan)] font-bold text-center rounded-lg hover:bg-[var(--primary-cyan)]/10 transition-all shadow-[0_0_15px_rgba(0,217,255,0.3)]'
								>
									{t.nav.downloadResume}
								</motion.a>
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</>
	);
}
