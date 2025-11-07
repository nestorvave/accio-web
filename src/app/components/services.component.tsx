'use client';

import { ImMobile2 } from 'react-icons/im';
import { IoCodeOutline } from 'react-icons/io5';
import { PiLightning } from 'react-icons/pi';
import { TfiWorld } from 'react-icons/tfi';

export const Services = () => {
	const services = [
		{
			icon: TfiWorld,
			title: 'Desarrollo Web',
			description:
				'Sitios y aplicaciones web modernas, responsivas y de alto rendimiento usando tecnologías cutting-edge.',
			features: ['React', 'Next.js', 'Responsive Design', 'SEO Optimizado'],
		},
		{
			icon: ImMobile2,
			title: 'Desarrollo Mobile',
			description:
				'Aplicaciones mobile nativas y multiplataforma para iOS y Android con experiencia de usuario excepcional.',
			features: ['React Native', 'Flutter', 'Native Apps', 'Cross-platform'],
		},
		{
			icon: IoCodeOutline,
			title: 'Software a Medida',
			description:
				'Soluciones personalizadas diseñadas específicamente para resolver los desafíos únicos de tu negocio.',
			features: [
				'Arquitectura Custom',
				'Integraciones',
				'Escalabilidad',
				'Mantenimiento',
			],
		},
		{
			icon: PiLightning,
			title: 'Consultoría Tech',
			description:
				'Asesoramiento estratégico para optimizar tu infraestructura digital y acelerar tu transformación.',
			features: ['Auditorías', 'Estrategia', 'Optimización', 'Roadmap Técnico'],
		},
	];

	return (
		<section
			id='services'
			className='section-container via-primary-50/30 my-32 bg-gradient-to-b from-transparent to-transparent'
		>
			<div className='container'>
				<div className='mx-auto mb-16 max-w-2xl text-center'>
					<h2 className='mb-4 text-4xl font-bold text-black md:text-5xl'>
						Nuestros Servicios
					</h2>
					<p className='text-lg text-black/70'>
						Ofrecemos soluciones integrales de desarrollo y consultoría para
						llevar tu visión digital a la realidad
					</p>
				</div>

				<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
					{services.map((service, index) => {
						const Icon = service.icon;
						return (
							<div
								key={index}
								className='border-border hover:border-primary group rounded-xl border bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'
							>
								{/* Icon */}
								<div className='group-hover:bg-main mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-main/10 transition-colors group-hover:text-white'>
									<Icon className='text-main h-6 w-6 transition-colors group-hover:text-white' />
								</div>

								{/* Title */}
								<h3 className='mb-3 text-xl font-bold text-black'>
									{service.title}
								</h3>

								{/* Description */}
								<p className='mb-6 text-sm leading-relaxed text-black/70'>
									{service.description}
								</p>

								{/* Features */}
								<div className='space-y-2'>
									{service.features.map((feature, featureIndex) => (
										<div
											key={featureIndex}
											className='flex items-center gap-2 text-sm'
										>
											<span className='h-1.5 w-1.5 rounded-full bg-main' />
											<span className='text-black/60'>
												{feature}
											</span>
										</div>
									))}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
