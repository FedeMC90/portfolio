import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Federico Matias Ciociano - Portfolio',
	description:
		'Portfolio profesional - Desarrollador Full Stack con proyectos en Angular, JavaScript, React, Node.js, Next.js y más.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='es'
			suppressHydrationWarning
		>
			<head>
				<script
					dangerouslySetInnerHTML={{
						__html: `
							(function() {
								const theme = localStorage.getItem('theme') || 'dark';
								if (theme === 'dark') {
									document.documentElement.classList.add('dark');
								} else {
									document.documentElement.classList.remove('dark');
								}
								// Siempre iniciar en español para evitar hydration mismatch
								window.__INITIAL_LANGUAGE__ = 'es';
							})();
						`,
					}}
				/>
			</head>
			<body
				className='antialiased'
				suppressHydrationWarning
			>
				{children}
			</body>
		</html>
	);
}
