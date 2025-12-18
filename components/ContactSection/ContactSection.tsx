'use client';

import { motion } from 'framer-motion';
import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { SectionTitle, Card, LinkedInIcon, GitHubIcon, EmailIcon, PhoneIcon, LocationIcon } from '@/components/ui';
import { useTranslation } from '@/contexts/LanguageContext';

/**
 * ContactSection Component - Contact section
 * Displays contact information and social networks
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
			icon: <LinkedInIcon />,
		},
		{
			name: 'GitHub',
			url: 'https://github.com/FedeMC90',
			icon: <GitHubIcon />,
		},
	],
};

export default function ContactoSection() {
	const { t } = useTranslation();
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [phone, setPhone] = useState<string>('');
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
					phone: phone,
					message: formData.message,
					to_name: 'Federico',
				}
			);

			setSubmitStatus('success');
			setFormData({ name: '', email: '', message: '' });
			setPhone('');
		} catch (error) {
			console.error('Error al enviar el mensaje:', error);
			setSubmitStatus('error');
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<>
			{/* Loading overlay with spinner */}
			{isSubmitting && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className='fixed inset-0 bg-gray-900/30 backdrop-blur-sm flex items-center justify-center z-50'
				>
					<div className='bg-[#141b2d] border border-[var(--primary-cyan)]/50 rounded-lg p-8 flex flex-col items-center gap-4 shadow-[0_0_30px_rgba(0,217,255,0.3)]'>
						<div className='w-16 h-16 border-4 border-[var(--primary-cyan)] border-t-transparent rounded-full animate-spin'></div>
						<p className='text-[var(--primary-cyan)] font-medium'>{t.contact.form.sending}</p>
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
				<SectionTitle>{t.contact.title}</SectionTitle>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8'>
					{/* Contact information */}
					<Card>
						<h3 className='text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-3 sm:mb-4'>{t.contact.info}</h3>

						<div className='space-y-3'>
							{/* Email */}
							<motion.a
								href={`mailto:${contactInfo.email}`}
								whileHover={{ scale: 1.05, x: 10 }}
								className='flex items-center gap-3 p-2 pl-4 rounded-lg hover:bg-[var(--primary-cyan)]/10 transition-colors border border-transparent hover:border-[var(--primary-cyan)]/30'
							>
								<EmailIcon className='w-6 h-6 text-[var(--primary-cyan)]' />
								<div>
									<p className='text-sm text-gray-400'>Email</p>
									<p className='text-[var(--primary-cyan)]'>{contactInfo.email}</p>
								</div>
							</motion.a>

							{/* Phone */}
							<motion.a
								href='https://wa.me/5491138650926'
								target='_blank'
								rel='noopener noreferrer'
								whileHover={{ scale: 1.05, x: 10 }}
								className='flex items-center gap-3 p-2 pl-4 rounded-lg hover:bg-[var(--primary-cyan)]/10 transition-colors border border-transparent hover:border-[var(--primary-cyan)]/30'
							>
								<PhoneIcon className='w-6 h-6 text-[var(--primary-cyan)]' />
								<div>
									<p className='text-sm text-gray-400'>{t.contact.phone}</p>
									<p className='text-[var(--primary-cyan)]'>{contactInfo.telefono}</p>
								</div>
							</motion.a>

							{/* Location */}
							<div className='flex items-center gap-3 pl-4'>
								<LocationIcon className='w-6 h-6 text-[var(--primary-cyan)]' />
								<p className='text-sm text-gray-400'>{t.contact.location}</p>
							</div>
						</div>
					</Card>

					{/* Social networks */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.3, duration: 0.5 }}
						className='bg-[var(--background-secondary)]/80 backdrop-blur-sm rounded-lg border border-[var(--primary-cyan)]/30 p-4 sm:p-6 hover:border-[var(--primary-cyan)] transition-all'
					>
						<h3 className='text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-3 sm:mb-4'>
							{t.contact.socialNetworks}
						</h3>

						<div className='space-y-3'>
							{contactInfo.redesSociales.map((red, index) => (
								<motion.a
									key={index}
									href={red.url}
									target='_blank'
									rel='noopener noreferrer'
									whileHover={{ scale: 1.05, x: 10 }}
									className='flex items-center gap-3 p-3 pl-6 rounded-lg hover:bg-[var(--primary-cyan)]/10 transition-colors border border-transparent hover:border-[var(--primary-cyan)]/30'
								>
									<span className='text-[var(--primary-cyan)]'>{red.icon}</span>
									<span className='text-[var(--text-primary)] font-medium'>{red.name}</span>
								</motion.a>
							))}
						</div>
					</motion.div>
				</div>

				{/* Contact form (optional) */}
				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.3, duration: 0.5 }}
					className='bg-[var(--background-secondary)]/80 backdrop-blur-sm rounded-lg border border-[var(--primary-cyan)]/30 p-4 sm:p-6 hover:border-[var(--primary-cyan)] transition-all mt-6 sm:mt-8'
				>
					<h3 className='text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-3 sm:mb-4'>
						{t.contact.form.title}
					</h3>

					<form
						onSubmit={handleSubmit}
						className='space-y-4'
					>
						{/* Name */}
						<div>
							<label htmlFor='name'>{t.contact.form.name}</label>
							<input
								type='text'
								id='name'
								value={formData.name}
								onChange={handleChange}
								required
							/>
						</div>

						{/* Email */}
						<div>
							<label htmlFor='email'>{t.contact.form.email}</label>
							<input
								type='email'
								id='email'
								value={formData.email}
								onChange={handleChange}
								required
								placeholder={t.contact.form.emailPlaceholder}
							/>
						</div>

						{/* Phone */}
						<div>
							<label htmlFor='phone'>{t.contact.form.phone}</label>
							<PhoneInput
								international
								defaultCountry='AR'
								value={phone}
								onChange={(value) => setPhone(value || '')}
								limitMaxLength={true}
								smartCaret={true}
								className='phone-input'
							/>
						</div>

						{/* Message */}
						<div>
							<label htmlFor='message'>{t.contact.form.message}</label>
							<textarea
								id='message'
								rows={4}
								value={formData.message}
								onChange={handleChange}
								required
								placeholder={t.contact.form.messagePlaceholder}
							/>
						</div>

						{/* Status messages */}
						{submitStatus === 'success' && (
							<motion.div
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								className='p-3 bg-green-100 text-green-700 rounded-lg'
							>
								{t.contact.form.success}
							</motion.div>
						)}

						{submitStatus === 'error' && (
							<motion.div
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								className='p-3 bg-red-100 text-red-700 rounded-lg'
							>
								{t.contact.form.error}
							</motion.div>
						)}

						{/* Submit button */}
						<motion.button
							type='submit'
							disabled={isSubmitting}
							whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
							whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
							className={`w-full px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium text-sm sm:text-base transition-colors ${
								isSubmitting
									? 'bg-gray-600 cursor-not-allowed'
									: 'bg-[var(--primary-cyan)] hover:bg-[#00b8d4] shadow-[0_0_20px_rgba(0,217,255,0.3)]'
							} text-[var(--background)] font-bold`}
						>
							{isSubmitting ? t.contact.form.sending : t.contact.form.send}
						</motion.button>
					</form>
				</motion.div>
			</motion.section>
		</>
	);
}
