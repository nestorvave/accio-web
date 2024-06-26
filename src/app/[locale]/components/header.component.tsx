'use client';
import Image from 'next/image';
import React from 'react';


export const Header = () => {
	return (
		<section className='mb-8 mt-6 flex w-full flex-col-reverse items-center justify-center md:mt-12 md:flex-row md:justify-between'>
			<section className='mt-12 flex flex-col gap-8 p-6 md:w-1/2 md:p-0'>
				<h1 className='text-3xl font-bold text-main'>
					Transformamos desafíos en oportunidades digitales
					{/* 	{t('MainTitle')} */}
				</h1>
				<p className='text-gray-500'>
					Descubre cómo estamos preparados para impulsar tu crecimiento con
					soluciones tecnológicas innovadoras. Colabora con nosotros para crear
					productos digitales que lleven tu negocio al siguiente nivel. Estamos
					comprometidos a ayudarte a alcanzar tus metas desde el inicio. Conoce
					cómo podemos hacer una diferencia significativa para tu empresa.
				</p>
				<section>
					{/* 	<Button
						label='Contactanos!'
						id='contact-btn'
						onClick={() => {}}
						variant='main'
					/> */}
				</section>
			</section>
			<section className='flex w-full justify-center md:w-5/12 md:animate-bouncing'>
				<Image
					src={'/main-img.svg'}
					width={480}
					height={480}
					alt='Picture of the author'
				/>
			</section>
		</section>
	);
};
