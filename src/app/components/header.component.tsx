'use client';
import React from 'react';
import Button from './custom-button.component';
import { HiOutlineSparkles } from 'react-icons/hi2';
import { FaGift } from 'react-icons/fa';
import Link from 'next/link';

export const Header = () => {
	return (
		<>
			<div className='animate-fade-in mt-5'>
				<div className='to-primary/20 rounded-2xl border border-[#AD2AEE]/40 bg-gradient-to-r from-[#AD2AEE]/20 p-6 backdrop-blur-sm md:p-8'>
					<div className='flex flex-col gap-6 md:flex-row md:items-center md:justify-between'>
						<div className='flex items-start gap-4'>
							<div className='mt-1 flex-shrink-0'>
								<FaGift className='h-6 w-6 text-[#AD2AEE] md:h-7 md:w-7' />
							</div>
							<div>
								<p className='mb-2 text-xs font-bold uppercase tracking-wider text-[#AD2AEE] md:text-sm'>
									Oferta Especial de Lanzamiento
								</p>
								<p className='text-lg font-bold text-black md:text-xl'>
									Consulta Gratis + 15% en tu primer proyecto
								</p>
								<p className='mt-1 text-sm text-black/60'>
									Válido para nuevos clientes. Tiempo limitado.
								</p>
							</div>
						</div>
						<Link href='/contact' className='w-full flex-shrink-0 md:w-auto'>
							<Button
								label='Solicitar Ahora'
								id='contact-btn'
								variant='accent'
							/>
						</Link>
					</div>
				</div>
			</div>
			<section className='mb-8 mt-2 flex w-[100%] flex-col-reverse items-center justify-center md:mt-12 md:flex-row md:justify-between'>
				<section className='mt-12 flex w-full flex-col gap-6 p-4 text-center sm:p-6 md:p-0 lg:text-left xl:w-5/12'>
					{/* Badge */}
					<div className='inline-flex w-fit items-center gap-2 rounded-full bg-main/10 px-3 py-1 sm:px-4 sm:py-2'>
						<HiOutlineSparkles className='h-4 w-4 text-main' />
						<span className='text-xs font-semibold text-main sm:text-sm'>
							Soluciones Digitales Innovadoras
						</span>
					</div>

					{/* Heading */}
					<h1 className='w-full text-3xl font-bold leading-tight text-black sm:text-4xl md:text-6xl lg:text-7xl'>
						Transformamos <span className='text-main'>Ideas</span> en Código
					</h1>

					{/* Paragraph */}
					<p className='w-full text-sm text-black/70 sm:text-base md:max-w-xl md:text-xl'>
						Soluciones web, mobile y software a medida diseñadas para llevar
						tu negocio al siguiente nivel
					</p>

					{/* Buttons */}
					<div className='flex w-full flex-col items-center justify-center gap-4 sm:flex-row lg:items-start lg:justify-start'>
						<div className='w-full sm:w-5/12'>
							<Link href='/contact'>
								<Button
									label='Comenzar Proyecto!'
									id='contact-btn'
									variant='main'
								/>
							</Link>
						</div>
						<div className='w-full sm:w-5/12'>
							<Link href='/servicios'>
								<Button
									label='Ver servicios'
									id='services-btn'
									variant='main'
								/>
							</Link>
						</div>
					</div>

					{/* Stats */}
					<div className='border-border flex flex-col flex-wrap justify-center gap-6 border-t pt-6 sm:flex-row sm:gap-8 sm:pt-8 lg:justify-start'>
						<div className='text-center sm:text-left'>
							<p className='text-2xl font-bold text-main sm:text-3xl'>
								20+
							</p>
							<p className='text-xs text-black/60 sm:text-sm'>
								Proyectos Completados
							</p>
						</div>
						<div className='text-center sm:text-left'>
							<p className='text-2xl font-bold text-main sm:text-3xl'>
								100%
							</p>
							<p className='text-xs text-black/60 sm:text-sm'>
								Satisfacción Clientes
							</p>
						</div>
						<div className='text-center sm:text-left'>
							<p className='text-2xl font-bold text-main sm:text-3xl'>3+</p>
							<p className='text-xs text-black/60 sm:text-sm'>
								Años Experiencia
							</p>
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

					<div
						className='border-border animate-ease-in-out animate-duration-[30s] animate-float-slow absolute -right-8 top-12 rounded-xl border bg-white p-4 shadow-lg'
						style={{ animationDelay: '.3s' }}
					>
						<p className='text-xs font-semibold text-main'>⚡ Rápido</p>
					</div>
					<div
						className='border-border animate-ease-in-out animate-duration-[30s] animate-float-slow absolute -left-12 bottom-20 rounded-xl border bg-white p-4 shadow-lg'
						style={{ animationDelay: '.3s' }}
					>
						<p className='text-xs font-semibold text-main'>🎯 Preciso</p>
					</div>
				</section>
			</section>
		</>
	);
};
