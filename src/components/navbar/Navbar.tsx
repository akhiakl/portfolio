'use client'
import classNames from 'clsx'
import React, { useState } from 'react'
import Hamburger from './Hamburger'
import { animateScroll as scroll } from 'react-scroll'
import Nav from './Nav'
import NavLink from './NavLink'


function Navbar(): JSX.Element {
  const [show, setShow] = useState<boolean>(false)
  const [activeSection, setActiveSection] = useState<string>('home')
  const onButtonClick = (): void => setShow(!show)
  const textColor = ['home', 'portfolio'].includes(activeSection) ? 'bg-black-50' : 'bg-gray-50'
  const bgColor = ['home', 'portfolio'].includes(activeSection) ? 'text-gray-50' : 'text-black-50'
  return (
    <>
      <Hamburger
        primaryColor={bgColor}
        className={classNames(
          'fixed z-40 top-4 left-4 ring-red-900 ring-opacity-5',
          {
            'ring-4': !show,
          }
        )}
        open={show}
        onClick={onButtonClick}
      />
      <nav
        className={classNames(
          `fixed z-30 left-0 right-0 top-0
           border-b-2 border-red-500
           flex flex-row
           transform-gpu overflow-hidden
           transition-size ease-in-out duration-500`,
          bgColor,
          textColor,
          {
            'md:h-20 h-full w-full': show,
            'h-14 w-14 translate-x-4 translate-y-4 rounded-full':
              !show,
          }
        )}
      >
        <Nav
          className={classNames('transition-opacity duration-500 px-10', {
            'opacity-0': !show,
            'opacity-100 delay-500': show,
          })}
        >
          <NavLink
            onSetActive={setActiveSection}
            to="home"
            hashSpy={false}
            text="Home"
          />
          <NavLink
            onSetActive={setActiveSection}
            to="about"
            offset={-126}
            text="About"
          />
          <NavLink onSetActive={setActiveSection} to="services" text="Services" />
          <NavLink
            onSetActive={setActiveSection}
            to="portfolio"
            text="Portfolio"
          />
          <NavLink onSetActive={setActiveSection} to="contact" text="Contact" />
        </Nav>
      </nav>
      <button
        className="fixed z-40 hover:bg-red-400 focus:outline-none bottom-12 right-12 rounded-full shadow-lg bg-red-500 h-14 w-14 text-gray-50 flex justify-center items-center"
        onClick={() => scroll.scrollToTop()}
      >
        <i className="icomoon-arrow-up2 text-2xl" />
        <span className="sr-only">Go to top</span>
      </button>
    </>
  )
}

export default Navbar
