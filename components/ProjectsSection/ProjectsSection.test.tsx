import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProjectsSection from './ProjectsSection';

// Mock ThemeContext
const mockUseTheme = vi.fn();
vi.mock('@/contexts/ThemeContext', () => ({
	useTheme: () => mockUseTheme(),
}));

// Mock next/link
vi.mock('next/link', () => ({
	default: ({ children, href, className }: { children: React.ReactNode; href: string; className?: string }) => (
		<a
			href={href}
			className={className}
		>
			{children}
		</a>
	),
}));

// Mock de framer-motion
vi.mock('framer-motion', () => ({
	motion: {
		section: ({ children, ...props }: React.ComponentProps<'section'>) => <section {...props}>{children}</section>,
		div: ({ children, ...props }: React.ComponentProps<'div'>) => <div {...props}>{children}</div>,
		a: ({ children, ...props }: React.ComponentProps<'a'>) => <a {...props}>{children}</a>,
	},
}));

describe('ProjectsSection', () => {
	beforeEach(() => {
		mockUseTheme.mockReturnValue({ theme: 'dark', setTheme: vi.fn() });
	});
	it('renderiza correctamente', () => {
		render(<ProjectsSection />);

		expect(screen.getByText(/Proyectos Destacados/i)).toBeInTheDocument();
	});

	it('muestra todos los proyectos', () => {
		render(<ProjectsSection />);

		// Verificar que aparecen los títulos de proyectos
		const projectTitles = screen.getAllByRole('heading', { level: 3 });
		expect(projectTitles.length).toBeGreaterThan(0);
	});

	it('muestra las tecnologías de cada proyecto', () => {
		render(<ProjectsSection />);

		// Verificar que hay badges de tecnologías
		expect(screen.getByText(/Next.js/i)).toBeInTheDocument();
		expect(screen.getByText(/React/i)).toBeInTheDocument();
	});

	it('muestra enlaces a GitHub', () => {
		render(<ProjectsSection />);

		const projectLinks = screen.getAllByText(/Ver Proyecto/i);
		expect(projectLinks.length).toBeGreaterThan(0);

		projectLinks.forEach((link) => {
			expect(link.closest('a')).toHaveAttribute('href');
		});
	});

	it('todos los enlaces externos tienen target="_blank"', () => {
		render(<ProjectsSection />);

		const externalLinks = screen.getAllByRole('link');
		externalLinks.forEach((link) => {
			const href = link.getAttribute('href');
			if (href?.startsWith('http')) {
				expect(link).toHaveAttribute('target', '_blank');
				expect(link).toHaveAttribute('rel', 'noopener noreferrer');
			}
		});
	});

	it('muestra descripciones de los proyectos', () => {
		render(<ProjectsSection />);

		const section = screen.getByText(/Proyectos Destacados/i).parentElement;
		expect(section?.textContent).toBeTruthy();
	});
});
