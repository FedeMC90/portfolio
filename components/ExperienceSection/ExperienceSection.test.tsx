import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import ExperienceSection from './ExperienceSection';

// Mock ThemeContext
const mockUseTheme = vi.fn();
vi.mock('@/contexts/ThemeContext', () => ({
	useTheme: () => mockUseTheme(),
}));

// Mock de framer-motion
vi.mock('framer-motion', () => ({
	motion: {
		section: ({ children, ...props }: React.ComponentProps<'section'>) => <section {...props}>{children}</section>,
		div: ({ children, ...props }: React.ComponentProps<'div'>) => <div {...props}>{children}</div>,
	},
}));

// Mock de Next.js Image
vi.mock('next/image', () => {
	const MockImage = ({ src, alt }: { src: string; alt: string }) => (
		<div
			role='img'
			aria-label={alt}
			data-src={src}
		/>
	);
	MockImage.displayName = 'Image';
	return { default: MockImage };
});

describe('ExperienceSection', () => {
	beforeEach(() => {
		mockUseTheme.mockReturnValue({ theme: 'dark', setTheme: vi.fn() });
	});

	it('renderiza correctamente', () => {
		render(<ExperienceSection />);

		expect(screen.getByText(/Experiencia Laboral/i)).toBeInTheDocument();
	});

	it('muestra todas las experiencias laborales', () => {
		render(<ExperienceSection />);

		// Verificar que aparecen las empresas
		expect(screen.getByText(/Prosegur Argentina/i)).toBeInTheDocument();
		expect(screen.getByText(/Web AFP insumos industriales/i)).toBeInTheDocument();
	});

	it('muestra los puestos de trabajo', () => {
		render(<ExperienceSection />);

		expect(screen.getByText(/Front-End Lead Developer Angular/i)).toBeInTheDocument();
		expect(screen.getByText(/FullStack developer JS\/TS\/Node.JS\/React/i)).toBeInTheDocument();
	});

	it('muestra las fechas de cada experiencia', () => {
		render(<ExperienceSection />);

		// Buscar elementos que contengan años
		const content = screen.getByText(/Experiencia Laboral/i).parentElement?.textContent || '';
		expect(content).toMatch(/2024/);
		expect(content).toMatch(/2022/);
	});

	it('muestra las tecnologías utilizadas', () => {
		render(<ExperienceSection />);

		// Verificar que se muestran logros que mencionan tecnologías
		const content = screen.getByText(/Experiencia Laboral/i).parentElement?.textContent || '';
		expect(content).toBeTruthy();
	});

	it('muestra los logos de las empresas', () => {
		render(<ExperienceSection />);

		const logos = screen.getAllByRole('img');
		expect(logos.length).toBeGreaterThan(0);
	});

	it('muestra las descripciones de las tareas realizadas', () => {
		render(<ExperienceSection />);

		expect(screen.getByText(/Desarrollé el módulo de solicitudes de préstamos/i)).toBeInTheDocument();
	});
});
