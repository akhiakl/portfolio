import React, { type JSX } from 'react';
import { RellaxContainer } from '@/components'
import AnimatedButton from '../AnimatedButton'

const About = (): JSX.Element => {
  return (
    <section id="about">
      <div className="about-me bg-red-500 px-12 py-24 text-gray-50">
        <div className="container mx-auto flex flex-col items-center relative z-0 pt-6 lg:px-48 md:px-20 px-0">
          <RellaxContainer
            as="h2"
            options={{
              speed: -0.225,
              center: true,
            }}
            className="md:text-9xl text-8xl font-extrabold text-red-900 opacity-20 absolute left-50 -top-2 leading-none -z-1"
          >
            about
          </RellaxContainer>
          <h3 data-aos="fade-in" className="text-3xl tracking-widest font-extrabold mb-4">
            <span aria-label="emoji wave" role="img">
              👋
            </span>{' '}
            Hi I&lsquo;m <span className="text-yellow-300">Akhil K</span>
          </h3>
          <p
            data-aos="fade-in"
            data-aos-duration="1500"
            className="text-white md:text-base text-sm text-justify mb-6"
          >
            An accomplished{' '}
            <span className="text-yellow-300 underline font-bold text-lg">
              Senior Full stack Javascript developer
            </span>{' '}
            with a solid proficiency in React, Node.js, and Next.js, complemented by extensive experience in frontend technologies. Skilled in developing dynamic web applications, refining CSS/HTML for optimal performance, and architecting efficient database designs (MySQL, MongoDB). Specialized in eCommerce platforms such as Contentful, Magento, Algolia, and Fabric, dedicated to delivering innovative, top-tier solutions.
            I am also an artish who like to create traditional portraits & 3d models. I am a gamer myself and
            interested in buiding games using Unreal or Unity
          </p>
          <RellaxContainer
            as="form"
            options={{
              speed: -0.225,
            }}
            className="hire-rellax"
            method="get"
            target="_blank"
            action="resume.pdf"
          >
            <AnimatedButton
              data-aos="fade-up"
              type="submit"
              className="w-100 flex"
            >
              Checkout my resume
            </AnimatedButton>
          </RellaxContainer>
        </div>
      </div>
    </section>
  )
}

export default About
