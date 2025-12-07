'use client';

import { motion } from 'framer-motion';
import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

/**
 * Componente ContactoSection - Sección de contacto
 * Muestra información de contacto y redes sociales
 */

// Datos de contacto
const contactInfo = {
	email: 'fedemc90@google.com',
	telefono: '+54 11 3865-0926',
	ubicacion: 'Buenos Aires, Argentina',
	redesSociales: [
		{
			name: 'LinkedIn',
			url: 'https://linkedin.com/in/fedeciociano',
			icon: (
				<svg
					className='w-6 h-6'
					fill='currentColor'
					viewBox='0 0 24 24'
				>
					<path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
				</svg>
			),
		},
		{
			name: 'GitHub',
			url: 'https://github.com/FedeMC90',
			icon: (
				<svg
					className='w-6 h-6'
					fill='currentColor'
					viewBox='0 0 24 24'
				>
					<path
						fillRule='evenodd'
						d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
						clipRule='evenodd'
					/>
				</svg>
			),
		},
	],
};

export default function ContactoSection() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		message: '',
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({
			...formData,
			[e.target.id]: e.target.value,
		});
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus('idle');

		try {
			// Inicializar EmailJS con tu Public Key
			emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '');

			// Enviar el email
			await emailjs.send(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
				{
					name: formData.name,
					email: formData.email,
					phone: formData.phone,
					message: formData.message,
					to_name: 'Federico',
				}
			);

			setSubmitStatus('success');
			setFormData({ name: '', email: '', message: '', phone: '' });
		} catch (error) {
			console.error('Error al enviar el mensaje:', error);
			setSubmitStatus('error');
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<>
			{/* Overlay de loading con spinner */}
			{isSubmitting && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className='fixed inset-0 bg-gray-900/30 backdrop-blur-sm flex items-center justify-center z-50'
				>
					<div className='bg-[#141b2d] border border-[#00d9ff]/50 rounded-lg p-8 flex flex-col items-center gap-4 shadow-[0_0_30px_rgba(0,217,255,0.3)]'>
						<div className='w-16 h-16 border-4 border-[#00d9ff] border-t-transparent rounded-full animate-spin'></div>
						<p className='text-[#00d9ff] font-medium'>Enviando mensaje...</p>
					</div>
				</motion.div>
			)}

			<motion.section
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -50 }}
				transition={{ duration: 0.5 }}
				className='w-full max-w-4xl mx-auto px-4 py-8'
			>
				<h2 className='text-3xl md:text-4xl font-bold text-[#00d9ff] mb-8 glow-text'>Contacto</h2>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					{/* Información de contacto */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2, duration: 0.5 }}
						className='bg-[#141b2d]/80 backdrop-blur-sm rounded-lg border border-[#00d9ff]/30 p-6 hover:border-[#00d9ff] transition-all'
					>
						<h3 className='text-xl font-bold text-[#e4e9f0] mb-4'>Información de Contacto</h3>

						<div className='space-y-3'>
							{/* Email */}
							<motion.a
								href={`mailto:${contactInfo.email}`}
								whileHover={{ scale: 1.05, x: 10 }}
								className='flex items-center gap-3 p-2 pl-4 rounded-lg hover:bg-[#00d9ff]/10 transition-colors border border-transparent hover:border-[#00d9ff]/30'
							>
								<svg
									className='w-6 h-6 text-[#00d9ff]'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
									/>
								</svg>
								<div>
									<p className='text-sm text-gray-400'>Email</p>
									<p className='text-[#00d9ff]'>{contactInfo.email}</p>
								</div>
							</motion.a>

							{/* Teléfono */}
							<motion.a
								href='https://wa.me/5491138650926'
								target='_blank'
								rel='noopener noreferrer'
								whileHover={{ scale: 1.05, x: 10 }}
								className='flex items-center gap-3 p-2 pl-4 rounded-lg hover:bg-[#00d9ff]/10 transition-colors border border-transparent hover:border-[#00d9ff]/30'
							>
								<svg
									className='w-6 h-6 text-[#00d9ff]'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
									/>
								</svg>
								<div>
									<p className='text-sm text-gray-400'>Teléfono</p>
									<p className='text-[#00d9ff]'>{contactInfo.telefono}</p>
								</div>
							</motion.a>

							{/* Ubicación */}
							<div className='flex items-center gap-3 pl-4'>
								<svg
									className='w-6 h-6 text-[#00d9ff]'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
									/>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
									/>
								</svg>
								<p className='text-sm text-gray-400'>Buenos Aires, Argentina</p>
							</div>
						</div>
					</motion.div>

					{/* Redes sociales */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.3, duration: 0.5 }}
						className='bg-[#141b2d]/80 backdrop-blur-sm rounded-lg border border-[#00d9ff]/30 p-6 hover:border-[#00d9ff] transition-all'
					>
						<h3 className='text-xl font-bold text-[#e4e9f0] mb-4'>Redes Sociales</h3>

						<div className='space-y-3'>
							{contactInfo.redesSociales.map((red, index) => (
								<motion.a
									key={index}
									href={red.url}
									target='_blank'
									rel='noopener noreferrer'
									whileHover={{ scale: 1.05, x: 10 }}
									className='flex items-center gap-3 p-3 pl-6 rounded-lg hover:bg-[#00d9ff]/10 transition-colors border border-transparent hover:border-[#00d9ff]/30'
								>
									<span className='text-[#00d9ff]'>{red.icon}</span>
									<span className='text-[#e4e9f0] font-medium'>{red.name}</span>
								</motion.a>
							))}
						</div>
					</motion.div>
				</div>

				{/* Formulario de contacto (opcional) */}
				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.3, duration: 0.5 }}
					className='bg-[#141b2d]/80 backdrop-blur-sm rounded-lg border border-[#00d9ff]/30 p-6 hover:border-[#00d9ff] transition-all mt-8'
				>
					<h3 className='text-xl font-bold text-[#e4e9f0] mb-4'>Envíame un mensaje</h3>

					<form
						onSubmit={handleSubmit}
						className='space-y-4'
					>
						{/* Nombre */}
						<div>
							<label
								htmlFor='name'
								className='block text-sm font-medium text-gray-300 mb-1'
							>
								Nombre
							</label>
							<input
								type='text'
								id='name'
								value={formData.name}
								onChange={handleChange}
								required
								className='w-full px-4 py-2 bg-[#0a0e1a]/50 border border-[#00d9ff]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00d9ff] text-white placeholder-gray-500'
							/>
						</div>

						{/* Email */}
						<div>
							<label
								htmlFor='email'
								className='block text-sm font-medium text-gray-300 mb-1'
							>
								Email
							</label>
							<input
								type='email'
								id='email'
								value={formData.email}
								onChange={handleChange}
								required
								className='w-full px-4 py-2 bg-[#0a0e1a]/50 border border-[#00d9ff]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00d9ff] text-white placeholder-gray-500'
								placeholder='tu@email.com'
							/>
						</div>

						{/* Phone */}
						<div>
							<label
								htmlFor='phone'
								className='block text-sm font-medium text-gray-300 mb-1'
							>
								Teléfono
							</label>
							<input
								type='telephone'
								id='phone'
								value={formData.phone}
								onChange={handleChange}
								className='w-full px-4 py-2 bg-[#0a0e1a]/50 border border-[#00d9ff]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00d9ff] text-white placeholder-gray-500'
							/>
						</div>

						{/* message */}
						<div>
							<label
								htmlFor='message'
								className='block text-sm font-medium text-gray-700 mb-1'
							>
								Mensaje
							</label>
							<textarea
								id='message'
								rows={4}
								value={formData.message}
								onChange={handleChange}
								required
								className='w-full px-4 py-2 bg-[#0a0e1a]/50 border border-[#00d9ff]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00d9ff] text-white placeholder-gray-500'
								placeholder='Escribe tu mensaje aquí...'
							/>
						</div>

						{/* Mensajes de estado */}
						{submitStatus === 'success' && (
							<motion.div
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								className='p-3 bg-green-100 text-green-700 rounded-lg'
							>
								✓ Mensaje enviado correctamente
							</motion.div>
						)}

						{submitStatus === 'error' && (
							<motion.div
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								className='p-3 bg-red-100 text-red-700 rounded-lg'
							>
								✗ Error al enviar el mensaje. Inténtalo de nuevo.
							</motion.div>
						)}

						{/* Botón de envío */}
						<motion.button
							type='submit'
							disabled={isSubmitting}
							whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
							whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
							className={`w-full px-6 py-3 rounded-lg font-medium transition-colors ${
								isSubmitting
									? 'bg-gray-600 cursor-not-allowed'
									: 'bg-[#00d9ff] hover:bg-[#00b8d4] shadow-[0_0_20px_rgba(0,217,255,0.3)]'
							} text-[#0a0e1a] font-bold`}
						>
							{isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
						</motion.button>
					</form>
				</motion.div>
			</motion.section>
		</>
	);
}
