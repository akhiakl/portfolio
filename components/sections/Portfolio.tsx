import React from 'react'
import ImageExporter from '../../helpers/image-exporter'
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
          image={ImageExporter.commonClosets}
          title={['THE', 'COMMON', 'CLOSETS']}
          description="The common closets (Gemme) is a cloth/apparel rental platform based in sweden"
          stackIcons={[
            'angularjs-plain',
            'typescript-plain',
            'html5-plain-wordmark',
            'sass-plain',
            'bootstrap-plain',
          ]}
          link="https://gemmecollective.com"
        />
        <Project
          index="02"
          image={ImageExporter.badan}
          title={['BADAN']}
          description="Badan is a full service landscape architectural design specialist and construction firm"
          stackIcons={[
            'react-plain',
            'wordpress-plain',
            'html5-plain-wordmark',
            'css3-plain',
            'bootstrap-plain',
          ]}
          link="https://badan.com.sa"
        />
        <Project
          index="03"
          image={ImageExporter.beaudesk}
          title={['BEAUDESK']}
          description="Beaudesk is a Fully Integrated System to transform your Appointment system. "
          stackIcons={['html5-plain-wordmark', 'css3-plain', 'bootstrap-plain']}
          link="https://www.beaudesk.com/home"
        />
        <Project
          index="04"
          image={ImageExporter.umr}
          title={['UMR']}
          description="United Machinery Resources Co. (UMR Company), serve the requirement of manufacturer of spare parts of all types of heavy equipment."
          stackIcons={['html5-plain-wordmark', 'css3-plain', 'bootstrap-plain']}
          link="https://www.umrcompany.com"
        />
      </div>
    </div>
  </section>
)

export default PortflioSection
