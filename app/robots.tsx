import type { MetadataRoute } from 'next'

const userAgents = [
	'Googlebot',
	'googlebot-image',
	'googlebot-mobile',
	'MSNBot',
	'Teoma',
	'ia_archiver',
	'psbot',
	'*',
]

const RobotsPage = (): MetadataRoute.Robots => {
	return {
		rules: userAgents.map(userAgent => ({ userAgent, allow: '*', disallow: ['/api/**/*'] })),
		sitemap: [`${process.env.NEXT_PUBLIC_DEPLOY_URL}/sitemap.xml`],
		host: process.env.NEXT_PUBLIC_DEPLOY_URL,
	}
}

export default RobotsPage
