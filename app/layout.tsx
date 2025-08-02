import 'styles/globals.css'

import type { Metadata, Viewport } from 'next'
import type { RootLayoutProps } from 'types/app'

import { classNames } from 'utils/classNames'
import { Sora } from 'next/font/google'
import Script from 'next/script'

export const metadata: Metadata = {
	title: {
		default: 'Your App Name',
		template: '%s | Your App Name',
	},
	description:
		'A modern web application built with Next.js. Customize this description to reflect your project.',
	applicationName: 'Your App Name',
	keywords: ['Next.js', 'React', 'Full Stack Template', 'Web App', 'JavaScript'],
	authors: [{ name: 'Your Name', url: process.env.NEXT_PUBLIC_DEPLOY_URL }],
	creator: 'Your Name or Team',
	alternates: { canonical: process.env.NEXT_PUBLIC_DEPLOY_URL },
	formatDetection: {
		email: true,
		address: false,
		telephone: false,
		date: true,
		url: true,
	},
	openGraph: {
		title: {
			template: '%s | Your App Name',
			default: 'Your App Name',
		},
		description:
			'A modern web application built with Next.js. Customize this for better SEO and sharing.',
		url: process.env.NEXT_PUBLIC_DEPLOY_URL,
		type: 'website',
		locale: 'en_US',
		siteName: 'Your App Name',
		images: [
			{
				url: '/favicon.ico',
				alt: 'Your App Name Logo',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: {
			template: '%s | Your App Name',
			default: 'Your App Name',
		},
		description:
			'A modern web application built with Next.js. Perfect for startups and freelancers.',
		creator: '@your_twitter_handle',
		site: '@your_twitter_handle',
		images: {
			url: '/favicon.ico',
			alt: 'Your App Name Logo',
		},
	},
	category: 'Technology',
	icons: {
		icon: { url: '/favicon.ico', type: 'image/x-icon' },
		shortcut: [
			{ url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
			{ url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
		],
		apple: {
			url: '/icons/apple-touch-icon.png',
			sizes: '180x180',
			type: 'image/png',
		},
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

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	themeColor: '#A277FF',
}

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
				<Script
					async={true}
					id='google-analytics-g4'
					strategy='afterInteractive'
					src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
				/>
				<Script
					type='text/javascript'
					id='Google Analytics G4'
					strategy='afterInteractive'
					dangerouslySetInnerHTML={{
						__html: `
							window.dataLayer = window.dataLayer || []
							function gtag() { dataLayer.push(arguments) }
							gtag('js', new Date())
							gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}')
						`,
					}}
				/>
				<Script
					type='text/javascript'
					id='Microsoft Clarity'
					strategy='afterInteractive'
					dangerouslySetInnerHTML={{
						__html: `
							(function (c, l, a, r, i, t, y) {
								c[a] = c[a] ||function () { (c[a].q = c[a].q || []).push(arguments) }
								t = l.createElement(r)
								t.async = 1
								t.src = 'https://www.clarity.ms/tag/' + i
								y = l.getElementsByTagName(r)[0]
								y.parentNode.insertBefore(t, y)
							})(window, document, 'clarity', 'script', '${process.env.NEXT_PUBLIC_MICROSOFT_CLARITY}')
						`,
					}}
				/>
			</head>
			<body
				className={classNames(
					sora.className,
					'relative h-screen w-full overflow-hidden bg-black bg-cover bg-center bg-no-repeat text-white antialiased',
				)}>
				{children}
			</body>
		</html>
	)
}

export default RootLayout
