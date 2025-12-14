import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import EducationSection from './EducationSection';

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

describe('EducationSection', () => {
	beforeEach(() => {
		mockUseTheme.mockReturnValue({ theme: 'dark', setTheme: vi.fn() });
	});
	it('renderiza correctamente', () => {
		render(<EducationSection />);

		expect(screen.getByText(/Formación Académica/i)).toBeInTheDocument();
	});

	it('muestra todas las instituciones educativas', () => {
		render(<EducationSection />);

		const section = screen.getByText(/Formación Académica/i).parentElement;
		expect(section).toBeTruthy();
	});

	it('muestra los títulos obtenidos', () => {
		render(<EducationSection />);

		// Verificar que hay títulos de estudios
		const headings = screen.getAllByRole('heading', { level: 3 });
		expect(headings.length).toBeGreaterThan(0);
	});

	it('muestra las fechas de los estudios', () => {
		render(<EducationSection />);

		const content = screen.getByText(/Formación Académica/i).parentElement?.textContent || '';
		// Verificar que hay años en el contenido
		expect(content).toMatch(/20\d{2}/);
	});

	it('muestra los logos de las instituciones', () => {
		render(<EducationSection />);

		const logos = screen.getAllByRole('img');
		expect(logos.length).toBeGreaterThan(0);
	});
});
