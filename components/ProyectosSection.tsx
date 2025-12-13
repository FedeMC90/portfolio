'use client';

import { motion } from 'framer-motion';

/**
 * Componente ProyectosSection - Sección de proyectos
 * Muestra los proyectos destacados del usuario
 */

// Datos de ejemplo de proyectos
const proyectos = [
	{
		id: 1,
		nombre: 'Portfolio Personal',
		descripcion:
			'Este portfolio desarrollado con el objetivo de mostrar mis habilidades y proyectos. Utilicé tecnologías modernas para crear una experiencia de usuario atractiva y funcional.',
		tecnologias: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
		url: 'https://fmc-portfolio.vercel.app/',
	},
	{
		id: 2,
		nombre: 'Biblioteca de juegos',
		descripcion:
			'Fue mi proyecto final individual bootcamp Henry. Con una estructura básica y algunos conceptos que debía cumplir otorgados por el instituto diseñé, construí y desarrollé tanto back, front y la base de datos desde cero.',
		tecnologias: ['JavaScript', 'React', 'Node.js', 'PostgreSQL', 'Sequelize', 'Express'],
		url: 'https://lojueguito.onrender.com/',
	},
];

export default function ProyectosSection() {
	return (
		<motion.section
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -50 }}
			transition={{ duration: 0.5 }}
			className='w-full max-w-4xl mx-auto px-4 py-8'
		>
			<h2 className='text-3xl md:text-4xl font-bold text-[var(--primary-cyan)] mb-8 glow-text'>Proyectos Destacados</h2>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
				{proyectos.map((proyecto, index) => (
					<motion.div
						key={proyecto.id}
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: index * 0.15, duration: 0.4 }}
						whileHover={{ scale: 1.03 }}
						className='bg-[#141b2d]/80 backdrop-blur-sm rounded-lg border border-[var(--primary-cyan)]/30 p-6 hover:border-[var(--primary-cyan)] transition-all hover:shadow-[0_0_30px_rgba(0,217,255,0.2)]'
					>
						<h3 className='text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-2'>{proyecto.nombre}</h3>
						<p className='text-gray-300 text-sm sm:text-base mb-4'>{proyecto.descripcion}</p>

						{/* Tecnologías utilizadas */}
						<div className='flex flex-wrap gap-2 mb-4'>
							{proyecto.tecnologias.map((tech, techIndex) => (
								<span
									key={techIndex}
									className='px-2 sm:px-3 py-1 bg-[var(--primary-cyan)]/20 text-[var(--primary-cyan)] border border-[var(--primary-cyan)]/40 rounded-full text-xs sm:text-sm font-medium'
								>
									{tech}
								</span>
							))}
						</div>

						{/* Botón para ver proyecto */}
						<a
							href={proyecto.url}
							target='_blank'
							rel='noopener noreferrer'
							className='inline-block px-3 sm:px-4 py-2 bg-[var(--primary-cyan)] text-[#0a0e1a] rounded-lg hover:bg-[#00b8d4] transition-colors font-bold text-sm sm:text-base shadow-[0_0_15px_rgba(0,217,255,0.3)]'
						>
							Ver Proyecto
						</a>
					</motion.div>
				))}
			</div>
		</motion.section>
	);
}
