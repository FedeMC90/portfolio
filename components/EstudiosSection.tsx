'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';

/**
 * Componente EstudiosSection - Sección de formación académica
 * Muestra los estudios y certificaciones del usuario
 */

// Datos de ejemplo de estudios
const estudios = [
	{
		id: 1,
		titulo: 'FullStack Developer JS/Node.JS/React',
		institucion: 'Henry Bootcamp',
		periodo: '2022 - 2023',
		logo: '/images/henry-logo.png',
		descripcion: [
			'Programa intensivo y basado en proyectos que abarca el ciclo completo de desarrollo de aplicaciones web. Dominio del stack PERN (React/Node.js) para la construcción de Front-End y Back-End con bases de datos relacionales y no relacionales.',
			'Proyecto final. Web tipo librería basada en JavaScript utilizando manejo de estados con React/Redux, Hooks Express y Sequelize para la creación de la base de datos.',
		],
	},
	{
		id: 2,
		titulo: 'TypeScript: Guía completa',
		institucion: 'Udemy',
		periodo: '2023',
		logo: '/images/udemy-logo.png',
		descripcion: [
			'Este curso me ha proporcionado una base sólida en el lenguaje y aborda temas avanzados para poder desarrollar aplicaciones de alta calidad y comprender mejor las características y ventajas de TypeScript.',
		],
	},
];

export default function EstudiosSection() {
	const { theme } = useTheme();

	return (
		<motion.section
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -50 }}
			transition={{ duration: 0.5 }}
			className='w-full max-w-4xl mx-auto px-4 py-8'
		>
			<h2
				className={`text-3xl md:text-4xl font-bold text-[var(--primary-cyan)] mb-8 ${
					theme === 'dark' ? 'glow-text' : ''
				}`}
			>
				Formación Académica
			</h2>

			<div className='space-y-6'>
				{estudios.map((estudio, index) => (
					<motion.div
						key={estudio.id}
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: index * 0.15, duration: 0.4 }}
						className='bg-[var(--background-secondary)]/80 backdrop-blur-sm rounded-lg border border-[var(--primary-cyan)]/30 p-6 hover:border-[var(--primary-cyan)] transition-all hover:shadow-[0_0_30px_rgba(0,217,255,0.2)]'
					>
						<div className='flex items-start justify-between gap-3 sm:gap-4'>
							<div className='flex-1'>
								<h3 className='text-lg sm:text-xl font-bold text-[var(--text-primary)] leading-tight'>
									{estudio.titulo}
								</h3>
								<p className='text-[var(--primary-cyan)] font-medium text-sm sm:text-base mt-1 sm:mt-2'>
									{estudio.institucion}
								</p>
								<p className='text-gray-400 text-xs sm:text-sm mt-1'>{estudio.periodo}</p>
							</div>

							<div className='relative w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 bg-white rounded-lg p-1.5 sm:p-2 self-start'>
								<Image
									src={estudio.logo}
									alt={`Logo ${estudio.institucion}`}
									fill
									className='object-contain rounded-lg'
								/>
							</div>
						</div>

						<ul className='mt-3 space-y-2'>
							{estudio.descripcion.map((description, idx) => (
								<li
									key={idx}
									className='text-[var(--text-primary)] text-sm sm:text-base flex items-start gap-2'
								>
									<span className='text-[var(--primary-cyan)] mt-1 flex-shrink-0'>•</span>
									<span>{description}</span>
								</li>
							))}
						</ul>
					</motion.div>
				))}
			</div>
		</motion.section>
	);
}
