import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

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

describe('Button', () => {
	describe('as button', () => {
		it('renders as button by default', () => {
			render(<Button>Click me</Button>);
			const button = screen.getByRole('button', { name: 'Click me' });
			expect(button).toBeInTheDocument();
		});

		it('applies primary variant by default', () => {
			render(<Button>Primary</Button>);
			const button = screen.getByRole('button');
			expect(button.className).toContain('bg-[var(--primary-cyan)]');
		});

		it('applies secondary variant', () => {
			render(<Button variant='secondary'>Secondary</Button>);
			const button = screen.getByRole('button');
			expect(button.className).toContain('bg-transparent');
			expect(button.className).toContain('border');
		});

		it('applies different sizes', () => {
			const { rerender } = render(<Button size='sm'>Small</Button>);
			let button = screen.getByRole('button');
			expect(button.className).toContain('px-3');
			expect(button.className).toContain('text-sm');

			rerender(<Button size='lg'>Large</Button>);
			button = screen.getByRole('button');
			expect(button.className).toContain('px-6');
			expect(button.className).toContain('text-lg');
		});

		it('accepts button props', () => {
			render(
				<Button
					type='submit'
					disabled
				>
					Submit
				</Button>
			);
			const button = screen.getByRole('button');
			expect(button).toHaveAttribute('type', 'submit');
			expect(button).toBeDisabled();
		});
	});

	describe('as link', () => {
		it('renders as internal link', () => {
			render(
				<Button
					as='link'
					href='/about'
				>
					About
				</Button>
			);
			const link = screen.getByRole('link', { name: 'About' });
			expect(link).toHaveAttribute('href', '/about');
			expect(link).not.toHaveAttribute('target');
		});

		it('renders as external link', () => {
			render(
				<Button
					as='link'
					href='https://example.com'
					external
				>
					External
				</Button>
			);
			const link = screen.getByRole('link', { name: 'External' });
			expect(link).toHaveAttribute('href', 'https://example.com');
			expect(link).toHaveAttribute('target', '_blank');
			expect(link).toHaveAttribute('rel', 'noopener noreferrer');
		});

		it('applies variant classes to link', () => {
			render(
				<Button
					as='link'
					href='/test'
					variant='secondary'
				>
					Link
				</Button>
			);
			const link = screen.getByRole('link');
			expect(link.className).toContain('bg-transparent');
		});
	});

	it('accepts custom className', () => {
		render(<Button className='mt-4'>Custom</Button>);
		const button = screen.getByRole('button');
		expect(button.className).toContain('mt-4');
	});
});
