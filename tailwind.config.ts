/* eslint-disable no-undef */
import type { Config } from 'tailwindcss';

// Colores de marca ACCIO. Los tokens viven en globals.css.
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
				sunken: token('sunken'),
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
				card: 'var(--r-card)',
				field: 'var(--r-field)',
			},
			maxWidth: {
				page: '1320px',
			},
		},
	},
	plugins: [],
};

export default config;
