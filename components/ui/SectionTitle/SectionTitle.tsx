import { ReactNode } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface SectionTitleProps {
	children: ReactNode;
	className?: string;
	as?: 'h1' | 'h2' | 'h3' | 'h4';
}

/**
 * Componente SectionTitle - Título reutilizable para secciones
 * Con efecto glow en modo oscuro
 */
export function SectionTitle({ children, className = '', as: Component = 'h2' }: SectionTitleProps) {
	const { theme } = useTheme();

	return (
		<Component
			className={`text-3xl md:text-4xl font-bold text-[var(--primary-cyan)] mb-8 ${
				theme === 'dark' ? 'glow-text' : ''
			} ${className}`}
			suppressHydrationWarning
		>
			{children}
		</Component>
	);
}
