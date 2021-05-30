import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import AOS from 'aos'
import '../styles/globals.css'
import '../styles/icomoon.css'
import 'aos/dist/aos.css'
import { ParallaxProvider } from 'react-scroll-parallax'

function App({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      // once: true,
    })
  }, [])
  return (
    <ParallaxProvider>
      <Head>
        <title>Akhi AKL</title>
      </Head>
      <Component {...pageProps} />
    </ParallaxProvider>
  )
}
export default App
