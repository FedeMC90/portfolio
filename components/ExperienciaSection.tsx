'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

/**
 * Componente ExperienciaSection - Sección de experiencia laboral
 * Muestra la trayectoria profesional del usuario
 */

// Datos de ejemplo de experiencia laboral
const experiencias = [
	{
		id: 1,
		cargo: 'Front-End Lead Developer Angular & Full Stack',
		empresa: 'Prosegur Argentina',
		logo: '/images/prosegur-logo.png',
		periodo: 'Febrero 2024 - Noviembre 2025',
		logros: [
			'Desarrollé el módulo de solicitudes de préstamos utilizado en todo LATAM. Los empleados ya no tienen que ir a la empresa y presentar los papeles físicos si no que pueden hacerlo a través de la aplicación. Adicionalmente, se digitalizó la gestión de las mismas.',
			'Implementé nuevas estrategias y más seguridad en los despliegues reduciendo los issues un 80%.',
			'Diseñé un sistema para abordar la deuda técnica pudiendo así darle más protagonismo sin reducir la productividad lo cual derivó en una disminución de tickets de soporte del 25%.',
			'Participé en el desarrollo de modelos estandarizados de documentación para optimizar el proceso de estimación. Esto incrementó la precisión de la planificación y redujo los ciclos de desarrollo en un 20%.',
		],
	},
	{
		id: 2,
		cargo: 'Front-End Developer Angular (Freelance) ',
		empresa: 'Web AFP insumos industriales',
		logo: '/images/afp-logo.png',
		periodo: 'Agosto 2025',
		link: 'https://www.afp.com.ar/',
		logros: [
			'Desarrollé la SPA con Angular 17 + PrimeNG. Diseño Responsive Mobile y consumo de APIs externas.',
			'Implementé modularización, reutilización de código y clean code para mantener un proyecto sencillo y escalable.',
		],
	},
	{
		id: 3,
		cargo: 'FullStack developer JS/TS/Node.JS/React ',
		empresa: 'Fpay',
		logo: '/images/fpay-logo.png',
		periodo: 'Octubre 2022 - Enero 2024',
		logros: [
      'Desarrollé nuevas soluciones para el sistema de back office.', 
      'Mejoré la eficiencia del código reduciendo la complejidad de los procesos y los tiempos de carga un 20%.',
      'Participé activamente en el diseño y refinamiento de las tareas.'
    ],
	},
	{
		id: 4,
		cargo: 'Gestor de Negocio & Team Leader (Independiente) ',
		empresa: 'PSA',
		logo: '/images/psa-logo.png',
		periodo: 'Enero 2017 - Septiembre 2022',
		logros: [
      'Liderazgo y Mentoring: Formación y conducción de equipos de ventas de alto rendimiento. Responsable del onboarding, capacitación técnica y coaching continuo de nuevos miembros. ', 
      'Gestión de Proyectos: Planificación estratégica y ejecución de objetivos comerciales a corto y largo plazo, desarrollando una fuerte autodisciplina y gestión del tiempo. ',
      'Comunicación efectiva: Desarrollo de oratoria y negociación para la gestión de clientes y resolución de conflictos. '
    ],
	},
	{
		id: 5,
		cargo: 'Desarrollador C',
		empresa: 'Istorming',
		logo: '/images/istorming-logo.png',
		periodo: 'Diciembre 2010 - Diciembre 2016',
		logros: [
      'Optimicé el rendimiento del sistema de liquidación mediante refactoring estratégico de código, logrando un 15% de reducción en los tiempos de proceso.', 
      'Implementé nuevas funcionalidades basadas en los requisitos del cliente, mejorando la satisfacción del usuario final y reduciendo los tickets de soporte en un 10%.',
    ],
	},
];

export default function ExperienciaSection() {
	return (
		<motion.section
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -50 }}
			transition={{ duration: 0.5 }}
			className='w-full max-w-4xl mx-auto px-4 py-8'
		>
			<h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-8'>Experiencia Laboral</h2>

			<div className='space-y-6'>
				{experiencias.map((exp, index) => (
					<motion.div
						key={exp.id}
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: index * 0.2, duration: 0.5 }}
						className='bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600'
					>
						<div className='flex items-start justify-between gap-4'>
							<div className='flex-1'>
								<h3 className='text-xl font-bold text-gray-800'>{exp.cargo}</h3>
								{exp.link ? (
									<a
										href={exp.link}
										target='_blank'
										rel='noopener noreferrer'
										className='text-blue-600 font-medium mt-1 hover:underline'
									>
										{exp.empresa} 🔗
									</a>
								) : (
									<p className='text-blue-600 font-medium mt-1'>{exp.empresa}</p>
								)}
								<p className='text-gray-500 text-sm mt-1'>{exp.periodo}</p>
							</div>
							<div className='relative w-16 h-16 flex-shrink-0'>
								<Image
									src={exp.logo}
									alt={`Logo ${exp.empresa}`}
									fill
									className='object-contain'
								/>
							</div>
						</div>
						<ul className='mt-3 space-y-2'>
							{exp.logros.map((logro, idx) => (
								<li
									key={idx}
									className='text-gray-700 flex items-start gap-2'
								>
									<span className='text-blue-600 mt-1'>•</span>
									<span>{logro}</span>
								</li>
							))}
						</ul>
					</motion.div>
				))}
			</div>
		</motion.section>
	);
}
