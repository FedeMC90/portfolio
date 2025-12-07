'use client';

import { motion } from 'framer-motion';

/**
 * Componente EstudiosSection - Sección de formación académica
 * Muestra los estudios y certificaciones del usuario
 */

// Datos de ejemplo de estudios
const estudios = [
	{
		id: 1,
		titulo: 'Ingeniería en Sistemas',
		institucion: 'Universidad Tecnológica Nacional',
		periodo: '2014 - 2019',
		descripcion: 'Especialización en desarrollo de software y arquitectura de sistemas.',
	},
	{
		id: 2,
		titulo: 'Certificación React Advanced',
		institucion: 'Platzi',
		periodo: '2021',
		descripcion: 'Curso avanzado de React con hooks, context y patrones de diseño.',
	},
	{
		id: 3,
		titulo: 'Full Stack Developer Bootcamp',
		institucion: 'Udemy',
		periodo: '2020',
		descripcion: 'Bootcamp intensivo de desarrollo web full stack con MERN stack.',
	},
];

export default function EstudiosSection() {
	return (
		<motion.section
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -50 }}
			transition={{ duration: 0.5 }}
			className='w-full max-w-4xl mx-auto px-4 py-8'
		>
			<h2 className='text-3xl md:text-4xl font-bold text-[#00d9ff] mb-8 glow-text'>Formación Académica</h2>

			<div className='space-y-6'>
				{estudios.map((estudio, index) => (
					<motion.div
						key={estudio.id}
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: index * 0.2, duration: 0.5 }}
						className='bg-[#141b2d]/80 backdrop-blur-sm rounded-lg border border-[#00d9ff]/30 p-6 hover:border-[#00d9ff] transition-all hover:shadow-[0_0_30px_rgba(0,217,255,0.2)]'
					>
						<h3 className='text-xl font-bold text-[#e4e9f0]'>{estudio.titulo}</h3>
						<p className='text-[#00d9ff] font-medium mt-2'>{estudio.institucion}</p>
						<p className='text-gray-400 text-sm mt-1'>{estudio.periodo}</p>
						<p className='text-gray-300 mt-3'>{estudio.descripcion}</p>
					</motion.div>
				))}
			</div>
		</motion.section>
	);
}
