import React from 'react'
import {
  Navbar,
  HomeSection,
  AboutSection,
  ServicesSection,
  ProjectsSection,
  ContactSection,
} from '@/components'
import ProviderWrapper from '@/components/ProviderWrapper'

export default function Home() {
  return (
    <ProviderWrapper>
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
    </ProviderWrapper>
  )
}
