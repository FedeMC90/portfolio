'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation/Navigation';
import HomeSection from '@/components/HomeSection/HomeSection';
import ExperienceSection from '@/components/ExperienceSection/ExperienceSection';
import EducationSection from '@/components/EducationSection/EducationSection';
import ProjectsSection from '@/components/ProjectsSection/ProjectsSection';
import ContactSection from '@/components/ContactSection/ContactSection';
import Footer from '@/components/Footer/Footer';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider, useTranslation } from '@/contexts/LanguageContext';

function HomeContent() {
	const { isReady } = useTranslation();
	const [activeSection, setActiveSection] = useState('home');

	const handleSectionChange = (section: string) => {
		setActiveSection(section);
	};

	const renderSection = () => {
		switch (activeSection) {
			case 'home':
				return <HomeSection key='home' />;
			case 'experiencia':
				return <ExperienceSection key='experiencia' />;
			case 'estudios':
				return <EducationSection key='estudios' />;
			case 'proyectos':
				return <ProjectsSection key='proyectos' />;
			case 'contacto':
				return <ContactSection key='contacto' />;
			default:
				return <HomeSection key='home' />;
		}
	};

	return (
		<div
			className='min-h-screen flex flex-col transition-opacity duration-300'
			style={{ opacity: isReady ? 1 : 0 }}
		>
			<Navigation
				activeSection={activeSection}
				onSectionChange={handleSectionChange}
			/>
			<main className='pt-16 flex-grow'>
				<AnimatePresence mode='wait'>{renderSection()}</AnimatePresence>
			</main>
			<Footer />
		</div>
	);
}

/**
 * Componente Home - Página principal de la SPA
 * Gestiona el estado de la sección activa y renderiza los componentes correspondientes
 * Utiliza AnimatePresence de framer-motion para transiciones suaves entre secciones
 */
export default function Home() {
	return (
		<ThemeProvider>
			<LanguageProvider>
				<HomeContent />
			</LanguageProvider>
		</ThemeProvider>
	);
}
