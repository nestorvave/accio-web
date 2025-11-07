'use client';
import React from 'react';
import Button from './custom-button.component';
import { HiOutlineSparkles } from 'react-icons/hi2';

export const Header = () => {
	return (
		<section className='mb-8 mt-6 flex w-[100%] flex-col-reverse items-center justify-center md:mt-12 md:flex-row md:justify-between'>
			<section className='mt-12 flex w-full flex-col gap-8 p-6 text-center md:p-0 lg:text-left xl:w-5/12'>
				<div className='inline-flex w-fit items-center gap-2 rounded-full bg-main/10 px-4 py-2'>
					<HiOutlineSparkles className='h-4 w-4 text-main' />
					<span className='text-sm font-semibold text-main'>
						Soluciones Digitales Innovadoras
					</span>
				</div>
				<h1 className='w-full text-5xl font-bold leading-tight text-black md:text-6xl lg:text-7xl'>
					Transformamos <span className='text-main'>Ideas</span> en Código
				</h1>
				<p className='w-full text-lg text-black/70 md:max-w-xl md:text-xl'>
					Soluciones web, mobile y software a medida diseñadas para llevar tu
					negocio al siguiente nivel
				</p>
				<div className='flex w-full items-center justify-center gap-4 lg:items-start lg:justify-start'>
					<div className='w-5/12 lg:w-5/12'>
						<Button
							label='Comenzar Proyecto!'
							id='contact-btn'
							variant='main'
						/>
					</div>
					<div className='w-5/12 lg:w-4/12'>
						<Button label='Ver servicios' id='services-btn' variant='main' />
					</div>
				</div>
				<div className='border-border flex flex-wrap gap-8 border-t pt-8'>
					<div>
						<p className='text-3xl font-bold text-main'>20+</p>
						<p className='text-sm text-black/60'>Proyectos Completados</p>
					</div>
					<div>
						<p className='text-3xl font-bold text-main'>100%</p>
						<p className='text-sm text-black/60'>Satisfacción Clientes</p>
					</div>
					<div>
						<p className='text-3xl font-bold text-main'>3+</p>
						<p className='text-sm text-black/60'>Años Experiencia</p>
					</div>
				</div>
			</section>
			<section className='relative mt-12 hidden h-[480px] items-center justify-center rounded-xl bg-[#D9E6FC] md:w-5/12 lg:flex'>
				<div className='from-primary/20 to-secondary/20 absolute inset-0 rounded-3xl bg-gradient-to-br' />
				<div className='relative z-10 space-y-4 rounded-2xl bg-white/50 p-8 shadow-2xl backdrop-blur'>
					<div className='space-y-3'>
						<div className='flex gap-2'>
							<div className='h-3 w-3 rounded-full bg-red-400' />
							<div className='h-3 w-3 rounded-full bg-yellow-400' />
							<div className='h-3 w-3 rounded-full bg-green-400' />
						</div>
						<p className='font-mono text-sm text-main'>{'<Project />'}</p>
						<p className='font-mono text-sm text-black/60'>
							design = &quot;modern&quot;
						</p>
						<p className='font-mono text-sm text-black/60'>
							impact = &quot;high&quot;
						</p>
						<p className='font-mono text-sm text-main'>{'</Project>'}</p>
					</div>
				</div>

				<div className='border-border absolute -right-8 top-12 animate-bounce rounded-xl border bg-white p-4 shadow-lg'>
					<p className='text-xs font-semibold text-main'>⚡ Rápido</p>
				</div>
				<div
					className='border-border absolute -left-12 bottom-20 animate-bounce rounded-xl border bg-white p-4 shadow-lg'
					style={{ animationDelay: '0.2s' }}
				>
					<p className='text-xs font-semibold text-main'>🎯 Preciso</p>
				</div>
			</section>
		</section>
	);
};
