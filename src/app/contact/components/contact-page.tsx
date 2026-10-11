'use client';

import { useContact } from '../hooks/useContact';
import Button from '@/app/components/custom-button.component';
import Snackbar from '@/app/components/snackbar.component';
import { CONTACT } from '@/app/site';
import { PiEnvelopeSimple, PiMapPin, PiPhone, PiArrowDownRight } from 'react-icons/pi';

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
	const { name, email, description, service } = payload;

	return (
		<div className='inner-page'>
			<Snackbar
				show={showSnackbar}
				type={typeSnackbar}
				setShow={setShowSnackbar}
				msg={msgSnackbar}
			/>
			<section className='inner-hero contact-hero'>
				<div className='inner-wrap'>
					<p className='eyebrow'>
						<span className='eyebrow-dot' /> Contacto
					</p>
					<h1 className='inner-title'>
						Hablemos de
						<br />
						<span className='text-blue'>lo que sigue.</span>
					</h1>
					<p className='inner-lead'>
						Cuéntanos qué proceso te quita tiempo o qué problema sigue sin
						resolver tu software actual. Lo pensamos contigo.
					</p>
				</div>
			</section>
			<section className='inner-wrap contact-layout'>
				<aside className='contact-aside'>
					<p className='eyebrow'>Estamos cerca</p>
					<h2>Cuéntanos el problema. Buscamos cómo resolverlo.</h2>
					<p>
						Puede ser una tarea repetitiva, sistemas que no se conectan o una
						idea de IA que quieres llevar a la práctica.
					</p>
					<div className='contact-links'>
						<a href={`mailto:${CONTACT.email}`}>
							<span className='contact-icon'>
								<PiEnvelopeSimple />
							</span>
							<span>
								<small>Correo electrónico</small>
								<b>{CONTACT.email}</b>
							</span>
							<PiArrowDownRight className='contact-arrow' />
						</a>
						<a href={`tel:${CONTACT.phone}`}>
							<span className='contact-icon'>
								<PiPhone />
							</span>
							<span>
								<small>Teléfono</small>
								<b>{CONTACT.phoneLabel}</b>
							</span>
							<PiArrowDownRight className='contact-arrow' />
						</a>
						<div>
							<span className='contact-icon'>
								<PiMapPin />
							</span>
							<span>
								<small>Estamos en</small>
								<b>
									{CONTACT.city}, {CONTACT.region} · Atención en línea en todo México
								</b>
							</span>
						</div>
					</div>
					<div className='contact-note'>
						<i />
						<span>Normalmente respondemos en un día hábil.</span>
					</div>
				</aside>
				<div className='contact-form-card'>
					<div className='contact-form-heading'>
						<span>Cuéntanos un poco</span>
						<h2>¿Qué tienes en mente?</h2>
						<p>Los campos con * son necesarios.</p>
					</div>
					<form onSubmit={post} className='contact-form'>
						<div className='form-row'>
							<label htmlFor='name'>
								Nombre *
								<input
									id='name'
									type='text'
									name='name'
									autoComplete='name'
									value={name}
									onChange={onChange}
									placeholder='Tu nombre'
									required
								/>
							</label>
							<label htmlFor='email'>
								Correo electrónico (opcional)
								<input
									id='email'
									type='email'
									name='email'
									autoComplete='email'
									value={email}
									onChange={onChange}
									placeholder='tu@empresa.com'
								/>
							</label>
						</div>
						<div className='form-row'>
							<label htmlFor='service'>
								¿Qué necesitas?
								<select
									id='service'
									name='service'
									value={service}
									onChange={(event) =>
										setPayload({
											...payload,
											service: event.target.value as
												| ''
												| 'web'
												| 'mobile'
												| 'software'
												| 'integration'
												| 'ai'
												| 'chatbot',
										})
									}
								>
									<option value='web'>Sitio web o plataforma</option>
									<option value='mobile'>Aplicación móvil</option>
									<option value='software'>Software a la medida</option>
									<option value='integration'>
										Integraciones y APIs
									</option>
									<option value='ai'>IA y automatización</option>
									<option value='chatbot'>Chatbot o asistente de IA</option>
								</select>
							</label>
						</div>
						<label htmlFor='description'>
							Cuéntanos sobre tu proyecto *
							<textarea
								id='description'
								name='description'
								value={description}
								onChange={onChange}
								placeholder='¿Qué tarea te quita tiempo o qué problema quieres resolver con software o IA?'
								rows={5}
								required
							/>
						</label>
						<div className='contact-submit'>
							<Button
								id='contact-form-btn'
								label='Enviar mensaje'
								isSubmit={false}
							/>
							<span>Usaremos tus datos solo para responderte.</span>
						</div>
					</form>
				</div>
			</section>
		</div>
	);
};
