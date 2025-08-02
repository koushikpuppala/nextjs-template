import type { NextRequest } from 'next/server'

import { NextResponse } from 'next/server'

export const middleware = async (request: NextRequest) => {
	// Middleware logic here
	const pathname = request.nextUrl.pathname

	console.log(`Middleware triggered for path: ${pathname}`)

	return NextResponse.next()
}

export const config = {
	matcher: ['/((?!api|_next|static|favicon.ico).*)'], // Exclude API routes, Next.js static files, and favicon.ico
}
