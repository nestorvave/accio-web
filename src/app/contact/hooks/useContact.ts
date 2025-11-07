import axios, { AxiosError } from 'axios';
import { ChangeEvent, useState } from 'react';

interface IPayloadContact {
	name: string;
	email: string;
	description: string;
	phone: string;
	service: 'web' | 'mobile' | '';
}

export const useContact = () => {
	const [showSnackbar, setShowSnackbar] = useState(false);
	const [msgSnackbar, setMsgSnackbar] = useState('');
	const [typeSnackbar, setTypeSnackbar] = useState<
		'info' | 'warning' | 'error' | 'success' | ''
	>('');
	const [payload, setPayload] = useState<IPayloadContact>({
		name: '',
		email: '',
		description: '',
		service: 'mobile',
		phone: '',
	});

	const fnShowSnackbar = (
		message: string,
		type: 'info' | 'warning' | 'error' | 'success' | '' = 'warning'
	) => {
		setMsgSnackbar(message);
		setTypeSnackbar(type);
		setShowSnackbar(true);
	};

	const isValidEmail = (email: string) => {
		return /\S+@\S+\.\S+/.test(email);
	};

	const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		if (e.target.name === 'phone' && isNaN(Number(e.target.value))) {
			return;
		}
		setPayload({ ...payload, [e.target.name]: e.target.value });
	};

	const post = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const { name, email, description, service, phone } = payload;
		if (!service ) {
			fnShowSnackbar('Porfavor elige el tipo de servicio que estas interesado.');

			return;
		}
		if (!name || typeof name !== 'string') {
			fnShowSnackbar('Por favor ingresa un nombre válido.');

			return;
		}

		if (!email || !isValidEmail(email)) {
			fnShowSnackbar('Por favor ingresa un correo electrónico válido.');

			return;
		}
		if (!phone || phone.length < 5) {
			fnShowSnackbar('El número telefónico debe ser válido.');

			return;
		}

		if (!description || description.length < 15) {
			fnShowSnackbar('La descripción debe tener al menos 15 caracteres.');

			return;
		} 

		try {
			await axios.post(
				`${process.env.NEXT_PUBLIC_BACKEND_URL}prospects`,
				payload
			);
		} catch (error: unknown) {
			if (error instanceof AxiosError) {
				fnShowSnackbar(
					'Ha ocurrido un error, intentelo más tardo o contactenos por alguna de nuestras redes sociales.',
					'error'
				);
			}
		}
	};

	return {
		post,
		onChange,
		payload,
		setPayload,
		showSnackbar,
		msgSnackbar,
		typeSnackbar,
		setShowSnackbar,
	};
};
