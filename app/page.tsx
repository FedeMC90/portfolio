'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation';
import HomeSection from '@/components/HomeSection';
import ExperienciaSection from '@/components/ExperienciaSection';
import EstudiosSection from '@/components/EstudiosSection';
import ProyectosSection from '@/components/ProyectosSection';
import ContactoSection from '@/components/ContactoSection';

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
				return <ExperienciaSection key='experiencia' />;
			case 'estudios':
				return <EstudiosSection key='estudios' />;
			case 'proyectos':
				return <ProyectosSection key='proyectos' />;
			case 'contacto':
				return <ContactoSection key='contacto' />;
			default:
				return <HomeSection key='home' />;
		}
	};

	return (
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
			<footer className='w-full bg-[#0a0e1a] border-t border-[#00d9ff]/20 text-[#e4e9f0] py-6 mt-auto'>
				<div className='max-w-6xl mx-auto px-4 text-center'>
					<p className='text-sm'>© 2025 FMC. Todos los derechos reservados.</p>
				</div>
			</footer>
		</div>
	);
}
