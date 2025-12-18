'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation/Navigation';
import HomeSection from '@/components/HomeSection/HomeSection';
import ExperienceSection from '@/components/ExperienceSection/ExperienceSection';
import EducationSection from '@/components/EducationSection/EducationSection';
import ProjectsSection from '@/components/ProjectsSection/ProjectsSection';
import ContactSection from '@/components/ContactSection/ContactSection';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';

/**
 * Componente Home - Página principal de la SPA
 * Gestiona el estado de la sección activa y renderiza los componentes correspondientes
 * Utiliza AnimatePresence de framer-motion para transiciones suaves entre secciones
 */
export default function Home() {
	// Estado para controlar qué sección está activa
	const [activeSection, setActiveSection] = useState('home');

	// Función para cambiar de sección
	const handleSectionChange = (section: string) => {
		setActiveSection(section);
	};

	// Función para renderizar la sección activa
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
		<ThemeProvider>
			<LanguageProvider>
				<div className='min-h-screen flex flex-col'>
					{/* Navegación con botones para cada sección */}
					<Navigation
						activeSection={activeSection}
						onSectionChange={handleSectionChange}
					/>

					{/* Contenedor principal con transiciones suaves */}
					<main className='pt-16 flex-grow'>
						<AnimatePresence mode='wait'>{renderSection()}</AnimatePresence>
					</main>

					{/* Footer */}
					<footer className='w-full bg-[var(--background)]/90 border-t border-[var(--primary-cyan)]/20 text-[var(--text-primary)] py-6 mt-auto'>
						<div className='max-w-6xl mx-auto px-4 text-center'>
							<p className='text-sm'>© 2025 FMC. Todos los derechos reservados.</p>
						</div>
					</footer>
				</div>
			</LanguageProvider>
		</ThemeProvider>
	);
}
