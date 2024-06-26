import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/app/[locale]/components/navbar.component';
import { Footer } from '@/app/[locale]/components/footer.component';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: {
		default: 'Accio',
		template: '%s | Accio',
	},
	description:
		'En Accio nos dedicamos a desarrollar soluciones tecnológicas avanzadas para empresas que buscan destacarse en el ámbito digital. Especializados en desarrollo de software, ofrecemos soluciones web y móviles personalizadas que mejoran la eficiencia operativa y la experiencia del usuario. Nuestro compromiso con la excelencia y la innovación nos posiciona como líderes en el mercado, ayudando a nuestros clientes a alcanzar sus objetivos estratégicos con soluciones tecnológicas de última generación.',
	openGraph: {
		title: 'Accio: Transforma tu Negocio con Nuestro Software a Medida y Mejora Continua de Procesos - Expertos en Innovación Tecnológica',
		description:
			'En Accio nos dedicamos a desarrollar soluciones tecnológicas avanzadas para empresas que buscan destacarse en el ámbito digital. Especializados en desarrollo de software, ofrecemos soluciones web y móviles personalizadas que mejoran la eficiencia operativa y la experiencia del usuario. Nuestro compromiso con la excelencia y la innovación nos posiciona como líderes en el mercado, ayudando a nuestros clientes a alcanzar sus objetivos estratégicos con soluciones tecnológicas de última generación.',
		type: 'website',
		locale: 'es_ES',
		url: '',
		siteName: 'Accio empresa de software',
	},
};

export default async function RootLayout({
	children,
	params: { locale },
}: Readonly<{
	children: React.ReactNode;
	params: { locale: string };
}>) {
	const messages = await getMessages();
	return (
		<html lang={locale}>
			
			<body className={inter.className}>
				<NextIntlClientProvider messages={messages}>
					<Navbar />
					<main className='min-h-[60vh] px-12 md:px-32'>{children}</main>
					<Footer />
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
