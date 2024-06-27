import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/app/components/navbar.component';
import { Footer } from '@/app/components/footer.component';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: {
		default: 'Accio: Empresa de Software y Consultoría en Proyectos TI | Accio',
		template: '%s | Accio',
	},
	description:
		'En Accio somos una empresa de software y consultoría especializada en proyectos TI. Desarrollamos soluciones web a la medida y móviles personalizadas para mejorar la eficiencia operativa y la experiencia del usuario.',
	openGraph: {
		title: 'Accio: Empresa de Software y Consultoría en Proyectos TI - Desarrollo de Soluciones Avanzadas',
		description:
			'En Accio somos una empresa de software y consultoría especializada en proyectos TI. Desarrollamos soluciones web a la medida y móviles personalizadas para mejorar la eficiencia operativa y la experiencia del usuario.',
		type: 'website',
		locale: 'es_ES',
		url: 'https://accio.cloud',
		siteName: 'Accio empresa de software',
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
			<body className={inter.className}>
				<Navbar />
				<main className='min-h-[60vh] px-12 md:px-32'>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
