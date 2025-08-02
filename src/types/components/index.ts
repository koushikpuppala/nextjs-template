export type AnimationProps<T> = Partial<T> &
	(
		| { direction: 'left' | 'right' | 'up' | 'down'; delay: number }
		| { direction?: never; delay?: never }
	)
