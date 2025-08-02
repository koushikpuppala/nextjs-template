import { z } from 'zod'

export const MetaDataValidation = z.object({
	key: z
		.string()
		.nonempty('Key is required.')
		.refine(
			value => /^\/[a-zA-Z0-9_]+$/.test(value),
			'Key must start with / and only contain alphanumeric characters and underscores.',
		),
	title: z
		.string()
		.nonempty('Title is required.')
		.min(3, 'Title must be at least 3 characters long.')
		.max(50, 'Title must be at most 50 characters long.'),
	description: z
		.string()
		.nonempty('Description is required.')
		.min(10, 'Description must be at least 10 characters long.')
		.max(250, 'Description must be at most 250 characters long.'),
	keywords: z
		.string()
		.nonempty('Keywords are required.')
		.regex(/^[a-zA-Z0-9, ]+$/, 'Keywords must be alphanumeric and can include commas and spaces.')
		.refine(value => {
			const keywords = value.split(',').map(k => k.trim())
			return keywords.length >= 3 && keywords.length <= 15
		}, 'Keywords must be at least 3 and at most 15 in number.'),
})
