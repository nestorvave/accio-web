
import { Metadata } from 'next';
import { Header } from './components/header.component';
import { Services } from './components/services.component';
import { WhyUs } from './components/why-us.component';

export const metadata: Metadata = {
	title: 'Accio - Desarrollo de Software y Consultoría Tecnológica | México',
	description:
		'Empresa de desarrollo de software en México. Creamos aplicaciones web, APIs, sistemas empresariales y ofrecemos consultoría tecnológica. Soluciones a la medida para tu negocio.',
	keywords: [
		'desarrollo software México',
		'consultoría tecnológica México',
		'desarrollo aplicaciones web',
		'software a la medida',
		'empresa desarrollo software Morelos',
		'desarrollo APIs',
		'sistemas empresariales',
		'consultoría TI',
	],
	openGraph: {
		title: 'Accio - Transforma tus Ideas en Software',
		description:
			'Desarrollo de software y consultoría tecnológica en México. Aplicaciones web, APIs y sistemas personalizados para empresas.',
		url: 'https://accio.mx',
		siteName: 'Accio',
		type: 'website',
		images: [
			{
				url: 'https://accio.mx/logo.png',	
				width: 1200,
				height: 630,
				alt: 'Accio - Desarrollo de Software en México',
			},
		],
		locale: 'es_MX',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Accio - Desarrollo de Software',
		description: 'Transformamos ideas en soluciones tecnológicas innovadoras',
		images: ['https://accio.mx/logo.png'],
	},
	alternates: {
		canonical: 'https://accio.mx',
		languages: {
			'es-MX': 'https://accio.mx',
		},
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	
};
export default function Home() {

	return (
		<main className=''>
			<Header />
			<Services />
			<WhyUs />
			
		</main>
	);
}
