import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomeSection from './HomeSection';

// Mock del contexto de tema
vi.mock('@/contexts/ThemeContext', () => ({
	useTheme: () => ({
		theme: 'dark',
		toggleTheme: vi.fn(),
	}),
}));

// Mock de framer-motion
vi.mock('framer-motion', () => ({
	motion: {
		section: ({ children, ...props }: React.ComponentProps<'section'>) => <section {...props}>{children}</section>,
		div: ({ children, ...props }: React.ComponentProps<'div'>) => <div {...props}>{children}</div>,
	},
}));

describe('HomeSection', () => {
	it('renderiza correctamente', () => {
		render(<HomeSection />);

		expect(screen.getByText(/FEDERICO MATIAS CIOCIANO/i)).toBeInTheDocument();
		expect(screen.getByText(/FULLSTACK DEVELOPER/i)).toBeInTheDocument();
	});

	it('muestra el video de perfil', () => {
		render(<HomeSection />);

		const video = screen.getByRole('img', { hidden: true })?.parentElement?.querySelector('video');
		expect(video).toBeTruthy();
	});

	it('muestra el eslogan', () => {
		render(<HomeSection />);

		expect(screen.getByText(/SOLUCIONES SENCILLAS A SITUACIONES COMPLEJAS/i)).toBeInTheDocument();
	});

	it('muestra la descripción profesional', () => {
		render(<HomeSection />);

		expect(screen.getByText(/Transformo requisitos complejos/i)).toBeInTheDocument();
		expect(screen.getByText(/Angular y React/i)).toBeInTheDocument();
		expect(screen.getByText(/MongoDB y PostgreSQL/i)).toBeInTheDocument();
	});

	it('aplica glow-text en modo oscuro', () => {
		render(<HomeSection />);

		const heading = screen.getByText(/FEDERICO MATIAS CIOCIANO/i);
		expect(heading.className).toContain('glow-text');
	});
});
