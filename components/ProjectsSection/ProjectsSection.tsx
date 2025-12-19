'use client';

import { motion } from 'framer-motion';
import { Card, Badge, SectionTitle, Button } from '@/components/ui';
import { useTranslation } from '@/contexts/LanguageContext';

/**
 * Componente ProyectosSection - Sección de proyectos
 * Muestra los proyectos destacados del usuario
 */

export default function ProjectsSection() {
	const { t } = useTranslation();
	const proyectos = t.projects.list;

	return (
		<motion.section
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -50 }}
			transition={{ duration: 0.5 }}
			className='w-full max-w-4xl mx-auto px-4 py-8'
		>
			<SectionTitle>{t.projects.title}</SectionTitle>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
				{proyectos.map((proyecto, index) => (
					<Card
						key={proyecto.id}
						delay={index * 0.15}
					>
						<h3 className='text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-2'>{proyecto.nombre}</h3>
						<p className='text-[var(--text-primary)] text-sm sm:text-base mb-4'>{proyecto.descripcion}</p>

						{/* Tecnologías utilizadas */}
						<div className='flex flex-wrap gap-2 mb-4'>
							{proyecto.tecnologias.map((tech, techIndex) => (
								<Badge key={techIndex}>{tech}</Badge>
							))}
						</div>

						{/* Botón para ver proyecto */}
						<Button
							as='link'
							href={proyecto.url}
							external
							className='shadow-[0_0_15px_rgba(0,217,255,0.3)]'
						>
							{t.projects.viewProject}
						</Button>
					</Card>
				))}
			</div>
		</motion.section>
	);
}
