import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps: { sesions, ...pageProps } }: any) {
  return (
    <SessionProvider session={sesions}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
