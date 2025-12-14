import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Navigation from './Navigation';

// Mock del contexto de tema
vi.mock('@/contexts/ThemeContext', () => ({
	useTheme: () => ({
		theme: 'dark',
		toggleTheme: vi.fn(),
	}),
}));

// Mock de framer-motion para evitar problemas con animaciones en tests
vi.mock('framer-motion', () => ({
	motion: {
		div: ({ children, ...props }: React.ComponentProps<'div'>) => <div {...props}>{children}</div>,
		button: ({ children, ...props }: React.ComponentProps<'button'>) => <button {...props}>{children}</button>,
		li: ({ children, ...props }: React.ComponentProps<'li'>) => <li {...props}>{children}</li>,
		a: ({ children, ...props }: React.ComponentProps<'a'>) => <a {...props}>{children}</a>,
		span: ({ children, ...props }: React.ComponentProps<'span'>) => <span {...props}>{children}</span>,
	},
	AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
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

describe('Navigation', () => {
	const mockOnSectionChange = vi.fn();

	it('renderiza correctamente', () => {
		render(
			<Navigation
				activeSection='home'
				onSectionChange={mockOnSectionChange}
			/>
		);
		expect(screen.getByAltText('Logo FMC')).toBeInTheDocument();
	});

	it('muestra todas las secciones de navegación en desktop', () => {
		render(
			<Navigation
				activeSection='home'
				onSectionChange={mockOnSectionChange}
			/>
		);

		expect(screen.getByText('Inicio')).toBeInTheDocument();
		expect(screen.getByText('Experiencia Laboral')).toBeInTheDocument();
		expect(screen.getByText('Estudios')).toBeInTheDocument();
		expect(screen.getByText('Proyectos')).toBeInTheDocument();
		expect(screen.getByText('Contacto')).toBeInTheDocument();
	});

	it('llama a onSectionChange cuando se hace clic en una sección', () => {
		render(
			<Navigation
				activeSection='home'
				onSectionChange={mockOnSectionChange}
			/>
		);

		const experienciaButton = screen.getByText('Experiencia Laboral');
		fireEvent.click(experienciaButton);

		expect(mockOnSectionChange).toHaveBeenCalledWith('experiencia');
	});

	it('muestra el botón de descargar CV', () => {
		render(
			<Navigation
				activeSection='home'
				onSectionChange={mockOnSectionChange}
			/>
		);

		const cvButton = screen.getAllByText('Descargar CV')[0];
		expect(cvButton).toBeInTheDocument();
		expect(cvButton.closest('a')).toHaveAttribute('href', '/docs/Federico_Ciociano_Frontend.pdf');
	});

	it('abre el menú mobile al hacer clic en hamburger', () => {
		render(
			<Navigation
				activeSection='home'
				onSectionChange={mockOnSectionChange}
			/>
		);

		const hamburgerButton = screen.getByLabelText('Menu');
		fireEvent.click(hamburgerButton);

		// El sidebar debe aparecer con las secciones
		const sidebarSections = screen.getAllByText('Inicio');
		expect(sidebarSections.length).toBeGreaterThan(1); // Aparece en desktop y mobile
	});

	it('cierra el menú mobile al hacer clic en una sección', () => {
		render(
			<Navigation
				activeSection='home'
				onSectionChange={mockOnSectionChange}
			/>
		);

		// Abrir menú
		const hamburgerButton = screen.getByLabelText('Menu');
		fireEvent.click(hamburgerButton);

		// Hacer clic en una sección del sidebar
		const sidebarSections = screen.getAllByText('Estudios');
		fireEvent.click(sidebarSections[sidebarSections.length - 1]);

		expect(mockOnSectionChange).toHaveBeenCalledWith('estudios');
	});

	it('resalta la sección activa', () => {
		render(
			<Navigation
				activeSection='proyectos'
				onSectionChange={mockOnSectionChange}
			/>
		);

		const proyectosButton = screen.getByText('Proyectos');
		expect(proyectosButton.className).toContain('opacity-100');
	});
});
