import React from 'react';

import { Metadata } from 'next';
import { FiTarget } from 'react-icons/fi';
import { FaEye } from 'react-icons/fa';
import { LuLightbulb } from 'react-icons/lu'; // Lightbulb
import { LuTarget } from 'react-icons/lu'; // Target
import { LuUsers } from 'react-icons/lu'; // Users
import { LuHeart } from 'react-icons/lu'; // Heart

export const metadata: Metadata = {
	title: 'Nosotros - Quiénes Somos | Accio',
	description:
		'Conoce a Accio, empresa de desarrollo de software y consultoría tecnológica en Cuernavaca. Transformamos ideas en soluciones digitales innovadoras',
	keywords: [
		'sobre Accio',
		'empresa desarrollo software Cuernavaca',
		'consultoría tecnológica México',
		'quiénes somos Accio',
		'equipo desarrollo software',
		'empresa software Morelos',
		'consultora TI México',
		'software personalizado México',
		'software personalizado Guadalajara',
		'software personalizado Monterrey',
	],
	openGraph: {
		title: 'Sobre Accio - Desarrollo de Software en Cuernavaca',
		description:
			'Somos una empresa de desarrollo de software y consultoría tecnológica. Creamos soluciones personalizadas para impulsar tu negocio.',
		url: 'https://accio.mx/nosotros',
		siteName: 'Accio',
		type: 'website',
		images: [
			{
				url: 'https://accio.mx/logo.png',
				width: 1200,
				height: 630,
				alt: 'Equipo Accio - Desarrollo de Software',
			},
		],
		locale: 'es_MX',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Sobre Accio - Desarrollo de Software',
		description: 'Transformamos ideas en soluciones tecnológicas innovadoras',
		images: ['https://accio.mx/og-about.png'],
	},
	alternates: {
		canonical: 'https://accio.mx/nosotros',
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function AboutUs() {
	const values = [
		{
			icon: LuLightbulb,
			title: 'Innovación',
			description:
				'Nos mantenemos constantemente al día con las últimas tecnologías y tendencias para ofrecer soluciones vanguardistas.',
		},
		{
			icon: LuTarget,
			title: 'Excelencia',
			description:
				'Nos comprometemos con la calidad superior en cada aspecto de nuestro trabajo, desde el código hasta la experiencia del usuario.',
		},
		{
			icon: LuUsers,
			title: 'Colaboración',
			description:
				'Creemos en el trabajo en equipo y la comunicación abierta. Tu éxito es nuestro éxito.',
		},
		{
			icon: LuHeart,
			title: 'Pasión',
			description:
				'Amamos lo que hacemos y eso se refleja en cada proyecto que emprendemos.',
		},
	];

	return (
		<>
			<section className='relative overflow-hidden pb-12 pt-20 md:pb-20 md:pt-32'>
				{/* Gradiente azul tenue en todo el ancho */}
				<div className='absolute left-0 right-0 top-0 -z-10 h-1/2 w-screen bg-gradient-to-b from-[#3499fe]/15 via-[#3499fe]/5 to-transparent' />

				<div className='container'>
					<div className='max-w-3xl'>
						<h1 className='mb-6 text-5xl font-bold leading-tight text-black md:text-6xl'>
							Acerca de <span className='gradient-text'>Accio</span>
						</h1>
						<p className='text-lg text-black/70 md:text-xl'>
							Somos una empresa de tecnología joven, dinámica y apasionada
							por crear soluciones que transforman negocios.
						</p>
					</div>
				</div>
			</section>

			{/* Mission & Vision */}
			<section className='section-container'>
				<div className='container'>
					<div className='grid gap-12 lg:grid-cols-2'>
						{/* Mission */}
						<div className='space-y-6'>
							<div className='flex items-start gap-4'>
								<FiTarget className='mt-1 h-8 w-8 flex-shrink-0 text-main' />
								<div>
									<h2 className='mb-4 text-3xl font-bold text-black'>
										Nuestra Misión
									</h2>
									<p className='text-lg leading-relaxed text-black/70'>
										Facilitar el crecimiento y la innovación de
										empresas mediante soluciones tecnológicas
										avanzadas, creando productos digitales de
										vanguardia que optimicen procesos, mejoren la
										eficiencia operativa y potencien la competitividad
										global de nuestros clientes.
									</p>
								</div>
							</div>
						</div>

						{/* Vision */}
						<div className='space-y-6'>
							<div className='flex items-start gap-4'>
								<FaEye className='mt-1 h-8 w-8 flex-shrink-0 text-logo' />
								<div>
									<h2 className='mb-4 text-3xl font-bold text-black'>
										Nuestra Visión
									</h2>
									<p className='text-lg leading-relaxed text-black/70'>
										Ser el socio tecnológico preferido por empresas
										visionarias que buscan llevar sus productos y
										servicios al siguiente nivel mediante soluciones
										digitales que combinan creatividad, eficiencia y
										escalabilidad.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Values */}
			<section className='section-container via-main-50/30 mt-12 bg-gradient-to-b from-transparent to-transparent'>
				<div className='container'>
					<div className='mx-auto mb-16 max-w-2xl text-center'>
						<h2 className='mb-4 text-4xl font-bold text-black md:text-5xl'>
							Nuestros Valores
						</h2>
						<p className='text-lg text-black/70'>
							Estos principios guían nuestras decisiones y definen nuestra
							cultura empresarial.
						</p>
					</div>

					<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
						{values.map((value, index) => {
							const Icon = value.icon;
							return (
								<div
									key={index}
									className='border-border rounded-xl border bg-white p-8 transition-all hover:border-main hover:shadow-lg'
								>
									<div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-main/10'>
										<Icon className='h-6 w-6 text-main' />
									</div>
									<h3 className='mb-3 text-xl font-bold text-black'>
										{value.title}
									</h3>
									<p className='text-sm leading-relaxed text-black/70'>
										{value.description}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
}
