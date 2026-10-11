import { ContactPage } from './components/contact-page';
import { pageMeta } from '../site';

export const metadata = pageMeta({
	title: 'Contacto: software, chatbots e IA para empresas',
	description:
		'Cuéntanos qué proceso quieres mejorar. Creamos software a la medida, chatbots y asistentes de IA para empresas de todo México.',
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
			<ContactPage />
		</>
	);
}
