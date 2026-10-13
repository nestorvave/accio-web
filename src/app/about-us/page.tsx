import Link from 'next/link';
import {
	PiArrowRight,
	PiCompass,
	PiHandHeart,
	PiLightbulb,
	PiUsersThree,
} from 'react-icons/pi';
import { JsonLd } from '../components/json-ld';
import { breadcrumbLd, pageMeta, webPageLd } from '../site';

const TITLE = 'Nosotros: equipo de software e inteligencia artificial';
const DESCRIPTION =
	'Conoce a Accio: un equipo en Cuernavaca, Morelos, que diseña software e inteligencia artificial aplicada para resolver problemas reales en empresas de todo México.';

export const metadata = pageMeta({
	title: TITLE,
	description: DESCRIPTION,
	path: '/about-us',
	keywords: [
		'equipo de desarrollo de software',
		'empresa de inteligencia artificial en México',
		'desarrolladores de software en Cuernavaca',
		'Accio software e IA',
	],
});

const principles = [
	{
		icon: PiCompass,
		title: 'Claridad primero',
		description:
			'Traducimos retos complejos a decisiones y pasos que todo el equipo puede entender.',
	},
	{
		icon: PiUsersThree,
		title: 'Construimos contigo',
		description:
			'Colaboramos de cerca, compartimos avances y aprendemos de quienes conocen el negocio.',
	},
	{
		icon: PiLightbulb,
		title: 'IA con propósito',
		description:
			'Aplicamos inteligencia artificial cuando resuelve una necesidad concreta y mejora el trabajo de las personas.',
	},
	{
		icon: PiHandHeart,
		title: 'Cuidamos el detalle',
		description:
			'Desde la primera conversación hasta el soporte después del lanzamiento.',
	},
];

export default function AboutUs() {
	return (
		<>
			<JsonLd data={webPageLd({ type: 'AboutPage', name: TITLE, description: DESCRIPTION, path: '/about-us' })} />
			<JsonLd data={breadcrumbLd([{ name: 'Nosotros', path: '/about-us' }])} />

			<section className='page-hero'>
				<div className='page-wrap'>
					<h1 className='page-hero__title'>
						Problemas reales. <span className='accent'>Software e IA útil.</span>
					</h1>
					<p className='page-hero__lead'>
						Somos un equipo que combina desarrollo de software e inteligencia
						artificial para quitar fricción de procesos y resolver problemas
						reales de negocio. Estamos en Cuernavaca y trabajamos en línea con
						empresas de todo México.
					</p>
				</div>
			</section>

			<section className='section'>
				<div className='page-wrap story'>
					<h2 className='section__title'>
						La tecnología funciona mejor cuando{' '}
						<span className='accent'>resuelve un problema concreto.</span>
					</h2>
					<div className='story__text'>
						<p>
							Empezamos cada proyecto identificando dónde se pierde tiempo, qué
							tareas se repiten y qué problemas no resuelven las herramientas
							actuales.
						</p>
						<p>
							Después diseñamos software e IA alrededor de ese reto. Cada entrega
							tiene un propósito claro y una forma de comprobar que mejora el
							trabajo.
						</p>
					</div>
				</div>
			</section>

			<section className='section section--sunken' aria-labelledby='valores-title'>
				<div className='page-wrap'>
					<header className='section__head'>
						<h2 id='valores-title' className='section__title'>
							Un buen socio <span className='accent'>se nota en el proceso.</span>
						</h2>
						<p className='section__intro'>
							La calidad técnica importa. La forma en que llegamos a ella también.
						</p>
					</header>
					<ul className='values'>
						{principles.map(({ icon: Icon, title, description }, i) => (
							<li key={title} data-reveal style={{ '--i': i } as React.CSSProperties}>
								<span className='values__icon'>
									<Icon aria-hidden />
								</span>
								<h3>{title}</h3>
								<p>{description}</p>
							</li>
						))}
					</ul>
				</div>
			</section>

			<section className='section section--tight'>
				<div className='page-wrap'>
					<div className='closing'>
						<h2>
							¿Qué te gustaría <span className='accent'>hacer posible?</span>
						</h2>
						<p>Cuéntanos la idea. Te respondemos en un día hábil.</p>
						<Link href='/contact' className='btn btn--primary'>
							Cuéntanos tu idea <PiArrowRight aria-hidden className='btn__arrow' />
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}
