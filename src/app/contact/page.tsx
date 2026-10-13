import { ContactPage } from './components/contact-page';
import { JsonLd } from '../components/json-ld';
import { breadcrumbLd, pageMeta, webPageLd } from '../site';

const TITLE = 'Contacto: cotiza software, chatbots o IA para tu empresa';
const DESCRIPTION =
	'Cuéntanos qué proceso quieres mejorar. Te respondemos en un día hábil por WhatsApp o correo. Software a la medida, chatbots y automatización con IA en México.';

export const metadata = pageMeta({
	title: TITLE,
	description: DESCRIPTION,
	path: '/contact',
	keywords: [
		'contacto Accio',
		'cotizar desarrollo de software',
		'cotizar chatbot con inteligencia artificial',
		'cotizar automatización de procesos',
		'software a la medida para empresas',
	],
});

export default function Contact() {
	return (
		<>
			<JsonLd data={webPageLd({ type: 'ContactPage', name: TITLE, description: DESCRIPTION, path: '/contact' })} />
			<JsonLd data={breadcrumbLd([{ name: 'Contacto', path: '/contact' }])} />
			<ContactPage />
		</>
	);
}
