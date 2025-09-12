import 'react-date-range/dist/styles.css'
import 'styles/globals.css'

import type { Metadata, Viewport } from 'next'
import type { RootLayoutProps } from 'types/app'

import { Sora } from 'next/font/google'
import { classNames } from 'utils/classNames'
import { WebVitals } from 'components/web-vitals'
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
	title: { default: 'Your App Name', template: '%s | Your App Name' },
	description:
		'A modern web application built with Next.js. Customize this description to reflect your project.',
	applicationName: 'Your App Name',
	keywords: ['Next.js', 'React', 'Full Stack Template', 'Web App', 'JavaScript'],
	authors: [{ name: 'Your Name', url: process.env.NEXT_PUBLIC_DEPLOY_URL }],
	creator: 'Your Name or Team',
	alternates: { canonical: process.env.NEXT_PUBLIC_DEPLOY_URL },
	formatDetection: { email: true, address: false, telephone: false, date: true, url: true },
	openGraph: {
		title: { template: '%s | Your App Name', default: 'Your App Name' },
		description:
			'A modern web application built with Next.js. Customize this for better SEO and sharing.',
		url: process.env.NEXT_PUBLIC_DEPLOY_URL,
		type: 'website',
		locale: 'en_US',
		siteName: 'Your App Name',
		images: [{ url: '/favicon.ico', alt: 'Your App Name Logo' }],
	},
	twitter: {
		card: 'summary_large_image',
		title: { template: '%s | Your App Name', default: 'Your App Name' },
		description:
			'A modern web application built with Next.js. Perfect for startups and freelancers.',
		creator: '@your_twitter_handle',
		site: '@your_twitter_handle',
		images: [{ url: '/favicon.ico', alt: 'Your App Name Logo' }],
	},
	category: 'Technology',
	icons: {
		icon: { url: '/favicon.ico', type: 'image/x-icon' },
		shortcut: [
			{ url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
			{ url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
		],
		apple: { url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
	},
	manifest: '/manifest.webmanifest',
	metadataBase: new URL(process.env.NEXT_PUBLIC_DEPLOY_URL || 'http://localhost:3000'),
	robots: {
		index: true,
		follow: true,
		nocache: false,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: false,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
}

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#A277FF' }

const sora = Sora({
	subsets: ['latin', 'latin-ext'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

const RootLayout = ({ children }: RootLayoutProps) => {
	return (
		<html lang='en'>
			<head>
				<link rel='preconnect' href='https://www.googletagmanager.com' crossOrigin='anonymous' />
				<link rel='preconnect' href='https://analytics.google.com' crossOrigin='anonymous' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
			</head>
			<body
				className={classNames(
					sora.className,
					'relative h-screen w-full overflow-hidden bg-black bg-cover bg-center bg-no-repeat text-white antialiased',
				)}>
				{children}
				<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
				<WebVitals />
			</body>
		</html>
	)
}

export default RootLayout
