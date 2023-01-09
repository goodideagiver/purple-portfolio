import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'
import '../styles/landing.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>purpleblack.dev</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
