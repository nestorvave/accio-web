
import { ContactCard } from '@/app/[locale]/components/contact-card.component';
import { Metadata } from 'next';
import Image from 'next/image';
import { Header } from './components/header.component';

export const metadata: Metadata = {
	title: 'Accio',
	description:
		'En Accio nos dedicamos a desarrollar soluciones tecnológicas avanzadas para empresas que buscan destacarse en el ámbito digital. Especializados en desarrollo de software, ofrecemos soluciones web y móviles personalizadas que mejoran la eficiencia operativa y la experiencia del usuario. Nuestro compromiso con la excelencia y la innovación nos posiciona como líderes en el mercado, ayudando a nuestros clientes a alcanzar sus objetivos estratégicos con soluciones tecnológicas de última generación.',
};

export default function Home() {
	return (
		<main className=''>
			<Header />
			<section className='flex w-full justify-center' id='servicios'>
				<div className='flex flex-col justify-center gap-1'>
					<h2 className='text-center text-logo'>SERVICIOS</h2>
					<h3 className='text-center text-4xl font-bold text-main'>
						Lo que podemos hacer por ti
					</h3>
					<p className='mt-3 w-full text-center text-gray-500 md:px-52'>
						Impulsamos tu éxito con soluciones de software integrales,
						diseñadas mediante un proceso transparente y efectivo. Escuchamos
						activamente tus necesidades, diseñamos estratégicamente,
						implementamos con precisión y optimizamos constantemente para
						garantizar resultados excepcionales. Esta colaboración potencia la
						eficiencia, la cobertura y el retorno de la solución que
						necesitas. En la era digital actual, no solo somos una opción,
						sino el aliado esencial para tu crecimiento y desarrollo continuo.
					</p>
				</div>
			</section>
			<section className='mt-6 flex flex-col justify-center gap-6 md:flex-row'>
				<div className='flex flex-col gap-8 rounded-2xl bg-softBlue p-6 hover:border-2 hover:border-logo md:w-4/12'>
					<Image
						src={'/web-dev.svg'}
						width={200}
						height={200}
						alt='Picture of the author'
					/>
					<h3 className='text-2xl text-main'>Desarrollo web</h3>
					<p className='text-gray-500'>
						Diseñamos y desarrollamos sitios web seguros y atractivos,
						adaptados a las necesidades específicas de tu industria desde la
						planificación hasta la implementación, aseguramos que tu sitio web
						no solo sea visualmente atractivo, sino también seguro y cumplidor
						de normativas específicas. . Potencia tu presencia online con
						nuestro servicio de desarrollo web personalizado.
					</p>
				</div>
				<div className='flex flex-col gap-8 rounded-2xl bg-softBlue p-6 hover:border-2 hover:border-logo md:w-4/12'>
					<Image
						src={'/mobile.svg'}
						width={90}
						height={30}
						alt='Picture of the author'
					/>
					<h3 className='text-2xl text-main'>Desarrollo móvil a la medida</h3>
					<p className='text-gray-500'>
						Creamos aplicaciones móviles a medida que potencian tu negocio en
						el entorno digital. Nuestro servicio de desarrollo móvil
						personalizado garantiza soluciones seguras y eficaces, adaptadas a
						las exigencias específicas de tu industria. Confía en nosotros
						para llevar tu empresa al siguiente nivel en dispositivos móviles.
					</p>
				</div>
			</section>
			<ContactCard />
		</main>
	);
}
