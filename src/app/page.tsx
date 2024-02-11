'use client'
import React, { useEffect } from 'react'
import {
  Navbar,
  HomeSection,
  AboutSection,
  ServicesSection,
  ProjectsSection,
  ContactSection,
} from '@/components'
import { ParallaxProvider } from 'react-scroll-parallax'
import AOS from 'aos'
import { SWRConfig } from 'swr'
import fetcher from '@/helpers/fetcher'

export default function Home() {
  useEffect(() => {
    const bodyElement = document.getElementsByTagName('body')?.[0]
    const preloaderElement = document.getElementById('preloader')
    setTimeout(() => {
      bodyElement?.classList.remove('overflow-hidden')
      preloaderElement?.remove()
    }, 2000)
  }, [])
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      // once: true,
    })
  }, [])
  return (
    <ParallaxProvider>
      <div className="font-karla subpixel-antialiased">
        <Navbar />
        <SWRConfig
          value={{
            fetcher
          }}
        >
          <main>
            <HomeSection />
            <AboutSection />
            <ServicesSection />
            <ProjectsSection />
            <ContactSection />
          </main>
        </SWRConfig>
      </div>
    </ParallaxProvider >
  )
}
