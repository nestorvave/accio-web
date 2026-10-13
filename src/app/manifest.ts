import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'Accio · Software e IA',
		short_name: 'Accio',
		description: 'Software a la medida, chatbots y automatización con IA para empresas en México.',
		start_url: '/',
		display: 'standalone',
		background_color: '#f5f3ee',
		theme_color: '#0b1220',
		lang: 'es-MX',
		icons: [
			{ src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
			{ src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
			{ src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
		],
	};
}
