import React from 'react'
import RellaxContainer from '../../helpers/RellaxContainer'
import AnimatedButton from '../AnimatedButton'

const PortflioSection = (): JSX.Element => (
  <section id="portfolio" className="bg-black-50-dotted text-gray-50 relative">
    <h1 className="z-0 lg:text-10xl md:text-9xl text-7xl md:text-left text-center font-extrabold md:no-underline underline tracking-tighter text-gray-600 opacity-70 drop-shadow-lg md:writing-vertical md:transform-gpu md:rotate-180 md:absolute top-36 lg:left-4 md:left-px">
      <span className="">portfolio.</span>
    </h1>
    <div className="relative z-10 flex flex-col gap-4 w-full h-screen lg:py-10 lg:pb-10 pb-8 px-4">
      <div className="flex flex-col gap-10 w-full h-full items-center justify-center lg:px-36 md:px-10 px-4 border-b border-red-500 border-opacity-50">
        <h1 className="text-4xl">Projects are now added in the Resume.</h1>
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
            primaryColor="black-50"
            secondaryColor="red-500"
          >
            Checkout my resume
          </AnimatedButton>
        </RellaxContainer>
      </div>
      {/* <div className="container mx-auto xl:pl-30 lg:pl-24 flex flex-col lg:gap-0 gap-4 h-1/2 w-full mt-8">
      </div> */}
    </div>
  </section>
)

export default PortflioSection
