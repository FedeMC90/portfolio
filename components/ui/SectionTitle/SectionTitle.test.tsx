import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SectionTitle } from './SectionTitle';

// Mock ThemeContext
const mockUseTheme = vi.fn();
vi.mock('@/contexts/ThemeContext', () => ({
	useTheme: () => mockUseTheme(),
}));

describe('SectionTitle', () => {
	it('renders children correctly', () => {
		mockUseTheme.mockReturnValue({ theme: 'dark', setTheme: vi.fn() });
		render(<SectionTitle>Test Title</SectionTitle>);
		expect(screen.getByText('Test Title')).toBeInTheDocument();
	});

	it('applies glow-text class in dark mode', () => {
		mockUseTheme.mockReturnValue({ theme: 'dark', setTheme: vi.fn() });
		render(<SectionTitle>Dark Title</SectionTitle>);
		const title = screen.getByText('Dark Title');
		expect(title.className).toContain('glow-text');
	});

	it('does not apply glow-text class in light mode', () => {
		mockUseTheme.mockReturnValue({ theme: 'light', setTheme: vi.fn() });
		render(<SectionTitle>Light Title</SectionTitle>);
		const title = screen.getByText('Light Title');
		expect(title.className).not.toContain('glow-text');
	});

	it('renders as h2 by default', () => {
		mockUseTheme.mockReturnValue({ theme: 'dark', setTheme: vi.fn() });
		render(<SectionTitle>Default</SectionTitle>);
		expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
	});

	it('renders as custom heading level', () => {
		mockUseTheme.mockReturnValue({ theme: 'dark', setTheme: vi.fn() });
		render(<SectionTitle as='h3'>Custom</SectionTitle>);
		expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
	});

	it('accepts custom className', () => {
		mockUseTheme.mockReturnValue({ theme: 'dark', setTheme: vi.fn() });
		render(<SectionTitle className='text-center'>Custom Class</SectionTitle>);
		const title = screen.getByText('Custom Class');
		expect(title.className).toContain('text-center');
	});
});
