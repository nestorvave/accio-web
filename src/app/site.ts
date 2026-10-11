import type { Metadata } from 'next';

// Datos del negocio usados en UI, metadata y JSON-LD. Un solo lugar para editarlos.
export const SITE_URL = 'https://accio.mx';
export const SITE_NAME = 'Accio';
export const TAGLINE = 'Software e IA para resolver problemas reales';
export const SOCIAL_IMAGE = '/brand/accio-social.svg';

export const CONTACT = {
	email: 'accio.ti.solutions@gmail.com',
	phone: '+527773635639',
	phoneLabel: '+52 777 363 56 39',
	instagram: 'https://www.instagram.com/accio.hub/',
	linkedin: 'https://www.linkedin.com/company/accio-inc',
	whatsapp: '527773635639',
	city: 'Cuernavaca',
	region: 'Morelos',
};

// Helper para generar metadata por página con canonical y OG consistentes.
export const pageMeta = ({
	title,
	description,
	path,
	keywords = [],
}: {
	title: string;
	description: string;
	path: string;
	keywords?: string[];
}): Metadata => ({
	title,
	description,
	keywords,
	alternates: { canonical: path },
	openGraph: {
		title,
		description,
		url: path,
		siteName: SITE_NAME,
		locale: 'es_MX',
		type: 'website',
		images: [
			{
				url: SOCIAL_IMAGE,
				width: 1200,
				height: 630,
				type: 'image/svg+xml',
				alt: 'Accio: software e inteligencia artificial para resolver problemas reales',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title,
		description,
		images: [SOCIAL_IMAGE],
	},
});
