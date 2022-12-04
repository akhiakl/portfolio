import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import AOS from 'aos'
import '../styles/globals.css'
import '../styles/preloader.css'
import '../styles/icomoon.css'
import 'aos/dist/aos.css'
import { ParallaxProvider } from 'react-scroll-parallax'
import classNames from 'classnames'
import Fonts from '../helpers/fonts'

function App({ Component, pageProps }: AppProps) {
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
      <main className={classNames(Fonts.karla.variable, Fonts.unicaOne.variable, 'font-sans')}>

      </main>
      <Component {...pageProps} />
    </ParallaxProvider>
  )
}
export default App
