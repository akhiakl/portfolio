import React, { useEffect } from 'react'
import Navbar from '../components/navbar/Navbar'
import HomeSection from '../components/sections/Home'
import AboutSection from '../components/sections/About'
import ServicesSection from '../components/sections/Services'
import PortflioSection from '../components/sections/Portfolio'
import ContactSection from '../components/sections/Contact'

export default function Home(): JSX.Element {
  useEffect(() => {
    const bodyElement = document.getElementsByTagName('body')?.[0]
    const preloaderElement = document.getElementById('preloader')
    setTimeout(() => {
      bodyElement?.classList.remove('overflow-hidden')
      preloaderElement?.remove()
    }, 2000)
  }, [])
  return (
    <div className="font-karla subpixel-antialiased">
      <Navbar />
      <main>
        <HomeSection />
        <AboutSection />
        <ServicesSection />
        <PortflioSection />
        <ContactSection />
      </main>
    </div>
  )
}
