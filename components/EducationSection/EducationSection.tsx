'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, SectionTitle } from '@/components/ui';
import { useTranslation } from '@/contexts/LanguageContext';

/**
 * Componente EstudiosSection - Sección de formación académica
 * Muestra los estudios y certificaciones del usuario
 */

export default function EducationSection() {
	const { t } = useTranslation();
	const estudios = t.education.list;

	return (
		<motion.section
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -50 }}
			transition={{ duration: 0.5 }}
			className='w-full max-w-4xl mx-auto px-4 py-8'
		>
			<SectionTitle>{t.education.title}</SectionTitle>

			<div className='space-y-6'>
				{estudios.map((estudio, index) => (
					<Card
						key={estudio.id}
						delay={index * 0.15}
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
					</Card>
				))}
			</div>
		</motion.section>
	);
}
