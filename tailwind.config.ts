/* eslint-disable no-undef */
import type { Config } from 'tailwindcss';

// Colores de marca ACCIO (ver globals.css para los tokens claro/oscuro).
// Radios: tarjetas 28px, campos 14px, botones pill. No mezclar.
const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
	darkMode: 'media',
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				paper: token('paper'),
				surface: token('surface'),
				ink: token('ink'),
				muted: token('muted'),
				line: token('line'),
				accent: token('accent'),
				// Fijos, no cambian con el tema
				tinta: '#0B1220',
				hueso: '#F5F3EE',
				azul: '#2F6BFF',
			},
			fontFamily: {
				display: ['var(--font-display)', 'system-ui', 'sans-serif'],
				sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
			},
			borderRadius: {
				card: '28px',
				field: '14px',
			},
			maxWidth: {
				page: '1320px',
			},
		},
	},
	plugins: [],
};

export default config;
