import type { MetadataRoute } from 'next';
import { SITE_URL } from './site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
	const lastModified = new Date();
	return [
		{ url: SITE_URL, lastModified, changeFrequency: 'monthly', priority: 1 },
		{ url: `${SITE_URL}/servicios`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
		{ url: `${SITE_URL}/about-us`, lastModified, changeFrequency: 'yearly', priority: 0.6 },
		{ url: `${SITE_URL}/contact`, lastModified, changeFrequency: 'yearly', priority: 0.7 },
	];
}
