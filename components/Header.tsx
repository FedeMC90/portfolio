'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

/**
 * Componente Header - Encabezado de la página
 * Contiene la foto de perfil y el nombre del usuario
 * Utiliza framer-motion para animaciones suaves
 */
export default function Header() {
	return (
		<motion.header
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className='w-full bg-gradient-to-r from-[#0a0e1a] via-[#141b2d] to-[#0a0e1a] py-12 px-4 border-b border-[#00d9ff]/20'
		>
			<div className='max-w-6xl mx-auto flex flex-col items-center gap-6 md:flex-row md:gap-8'>
				{/* Foto de perfil con animación */}
				<motion.div
					whileHover={{ scale: 1.05 }}
					transition={{ type: 'spring', stiffness: 300 }}
					className='relative w-32 h-32 rounded-full overflow-hidden border-4 border-[#00d9ff] shadow-[0_0_30px_rgba(0,217,255,0.5)]'
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

				{/* Nombre y título */}
				<div className='text-center md:text-left'>
					<motion.h1
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2, duration: 0.5 }}
						className='text-4xl md:text-5xl font-bold text-white glow-text'
					>
						Federico Matias Ciociano
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.3, duration: 0.5 }}
						className='text-xl text-[#00d9ff] mt-2 font-light'
					>
						Desarrollador Full Stack
					</motion.p>
				</div>
			</div>
		</motion.header>
	);
}
