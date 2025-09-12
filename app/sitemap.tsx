import type { MetadataRoute } from 'next'

import { globby } from 'globby'

const SitemapPage = async (): Promise<MetadataRoute.Sitemap> => {
	const routes: MetadataRoute.Sitemap = []
	const paths = new Set(
		(await globby(['app/**/page.tsx', '!app/**/api/**'])).map(
			path =>
				path
					.replace(/^app|\/page\.tsx$|\/\([^/]*\)|\[[^\]]*]|@[^/]+/g, '') // Remove app prefix, /page.tsx, (param), [id]
					.replace(/\/{2,}/g, '/') // Replace multiple slashes with single
					.replace(/\/$/, ''), // Remove trailing slash
		),
	)

	paths.forEach(path => {
		const priority = 1 - (path.split('/').length - 1) * 0.2
		const lastModified = new Date().toISOString()

		let changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'

		switch (priority) {
			case 1:
				changeFrequency = 'always'
				break
			case 0.8:
				changeFrequency = 'hourly'
				break
			case 0.6:
				changeFrequency = 'daily'
				break
			case 0.4:
				changeFrequency = 'weekly'
				break
			case 0.2:
				changeFrequency = 'monthly'
				break
			default:
				changeFrequency = 'yearly'
				break
		}

		routes.push({
			url: `${process.env.NEXT_PUBLIC_DEPLOY_URL}${path}`,
			lastModified,
			changeFrequency,
			priority: priority > 0 ? priority : undefined,
		})
	})

	return [...routes]
}

export default SitemapPage
