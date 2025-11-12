import { Metadata } from 'next';
import { ContactPage } from './components/contact-page';

export const metadata: Metadata = {
	title: 'Contacto - Consultoría de Software | Accio',
	description:
		'¿Tienes un proyecto en mente? Contáctanos para desarrollo web y móvil. Respuesta en 24 horas. Consulta gratuita y sin compromiso. +52 777 363 56 39',
	keywords: [
		'contacto desarrollo software',
		'consultoría software México',
		'desarrollo web contacto',
		'desarrollo móvil contacto',
		'empresa desarrollo software',
		'cotización desarrollo web',
		'presupuesto app móvil',
		'software personalizado Cuernavaca',
		'software personalizado Guadalajara',
		'software personalizado Monterrey',
	],
	openGraph: {
		title: 'Contacto - Desarrollo Web y Móvil | Accio',
		description:
			'Cuéntanos sobre tu proyecto. Consulta gratuita, respuesta en 24 horas y soluciones personalizadas para tu negocio.',
		url: 'https://accio.mx/contact',
		siteName: 'Accio',
		type: 'website',
		images: [
			{
				url: 'https://accio.mx/logo.png',
				width: 1200,
				height: 630,
				alt: 'Contacta con Accio - Desarrollo de Software',
			},
		],
		locale: 'es_MX',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Contacto - Desarrollo Web y Móvil | Accio',
		description: '¿Tienes un proyecto? Contáctanos. Respuesta en 24 horas.',
		images: ['https://accio.mx/logo.png'],
	},
	alternates: {
		canonical: 'https://accio.mx/contact',
	},
	robots: {
		index: true,
		follow: true,
	},
};
export default function Contact() {
	return (
		<>
			<ContactPage />
		</>
	);
}
