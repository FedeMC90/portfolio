'use client';

import { motion } from 'framer-motion';

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

// Array con las secciones disponibles
const sections = [
	{ id: 'experiencia', label: 'Experiencia Laboral' },
	{ id: 'estudios', label: 'Estudios' },
	{ id: 'proyectos', label: 'Proyectos' },
	{ id: 'contacto', label: 'Contacto' },
];

export default function Navigation({ activeSection, onSectionChange }: NavigationProps) {
	return (
		<nav className='fixed top-0 left-0 right-0 z-50 w-full bg-[#0a0e1a]/90 backdrop-blur-lg border-b border-[#00d9ff]/10'>
			<div className='max-w-6xl mx-auto px-4 py-3 flex items-center justify-between'>
				<ul className='flex flex-wrap justify-center gap-1 md:gap-2 flex-1'>
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
								className={`relative px-5 py-2.5 md:px-8 md:py-3 font-medium transition-all text-sm md:text-base text-[#00d9ff] ${
									activeSection === section.id ? 'opacity-100' : 'opacity-60 hover:opacity-100'
								}`}
							>
								{section.label}
								{/* Línea inferior para el botón activo */}
								{activeSection === section.id && (
									<motion.div
										layoutId='activeTab'
										className='absolute bottom-0 left-0 right-0 h-0.5 bg-[#00d9ff] shadow-[0_0_10px_rgba(0,217,255,0.8)]'
										transition={{ type: 'spring', stiffness: 380, damping: 30 }}
									/>
								)}
							</motion.button>
						</motion.li>
					))}
				</ul>

				{/* Botón Descargar CV */}
				<motion.a
					href='/docs/Federico_Ciociano_Frontend.pdf'
					download='Federico_Ciociano_Frontend.pdf'
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className='px-4 py-2 md:px-6 md:py-2.5 border-2 border-[#00d9ff] text-[#00d9ff] font-medium text-sm md:text-base hover:bg-[#00d9ff]/10 transition-all'
				>
					Descargar CV
				</motion.a>
			</div>
		</nav>
	);
}
