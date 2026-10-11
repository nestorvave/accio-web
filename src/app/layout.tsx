import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Navbar } from '@/app/components/navbar.component';
import { Footer } from '@/app/components/footer.component';
import { IntroLoader } from '@/app/components/brand';
import { SITE_URL, SOCIAL_IMAGE } from './site';

export const viewport: Viewport = {
	themeColor: '#f5f3ee',
	colorScheme: 'light',
};

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: {
		default: 'Accio | Software e inteligencia artificial para empresas',
		template: '%s | Accio',
	},
	description:
		'Accio diseña software a la medida, automatización y soluciones con IA para resolver problemas reales en empresas de todo México.',
	applicationName: 'Accio',
	category: 'technology',
	keywords: [
		'desarrollo de software a la medida',
		'desarrollo web para empresas',
		'aplicaciones web y móviles',
		'software para empresas',
		'inteligencia artificial aplicada a negocios',
		'automatización de procesos con IA',
		'integración de sistemas y APIs',
		'chatbots con IA para empresas',
		'chatbots para atención al cliente',
		'software e inteligencia artificial en México',
	],
	authors: [{ name: 'Accio', url: SITE_URL }],
	creator: 'Accio',
	publisher: 'Accio',
	alternates: { canonical: '/' },
	openGraph: {
		title: 'Accio | Resolvemos problemas con software e IA',
		description:
			'Diseñamos software a la medida, chatbots y automatización con IA para resolver problemas reales en empresas de México.',
		url: '/',
		siteName: 'Accio',
		locale: 'es_MX',
		type: 'website',
		images: [
			{
				url: SOCIAL_IMAGE,
				width: 1200,
				height: 630,
				type: 'image/svg+xml',
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
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='es-MX' suppressHydrationWarning>
			<head>
				<script
					dangerouslySetInnerHTML={{
						__html:
							'try{var mobile=window.matchMedia(\'(max-width: 767px)\').matches;var key=mobile?\'accio-intro-seen-mobile\':\'accio-intro-seen-desktop\';if(sessionStorage.getItem(key)===\'1\'||window.matchMedia(\'(prefers-reduced-motion: reduce)\').matches){document.documentElement.dataset.intro=\'seen\'}else{sessionStorage.setItem(key,\'1\')}}catch(e){}',
					}}
				/>
			</head>
			<body>
				<IntroLoader />
				<Navbar />
				<main className='min-h-[60vh]'>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
