import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Badge } from './Badge';

describe('Badge', () => {
	it('renders children correctly', () => {
		render(<Badge>React</Badge>);
		expect(screen.getByText('React')).toBeInTheDocument();
	});

	it('applies default variant and size', () => {
		render(<Badge>TypeScript</Badge>);
		const badge = screen.getByText('TypeScript');
		expect(badge.className).toContain('bg-[var(--primary-cyan)]/20');
		expect(badge.className).toContain('px-2');
		expect(badge.className).toContain('text-xs');
	});

	it('applies outlined variant', () => {
		render(<Badge variant='outlined'>Next.js</Badge>);
		const badge = screen.getByText('Next.js');
		expect(badge.className).toContain('bg-transparent');
		expect(badge.className).toContain('border-2');
	});

	it('applies medium size', () => {
		render(<Badge size='md'>Tailwind</Badge>);
		const badge = screen.getByText('Tailwind');
		expect(badge.className).toContain('px-4');
		expect(badge.className).toContain('text-sm');
	});

	it('accepts custom className', () => {
		render(<Badge className='ml-2'>Custom</Badge>);
		const badge = screen.getByText('Custom');
		expect(badge.className).toContain('ml-2');
	});
});
