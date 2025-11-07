/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export', // <-- Agregado para export estático
	redirects: async () => {
		return [
			{
				source: '/:path*',
				has: [{ type: 'header', key: 'host', value: 'www.accio.mx' }],
				destination: 'https://accio.mx/:path*',
				permanent: true,
			},
		];
	},
};

export default nextConfig;
