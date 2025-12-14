import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

// Mock framer-motion
vi.mock('framer-motion', () => ({
	motion: {
		div: ({ children, className, whileHover, ...props }: React.ComponentProps<'div'>) => (
			<div
				className={className}
				data-testid='motion-div'
				{...props}
			>
				{children}
			</div>
		),
	},
}));

describe('Card', () => {
	it('renders children correctly', () => {
		render(<Card>Test Content</Card>);
		expect(screen.getByText('Test Content')).toBeInTheDocument();
	});

	it('applies default classes', () => {
		render(<Card>Content</Card>);
		const card = screen.getByTestId('motion-div');
		expect(card.className).toContain('bg-[var(--background-secondary)]/80');
		expect(card.className).toContain('rounded-lg');
		expect(card.className).toContain('border');
	});

	it('accepts custom className', () => {
		render(<Card className='custom-class'>Content</Card>);
		const card = screen.getByTestId('motion-div');
		expect(card.className).toContain('custom-class');
	});
});
