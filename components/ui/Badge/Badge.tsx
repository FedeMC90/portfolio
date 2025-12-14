import { ReactNode } from 'react';

interface BadgeProps {
	children: ReactNode;
	variant?: 'default' | 'outlined';
	size?: 'sm' | 'md';
	className?: string;
}

/**
 * Componente Badge - Etiqueta reutilizable para tecnologías/tags
 * Usado en secciones de proyectos y experiencia
 */
export function Badge({ children, variant = 'default', size = 'sm', className = '' }: BadgeProps) {
	const baseClasses = 'rounded-full font-medium transition-colors';

	const variantClasses = {
		default: 'bg-[var(--primary-cyan)]/20 text-[var(--primary-cyan)] border border-[var(--primary-cyan)]/40',
		outlined: 'bg-transparent text-[var(--primary-cyan)] border-2 border-[var(--primary-cyan)]',
	};

	const sizeClasses = {
		sm: 'px-2 sm:px-3 py-1 text-xs sm:text-sm',
		md: 'px-4 py-2 text-sm sm:text-base',
	};

	return (
		<span className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}>{children}</span>
	);
}
