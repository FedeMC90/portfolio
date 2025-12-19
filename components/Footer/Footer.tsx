import { useTranslation } from '@/contexts/LanguageContext';

export default function Footer() {
	const { t } = useTranslation();

	return (
		<footer className='w-full bg-[var(--background)]/90 border-t border-[var(--primary-cyan)]/20 text-[var(--text-primary)] py-6 mt-auto'>
			<div className='max-w-6xl mx-auto px-4 text-center'>
				<p className='text-sm'>© 2025 FMC. {t.footer.rightsReserved}</p>
			</div>
		</footer>
	);
}
