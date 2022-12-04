import classNames from 'classnames'
import React from 'react'
import RellaxContainer from '../../helpers/RellaxContainer'
import IconSet, { IconType } from '../IconSet'

interface ProjectProps {
  index: string
  title: string | string[]
  imageSrc: string
  description?: string
  stackIcons?: IconType
  className?: string
  link?: string
}

const Project = ({
  title,
  imageSrc,
  index,
  description,
  stackIcons,
  className,
  link,
}: ProjectProps): JSX.Element => {
  const Title = (): JSX.Element => (
    <div
      className={classNames(
        'tracking-tighter drop-shadow-2xl xl:text-7xl lg:text-7xl md:text-4xl text-2xl uppercase font-extrabold flex md:flex-col flex-row md:gap-0 gap-2',
        className,
        {
          'text-red-500': Number(index) % 2 !== 0,
          'text-gray-50': Number(index) % 2 === 0,
        }
      )}
    >
      {typeof title === 'string' ? (
        <span>{title}</span>
      ) : (
        title.map((titleEl, i) => <span key={`titleEl${i}`}>{titleEl}</span>)
      )}
    </div>
  )
  return (
    <div className="md:h-screen md:bg-transparent bg-gray-50 bg-opacity-5 lg:odd:pl-36 lg:even:pr-36  md:odd:pl-12 md:even:pr-12">
      <div className="py-12 w-full h-full md:px-4 flex items-center">
        <div className="flex flex-col relative">
          <RellaxContainer
            options={{
              speed: 0.85,
              center: true,
              breakpoints: [768, 1024, 1280],
            }}
            data-rellax-mobile-speed="0"
            data-rellax-xs-speed="0"
            className="md:absolute left-0 xl:top-10 lg:top-3 flex flex-col gap-4 z-10 md:mt-0 mt-6 order-2"
          >
            <div className="flex md:flex-col flex-row gap-3">
              <h3
                className={classNames(
                  'font-unica-one md:text-3xl text-xl flex items-center md:gap-2 gap-1 text-opacity-60',
                  {
                    'text-red-500': Number(index) % 2 !== 0,
                    'text-gray-50': Number(index) % 2 === 0,
                  }
                )}
              >
                <span
                  className={classNames('md:w-4 w-1 h-0 border-b-2 border-opacity-60', {
                    'border-red-500': Number(index) % 2 !== 0,
                    'border-gray-50': Number(index) % 2 === 0,
                  })}
                ></span>
                {index}
              </h3>

              <Title />
            </div>
            {description ? (
              <p
                className={classNames('lg:w-64 md:w-60 text-sm bg-opacity-75', {
                  'text-red-500': Number(index) % 2 !== 0,
                  'text-gray-50': Number(index) % 2 === 0,
                })}
              >
                {description}
              </p>
            ) : null}
            {link ? (
              <a
                href={link}
                target="_blank"
                className={classNames(
                  'xl:px-8 xl:py-3 md:px-4 md:py-2 md:no-underline underline cursor-pointer mr-auto',
                  {
                    'md:text-red-500 text-gray-50 md:bg-gray-50 md:hover:bg-gray-200':
                      Number(index) % 2 !== 0,
                    'md:text-gray-50 text-red-500 md:bg-red-500 md:hover:bg-red-600':
                      Number(index) % 2 === 0,
                  }
                )}
                rel="noreferrer"
              >
                View project
              </a>
            ) : null}
            {stackIcons ? (
              <div className="md:text-2xl text-xl flex flex-row w-1/4 gap-2 md:order-3 order-2">
                <IconSet icons={stackIcons} />
              </div>
            ) : null}
          </RellaxContainer>
          <div data-aos="fade-in" data-aos-duration="1000" className="w-full flex">
            <div className="lg:w-64 md:w-60 md:block hidden" />
            <div className="flex-1">
              <img src={imageSrc} alt="Manwithavan" className="object-contain w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
