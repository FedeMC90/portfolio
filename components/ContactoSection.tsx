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
		{ name: 'LinkedIn', url: 'https://linkedin.com/in/fedeciociano', icon: '💼' },
		{ name: 'GitHub', url: 'https://github.com/FedeMC90', icon: '💻' },
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
					<div className='bg-white rounded-lg p-8 flex flex-col items-center gap-4'>
						<div className='w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin'></div>
						<p className='text-gray-800 font-medium'>Enviando mensaje...</p>
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
				<h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-8'>Contacto</h2>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					{/* Información de contacto */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2, duration: 0.5 }}
						className='bg-white rounded-lg shadow-md p-6'
					>
						<h3 className='text-xl font-bold text-gray-800 mb-4'>Información de Contacto</h3>

						<div className='space-y-3'>
							{/* Email */}
							<div className='flex items-center gap-3'>
								<span className='text-2xl'>📧</span>
								<div>
									<p className='text-sm text-gray-500'>Email</p>
									<a
										href={`mailto:${contactInfo.email}`}
										className='text-blue-600 hover:underline'
									>
										{contactInfo.email}
									</a>
								</div>
							</div>

							{/* Teléfono */}
							<div className='flex items-center gap-3'>
								<span className='text-2xl'>📱</span>
								<div>
									<p className='text-sm text-gray-500'>Teléfono</p>
									<p className='text-gray-800'>{contactInfo.telefono}</p>
								</div>
							</div>

							{/* Ubicación */}
							<div className='flex items-center gap-3'>
								<span className='text-2xl'>📍</span>
								<div>
									<p className='text-sm text-gray-500'>Ubicación</p>
									<p className='text-gray-800'>{contactInfo.ubicacion}</p>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Redes sociales */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.3, duration: 0.5 }}
						className='bg-white rounded-lg shadow-md p-6'
					>
						<h3 className='text-xl font-bold text-gray-800 mb-4'>Redes Sociales</h3>

						<div className='space-y-3'>
							{contactInfo.redesSociales.map((red, index) => (
								<motion.a
									key={index}
									href={red.url}
									target='_blank'
									rel='noopener noreferrer'
									whileHover={{ scale: 1.05, x: 10 }}
									className='flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors'
								>
									<span className='text-2xl'>{red.icon}</span>
									<span className='text-gray-800 font-medium'>{red.name}</span>
								</motion.a>
							))}
						</div>
					</motion.div>
				</div>

				{/* Formulario de contacto (opcional) */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4, duration: 0.5 }}
					className='bg-white rounded-lg shadow-md p-6 mt-8'
				>
					<h3 className='text-xl font-bold text-gray-800 mb-4'>Envíame un mensaje</h3>

					<form
						onSubmit={handleSubmit}
						className='space-y-4'
					>
						{/* Nombre */}
						<div>
							<label
								htmlFor='name'
								className='block text-sm font-medium text-gray-700 mb-1'
							>
								Nombre
							</label>
							<input
								type='text'
								id='name'
								value={formData.name}
								onChange={handleChange}
								required
								className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900'
							/>
						</div>

						{/* Email */}
						<div>
							<label
								htmlFor='email'
								className='block text-sm font-medium text-gray-700 mb-1'
							>
								Email
							</label>
							<input
								type='email'
								id='email'
								value={formData.email}
								onChange={handleChange}
								required
								className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900'
								placeholder='tu@email.com'
							/>
						</div>

						{/* Phone */}
						<div>
							<label
								htmlFor='phone'
								className='block text-sm font-medium text-gray-700 mb-1'
							>
								Teléfono
							</label>
							<input
								type='telephone'
								id='phone'
								value={formData.phone}
								onChange={handleChange}
								className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900'
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
								className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900'
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
								isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
							} text-white`}
						>
							{isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
						</motion.button>
					</form>
				</motion.div>
			</motion.section>
		</>
	);
}
