'use client'

import { useEffect } from 'react'
import Clarity from '@microsoft/clarity'
import { useReportWebVitals } from 'next/web-vitals'
import { sendGAEvent } from '@next/third-parties/google'

export const WebVitals = () => {
	useEffect(() => {
		Clarity.init(process.env.NEXT_PUBLIC_MICROSOFT_CLARITY)
		Clarity.consent(true)
		Clarity.upgrade('Auto upgrade to latest version')
	}, [])

	useReportWebVitals(metric => {
		sendGAEvent('event', metric.name, {
			action: metric.name,
			category: metric.label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
			value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value), // values must be integers
			label: metric.id, // id unique to current page load
			nonInteraction: true, // avoids affecting bounce rate.
		})
	})

	return null
}
