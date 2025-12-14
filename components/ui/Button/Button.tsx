import Link from 'next/link';
import { ReactNode, ComponentProps } from 'react';

type ButtonBaseProps = {
	children: ReactNode;
	variant?: 'primary' | 'secondary';
	size?: 'sm' | 'md' | 'lg';
	className?: string;
};

type ButtonAsButton = ButtonBaseProps & {
	as?: 'button';
} & ComponentProps<'button'>;

type ButtonAsLink = ButtonBaseProps & {
	as: 'link';
	href: string;
	external?: boolean;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Componente Button - Botón/Enlace reutilizable
 * Polimórfico: puede ser button o link
 */
export function Button(props: ButtonProps) {
	const { children, variant = 'primary', size = 'md', className = '', as = 'button', ...rest } = props;

	const baseClasses = 'inline-block rounded-lg transition-colors font-bold text-center';

	const variantClasses = {
		primary: 'bg-[var(--primary-cyan)] text-[var(--background)] hover:bg-[#00b8d4]',
		secondary:
			'bg-transparent text-[var(--primary-cyan)] border border-[var(--primary-cyan)] hover:bg-[var(--primary-cyan)]/10',
	};

	const sizeClasses = {
		sm: 'px-3 py-1.5 text-sm',
		md: 'px-3 sm:px-4 py-2 text-base',
		lg: 'px-6 py-3 text-lg',
	};

	const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

	if (as === 'link') {
		const { href, external } = props as ButtonAsLink;

		if (external) {
			return (
				<a
					href={href}
					target='_blank'
					rel='noopener noreferrer'
					className={classes}
				>
					{children}
				</a>
			);
		}

		return (
			<Link
				href={href}
				className={classes}
			>
				{children}
			</Link>
		);
	}

	const buttonProps = rest as ComponentProps<'button'>;
	return (
		<button
			className={classes}
			{...buttonProps}
		>
			{children}
		</button>
	);
}
