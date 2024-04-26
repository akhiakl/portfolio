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

export default function Home() {
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
        <main>
          <HomeSection />
          <AboutSection />
          <ServicesSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </div>
    </ParallaxProvider>
  )
}
