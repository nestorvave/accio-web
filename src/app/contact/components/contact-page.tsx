'use client';
import React from 'react';
import { useContact } from '../hooks/useContact';
import TextInput from '@/app/components/text-input.component';
import Button from '@/app/components/custom-button.component';
import Image from 'next/image';
import Snackbar from '@/app/components/snackbar.component';
import { BiMailSend, BiMessage, BiPhone, BiPhoneCall, BiUser } from 'react-icons/bi';
import { CgLock } from 'react-icons/cg';
import { BsMailbox } from 'react-icons/bs';
import FAQ from '@/app/components/faq.component';

export const ContactPage = () => {
	const {
		post,
		onChange,
		payload,
		setPayload,
		showSnackbar,
		msgSnackbar,
		typeSnackbar,
		setShowSnackbar,
	} = useContact();

	const { name, email, description, service, phone } = payload;

	return (
		<>
			<div className='to-background fixed inset-0 -z-20 bg-gradient-to-b from-main/20' />
			<Snackbar
				show={showSnackbar}
				type={typeSnackbar}
				setShow={setShowSnackbar}
				msg={msgSnackbar}
			/>
			<section className='relative pb-12 pt-20 md:pb-20 md:pt-32'>
				<div className='container'>
					<div className='max-w-3xl'>
						<h1 className='mb-6 text-5xl font-bold leading-tight text-black md:text-6xl'>
							Contacta con <span className='gradient-text'>Nosotros</span>
						</h1>
						<p className='text-lg text-black/70 md:text-xl'>
							Estamos aquí para ayudarte a llevar tu proyecto al siguiente
							nivel. Cuéntanos sobre tu idea y transformaremos tu visión en
							realidad.
						</p>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className='section-container'>
				<div className='container'>
					<div className='grid gap-12 lg:grid-cols-3'>
						{/* Contact Information */}
						<div className='space-y-8 lg:col-span-1'>
							<div>
								<h2 className='mb-8 text-2xl font-bold text-black'>
									Información de Contacto
								</h2>
							</div>

							{/* Email */}
							<div className='flex items-start gap-4'>
								<div className='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-main/10'>
									<BiMailSend className='h-6 w-6 text-main' />
								</div>
								<div>
									<h3 className='mb-1 font-semibold text-black'>
										Correo Electrónico
									</h3>
									<a
										href='mailto:hola@codeventure.com'
										className='hover:text-main-600 text-main transition-colors'
									>
										accio.ti.solutions@gmail.com
									</a>
								</div>
							</div>

							{/* Phone */}
							<div className='flex items-start gap-4'>
								<div className='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#228EC3]/10'>
									<BiPhone className='h-6 w-6 text-[#228EC3]' />
								</div>
								<div>
									<h3 className='mb-1 font-semibold text-black'>
										Teléfono
									</h3>
									<a
										href='tel:+527773635639'
										className='text-[#228EC3] transition-colors hover:text-[#228EC3]'
									>
										+52 777 363 56 39
									</a>
								</div>
							</div>

							{/* Response Time */}
							<div className='flex items-start gap-4'>
								<div className='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#AD2BEE]/10'>
									<CgLock className='h-6 w-6 text-[#AD2BEE]' />
								</div>
								<div>
									<h3 className='mb-1 font-semibold text-black'>
										Tiempo de Respuesta
									</h3>
									<p className='text-sm text-black/70'>
										Respondemos todas las consultas dentro de 24 horas
										hábiles
									</p>
								</div>
							</div>

							{/* Why Contact Us */}
							<div className='bg-main-50 rounded-xl border border-main/20 p-6'>
								<h4 className='mb-3 font-semibold text-black'>
									¿Por qué contactarnos?
								</h4>
								<ul className='space-y-2 text-sm text-black/70'>
									<li>✓ Consulta gratuita inicial</li>
									<li>✓ Sin compromisos</li>
									<li>✓ Equipo experto a tu servicio</li>
									<li>✓ Soluciones personalizadas</li>
								</ul>
							</div>
						</div>

						{/* Contact Form */}
						<div className='lg:col-span-2'>
							<div className='border-border rounded-2xl border bg-white p-8 shadow-lg md:p-12'>
								<h2 className='mb-2 text-3xl font-bold text-black'>
									Cuéntanos sobre tu proyecto
								</h2>
								<p className='mb-8 text-black/70'>
									Completa el formulario a continuación y nos pondremos
									en contacto contigo lo antes posible.
								</p>
								<form onSubmit={post} className='space-y-6'>
									{/* Name */}
									<div>
										<label
											htmlFor='name'
											className='mb-2 block text-sm font-semibold text-black'
										>
											<div className='flex items-center gap-2'>
												<BiUser className='h-4 w-4 text-main' />
												Nombre Completo
											</div>
										</label>
										<input
											type='text'
											id='name'
											name='name'
											value={name}
											onChange={onChange}
											placeholder='Tu nombre'
											className='border-border bg-background placeholder:text-muted-black w-full rounded-lg border px-4 py-3 text-black transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-main/50'
											required
										/>
									</div>

									{/* Email */}
									<div>
										<label
											htmlFor='email'
											className='mb-2 block text-sm font-semibold text-black'
										>
											<div className='flex items-center gap-2'>
												<BsMailbox className='h-4 w-4 text-main' />
												Correo Electrónico
											</div>
										</label>
										<input
											type='email'
											id='email'
											name='email'
											value={email}
											onChange={onChange}
											placeholder='tu@email.com'
											className='border-border bg-background placeholder:text-muted-black w-full rounded-lg border px-4 py-3 text-black transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-main/50'
											required
										/>
									</div>

									{/* Phone */}
									<div>
										<label
											htmlFor='phone'
											className='mb-2 block text-sm font-semibold text-black'
										>
											<div className='flex items-center gap-2'>
												<BiPhoneCall className='h-4 w-4 text-main' />
												Teléfono
											</div>
										</label>
										<input
											type='tel'
											id='phone'
											name='phone'
											value={phone}
											onChange={onChange}
											placeholder='+34 123 456 789'
											className='border-border bg-background placeholder:text-muted-black focus:ring-primary/50 w-full rounded-lg border px-4 py-3 text-black transition-all focus:border-transparent focus:outline-none focus:ring-2'
											required
										/>
									</div>

									{/* Service Type */}
									<div>
										<label
											htmlFor='serviceType'
											className='mb-2 block text-sm font-semibold text-black'
										>
											Tipo de Servicio
										</label>
										<select
											id='serviceType'
											name='serviceType'
											value={service}
											onChange={(e) =>
												setPayload({
													...payload,
													service: e.target.value as
														| ''
														| 'web'
														| 'mobile',
												})
											}
											className='border-border bg-background focus:ring-primary/50 w-full rounded-lg border px-4 py-3 text-black transition-all focus:border-transparent focus:outline-none focus:ring-2'
										>
											<option value='web'>Desarrollo Web</option>
											<option value='mobile'>
												Desarrollo Mobile
											</option>
										</select>
									</div>

									{/* Description */}
									<div>
										<label
											htmlFor='description'
											className='mb-2 block text-sm font-semibold text-black'
										>
											<div className='flex items-center gap-2'>
												<BiMessage className='h-4 w-4 text-main' />
												Descripción de tu Proyecto
											</div>
										</label>
										<textarea
											id='description'
											name='description'
											value={description}
											onChange={onChange}
											placeholder='Cuéntanos sobre tu proyecto, ideas, y objetivos...'
											rows={5}
											className='border-border bg-background placeholder:text-muted-black w-full resize-none rounded-lg border px-4 py-3 text-black transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-main/50'
											required
										/>
									</div>

									{/* Submit Button */}
									<Button
										id='contact-form-btn'
										variant='main'
										customStyles='bg-main hover:bg-main-600 w-full rounded-lg py-3 text-lg font-semibold text-white transition-all'
										label={'Enviar Consulta'}
									></Button>

									<p className='text-muted-black text-center text-xs'>
										Responderemos a tu consulta dentro de 24 horas
									</p>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<FAQ />
		</>
	);
};
