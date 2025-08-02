declare namespace NodeJS {
	export interface ProcessEnv {
		readonly PRISMA_URI: string
		readonly MONGO_URI: string
		readonly SENTRY_AUTH_TOKEN: string
		readonly NEXT_PUBLIC_SENTRY_DSN: string
		readonly NEXT_PUBLIC_DEPLOY_URL: string
		readonly NEXT_PUBLIC_GOOGLE_ANALYTICS: string
		readonly NEXT_PUBLIC_MICROSOFT_CLARITY: string
	}
}
