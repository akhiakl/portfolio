import React from 'react'
import Project from '../projects/Project'
import useProject from '@/hooks/use-project'

const ProjectsSection = (): JSX.Element => {
  const { data } = useProject()
  console.log(data)
  return (
    <section id="portfolio" className="bg-black-50-dotted text-gray-50 relative">
      <h1 className="z-0 lg:text-10xl md:text-9xl text-7xl md:text-left text-center font-extrabold md:no-underline underline tracking-tighter text-gray-600 opacity-70 drop-shadow-lg md:writing-vertical md:transform-gpu md:rotate-180 md:absolute top-36 lg:left-4 md:left-px">
        <span className="">personal projects.</span>
      </h1>
      <div className="relative z-10 flex flex-col gap-4 w-full min-h-screen lg:py-10 lg:pb-10 pb-8 px-4">
        <div className="container mx-auto xl:pl-30 lg:pl-24 flex flex-col lg:gap-0 gap-4 h-1/2 w-full mt-8">
          {data?.projects.map(project => (
            <Project
              key={project.id}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
