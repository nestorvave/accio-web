import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';

export const metadata: Metadata = {
	title: 'Carreras',
	description:
		'Explora las oportunidades laborales en Accio tu empresa y consultora de software. Somos líderes en el desarrollo de software, ofreciendo roles desafiantes para profesionales de IT y más.',
};

export default function Careers() {
	const benefits = [
		'Trabajo remoto',
		'Flexibilidad horaria',
		'Cuidado de la salud',
		'Recompensas por rendimiento',
	];

	return (
		<>
			<h1 className='mt-10 text-center text-logo'>CARRERAS</h1>
			<section className='flex w-full'>
				<div className='mx-auto mt-6 flex flex-col gap-1 md:w-1/2'>
					<h3 className='text-center text-4xl font-bold text-main'>
						Forma parte de nuestro equipo y modela el futuro con tu talento.
					</h3>
				</div>
			</section>
			<section className='mx-auto mt-12 flex w-full flex-col justify-between md:w-9/12 md:flex-row'>
				<div className='mt-6 flex flex-col gap-1 text-center md:w-1/2 md:text-left'>
					<h3 className='text-4xl font-bold text-main'>
						Beneficios de trabajar con nosotros
					</h3>
					<p className='mt-3 font-thin text-gray-500'>
						¿Tienes pasión por la tecnología y el deseo de marcar la
						diferencia? En Accio, estamos buscando personas como tú:
						apasionadas, creativas y comprometidas con la excelencia en el
						desarrollo de software. Únete a un equipo dinámico donde tus ideas
						impulsarán proyectos emocionantes y desafiantes. Juntos, podemos
						crear soluciones que transformen industrias. ¿Estás listo para dar
						el siguiente paso en tu carrera? ¡Postúlate ahora y sé parte de
						nuestro viaje hacia el futuro digital!
					</p>
					<ol className='mt-6 flex flex-col justify-center gap-4 md:justify-start'>
						{benefits.map((b) => (
							<li key={b} className='flex gap-3'>
								<IoCheckmarkCircleSharp className='text-3xl text-gray-400' />
								<span className='text-gray-500'>{b}</span>
							</li>
						))}
					</ol>
				</div>
				<div className='mt-5 flex h-[390px] justify-end md:mt-0 md:w-1/2'>
					<Image
						src={'/programmer.jpeg'}
						width={450}
						height={100}
						alt='Picture of the author'
						style={{ borderRadius: '10%' }}
					/>
				</div>
			</section>
			<h3 className='mt-12 text-center text-4xl font-bold text-main'>Vacantes</h3>
		</>
	);
}
