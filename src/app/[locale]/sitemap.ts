import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';
	const pathEs = '/es';

	return [
		{
			url: `${baseUrl}${pathEs}`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}${pathEs}/about-us`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}${pathEs}/solutions`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}${pathEs}/careers`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}${pathEs}/contact`,
			lastModified: new Date(),
		},
	];
}
