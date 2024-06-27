'use client';
import React from 'react';
import Button from './custom-button.component';
import Link from 'next/link';

export const ContactCard = () => {

	return (
		<section className='h- mx-auto mt-10 flex flex-col rounded-3xl bg-logo p-12 text-white md:w-3/4 md:flex-row'>
			<div className='flex w-full flex-col gap-2 md:w-2/3'>
				<p>CONTÁCTANOS</p>
				<h2 className='hidden text-4xl font-bold md:block'>
					¿Estás listo para llevar tu idea al siguiente nivel?
				</h2>
				<p className='font-thin'>
					¡Comparte tus metas con nosotros y diseñaremos un software
					personalizado que las haga realidad.!
				</p>
			</div>
			<div className='mt-6 flex h-full w-full flex-col items-center gap-2 md:mt-0 md:w-1/2 md:items-end md:justify-end'>
				<Link href={'/contact'} passHref>
					<Button
						label='Contactanos!'
						id='contact-btn'
						variant='white'
						onClick={() => {}}
					/>
				</Link>
			</div>
		</section>
	);
};
