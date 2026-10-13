import type { Metadata, Viewport } from 'next';
import { Bricolage_Grotesque, Instrument_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/app/components/navbar.component';
import { Footer } from '@/app/components/footer.component';
import { IntroLoader } from '@/app/components/brand';
import { WhatsAppFab } from '@/app/components/whatsapp-fab';
import { RevealObserver } from '@/app/components/reveal';
import { JsonLd } from '@/app/components/json-ld';
import { CONTACT, SITE_NAME, SITE_URL, SOCIAL_IMAGE, siteGraph } from './site';

const display = Bricolage_Grotesque({
	subsets: ['latin'],
	variable: '--font-display',
	display: 'swap',
	axes: ['opsz', 'wdth'],
});
const sans = Instrument_Sans({
	subsets: ['latin'],
	variable: '--font-sans',
	display: 'swap',
});

export const viewport: Viewport = {
	themeColor: '#f5f3ee',
	colorScheme: 'light',
	width: 'device-width',
	initialScale: 1,
	viewportFit: 'cover',
};

const DESCRIPTION =
	'Desarrollo de software a la medida, chatbots y automatización con inteligencia artificial para empresas en México. Equipo en Cuernavaca, Morelos, con atención en línea.';

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: {
		default: 'Accio | Software a la medida, chatbots e IA para empresas en México',
		template: '%s | Accio',
	},
	description: DESCRIPTION,
	applicationName: SITE_NAME,
	category: 'technology',
	keywords: [
		'desarrollo de software a la medida',
		'empresa de desarrollo de software en México',
		'desarrollo de software en Cuernavaca',
		'chatbots con inteligencia artificial',
		'chatbot para WhatsApp',
		'automatización de procesos con IA',
		'inteligencia artificial para empresas',
		'desarrollo web para empresas',
		'aplicaciones web y móviles',
		'integración de sistemas y APIs',
	],
	authors: [{ name: SITE_NAME, url: SITE_URL }],
	creator: SITE_NAME,
	publisher: SITE_NAME,
	alternates: { canonical: '/', languages: { 'es-MX': '/' } },
	formatDetection: { telephone: false, email: false, address: false },
	openGraph: {
		title: 'Accio | Resolvemos problemas con software e IA',
		description:
			'Software a la medida, chatbots y automatización con IA para empresas de México.',
		url: '/',
		siteName: SITE_NAME,
		locale: 'es_MX',
		type: 'website',
		images: [
			{
				url: SOCIAL_IMAGE,
				width: 1200,
				height: 630,
				type: 'image/png',
				alt: 'Accio: software a la medida e inteligencia artificial aplicada',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Accio | Resolvemos problemas con software e IA',
		description:
			'Software a la medida, chatbots y automatización con IA para empresas de México.',
		images: [SOCIAL_IMAGE],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-image-preview': 'large',
			'max-snippet': -1,
			'max-video-preview': -1,
		},
	},
	other: {
		'geo.region': CONTACT.regionCode,
		'geo.placename': CONTACT.city,
	},
};

// Antes del primer pintado: marca JS y decide si se ve la intro.
const bootScript =
	'try{var d=document.documentElement;d.classList.add("js");var m=window.matchMedia("(max-width: 767px)").matches;var k=m?"accio-intro-seen-mobile":"accio-intro-seen-desktop";if(sessionStorage.getItem(k)==="1"||window.matchMedia("(prefers-reduced-motion: reduce)").matches){d.dataset.intro="seen"}else{sessionStorage.setItem(k,"1")}}catch(e){}';

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html
			lang='es-MX'
			className={`${display.variable} ${sans.variable}`}
			suppressHydrationWarning
		>
			<head>
				<script dangerouslySetInnerHTML={{ __html: bootScript }} />
				<JsonLd data={siteGraph} />
			</head>
			<body>
				<a href='#contenido' className='skip-link'>
					Saltar al contenido
				</a>
				<IntroLoader />
				<Navbar />
				<main id='contenido' tabIndex={-1}>
					{children}
				</main>
				<Footer />
				<WhatsAppFab />
				<RevealObserver />
			</body>
		</html>
	);
}
