'use client';
import React from 'react';
import Button from './custom-button.component';
import Link from 'next/link';

export const ContactCard = () => {
	return (
		<section className='px-4 sm:px-8 md:px-32'>
			<section className='card-bg mt-10 flex flex-col items-center justify-center gap-6 rounded-3xl bg-gradient-to-r from-[#0080FF] to-[#228EC3] px-4 py-16 text-white shadow-lg sm:py-20 md:py-24'>
				<div className='flex w-full flex-col gap-4 text-center'>
					<h2 className='text-2xl font-bold sm:text-3xl md:text-4xl'>
						¿Listo para transformar tu idea en realidad?
					</h2>
					<p className='text-sm font-thin sm:text-base md:text-lg'>
						Contacta hoy con nosotros y descubre cómo podemos ayudarte a
						alcanzar tus objetivos digitales.
					</p>
				</div>
				<div className='w-full sm:w-6/12 lg:w-5/12 xl:w-4/12'>
					<Link href={'/contact'} passHref>
						<Button
							label='Solicitar Consulta Gratuita'
							id='contact-btn'
							variant='white'
						/>
					</Link>
				</div>
				<span className='text-xs font-semibold sm:text-sm'>
					Respuestas en menos de 24 horas - Sin compromiso
				</span>
			</section>
		</section>
	);
};
