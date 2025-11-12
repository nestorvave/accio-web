import { ContactCard } from '@/app/components/contact-card.component';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from '../components/custom-button.component';
import { BsArrowRight } from 'react-icons/bs';
import { LuGlobe, LuSmartphone, LuLightbulb, LuUsers, LuRocket } from 'react-icons/lu';
import { BiCheck } from 'react-icons/bi';
import { FiZap } from 'react-icons/fi';
export const metadata: Metadata = {
	title: 'Servicios - Desarrollo Web y Móvil | Accio',
	description:
		'Servicios de desarrollo de software en Cuernavaca México: aplicaciones web modernas, apps móviles iOS y Android, APIs y sistemas empresariales. Soluciones personalizadas para tu negocio.',
	keywords: [
		'desarrollo web Cuernavaca',
		'desarrollo aplicaciones móviles',
		'desarrollo iOS Android',
		'servicios desarrollo software',
		'aplicaciones web México',
		'desarrollo apps empresariales',
		'software personalizado Morelos',
		'software personalizado México',
		'software personalizado Guadalajara',
		'software personalizado Monterrey',
	],
	openGraph: {
		title: 'Servicios de Desarrollo Web y Móvil | Accio',
		description:
			'Desarrollo de aplicaciones web y móviles que impulsan tu negocio. Experiencia, calidad y resultados garantizados.',
		url: 'https://accio.mx/servicios',
		siteName: 'Accio',
		type: 'website',
		images: [
			{
				url: 'https://accio.mx/logo.png',
				width: 1200,
				height: 630,
				alt: 'Servicios de Desarrollo - Accio',
			},
		],
		locale: 'es_MX',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Servicios de Desarrollo Web y Móvil',
		description: 'Soluciones tecnológicas que transforman tu negocio',
		images: ['https://accio.mx/og-servicios.png'],
	},
	alternates: {
		canonical: 'https://accio.mx/servicios',
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function Solutions() {
	const serviceDetails = [
		{
			id: 'web',
			icon: LuGlobe,
			title: 'Desarrollo Web',
			shortDesc: 'Soluciones web que generan resultados',
			fullDesc:
				'Creamos aplicaciones web que no solo lucen bien, sino que funcionan de manera excepcional. Nuestro enfoque se centra en convertir visitantes en clientes, optimizando cada aspecto para el éxito de tu negocio.',
			benefits: [
				'Aumento de conversión y engagement de usuarios',
				'Carga rápida y experiencia fluida',
				'Diseño adaptable a todos los dispositivos',
				'Fácil mantenimiento y actualizaciones',
				'Posicionamiento en buscadores (SEO)',
				'Escalabilidad para crecer con tu negocio',
			],
			whyChooseUs: [
				'Enfoque personalizado para tu visión',
				'Comunicación clara y transparente',
				'Dedicación total a tu proyecto',
				'Soluciones modernas y eficientes',
			],
		},
		{
			id: 'mobile',
			icon: LuSmartphone,
			title: 'Desarrollo Mobile',
			shortDesc: 'Apps que tus usuarios amarán',
			fullDesc:
				'Desarrollamos aplicaciones móviles que se sienten naturales en el dispositivo de tu usuario. Nos enfocamos en crear experiencias intuitivas que generan lealtad y engagement real.',
			benefits: [
				'Experiencia de usuario intuitiva y atractiva',
				'Rendimiento optimizado en cualquier dispositivo',
				'Disponible en iOS y Android',
				'Actualizaciones rápidas y seguras',
				'Integración con servicios web',
				'Análisis para entender el comportamiento del usuario',
			],
			whyChooseUs: [
				'Atención a cada detalle del diseño',
				'Flexibilidad para iterar rápidamente',
				'Soporte y mantenimiento continuo',
				'Enfoque en la satisfacción del usuario',
			],
		},
	];

	const approach = [
		{
			icon: LuLightbulb,
			step: '1. Descubrimiento',
			description:
				'Entendemos profundamente tu negocio, objetivos y usuarios para crear la solución perfecta.',
		},
		{
			icon: LuUsers,
			step: '2. Colaboración',
			description:
				'Trabajamos contigo en cada etapa, asegurando que tu visión sea reflejada fielmente.',
		},
		{
			icon: LuRocket,
			step: '3. Entrega',
			description:
				'Lanzamos tu proyecto con confianza, listo para impactar a tu audiencia desde el primer día.',
		},
	];

	return (
		<>
			{/* Hero / Intro Section */}
			<section className='relative overflow-hidden pb-12 pt-20 md:pb-20 md:pt-32'>
				{/* Fondo azul difuminado suave */}
				<div className='absolute left-0 top-0 -z-10 h-[60%] w-screen bg-gradient-to-b from-[#3499fe]/15 via-[#3499fe]/5 to-transparent blur-2xl' />

				<div className='container'>
					<div className='max-w-3xl'>
						<h1 className='mb-6 text-5xl font-bold leading-tight text-black md:text-6xl'>
							Nuestros <span className='gradient-text'>Servicios</span>
						</h1>
						<p className='max-w-2xl text-lg text-black/70 md:text-xl'>
							Soluciones digitales que transforman tu visión en realidad.
							Como empresa nueva, nos comprometemos con la excelencia, la
							transparencia y la dedicación en cada proyecto.
						</p>
					</div>
				</div>
			</section>

			{/* Services Detail */}
			{serviceDetails.map((service, index) => {
				const Icon = service.icon;
				const isEven = index % 2 === 0;

				return (
					<section
						key={service.id}
						className='section-container relative mt-16 overflow-hidden last:border-b-0'
					>
						{/* Fondo sutil alternado entre secciones */}
						<div
							className={`absolute inset-0 -z-10 blur-3xl ${
								isEven
									? 'bg-gradient-to-br from-main/10 via-transparent to-transparent'
									: 'bg-gradient-to-bl from-[#3499fe]/10 via-transparent to-transparent'
							}`}
						/>

						<div className='container'>
							<div
								className={`grid items-center gap-12 lg:grid-cols-2 ${
									!isEven && 'lg:flex-row-reverse'
								}`}
							>
								{/* Content */}
								<div className={`space-y-8 ${!isEven && 'lg:order-2'}`}>
									{/* Header */}
									<div>
										<div className='mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-main/10'>
											<Icon className='h-7 w-7 text-main' />
										</div>
										<h2 className='mb-4 text-4xl font-bold text-black md:text-5xl'>
											{service.title}
										</h2>
										<p className='text-lg leading-relaxed text-black/70'>
											{service.fullDesc}
										</p>
									</div>

									{/* Benefits */}
									<div>
										<h3 className='mb-4 text-xl font-semibold text-black'>
											Beneficios:
										</h3>
										<ul className='space-y-3'>
											{service.benefits.map((benefit, idx) => (
												<li
													key={idx}
													className='flex items-start gap-3'
												>
													<BiCheck className='mt-0.5 h-5 w-5 flex-shrink-0 text-main' />
													<span className='text-black/80'>
														{benefit}
													</span>
												</li>
											))}
										</ul>
									</div>

									{/* Why Choose Us */}
									<div>
										<h3 className='mb-4 text-xl font-semibold text-black'>
											¿Por qué elegirnos?
										</h3>
										<ul className='space-y-3'>
											{service.whyChooseUs.map((reason, idx) => (
												<li
													key={idx}
													className='flex items-start gap-3'
												>
													<FiZap className='text-secondary mt-0.5 h-5 w-5 flex-shrink-0' />
													<span className='text-black/80'>
														{reason}
													</span>
												</li>
											))}
										</ul>
									</div>
								</div>

								{/* Visual */}
								<div
									className={`relative hidden h-96 md:h-[500px] lg:block ${
										!isEven && 'lg:order-1'
									}`}
								>
									<div className='to-secondary/10 absolute inset-0 rounded-3xl bg-gradient-to-br from-main/10 blur-md' />
									<div className='absolute inset-0 flex items-center justify-center p-8'>
										<div className='space-y-6 text-center'>
											<Icon className='mx-auto h-24 w-24 text-main/40' />
											<p className='text-sm leading-relaxed text-black/60'>
												{service.shortDesc}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				);
			})}

			{/* Approach Section */}
			<section className='section-container relative mt-20 overflow-hidden'>
				{/* Fondo radial azul tenue */}
				<div className='absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(52,153,254,0.12)_0%,_transparent_70%)]' />

				<div className='container'>
					<div className='mb-12 max-w-3xl'>
						<h2 className='mb-4 text-4xl font-bold text-black md:text-5xl'>
							Nuestro <span className='gradient-text'>Proceso</span>
						</h2>
						<p className='text-lg text-black/70'>
							Un enfoque probado que garantiza que tu proyecto reciba la
							atención y calidad que merece.
						</p>
					</div>

					<div className='grid gap-8 md:grid-cols-3'>
						{approach.map((item, idx) => {
							const ApproachIcon = item.icon;
							return (
								<div key={idx} className='group relative'>
									<div className='flex flex-col gap-4 rounded-xl border border-transparent bg-white/80 p-4 shadow-sm backdrop-blur-sm transition-all group-hover:border-main/40'>
										<div className='flex h-12 w-12 items-center justify-center rounded-lg bg-main/10'>
											<ApproachIcon className='h-6 w-6 text-main' />
										</div>
										<div>
											<h3 className='mb-2 text-xl font-semibold text-black'>
												{item.step}
											</h3>
											<p className='leading-relaxed text-black/70'>
												{item.description}
											</p>
										</div>
									</div>
									{idx < approach.length - 1 && (
										<div className='absolute -right-4 top-8 hidden h-0.5 w-8 bg-main/20 md:block' />
									)}
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* Why We're Different Section */}
			<section className='section-container relative mt-24 overflow-hidden'>
				{/* Degradado difuminado en fondo */}
				<div className='absolute inset-0 -z-10 bg-gradient-to-b from-main/5 via-transparent to-transparent blur-2xl' />

				<div className='container'>
					<div className='mb-12 max-w-3xl'>
						<h2 className='mb-4 text-4xl font-bold text-black md:text-5xl'>
							Por qué somos{' '}
							<span className='gradient-text'>diferentes</span>
						</h2>
						<p className='text-lg text-black/70'>
							Como empresa nueva, no solo ofrecemos tecnología, ofrecemos
							dedicación, transparencia y un compromiso genuino con tu
							éxito.
						</p>
					</div>

					<div className='grid gap-8 md:grid-cols-2'>
						{[
							{
								title: 'Enfoque personalizado',
								desc: 'No usamos plantillas o soluciones genéricas. Cada proyecto es único y recibe atención personalizada desde el inicio.',
							},
							{
								title: 'Comunicación clara',
								desc: 'Te mantenemos informado en cada paso. No hay sorpresas, solo transparencia y colaboración genuina.',
							},
							{
								title: 'Flexibilidad',
								desc: 'Tu proyecto puede cambiar y evolucionar. Nos adaptamos rápidamente para asegurar que siempre obtengamos lo que necesitas.',
							},
							{
								title: 'Soporte continuo',
								desc: 'Después del lanzamiento, estamos contigo. Mantenimiento, actualizaciones y mejoras continuas son parte del servicio.',
							},
						].map((card, idx) => (
							<div
								key={idx}
								className='border-border rounded-2xl border bg-white/80 p-8 backdrop-blur-sm transition-all hover:border-main hover:shadow-lg'
							>
								<h3 className='mb-3 text-xl font-semibold text-black'>
									{card.title}
								</h3>
								<p className='text-black/70'>{card.desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
