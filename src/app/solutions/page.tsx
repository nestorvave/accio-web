import { ContactCard } from '@/app/components/contact-card.component';
import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

export const metadata: Metadata = {
	title: 'Soluciones',
	description:
		'Descubre nuestras soluciones de software personalizadas en Accio. Ofrecemos desarrollo a medida para aplicaciones web, móviles y más, adaptadas a tus necesidades empresariales.',
};

export default function Solutions() {
	const solutions = [
		{
			image: '/mvp.jpeg',
			title: 'Desarrollo de Prototipos y MVPs',
			description:
				'Creamos prototipos rápidos y Minimum Viable Products (MVPs) para validar ideas de aplicaciones con funcionalidades básicas, permitiendo pruebas y retroalimentación temprana.',
		},
		{
			image: '/software.jpg',
			title: 'Desarrollo de Software a Medida',
			description:
				'Desarrollamos soluciones de software personalizadas que se ajustan exactamente a las necesidades de tu negocio, desde aplicaciones web hasta sistemas empresariales complejos, utilizando tecnologías modernas y mejores prácticas de desarrollo.',
		},
		{
			title: 'Metodologías Ágiles',
			image: '/scrum.jpg',
			description:
				'Implementamos metodologías ágiles como Scrum para gestionar proyectos de desarrollo de software de manera flexible y eficiente, asegurando una entrega iterativa y colaborativa que maximiza el valor del producto y la satisfacción del cliente.',
		},
		{
			image: '/consulting.jpg',
			title: 'Consultoría Tecnológica',
			description:
				'Proporcionamos asesoramiento estratégico en tecnología para optimizar procesos empresariales, seleccionar tecnologías adecuadas y alinear las soluciones tecnológicas con los objetivos de tu empresa.',
		},
	];

	return (
		<>
			{' '}
			<h1 className='mt-10 text-center text-logo'>SOLUCIONES</h1>
			<section className='flex w-full'>
				<div className='mx-auto mt-6 flex flex-col gap-1 md:w-1/2'>
					<h3 className='text-center text-4xl font-bold text-main'>
						Creamos software robusto y fácil de usar
					</h3>
					<p className='mt-3 text-center font-thin text-gray-600'>
						Escuchar a nuestros clientes es nuestra mejor herramienta. Con una
						misma meta, es más fácil generar los resultados esperados.
					</p>
				</div>
			</section>
			{solutions.map(({ title, description, image }, index) => (
				<section
					key={index}
					className={`mx-auto mt-12 flex w-full flex-col justify-between border md:w-9/12 md:flex-row ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
				>
					<div className='mt-6 flex flex-col gap-1 text-center md:w-1/2 md:text-left'>
						<h3 className='text-4xl font-bold text-main'>{title}</h3>
						<p className='mt-3 font-thin text-gray-500'>{description}</p>
					</div>
					<div
						className={`mt-5 flex h-[300px] md:mt-0 md:w-1/2 ${index % 2 === 0 ? 'justify-end' : 'justify-start'} `}
					>
						<Image
							src={image ? image : '/programmer.jpeg'}
							width={450}
							height={100}
							alt='Picture of the author'
							style={{ borderRadius: '10%' }}
						/>
					</div>
				</section>
			))}
			<ContactCard />
		</>
	);
}
