'use client';

import { useContact } from '../hooks/useContact';
import Button from '@/app/components/custom-button.component';
import Snackbar from '@/app/components/snackbar.component';
import { CONTACT, whatsappUrl } from '@/app/site';
import {
	PiArrowUpRight,
	PiEnvelopeSimple,
	PiMapPin,
	PiPhone,
	PiWhatsappLogo,
} from 'react-icons/pi';

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
		<>
			<Snackbar
				show={showSnackbar}
				type={typeSnackbar}
				setShow={setShowSnackbar}
				msg={msgSnackbar}
			/>
			<section className='page-hero page-hero--compact'>
				<div className='page-wrap'>
					<h1 className='page-hero__title'>
						Hablemos de <span className='accent'>lo que sigue.</span>
					</h1>
					<p className='page-hero__lead'>
						Cuéntanos qué proceso te quita tiempo o qué problema sigue sin
						resolver tu software actual. Lo pensamos contigo.
					</p>
				</div>
			</section>

			<section className='page-wrap contact'>
				<aside className='contact__aside'>
					<a
						href={whatsappUrl()}
						target='_blank'
						rel='noopener noreferrer'
						className='contact__wa'
					>
						<span className='contact__wa-icon'>
							<PiWhatsappLogo aria-hidden />
						</span>
						<span>
							<b>Escríbenos por WhatsApp</b>
							<small>La forma más rápida de empezar</small>
						</span>
						<PiArrowUpRight aria-hidden className='contact__arrow' />
					</a>

					<ul className='contact__links'>
						<li>
							<a href={`mailto:${CONTACT.email}`}>
								<span className='contact__icon'>
									<PiEnvelopeSimple aria-hidden />
								</span>
								<span>
									<small>Correo electrónico</small>
									<b>{CONTACT.email}</b>
								</span>
							</a>
						</li>
						<li>
							<a href={`tel:${CONTACT.phone}`}>
								<span className='contact__icon'>
									<PiPhone aria-hidden />
								</span>
								<span>
									<small>Teléfono</small>
									<b>{CONTACT.phoneLabel}</b>
								</span>
							</a>
						</li>
						<li>
							<div>
								<span className='contact__icon'>
									<PiMapPin aria-hidden />
								</span>
								<span>
									<small>Estamos en</small>
									<b>
										{CONTACT.city}, {CONTACT.region} · Atención en línea en todo
										México
									</b>
								</span>
							</div>
						</li>
					</ul>
					<p className='contact__note'>
						<i aria-hidden='true' /> Normalmente respondemos en un día hábil.
					</p>
				</aside>

				<div className='contact__card'>
					<div className='contact__card-head'>
						<h2>¿Qué tienes en mente?</h2>
						<p>Al enviar, se abre WhatsApp con tu mensaje listo.</p>
					</div>
					<form onSubmit={post} className='form'>
						<div className='form__row'>
							<label htmlFor='name'>
								Nombre
								<input
									id='name'
									type='text'
									name='name'
									autoComplete='name'
									value={name}
									onChange={onChange}
									placeholder='Tu nombre'
								/>
							</label>
							<label htmlFor='email'>
								Correo electrónico
								<input
									id='email'
									type='email'
									name='email'
									autoComplete='email'
									inputMode='email'
									value={email}
									onChange={onChange}
									placeholder='tu@empresa.com'
								/>
							</label>
						</div>
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
								<option value='chatbot'>Chatbot o asistente de IA</option>
								<option value='ai'>IA y automatización</option>
								<option value='software'>Software a la medida</option>
								<option value='web'>Sitio web o plataforma</option>
								<option value='mobile'>Aplicación móvil</option>
								<option value='integration'>Integraciones y APIs</option>
							</select>
						</label>
						<label htmlFor='description'>
							Cuéntanos sobre tu proyecto
							<textarea
								id='description'
								name='description'
								value={description}
								onChange={onChange}
								placeholder='¿Qué tarea te quita tiempo o qué problema quieres resolver con software o IA?'
								rows={5}
							/>
						</label>
						<div className='form__submit'>
							<Button id='contact-form-btn' label='Enviar por WhatsApp' isSubmit={false} />
							<span>Usaremos tus datos solo para responderte.</span>
						</div>
					</form>
				</div>
			</section>
		</>
	);
};
