'use client';
import React from 'react';
import Button from './custom-button.component';
import Link from 'next/link';

export const ContactCard = () => {
	return (
		<section className='px-12 md:px-32'>
			<section className='card-bg mt-10 flex flex-col items-center justify-center gap-4 rounded-3xl py-24 text-white'>
				<div className='flex w-full flex-col gap-3 text-center'>
					<h2 className='text-center text-4xl font-bold'>
						¿Listo para transformar tu idea en realidad?
					</h2>
					<p className='text-center font-thin'>
						Contacta hoy con nosotros y descrubre como podemos ayudarte a
						alcanzar tus objetivos digitales.
					</p>
				</div>
				<div className='w-3/12'>
					<Link href={'/contact'} passHref>
						<Button
							label='Solicitar Consulta Gratuita'
							id='contact-btn'
							variant='white'
						/>
					</Link>
				</div>
				<span className='text-sm font-semibold'>
					Respuestas en menos de 24 horas - Sin compromiso
				</span>
			</section>
		</section>
	);
};
