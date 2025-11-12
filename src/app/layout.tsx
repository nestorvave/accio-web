import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/app/components/navbar.component';
import { Footer } from '@/app/components/footer.component';
import Head from 'next/head';
import { ContactCard } from './components/contact-card.component';

const inter = Poppins({ subsets: ['latin'], weight: ['500'] });

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

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang={'es'}>
			<Head>
				<link rel='canonical' href='https://accio.mx' key='canonical' />
			</Head>
			<body className={inter.className}>
				<Navbar />
				<main className='min-h-[60vh] px-12 md:px-32'>{children}</main>
				<ContactCard />
				<Footer />
			</body>
		</html>
	);
}
