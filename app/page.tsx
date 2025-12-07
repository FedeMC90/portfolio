'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
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
	const [activeSection, setActiveSection] = useState('experiencia');

	// Función para cambiar de sección
	const handleSectionChange = (section: string) => {
		setActiveSection(section);
	};

	// Función para renderizar la sección activa
	const renderSection = () => {
		switch (activeSection) {
			case 'experiencia':
				return <ExperienciaSection key='experiencia' />;
			case 'estudios':
				return <EstudiosSection key='estudios' />;
			case 'proyectos':
				return <ProyectosSection key='proyectos' />;
			case 'contacto':
				return <ContactoSection key='contacto' />;
			default:
				return <ExperienciaSection key='experiencia' />;
		}
	};

	return (
		<div className='min-h-screen'>
			{/* Navegación con botones para cada sección */}
			<Navigation
				activeSection={activeSection}
				onSectionChange={handleSectionChange}
			/>

			{/* Header con foto de perfil y nombre */}
			<div className='pt-16'>
				<Header />
			</div>

			{/* Contenedor principal con transiciones suaves */}
			<main className='py-8'>
				<AnimatePresence mode='wait'>{renderSection()}</AnimatePresence>
			</main>

			{/* Footer */}
			<footer className='w-full bg-[#0a0e1a] border-t border-[#00d9ff]/20 text-[#e4e9f0] py-6 mt-12'>
				<div className='max-w-6xl mx-auto px-4 text-center'>
					<p className='text-sm'>© {new Date().getFullYear()} Federico MC. Todos los derechos reservados.</p>
				</div>
			</footer>
		</div>
	);
}
