import Link from 'next/link';
import { pageMeta } from '../site';
import {
	PiArrowRight,
	PiBrowser,
	PiChatCircleDots,
	PiDeviceMobile,
	PiGearSix,
	PiPlugsConnected,
	PiSparkle,
} from 'react-icons/pi';

export const metadata = pageMeta({
	title: 'Servicios de software e inteligencia artificial',
	description:
		'Sistemas a la medida, automatización y chatbots con IA conectados a tu negocio para resolver procesos de atención, ventas y soporte.',
	path: '/servicios',
	keywords: [
		'desarrollo de software para empresas',
		'desarrollo web y aplicaciones',
		'automatización de procesos con inteligencia artificial',
		'chatbots para atención al cliente',
		'asistentes virtuales para empresas',
		'integración de APIs y sistemas',
	],
});

const services = [
	{
		id: 'web',
		icon: PiBrowser,
		number: '01',
		name: 'Sitios web y plataformas',
		label: 'Web · E-commerce · Portales',
		intro: 'Una presencia digital que trabaja tan bien como se ve.',
		detail: 'Diseñamos y desarrollamos sitios, tiendas y plataformas web rápidas, accesibles y fáciles de mantener. Cada pantalla ayuda a tus usuarios a encontrar lo que necesitan y avanzar.',
		includes: [
			'Diseño adaptable y accesible',
			'Rendimiento y SEO técnico',
			'Integraciones con tus herramientas',
		],
	},
	{
		id: 'mobile',
		icon: PiDeviceMobile,
		number: '02',
		name: 'Aplicaciones móviles',
		label: 'iOS · Android · Multiplataforma',
		intro: 'Experiencias útiles que tus clientes llevan consigo.',
		detail: 'Creamos aplicaciones móviles enfocadas en tareas reales: desde una primera versión para validar una idea hasta un producto conectado con tus sistemas y preparado para crecer.',
		includes: [
			'Experiencias pensadas para móvil',
			'Conexión con APIs y servicios',
			'Publicación y evolución continua',
		],
	},
	{
		id: 'software',
		icon: PiGearSix,
		number: '03',
		name: 'Software para tu operación',
		label: 'Sistemas · Automatización · Datos',
		intro: 'Menos tareas repetidas. Más tiempo para lo importante.',
		detail: 'Convertimos flujos manuales y herramientas desconectadas en sistemas que simplifican el trabajo, reducen errores y dan visibilidad a tu equipo.',
		includes: [
			'Herramientas internas a medida',
			'Automatización de procesos',
			'Paneles de operación y reportes',
		],
	},
	{
		id: 'integrations',
		icon: PiPlugsConnected,
		number: '04',
		name: 'Integraciones y APIs',
		label: 'Conectividad · Arquitectura',
		intro: 'Tus sistemas intercambian información sin fricción.',
		detail: 'Conectamos plataformas, servicios y datos para que tus herramientas trabajen como un solo ecosistema y tu equipo deje de duplicar esfuerzos.',
		includes: [
			'Integraciones con terceros',
			'APIs seguras y documentadas',
			'Arquitectura lista para escalar',
		],
	},
	{
		id: 'ai',
		icon: PiSparkle,
		number: '05',
		name: 'IA aplicada y automatización',
		label: 'Inteligencia artificial · Flujos de trabajo',
		intro: 'Menos tareas repetitivas. Más capacidad para resolver.',
		detail: 'Identificamos procesos donde la inteligencia artificial y la automatización pueden ahorrar tiempo, ordenar información o ayudar a tu equipo a responder mejor. Integramos IA dentro de productos y flujos existentes, con revisión humana donde hace falta.',
		includes: [
			'Automatización de tareas y flujos',
			'Asistentes con información de tu negocio',
			'Integración de modelos de IA en software',
		],
	},
	{
		id: 'chatbots',
		icon: PiChatCircleDots,
		number: '06',
		name: 'Chatbots y asistentes de IA',
		label: 'Atención · Ventas · Soporte',
		intro: 'Respuestas útiles, con el contexto de tu negocio.',
		detail: 'Diseñamos chatbots y asistentes conversacionales conectados a la información y los procesos de tu empresa. Pueden responder preguntas frecuentes, orientar a tus clientes, calificar prospectos o ayudar a tu equipo a encontrar información; y escalar la conversación con una persona cuando se necesita.',
		includes: [
			'Asistentes entrenados con información de tu negocio',
			'Integración con canales y sistemas existentes',
			'Derivación a una persona y mejora continua',
		],
	},
];

const steps = [
	[
		'01',
		'Descubrimos',
		'Entendemos el reto, el contexto y las necesidades de las personas usuarias.',
	],
	['02', 'Acordamos', 'Definimos prioridades, alcance y cómo mediremos el resultado.'],
	['03', 'Creamos', 'Diseñamos, construimos y revisamos avances en ciclos claros.'],
	['04', 'Mejoramos', 'Lanzamos y seguimos evolucionando el producto contigo.'],
];

export default function ServicesPage() {
	return (
		<div className='inner-page'>
			<section className='inner-hero services-hero'>
				<div className='inner-wrap'>
					<p className='eyebrow'>
						<span className='eyebrow-dot' /> Servicios
					</p>
					<h1 className='inner-title'>
						Problemas reales.
						<br />
						<span className='text-blue'>Software e IA para resolverlos.</span>
					</h1>
					<p className='inner-lead'>
						Creamos software a la medida e incorporamos inteligencia
						artificial para reducir trabajo manual, conectar sistemas y
						resolver los problemas que frenan tu operación.
					</p>
					<Link href='/contact' className='button-primary mt-8'>
						Cuéntanos qué necesitas <PiArrowRight />
					</Link>
				</div>
				<span className='services-orbit' aria-hidden='true'>
					<PiSparkle />
				</span>
			</section>
			<section className='inner-wrap service-list'>
				{services.map(
					(
						{ id, icon: Icon, number, name, label, intro, detail, includes },
						index
					) => (
						<article
							className={`service-detail ${index % 2 ? 'service-detail--reverse' : ''}`}
							id={id}
							key={id}
						>
							<div className='service-detail-visual'>
								<span className='service-detail-number'>{number}</span>
								<span className='service-detail-icon'>
									<Icon />
								</span>
								<span className='service-detail-label'>{label}</span>
							</div>
							<div className='service-detail-copy'>
								<p className='service-tag'>{label}</p>
								<h2>{name}</h2>
								<h3>{intro}</h3>
								<p>{detail}</p>
								<ul>
									{includes.map((item) => (
										<li key={item}>
											<span>✓</span>
											{item}
										</li>
									))}
								</ul>
							</div>
						</article>
					)
				)}
			</section>
			<section className='process-section px-5 py-20 sm:px-8 sm:py-28'>
				<div className='mx-auto max-w-page'>
					<div className='section-heading'>
						<div>
							<p className='eyebrow'>Un proceso claro</p>
							<h2 className='section-title'>
								De la idea
								<br />
								<span className='text-muted'>a algo real.</span>
							</h2>
						</div>
						<p className='section-intro'>
							Siempre sabrás qué estamos haciendo, por qué y qué sigue.
							Trabajamos como un equipo.
						</p>
					</div>
					<div className='process-grid mt-16'>
						{steps.map(([num, title, copy]) => (
							<article className='process-step' key={num}>
								<span className='process-number'>{num}</span>
								<div className='process-line' />
								<h3 className='mt-7 font-display text-xl font-medium'>
									{title}
								</h3>
								<p className='mt-3 leading-7 text-muted'>{copy}</p>
							</article>
						))}
					</div>
				</div>
			</section>
			<section className='inner-wrap py-20 sm:py-28'>
				<div className='about-cta'>
					<div>
						<p className='eyebrow'>Hablemos</p>
						<h2>
							¿No sabes qué solución
							<br />
							te conviene?
						</h2>
						<p className='mt-4 max-w-lg text-muted'>
							Cuéntanos el reto. Te ayudamos a definir un primer paso
							realista.
						</p>
					</div>
					<Link href='/contact' className='button-primary'>
						Agenda una conversación <PiArrowRight />
					</Link>
				</div>
			</section>
		</div>
	);
}
