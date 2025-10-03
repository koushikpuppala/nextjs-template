export const formatDate = (date: Date | string, locale: string = 'en-US'): string =>
	(typeof date === 'string' ? new Date(date) : date).toLocaleDateString(locale, {
		year: 'numeric',
		month: 'short',
		day: '2-digit',
	})

export const formatTime = (date: Date | string, locale: string = 'en-US'): string =>
	(typeof date === 'string' ? new Date(date) : date).toLocaleTimeString(locale, {
		hour: '2-digit',
		minute: '2-digit',
	})

export const formatDateTime = (date: Date | string, locale: string = 'en-US'): string =>
	`${formatDate(date, locale)} ${formatTime(date, locale)}`

export const getRelativeTime = (date: Date | string, locale: string = 'en-US'): string => {
	const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' })
	const now = new Date()
	const past = typeof date === 'string' ? new Date(date) : date
	const diff = now.getTime() - past.getTime()

	const seconds = Math.floor(diff / 1000)
	if (seconds < 60) return rtf.format(-seconds, 'second')

	const minutes = Math.floor(seconds / 60)
	if (minutes < 60) return rtf.format(-minutes, 'minute')

	const hours = Math.floor(minutes / 60)
	if (hours < 24) return rtf.format(-hours, 'hour')

	const days = Math.floor(hours / 24)
	if (days < 30) return rtf.format(-days, 'day')

	const months = Math.floor(days / 30)
	if (months < 12) return rtf.format(-months, 'month')

	const years = Math.floor(months / 12)
	return rtf.format(-years, 'year')
}

export const isValidDate = (date: Date | string): boolean => {
	const d = typeof date === 'string' ? new Date(date) : date
	return d instanceof Date && !isNaN(d.getTime())
}
