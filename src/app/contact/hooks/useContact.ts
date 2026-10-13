import { ChangeEvent, useState } from 'react';
import { CONTACT } from '@/app/site';

interface IPayloadContact {
	name: string;
	email: string;
	description: string;
	service: 'web' | 'mobile' | 'software' | 'integration' | 'ai' | 'chatbot' | '';
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
		service: 'software',
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
		setPayload({ ...payload, [e.target.name]: e.target.value });
	};

	const post = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const { name, email, description, service } = payload;
		// Ningún campo es obligatorio: lo que falte se platica en WhatsApp.
		// Solo validamos el formato del correo si lo escribieron.
		if (email && !isValidEmail(email)) {
			fnShowSnackbar('Revisa el formato del correo electrónico.');

			return;
		}
		const trimmedName = name.trim();
		const trimmedDescription = description.trim();

		const serviceLabels: Record<IPayloadContact['service'], string> = {
			web: 'Sitio web o plataforma',
			mobile: 'Aplicación móvil',
			software: 'Software a la medida',
			integration: 'Integraciones y APIs',
			ai: 'IA y automatización',
			chatbot: 'Chatbot o asistente de IA',
			'': 'Por definir',
		};
		const message = [
			'Hola Accio, quiero platicar sobre un proyecto.',
			'',
			trimmedName ? `Nombre: ${trimmedName}` : '',
			email ? `Correo: ${email}` : '',
			`Interés: ${serviceLabels[service]}`,
			trimmedDescription ? `Problema o proyecto: ${trimmedDescription}` : '',
		]
			.filter(Boolean)
			.join('\n');
		const whatsappNumber = CONTACT.whatsapp;
		const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
		const whatsappWindow = window.open(whatsappUrl, '_blank');
		if (whatsappWindow) whatsappWindow.opener = null;
		else window.location.assign(whatsappUrl);
		fnShowSnackbar(
			'WhatsApp abrirá con tu mensaje listo. Solo falta enviarlo.',
			'success'
		);
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
