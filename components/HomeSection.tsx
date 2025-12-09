'use client';

import { motion } from 'framer-motion';

/**
 * Componente HomeSection - Sección de inicio
 * Muestra el header con foto de perfil y presentación
 */
export default function HomeSection() {
	return (
		<motion.section
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -50 }}
			transition={{ duration: 0.5 }}
			className='w-full min-h-[calc(100vh-165px)] flex flex-col justify-center items-center px-4 py-8'
		>
			{/* Foto de perfil con animación */}
			<motion.div
				whileHover={{ scale: 1.05 }}
				transition={{ type: 'spring', stiffness: 300 }}
				className='relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[#00d9ff] shadow-[0_0_30px_rgba(0,217,255,0.5)] mb-4 sm:mb-6'
			>
				<video
					src='/images/profile_video.mp4'
					autoPlay
					loop
					muted
					playsInline
					className='w-full h-full object-cover'
				/>
			</motion.div>

			<div className='max-w-6xl mx-auto text-center w-full px-2'>
				{/* Nombre y título */}
				<h1 className='text-2xl sm:text-3xl md:text-4xl text-white glow-text text-center leading-tight'>
					FEDERICO MATIAS CIOCIANO // FULLSTACK DEVELOPER
				</h1>
				<p className='text-base sm:text-lg md:text-xl text-[#00d9ff] mt-2 font-light text-center'>
					Soluciones sencillas para problemas complejos
				</p>
			</div>

			{/* Contenido adicional de la sección Home */}
			<div className='max-w-6xl mx-auto px-4 pt-4 sm:pt-7'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3, duration: 0.5 }}
					className='text-center'
				>
					<p className='text-sm sm:text-base md:text-lg text-[#e4e9f0] leading-relaxed max-w-3xl mx-auto'>
						Transformo requisitos complejos en experiencias web fluidas y escalables. Especialista en crear interfaces
						de alto rendimiento con Angular y React, respaldadas por APIs robustas con Node.js y bases de datos
						eficientes como MongoDB y PostgreSQL. <br />
						Apasionado por la innovación tecnológica y el desarrollo continuo.
					</p>
				</motion.div>
			</div>
		</motion.section>
	);
}
