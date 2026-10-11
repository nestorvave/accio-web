import Image from 'next/image';
import Link from 'next/link';
import {
	PiArrowDownRight,
	PiArrowRight,
	PiDeviceMobile,
	PiGlobe,
	PiLightning,
	PiSparkle,
} from 'react-icons/pi';
import { CONTACT, SITE_URL } from './site';

const services = [
	{
		number: '01',
		icon: PiGlobe,
		title: 'Sitios y plataformas',
		copy: 'Herramientas digitales que simplifican la experiencia de tus clientes y tu equipo.',
		tag: 'Web · e-commerce',
		href: '/servicios#web',
	},
	{
		number: '02',
		icon: PiDeviceMobile,
		title: 'Software a tu medida',
		copy: 'Sistemas que ordenan procesos, conectan información y eliminan trabajo repetitivo.',
		tag: 'Sistemas · APIs',
		href: '/servicios#software',
	},
	{
		number: '03',
		icon: PiSparkle,
		title: 'Chatbots y automatización con IA',
		copy: 'Asistentes conectados a tu negocio para atender consultas, calificar prospectos y agilizar tareas.',
		tag: 'Inteligencia artificial',
		href: '/servicios#chatbots',
	},
];

const process = [
	[
		'01',
		'Entendemos',
		'Escuchamos tu reto, tus objetivos y a las personas que usarán la solución.',
	],
	[
		'02',
		'Diseñamos',
		'Definimos una experiencia clara y un plan técnico con prioridades reales.',
	],
	[
		'03',
		'Construimos',
		'Desarrollamos en ciclos cortos para que puedas ver, probar y decidir.',
	],
	[
		'04',
		'Evolucionamos',
		'Lanzamos, medimos y mejoramos contigo conforme crece tu negocio.',
	],
];

const structuredData = {
	'@context': 'https://schema.org',
	'@type': 'ITService',
	name: 'Accio',
	url: SITE_URL,
	logo: `${SITE_URL}/brand/accio-logo.svg`,
	description:
		'Software e inteligencia artificial para resolver problemas reales de empresas en México.',
	serviceType: [
		'Desarrollo de software a la medida',
		'Inteligencia artificial aplicada',
		'Automatización de procesos',
		'Desarrollo web',
		'Chatbots y asistentes de inteligencia artificial',
	],
	knowsAbout: [
		'software empresarial',
		'inteligencia artificial aplicada',
		'automatización de procesos',
		'asistentes conversacionales para empresas',
		'integración de sistemas',
	],
	areaServed: { '@type': 'Country', name: 'México' },
	address: {
		'@type': 'PostalAddress',
		addressLocality: CONTACT.city,
		addressRegion: CONTACT.region,
		addressCountry: 'MX',
	},
	telephone: CONTACT.phone,
	email: CONTACT.email,
	sameAs: [CONTACT.instagram, CONTACT.linkedin],
};

export default function Home() {
	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
				}}
			/>
			<section className='hero-shell relative overflow-hidden px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:pb-28 lg:pt-28'>
				<div
					className='hero-grid pointer-events-none absolute inset-0'
					aria-hidden='true'
				/>
				<div className='mx-auto grid max-w-page items-center gap-14 lg:grid-cols-[1.08fr_.92fr] lg:gap-16'>
					<div className='relative z-10'>
						<p className='eyebrow'>
							<span className='eyebrow-dot' /> Software + inteligencia
							artificial
						</p>
						<h1 className='mt-7 max-w-3xl text-balance font-display text-[clamp(2.6rem,8vw,7.5rem)] font-medium leading-[.92] tracking-[-.075em]'>
							Resolvemos problemas.
							<br />
							<span className='text-blue'>Con software e IA.</span>
						</h1>
						<p className='mt-7 max-w-xl text-pretty text-lg leading-8 text-muted sm:text-xl'>
							Convertimos procesos lentos y tareas repetitivas en soluciones
							con software e inteligencia artificial, hechas para la forma
							en que trabaja tu negocio.
						</p>
						<div className='mt-9 flex flex-wrap items-center gap-4'>
							<Link href='/contact' className='button-primary'>
								Hablemos de tu proyecto{' '}
								<PiArrowRight aria-hidden='true' />
							</Link>
							<Link href='/servicios' className='button-quiet'>
								Explora nuestros servicios{' '}
								<PiArrowDownRight aria-hidden='true' />
							</Link>
						</div>
						<div className='mt-12 flex items-center gap-3 text-sm text-muted'>
							<span className='flex -space-x-2' aria-hidden='true'>
								<i className='avatar-dot'>A</i>
								<i className='avatar-dot avatar-dot--blue'>+</i>
							</span>
							<span>Un equipo cercano, de la idea al lanzamiento.</span>
						</div>
					</div>
					<div
						className='hero-art relative mx-auto w-full max-w-[570px]'
						aria-label='Composición visual de productos digitales de Accio'
						role='img'
					>
						<div className='art-orbit art-orbit--one' />
						<div className='art-orbit art-orbit--two' />
						<div className='art-card art-card--back'>
							<div className='art-card-top'>
								<span className='art-dot' />
								<span className='art-dot' />
								<span className='art-dot' />
							</div>
							<div className='art-skeleton art-skeleton--wide' />
							<div className='art-skeleton-row'>
								<i />
								<i />
								<i />
							</div>
							<div className='art-skeleton art-skeleton--short' />
							<div className='art-skeleton art-skeleton--wide muted-bar' />
						</div>
						<div className='art-card art-card--front'>
							<div className='art-card-top'>
								<span className='font-display text-sm font-semibold tracking-tight'>
									Operación inteligente
								</span>
								<span className='live-pill'>
									<i /> En vivo
								</span>
							</div>
							<div className='art-chart'>
								<div className='chart-label'>
									<span>Flujos automatizados</span>
									<b>Software + IA</b>
								</div>
								<div className='chart-bars'>
									{[
										35, 48, 42, 63, 52, 76, 68, 93, 78, 100, 85, 116,
									].map((height, i) => (
										<i
											key={i}
											style={
												{
													height: `${height}px`,
													'--bar-i': i,
												} as React.CSSProperties
											}
										/>
									))}
								</div>
								<div className='chart-axis'>
									<span>ENE</span>
									<span>MAR</span>
									<span>MAY</span>
									<span>JUL</span>
								</div>
							</div>
							<div className='art-card-bottom'>
								<span className='metric-icon'>
									<PiLightning />
								</span>
								<span>
									<b>Menos trabajo manual</b>
									<small>Más tiempo para resolver</small>
								</span>
								<PiArrowRight className='ml-auto text-muted' />
							</div>
						</div>
						<div className='art-badge'>
							<span className='badge-spark'>
								<PiSparkle />
							</span>
							<span>
								<b>IA con propósito.</b>
								<small>Aplicada a tu operación.</small>
							</span>
						</div>
					</div>
				</div>
				<div className='mx-auto mt-16 flex max-w-page flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-line/80 pt-5 text-xs uppercase tracking-[.15em] text-muted sm:mt-24'>
					<span>Software e IA para problemas reales</span>
					<span>Todo México · Atención en línea</span>
				</div>
			</section>

			<section className='px-5 py-16 sm:px-8 sm:py-24 lg:py-32' id='servicios'>
				<div className='mx-auto max-w-page'>
					<div className='section-heading'>
						<div>
							<p className='eyebrow'>Lo que hacemos</p>
							<h2 className='section-title'>
								Soluciones útiles.
								<br />
								<span className='text-muted'>Sin complicarlo.</span>
							</h2>
						</div>
						<p className='section-intro'>
							Creamos herramientas digitales e incorporamos IA donde puede
							quitar fricción, reducir tareas manuales o mejorar decisiones.
						</p>
					</div>
					<div className='service-grid mt-14'>
						{services.map(
							({ number, icon: Icon, title, copy, tag, href }) => (
								<Link
									href={href}
									key={number}
									className='service-card group'
								>
									<div className='flex items-start justify-between'>
										<span className='service-number'>{number}</span>
										<span className='service-icon'>
											<Icon />
										</span>
									</div>
									<div className='mt-14'>
										<span className='service-tag'>{tag}</span>
										<h3 className='mt-3 font-display text-2xl font-medium tracking-tight'>
											{title}
										</h3>
										<p className='mt-3 max-w-sm leading-7 text-muted'>
											{copy}
										</p>
									</div>
									<span className='service-link'>
										<span>Conoce más</span>
										<PiArrowRight className='transition-transform group-hover:translate-x-1' />
									</span>
								</Link>
							)
						)}
					</div>
				</div>
			</section>

			<section className='process-section px-5 py-16 sm:px-8 sm:py-24 lg:py-32'>
				<div className='mx-auto max-w-page'>
					<div className='section-heading'>
						<div>
							<p className='eyebrow'>
								<span className='eyebrow-dot' /> Así trabajamos
							</p>
							<h2 className='section-title'>
								Avanzamos contigo,
								<br />
								<span className='text-blue'>paso a paso.</span>
							</h2>
						</div>
						<p className='section-intro'>
							Las mejores soluciones nacen de la colaboración. Un proceso
							transparente, con avances que puedes ver y decisiones que
							tomamos juntos.
						</p>
					</div>
					<div className='process-grid mt-16'>
						{process.map(([num, title, text]) => (
							<article className='process-step' key={num}>
								<span className='process-number'>{num}</span>
								<div className='process-line' />
								<h3 className='mt-7 font-display text-xl font-medium'>
									{title}
								</h3>
								<p className='mt-3 leading-7 text-muted'>{text}</p>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className='px-5 py-16 sm:px-8 sm:py-24 lg:py-32'>
				<div className='cta-panel mx-auto max-w-page overflow-hidden rounded-card px-7 py-12 sm:px-12 sm:py-16 lg:px-20'>
					<div className='cta-glow' />
					<div className='relative z-10 max-w-3xl'>
						<p className='eyebrow eyebrow--light'>
							¿Tienes una idea en mente?
						</p>
						<h2 className='mt-5 font-display text-4xl font-medium leading-tight tracking-[-.05em] text-hueso sm:text-6xl'>
							Hagamos algo que
							<br className='hidden sm:block' /> valga la pena.
						</h2>
						<p className='mt-5 max-w-xl text-lg leading-8 text-hueso/70'>
							Cuéntanos qué quieres resolver. Encontramos juntos el mejor
							siguiente paso.
						</p>
						<Link href='/contact' className='button-light mt-8'>
							Empezar una conversación <PiArrowRight />
						</Link>
					</div>
					<Image
						src='/brand/accio-logo-hueso.svg'
						alt='Accio'
						width={280}
						height={94}
						className='absolute bottom-7 right-7 hidden w-36 opacity-20 sm:block lg:bottom-10 lg:right-12 lg:w-48'
					/>
				</div>
			</section>
		</>
	);
}
