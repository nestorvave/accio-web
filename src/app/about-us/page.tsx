import Link from 'next/link';
import { pageMeta } from '../site';
import {
	PiArrowRight,
	PiCompass,
	PiHandHeart,
	PiLightbulb,
	PiUsersThree,
} from 'react-icons/pi';

export const metadata = pageMeta({
	title: 'Equipo de software e inteligencia artificial',
	description:
		'Conoce al equipo de Accio. Diseñamos software e inteligencia artificial aplicada para resolver problemas reales en empresas de todo México.',
	path: '/about-us',
	keywords: [
		'equipo de desarrollo de software',
		'empresa de inteligencia artificial aplicada',
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
		<div className='inner-page'>
			<section className='inner-hero'>
				<div className='inner-wrap'>
					<p className='eyebrow'>
						<span className='eyebrow-dot' /> Sobre Accio
					</p>
					<h1 className='inner-title'>
						Problemas reales.
						<br />
						<span className='text-blue'>Software e IA útil.</span>
					</h1>
					<p className='inner-lead'>
						Somos un equipo que combina desarrollo de software e inteligencia
						artificial para quitar fricción de procesos y resolver problemas
						reales de negocio. Trabajamos en línea con empresas de todo México.
					</p>
					<Link href='/contact' className='button-primary mt-8'>
						Conoce al equipo <PiArrowRight />
					</Link>
				</div>
				<div className='about-stamp' aria-hidden='true'>
					<span>ACCIO</span>
					<small>
						Hecho para avanzar
						<br />
						Todo México · En línea
					</small>
				</div>
			</section>
			<section className='inner-wrap py-20 sm:py-28'>
				<div className='about-story'>
					<div>
						<p className='eyebrow'>Nuestra forma de pensar</p>
						<h2 className='section-title'>
							La tecnología funciona mejor cuando{' '}
							<span className='text-blue'>
								resuelve un problema concreto.
							</span>
						</h2>
					</div>
					<div className='space-y-5 text-lg leading-8 text-muted'>
						<p>
							Empezamos cada proyecto identificando dónde se pierde tiempo,
							qué tareas se repiten y qué problemas no resuelven las
							herramientas actuales.
						</p>
						<p>
							Después diseñamos software e IA alrededor de ese reto. Cada
							entrega tiene un propósito claro y una forma de comprobar que
							mejora el trabajo.
						</p>
					</div>
				</div>
			</section>
			<section className='values-section px-5 py-20 sm:px-8 sm:py-28'>
				<div className='mx-auto max-w-page'>
					<div className='section-heading'>
						<div>
							<p className='eyebrow'>Lo que nos guía</p>
							<h2 className='section-title'>
								Un buen socio
								<br />
								<span className='text-muted'>se nota en el proceso.</span>
							</h2>
						</div>
						<p className='section-intro'>
							La calidad técnica importa. La forma en que llegamos a ella
							también.
						</p>
					</div>
					<div className='values-grid mt-14'>
						{principles.map(({ icon: Icon, title, description }, i) => (
							<article className='value-card' key={title}>
								<span className='value-index'>0{i + 1}</span>
								<span className='value-icon'>
									<Icon />
								</span>
								<h3>{title}</h3>
								<p>{description}</p>
							</article>
						))}
					</div>
				</div>
			</section>
			<section className='inner-wrap py-20 sm:py-28'>
				<div className='about-cta'>
					<div>
						<p className='eyebrow'>El siguiente paso</p>
						<h2>
							¿Qué te gustaría
							<br />
							hacer posible?
						</h2>
					</div>
					<Link href='/contact' className='button-primary'>
						Cuéntanos tu idea <PiArrowRight />
					</Link>
				</div>
			</section>
		</div>
	);
}
