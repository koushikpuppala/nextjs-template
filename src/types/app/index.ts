import Error from 'next/error'

export type RootLayoutProps = Readonly<{ children: React.ReactNode }>

export type GlobalErrorProps = Readonly<{ error: Error & { digest?: string }; reset: () => void }>
