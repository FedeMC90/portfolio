import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactSection from './ContactSection';

// Mock de emailjs
vi.mock('@emailjs/browser', () => ({
	default: {
		send: vi.fn(() => Promise.resolve({ status: 200 })),
	},
}));

// Mock de framer-motion
vi.mock('framer-motion', () => ({
	motion: {
		section: ({ children, ...props }: React.ComponentProps<'section'>) => <section {...props}>{children}</section>,
		div: ({ children, ...props }: React.ComponentProps<'div'>) => <div {...props}>{children}</div>,
		button: ({ children, ...props }: React.ComponentProps<'button'>) => <button {...props}>{children}</button>,
	},
}));

// Mock de react-phone-number-input
vi.mock('react-phone-number-input', () => ({
	default: ({
		value,
		onChange,
		...props
	}: {
		value?: string;
		onChange?: (value?: string) => void;
		[key: string]: unknown;
	}) => (
		<input
			type='tel'
			value={value}
			onChange={(e) => onChange?.(e.target.value)}
			{...props}
		/>
	),
}));

describe('ContactSection', () => {
	it('renderiza correctamente', () => {
		render(<ContactSection />);

		expect(screen.getByText(/Contacto/i)).toBeInTheDocument();
		expect(screen.getByText(/¿Tenés un proyecto en mente/i)).toBeInTheDocument();
	});

	it('muestra todos los campos del formulario', () => {
		render(<ContactSection />);

		expect(screen.getByPlaceholderText('Tu nombre')).toBeInTheDocument();
		expect(screen.getByPlaceholderText('tu@email.com')).toBeInTheDocument();
		expect(screen.getByPlaceholderText('Escribe tu mensaje aquí...')).toBeInTheDocument();
	});

	it('permite escribir en los campos', () => {
		render(<ContactSection />);

		const nameInput = screen.getByPlaceholderText('Tu nombre') as HTMLInputElement;
		const emailInput = screen.getByPlaceholderText('tu@email.com') as HTMLInputElement;
		const messageInput = screen.getByPlaceholderText('Escribe tu mensaje aquí...') as HTMLTextAreaElement;

		fireEvent.change(nameInput, { target: { value: 'Juan Pérez' } });
		fireEvent.change(emailInput, { target: { value: 'juan@example.com' } });
		fireEvent.change(messageInput, { target: { value: 'Hola, me interesa tu trabajo' } });

		expect(nameInput.value).toBe('Juan Pérez');
		expect(emailInput.value).toBe('juan@example.com');
		expect(messageInput.value).toBe('Hola, me interesa tu trabajo');
	});

	it('muestra error cuando se envía formulario vacío', async () => {
		render(<ContactSection />);

		const submitButton = screen.getByText('Enviar Mensaje');
		fireEvent.click(submitButton);

		await waitFor(() => {
			expect(screen.getByText(/Por favor completa todos los campos/i)).toBeInTheDocument();
		});
	});

	it('muestra la información de contacto', () => {
		render(<ContactSection />);

		expect(screen.getByText(/federicomatias90@gmail.com/i)).toBeInTheDocument();
		expect(screen.getByText(/Argentina/i)).toBeInTheDocument();
	});

	it('muestra enlaces a redes sociales', () => {
		render(<ContactSection />);

		const linkedinLink = screen.getByLabelText(/LinkedIn/i);
		const githubLink = screen.getByLabelText(/GitHub/i);

		expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/federicociociano/');
		expect(githubLink).toHaveAttribute('href', 'https://github.com/FedeMC90');
	});
});
