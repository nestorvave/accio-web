import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/app/components/navbar.component';
import { Footer } from '@/app/components/footer.component';
import Head from 'next/head';

const inter = Poppins({ subsets: ['latin'] , weight:["500"]});

export const metadata: Metadata = {
	title: {
		default:
			'Accio: Empresa de Software | Consultora de software | Soluciones tecnológicas',
		template: '%s | Accio',
	},
	description:
		'En Accio somos una empresa de software y consultora especializada en proyectos TI. Desarrollamos soluciones web a la medida y móviles personalizadas para mejorar la eficiencia operativa y la experiencia del usuario.',
	openGraph: {
		title: 'Accio: Empresa de Software | Consultora de software | Soluciones tecnológicas',
		description:
			'En Accio somos una empresa de software y consultora especializada en proyectos TI. Desarrollamos soluciones web a la medida y móviles personalizadas para mejorar la eficiencia operativa y la experiencia del usuario.',
		type: 'website',
		locale: 'es_ES',
		url: 'https://accio.cloud',
		siteName:
			'Accio empresa de software | Consultora de software | Soluciones tecnológicas',
	},
	icons: {
		icon: '/favicon.ico',
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
				<link rel='canonical' href='https://accio.cloud' />
			</Head>
			<body className={inter.className}>
				<Navbar />
				<main className='min-h-[60vh] px-12 md:px-32'>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
