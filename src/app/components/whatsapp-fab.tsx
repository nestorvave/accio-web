import { PiWhatsappLogoFill } from 'react-icons/pi';
import { whatsappUrl } from '../site';

// Botón flotante de WhatsApp: visible en todas las páginas, siempre a la vista.
export const WhatsAppFab = () => (
	<a
		href={whatsappUrl()}
		target='_blank'
		rel='noopener noreferrer'
		className='wa-fab'
		aria-label='Escríbenos por WhatsApp (se abre en una pestaña nueva)'
	>
		<span className='wa-fab__label' aria-hidden='true'>
			<b>¿Hablamos?</b>
			<small>Respondemos por WhatsApp</small>
		</span>
		<span className='wa-fab__icon' aria-hidden='true'>
			<PiWhatsappLogoFill />
		</span>
	</a>
);
