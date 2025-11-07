
import { ContactCard } from '@/app/components/contact-card.component';
import { Metadata } from 'next';
import { Header } from './components/header.component';
import { Services } from './components/services.component';
import { WhyUs } from './components/why-us.component';

export const metadata: Metadata = {
	title: 'Accio',
	description:
		'En Accio nos dedicamos a desarrollar soluciones tecnológicas avanzadas para empresas que buscan destacarse en el ámbito digital. Especializados en desarrollo de software, ofrecemos soluciones web y móviles personalizadas que mejoran la eficiencia operativa y la experiencia del usuario. Nuestro compromiso con la excelencia y la innovación nos posiciona como líderes en el mercado, ayudando a nuestros clientes a alcanzar sus objetivos estratégicos con soluciones tecnológicas de última generación.',
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
