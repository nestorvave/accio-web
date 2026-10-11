import type { MetadataRoute } from 'next';
import { SITE_URL } from './site';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{ url: SITE_URL, changeFrequency: 'monthly', priority: 1 },
		{ url: `${SITE_URL}/servicios`, changeFrequency: 'monthly', priority: 0.9 },
		{ url: `${SITE_URL}/about-us`, changeFrequency: 'yearly', priority: 0.7 },
		{ url: `${SITE_URL}/contact`, changeFrequency: 'yearly', priority: 0.7 },
	];
}
