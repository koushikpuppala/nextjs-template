/** @type {import('next').NextConfig} */

import * as nextPWA from '@ducanh2912/next-pwa'
import { type SentryBuildOptions, withSentryConfig } from '@sentry/nextjs'

const nextConfig = nextPWA.default({
	dest: 'public',
	register: process.env.NODE_ENV !== 'development',
	disable: process.env.NODE_ENV === 'development',
	cacheOnFrontEndNav: process.env.NODE_ENV !== 'development',
	aggressiveFrontEndNavCaching: process.env.NODE_ENV !== 'development',
	workboxOptions: {
		disableDevLogs: process.env.NODE_ENV !== 'development',
		cleanupOutdatedCaches: process.env.NODE_ENV !== 'development',
	},
})({
	reactStrictMode: process.env.NODE_ENV !== 'development',
	experimental: { reactCompiler: process.env.NODE_ENV === 'development' },
	output: process.env.ENVIRONMENT === 'production' ? 'standalone' : undefined,
	images: { remotePatterns: [{ protocol: 'https', hostname: '*', port: '*', pathname: '**' }] },
})

const sentryBuildOptions: SentryBuildOptions = {
	org: '', // TODO: Set your Sentry organization slug
	project: '', // TODO: Set your Sentry project slug
	authToken: process.env.SENTRY_AUTH_TOKEN,
	debug: process.env.NODE_ENV !== 'production',
	silent: process.env.NODE_ENV === 'production',
	release: { name: process.env.npm_package_version },
	disableLogger: process.env.NODE_ENV === 'production',
	sourcemaps: { disable: process.env.NODE_ENV === 'production' },
	widenClientFileUpload: process.env.NODE_ENV !== 'production',
	automaticVercelMonitors: process.env.NODE_ENV === 'production',
	reactComponentAnnotation: { enabled: process.env.NODE_ENV === 'production' },
	tunnelRoute: process.env.NODE_ENV === 'production' ? '/monitoring' : undefined,
}

export default withSentryConfig(nextConfig, sentryBuildOptions)
