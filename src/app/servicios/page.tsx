import Link from 'next/link';
import {
	PiArrowRight,
	PiArrowUpRight,
	PiBrowser,
	PiChatsCircle,
	PiCheck,
	PiDeviceMobile,
	PiGearSix,
	PiPlugsConnected,
	PiSparkle,
} from 'react-icons/pi';
import { JsonLd } from '../components/json-ld';
import {
	SERVICES,
	SITE_URL,
	breadcrumbLd,
	pageMeta,
	webPageLd,
	whatsappUrl,
	type ServiceId,
} from '../site';

const TITLE = 'Servicios: software a la medida, chatbots e IA';
const DESCRIPTION =
	'Chatbots y asistentes de IA, automatización de procesos, software a la medida, sitios web, apps móviles e integraciones para empresas en México.';

export const metadata = pageMeta({
	title: TITLE,
	description: DESCRIPTION,
	path: '/servicios',
	keywords: [
		'desarrollo de software para empresas',
		'chatbot con inteligencia artificial para empresas',
		'chatbot para WhatsApp Business',
		'automatización de procesos con inteligencia artificial',
		'desarrollo web y aplicaciones móviles',
		'integración de APIs y sistemas',
	],
});

const ICONS: Record<ServiceId, React.ComponentType<{ 'aria-hidden'?: boolean }>> = {
	chatbots: PiChatsCircle,
	ai: PiSparkle,
	software: PiGearSix,
	web: PiBrowser,
	mobile: PiDeviceMobile,
	integrations: PiPlugsConnected,
};

const steps = [
	['Descubrimos', 'Entendemos el reto, el contexto y las necesidades de las personas usuarias.'],
	['Acordamos', 'Definimos prioridades, alcance y cómo mediremos el resultado.'],
	['Creamos', 'Diseñamos, construimos y revisamos avances en ciclos claros.'],
	['Mejoramos', 'Lanzamos y seguimos evolucionando el producto contigo.'],
];

const servicesLd = {
	'@context': 'https://schema.org',
	'@type': 'ItemList',
	name: 'Servicios de Accio',
	itemListElement: SERVICES.map((s, i) => ({
		'@type': 'ListItem',
		position: i + 1,
		item: {
			'@type': 'Service',
			'@id': `${SITE_URL}/servicios#${s.id}`,
			name: s.name,
			description: s.detail,
			serviceType: s.name,
			url: `${SITE_URL}/servicios#${s.id}`,
			provider: { '@id': `${SITE_URL}/#organization` },
			areaServed: { '@type': 'Country', name: 'México' },
		},
	})),
};

export default function ServicesPage() {
	return (
		<>
			<JsonLd data={webPageLd({ type: 'CollectionPage', name: TITLE, description: DESCRIPTION, path: '/servicios' })} />
			<JsonLd data={breadcrumbLd([{ name: 'Servicios', path: '/servicios' }])} />
			<JsonLd data={servicesLd} />

			<section className='page-hero'>
				<div className='page-wrap'>
					<h1 className='page-hero__title'>
						Problemas reales. <span className='accent'>Software e IA para resolverlos.</span>
					</h1>
					<p className='page-hero__lead'>
						Creamos software a la medida e incorporamos inteligencia artificial
						para reducir trabajo manual, conectar sistemas y resolver los
						problemas que frenan tu operación.
					</p>
					<nav aria-label='Servicios en esta página' className='chips'>
						{SERVICES.map(({ id, name }) => (
							<a key={id} href={`#${id}`}>
								{name}
							</a>
						))}
					</nav>
				</div>
			</section>

			<section className='page-wrap service-list' aria-label='Servicios'>
				{SERVICES.map(({ id, name, label, intro, detail, includes }, index) => {
					const Icon = ICONS[id];
					return (
						<article className='service-row' id={id} key={id} data-reveal>
							<div className='service-row__visual' aria-hidden='true'>
								<span className='service-row__num'>{String(index + 1).padStart(2, '0')}</span>
								<span className='service-row__icon'>
									<Icon />
								</span>
								<span className='service-row__label'>{label}</span>
							</div>
							<div className='service-row__copy'>
								<h2>{name}</h2>
								<p className='service-row__intro'>{intro}</p>
								<p>{detail}</p>
								<ul>
									{includes.map((item) => (
										<li key={item}>
											<PiCheck aria-hidden />
											{item}
										</li>
									))}
								</ul>
								<a
									href={whatsappUrl(`Hola Accio, me interesa el servicio de ${name.toLowerCase()}.`)}
									target='_blank'
									rel='noopener noreferrer'
									className='link-arrow'
								>
									Cotizar por WhatsApp <PiArrowUpRight aria-hidden />
								</a>
							</div>
						</article>
					);
				})}
			</section>

			<section className='section section--sunken' aria-labelledby='proceso-title'>
				<div className='page-wrap'>
					<header className='section__head'>
						<h2 id='proceso-title' className='section__title'>
							De la idea <span className='accent'>a algo real.</span>
						</h2>
						<p className='section__intro'>
							Siempre sabrás qué estamos haciendo, por qué y qué sigue. Trabajamos
							como un equipo.
						</p>
					</header>
					<ol className='steps'>
						{steps.map(([title, copy], i) => (
							<li className='steps__item' key={title} data-reveal style={{ '--i': i } as React.CSSProperties}>
								<span className='steps__num'>{String(i + 1).padStart(2, '0')}</span>
								<h3>{title}</h3>
								<p>{copy}</p>
							</li>
						))}
					</ol>
				</div>
			</section>

			<section className='section section--tight'>
				<div className='page-wrap'>
					<div className='closing'>
						<h2>
							¿No sabes qué solución <span className='accent'>te conviene?</span>
						</h2>
						<p>Cuéntanos el reto. Te ayudamos a definir un primer paso realista.</p>
						<Link href='/contact' className='btn btn--primary'>
							Agenda una conversación <PiArrowRight aria-hidden className='btn__arrow' />
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}
