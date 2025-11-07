import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const baseUrl = 'https://accio.mx';

	const urls = [
		{
			url: `${baseUrl}`,
			lastModified: new Date(),
			priority: 1,
		},
		{
			url: `${baseUrl}/about-us`,
			lastModified: new Date(),
			priority: 0.8,
		},
		{
			url: `${baseUrl}/solutions`,
			lastModified: new Date(),
			priority: 0.9,
		},
		{
			url: `${baseUrl}/contact`,
			lastModified: new Date(),
			priority: 0.7,
		},
	];

	return urls;
}
