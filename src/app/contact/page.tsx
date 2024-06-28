import { useContact } from './hooks/useContact';
import { Metadata } from 'next';
import { ContactPage } from './components/contact-page';

export const metadata: Metadata = {
	title: 'Contacto',
	description:
		'Contacta con tu empresa consultora de software. Descubre cómo podemos ayudarte con soluciones personalizadas para aplicaciones web, móviles y más.',
};

export default function Contact() {
	return (
		<>
			<ContactPage />
		</>
	);
}
