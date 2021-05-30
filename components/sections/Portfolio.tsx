import React from 'react'
import Project from '../portfolio/Project'

const PortflioSection = (): JSX.Element => (
  <section id="portfolio" className="bg-black-50-dotted text-gray-50 relative">
    <h1 className="z-0 lg:text-10xl md:text-9xl text-7xl md:text-left text-center font-extrabold md:no-underline underline tracking-tighter text-gray-600 opacity-70 drop-shadow-lg md:writing-vertical md:transform-gpu md:rotate-180 md:absolute top-36 lg:left-4 md:left-px">
      <span className="">portfolio.</span>
    </h1>
    <div className="relative z-10 flex flex-col gap-4 w-full min-h-screen lg:py-10 lg:pb-10 pb-8 px-4">
      <div className="container mx-auto xl:pl-30 lg:pl-24 flex flex-col lg:gap-0 gap-4 h-1/2 w-full mt-8">
        <Project
          index="01"
          title={['MAN WITH', 'A VAN']}
          imageSrc="/img/manwithavan.png"
          description="Manwithavan is a web app for the internal assessment of an entire packers and movers company."
          stackIcons={[
            'angularjs-plain',
            'typescript-plain',
            'express-original-wordmark',
            'html5-plain-wordmark',
            'sass-plain',
            'mysql-plain-wordmark',
            {
              type: 'icomoon',
              icon: 'elasticsearch',
            },
          ]}
          link="https://manwithavan.com.au"
        />
        <Project
          index="02"
          title={['GIBLIB']}
          imageSrc="/img/giblib.png"
          description="Giblib is a streaming service for newest, most-advanced medical courses, surgical videos."
          stackIcons={[
            'react-plain',
            'typescript-plain',
            'express-original-wordmark',
            'postgresql-plain-wordmark',
            'sequelize-plain',
            { type: 'icomoon', icon: 'elasticsearch' },
          ]}
          link="https://watch.giblib.com"
        />
        <Project
          index="03"
          title={['AUDIO', 'TEASER']}
          imageSrc="/img/audioteaser.png"
          description="Audioteaser is an application which creates natural-sounding voiceovers."
          stackIcons={[
            'amazonwebservices-plain',
            'angularjs-plain',
            'nodejs-plain',
            { type: 'icomoon', icon: 'awslambda' },
            { type: 'icomoon', icon: 'awscognito' },
            { type: 'icomoon', icon: 'awsdynamodb' },
          ]}
          link="https://audioteaser.com"
        />
      </div>
    </div>
  </section>
)

export default PortflioSection
