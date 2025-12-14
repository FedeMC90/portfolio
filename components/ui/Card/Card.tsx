import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
	children: ReactNode;
	delay?: number;
	className?: string;
	whileHover?: boolean;
}

/**
 * Componente Card - Tarjeta reutilizable con animaciones
 * Diseño consistente para experiencia, educación y proyectos
 */
export function Card({ children, delay = 0, className = '', whileHover = true }: CardProps) {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ delay, duration: 0.4 }}
			whileHover={whileHover ? { scale: 1.03 } : undefined}
			className={`bg-[var(--background-secondary)]/80 backdrop-blur-sm rounded-lg border border-[var(--primary-cyan)]/30 p-6 hover:border-[var(--primary-cyan)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,217,255,0.2)] ${className}`}
		>
			{children}
		</motion.div>
	);
}
