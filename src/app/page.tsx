import Link from 'next/link';
import {
	PiArrowRight,
	PiArrowUpRight,
	PiBrowser,
	PiChatsCircle,
	PiCheck,
	PiDeviceMobile,
	PiFlowArrow,
	PiGearSix,
	PiPlugsConnected,
	PiSparkle,
	PiWhatsappLogo,
} from 'react-icons/pi';
import { JsonLd } from './components/json-ld';
import { UseCases } from './components/use-cases';
import { Faq } from './components/faq';
import { SERVICES, faqLd, webPageLd, whatsappUrl, type ServiceId } from './site';

const SERVICE_ICONS: Record<ServiceId, React.ComponentType<{ 'aria-hidden'?: boolean }>> = {
	chatbots: PiChatsCircle,
	ai: PiSparkle,
	software: PiGearSix,
	web: PiBrowser,
	mobile: PiDeviceMobile,
	integrations: PiPlugsConnected,
};

const process = [
	['Entendemos', 'Escuchamos tu reto, tus objetivos y a las personas que usarán la solución.'],
	['Diseñamos', 'Definimos una experiencia clara y un plan técnico con prioridades reales.'],
	['Construimos', 'Desarrollamos en ciclos cortos para que puedas ver, probar y decidir.'],
	['Evolucionamos', 'Lanzamos, medimos y mejoramos contigo conforme crece tu negocio.'],
];

const flow = ['Mensaje recibido', 'Cita en tu agenda', 'Aviso a tu equipo'];

export default function Home() {
	return (
		<>
			<JsonLd
				data={webPageLd({
					name: 'Accio | Software a la medida, chatbots e IA para empresas en México',
					description:
						'Desarrollo de software a la medida, chatbots y automatización con inteligencia artificial para empresas en México.',
					path: '/',
				})}
			/>
			<JsonLd data={faqLd} />

			{/* ---------- Hero ---------- */}
			<section className='hero' aria-labelledby='hero-title'>
				<div className='hero__backdrop' aria-hidden='true' />
				<div className='page-wrap hero__inner'>
					<div className='hero__copy'>
						<h1 id='hero-title' className='hero__title'>
							<span className='rise'>
								<span style={{ '--i': 0 } as React.CSSProperties}>Resolvemos problemas</span>
							</span>{' '}
							<span className='rise'>
								<span className='accent' style={{ '--i': 1 } as React.CSSProperties}>
									con software e IA.
								</span>
							</span>
						</h1>
						<div className='hero__body fade-in' style={{ '--i': 3 } as React.CSSProperties}>
							<p className='hero__lead'>
								Convertimos procesos lentos y tareas repetitivas en software a la
								medida, chatbots y automatización con inteligencia artificial,
								hechos para la forma en que trabaja tu negocio.
							</p>
							<div className='hero__actions'>
								<Link href='/contact' className='btn btn--primary'>
									Hablemos de tu proyecto <PiArrowRight aria-hidden className='btn__arrow' />
								</Link>
								<a
									href={whatsappUrl()}
									target='_blank'
									rel='noopener noreferrer'
									className='btn btn--ghost'
								>
									<PiWhatsappLogo aria-hidden /> Escríbenos por WhatsApp
								</a>
							</div>
						</div>
					</div>

					<figure className='hero__art'>
						<figcaption className='sr-only'>
							Ejemplo: un asistente de IA agenda una cita por chat y actualiza los
							sistemas del negocio automáticamente.
						</figcaption>
						<div className='chat' aria-hidden='true'>
							<div className='chat__head'>
								<span className='chat__avatar'>
									<PiSparkle />
								</span>
								<span>
									<b>Asistente de tu negocio</b>
									<small>
										<i /> En línea
									</small>
								</span>
							</div>
							<div className='chat__body'>
								<p className='bubble bubble--in' style={{ '--s': 0 } as React.CSSProperties}>
									Hola, ¿tienen espacio el jueves para una consulta?
								</p>
								<p className='bubble bubble--out' style={{ '--s': 1 } as React.CSSProperties}>
									Sí. Tengo 10:30 y 16:00. ¿Cuál te acomoda?
								</p>
								<p className='bubble bubble--in' style={{ '--s': 2 } as React.CSSProperties}>
									16:00, por favor.
								</p>
								<p className='bubble bubble--out' style={{ '--s': 3 } as React.CSSProperties}>
									Listo, quedó el jueves a las 16:00. Te mando un recordatorio un
									día antes.
								</p>
							</div>
						</div>
						<div className='flow-card' aria-hidden='true'>
							<p className='flow-card__title'>
								<PiFlowArrow /> Automatización
							</p>
							<ol>
								{flow.map((step, i) => (
									<li key={step} style={{ '--s': i } as React.CSSProperties}>
										<span className='flow-card__check'>
											<PiCheck />
										</span>
										{step}
									</li>
								))}
							</ol>
						</div>
					</figure>
				</div>

				<ul className='page-wrap hero__facts fade-in' style={{ '--i': 5 } as React.CSSProperties}>
					<li>Cuernavaca, Morelos · Atención en todo México</li>
					<li>Respuesta en un día hábil</li>
					<li>De la idea al lanzamiento</li>
				</ul>
			</section>

			{/* ---------- Servicios ---------- */}
			<section className='section' aria-labelledby='servicios-title'>
				<div className='page-wrap'>
					<header className='section__head'>
						<h2 id='servicios-title' className='section__title'>
							Soluciones útiles. <span className='accent'>Sin complicarlo.</span>
						</h2>
						<p className='section__intro'>
							Creamos herramientas digitales e incorporamos IA donde puede quitar
							fricción, reducir tareas manuales o mejorar decisiones.
						</p>
					</header>

					<ul className='bento'>
						{SERVICES.map(({ id, name, short, includes }, i) => {
							const Icon = SERVICE_ICONS[id];
							return (
								<li
									key={id}
									className={`bento__item bento__item--${id}`}
									data-reveal
									style={{ '--i': i } as React.CSSProperties}
								>
									<Link href={`/servicios#${id}`} className='tile'>
										<span className='tile__icon'>
											<Icon aria-hidden />
										</span>
										<div className='tile__body'>
											<h3 className='tile__title'>{name}</h3>
											<p className='tile__copy'>{short}</p>
											{id === 'chatbots' && (
												<ul className='tile__list'>
													{includes.map((item) => (
														<li key={item}>
															<PiCheck aria-hidden /> {item}
														</li>
													))}
												</ul>
											)}
										</div>
										<span className='tile__more'>
											Conoce más <PiArrowUpRight aria-hidden />
										</span>
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</section>

			{/* ---------- Casos por industria ---------- */}
			<section className='section section--sunken' aria-labelledby='casos-title'>
				<div className='page-wrap'>
					<header className='section__head'>
						<h2 id='casos-title' className='section__title'>
							Lo que resolvemos <span className='accent'>en tu industria.</span>
						</h2>
						<p className='section__intro'>
							Ejemplos de problemas comunes y cómo los resolvemos con software e
							IA. Cada proyecto se adapta a tu operación.
						</p>
					</header>
					<UseCases />
				</div>
			</section>

			{/* ---------- Proceso ---------- */}
			<section className='section' aria-labelledby='proceso-title'>
				<div className='page-wrap'>
					<header className='section__head'>
						<h2 id='proceso-title' className='section__title'>
							Avanzamos contigo, <span className='accent'>paso a paso.</span>
						</h2>
						<p className='section__intro'>
							Un proceso transparente, con avances que puedes ver y decisiones que
							tomamos juntos.
						</p>
					</header>
					<ol className='steps'>
						{process.map(([title, text], i) => (
							<li className='steps__item' key={title} data-reveal style={{ '--i': i } as React.CSSProperties}>
								<span className='steps__num'>{String(i + 1).padStart(2, '0')}</span>
								<h3>{title}</h3>
								<p>{text}</p>
							</li>
						))}
					</ol>
				</div>
			</section>

			{/* ---------- FAQ ---------- */}
			<section className='section section--sunken' aria-labelledby='faq-title'>
				<div className='page-wrap faq-layout'>
					<header className='faq-layout__head'>
						<h2 id='faq-title' className='section__title'>
							Preguntas <span className='accent'>frecuentes.</span>
						</h2>
						<p className='section__intro'>
							¿No encuentras tu respuesta? Escríbenos y te contestamos en un día
							hábil.
						</p>
						<a
							href={whatsappUrl('Hola Accio, tengo una pregunta.')}
							target='_blank'
							rel='noopener noreferrer'
							className='link-arrow'
						>
							Preguntar por WhatsApp <PiArrowUpRight aria-hidden />
						</a>
					</header>
					<Faq />
				</div>
			</section>

			{/* ---------- CTA ---------- */}
			<section className='section section--tight' aria-labelledby='cta-title'>
				<div className='page-wrap'>
					<div className='cta'>
						<div className='cta__glow' aria-hidden='true' />
						<h2 id='cta-title' className='cta__title'>
							Hagamos algo que <span className='accent'>valga la pena.</span>
						</h2>
						<p className='cta__lead'>
							Cuéntanos qué quieres resolver. Encontramos juntos el mejor siguiente
							paso, sin compromiso.
						</p>
						<div className='cta__actions'>
							<a
								href={whatsappUrl()}
								target='_blank'
								rel='noopener noreferrer'
								className='btn btn--light'
							>
								<PiWhatsappLogo aria-hidden /> Escríbenos por WhatsApp
							</a>
							<Link href='/contact' className='btn btn--outline-light'>
								Enviar los detalles <PiArrowRight aria-hidden className='btn__arrow' />
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
