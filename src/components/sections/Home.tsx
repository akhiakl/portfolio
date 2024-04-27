import React from 'react'
import { Link } from 'react-scroll'
import TextRotator from '../TextRotator'
import { RellaxContainer } from '@/components'
import Image from 'next/image'
import ImageExporter from '@/helpers/image-exporter'

const HomeSection = (): JSX.Element => {
  const skillsets = ['WEB DEVELOPER', 'MOBILE DEVELOPER', '3D ARTIST']

  return (
    <section id="home" className="bg-black-50 h-screen w-full text-gray-50 pt-20 relative">
      <div className="bg-right-bottom bg-no-repeat bg-contain flex flex-col md:justify-center h-full container relative">
        <Image priority height={450} width={450} sizes="(max-width: 768px) 100vw, 33vw" className='object-contain absolute right-0 bottom-0' src={ImageExporter.profileBg} alt="Profile image" />
        <div className="grid md:grid-cols-6 grid-cols-1 transform-gpu -translate-y-10">
          <div className="md:col-start-2 row-auto col-start-1 md:col-span-3 col-span-6 md:text-left text-center md:ml-5 md:mb-0 mb-5">
            <RellaxContainer
              options={{
                speed: -1,
                center: true,
              }}
              className="backdrop-brightness-50 md:backdrop-filter-none backdrop-filter"
            >
              <p className="md:text-9xl text-8xl text-gray-500 font-extrabold md:mt-0 mt-10">
                A<span className="text-red-900">K</span>HI
                <br />
                <span className="text-gray-800">
                  A<span className="text-yellow-500">K</span>L
                </span>
              </p>
              <TextRotator textArr={skillsets} />
            </RellaxContainer>
          </div>
        </div>
        <div className="absolute z-20 left-1/2 transform-gpu -translate-x-1/2 bottom-10 text-center">
          <Link
            className="cursor-pointer"
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <h2 className="text-red-500 text-2xl mb-4">SEE MORE</h2>
            <i className="block animate-bounce icomoon-chevron-down text-2xl" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeSection
