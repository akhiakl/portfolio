'use client'
import React from 'react'
import {
  Navbar,
  HomeSection,
  AboutSection,
  ServicesSection,
  ProjectsSection,
  ContactSection,
} from '@/components'
import { ParallaxProvider } from 'react-scroll-parallax'

export default function Home() {

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
