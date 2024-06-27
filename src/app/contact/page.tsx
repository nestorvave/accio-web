'use client';
import TextInput from '@/app/components/text-input.component';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import Button from '../components/custom-button.component';
import axios from 'axios';

interface IPayloadContact {
	name: string;
	email: string;
	description: string;
	phone: string;
	service: 'web' | 'mobile' | '';
}

export default function Contact() {
	const [payload, setPayload] = useState<IPayloadContact>({
		name: '',
		email: '',
		description: '',
		service: '',
		phone: '',
	});

	const { name, email, description, service, phone } = payload;

	const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		if (e.target.name === 'phone' && isNaN(Number(e.target.value))) {
			return;
		}
		setPayload({ ...payload, [e.target.name]: e.target.value });
	};

	const post = async () => {
		try {
			await axios.post(`${process.env.BASE_API_URL}/api/prospects`, payload);
		} catch (error) {
			alert(error);
		}
	};

	return (
		<>
			<h2 className='mt-10 text-center text-logo'>CONTÁCTANOS</h2>
			<section className='flex w-full flex-col md:flex-row'>
				<div className='order-2 mt-6 flex flex-col gap-1 md:w-1/2'>
					<h3 className='text-center text-4xl font-bold text-main'>
						Explícanos tu visión tecnológica.
					</h3>
					<p className='mt-3 text-center font-thin text-gray-500'>
						Queremos escuchar sobre tus objetivos para tu presencia digital.
						Completa el formulario y nos comunicaremos contigo para discutir
						cómo podemos hacer realidad tu visión digital.
					</p>
					<div className='flex flex-col gap-4'>
						<TextInput
							value={name}
							isRequired
							id='name'
							label='Nombre'
							name='name'
							type='text'
							onChange={(e) => onChange(e)}
							placeholder='Ingresa tu contacto o nombre de empresa'
						/>
						<TextInput
							value={email}
							isRequired
							id='email'
							label='Correo'
							name='email'
							type='text'
							onChange={(e) => onChange(e)}
							placeholder='Ingresa tu email'
						/>
						<TextInput
							value={phone}
							isRequired
							id='phone'
							label='Télefono'
							name='phone'
							type='text'
							onChange={(e) => onChange(e)}
							placeholder='Ingresa tu teléfono'
						/>
						<TextInput
							value={description}
							isRequired
							id='description'
							label='Descripción'
							name='description'
							type='text'
							onChange={(e) => onChange(e)}
							placeholder='Ingresa una breve descripción...'
						/>
						<Button
							label='Enviar'
							id='send-btn'
							onClick={post}
							variant='main'
						/>
					</div>
				</div>
				<div className='order-1 mt-6 flex flex-col gap-1 md:order-2 md:w-1/2'>
					<h3 className='text-center text-4xl font-bold text-main'>
						Escoge tu servicio.
					</h3>
					<section className='mt-6 flex flex-col justify-center gap-2 md:flex-row'>
						<div
							onClick={() => setPayload({ ...payload, service: 'web' })}
							className={`${service === 'web' && 'border-2 border-blue-600'} flex cursor-pointer flex-col items-center gap-8 rounded-2xl bg-softBlue p-6 py-16 hover:border-2 hover:border-blue-600 md:w-5/12`}
						>
							<Image
								src={'/web-shop.svg'}
								width={200}
								height={200}
								alt='web-option'
							/>
							<h3 className='text-2xl text-main'>Desarrollo web</h3>
						</div>
						<div
							onClick={() => setPayload({ ...payload, service: 'mobile' })}
							className={`${service === 'mobile' && 'border-2 border-blue-600'} flex cursor-pointer flex-col items-center gap-8 rounded-2xl bg-softBlue p-6 py-16 hover:border-2 hover:border-blue-600 md:w-5/12`}
						>
							<Image
								src={'/phone-dev.svg'}
								width={150}
								height={30}
								alt='mobile-option'
							/>
							<h3 className='mt-4 text-2xl text-main'>Desarrollo móvil</h3>
						</div>
					</section>
				</div>
			</section>
		</>
	);
}
