import Image from 'next/image'
import { Logo } from 'assets/svgs'

export const LoadingComponent = () => {
	return (
		<div className='flex h-screen w-full items-center justify-center'>
			<div className='flex h-20 w-20 items-center justify-center rounded-full bg-white/25 shadow-lg'>
				<Image
					alt='Logo'
					src={Logo}
					width={1024}
					height={1024}
					priority={true}
					className='h-8 w-auto object-contain object-center p-2 mix-blend-multiply drop-shadow-2xl'
				/>
				<div className='border-accent absolute h-20 w-20 animate-spin rounded-full border-2 border-r-transparent border-l-transparent' />
			</div>
		</div>
	)
}
