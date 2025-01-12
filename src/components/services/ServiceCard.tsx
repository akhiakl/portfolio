"use client"
import classNames from 'clsx'
import React, { useState } from 'react'
import IconSet, { IconType } from '../IconSet'
interface ServiceCardProps {
  headerIcon: string
  title: string
  gridPosition?: string
  skillIcons: IconType
}

const ServiceCard = ({
  headerIcon,
  title,
  skillIcons,
  gridPosition,
}: ServiceCardProps): JSX.Element => {
  const [flipped, setFlipped] = useState(false)
  const [timeout, setCompTimeout] = useState<NodeJS.Timeout | null>(null)
  const flip = (): void => {
    timeout && clearTimeout(timeout)
    if (!flipped) {
      const thisTimeout = setTimeout(() => {
        setFlipped(false)
      }, 5000)
      setCompTimeout(thisTimeout)
    }

    setFlipped(!flipped)
  }

  return (
    <div
      data-aos="flip-up"
      className={`relative group border-2 border-dashed border-black-50 w-full max-w-72 h-80 ${gridPosition}`}
    >
      <div className="h-full w-full bg-gray-50 shadow-xl flex flex-col transition-transform transform-gpu ease-in-out delay-100 duration-500 md:group-hover:-translate-x-4 md:group-hover:-translate-y-4 md:group-hover:ring-red-500">
        <div
          className={classNames(
            'flip-card ring-2 ring-black-50 md:group-hover:ring-red-600  md:group-hover:bg-red-500 h-full w-full md:group-hover:text-gray-50',
            { flipped }
          )}
        >
          <div className="card-face absolute text-black-50 left-0 right-0 top-0 bottom-0 p-8 md:group-hover:invisible flex flex-col gap-4 items-center justify-center h-full">
            <div className="w-16 h-16 flex justify-center items-center rounded-full border-red-500 border mt-auto">
              <span className={`text-4xl icomoon-${headerIcon}`} />
            </div>
            <h2 className="md:text-2xl text-xl text-center uppercase font-bold border-dotted border-b-2 mb-auto">
              {title}
            </h2>
            {/* {description ? (
              <p className="text-gray-600 text-center mb-auto">{description}</p>
            ) : null} */}
            <button onClick={flip} className="cursor-pointer md:hidden block mt-auto">
              <i className="icomoon-arrow-right2" />
              <span className="sr-only">Show other side</span>
            </button>
          </div>
          <div className="card-face card-back absolute left-0 right-0 top-0 bottom-0 p-8 md:group-hover:flex md:hidden flex flex-col justify-center items-center bg-red-500 text-gray-50">
            <div className="flex-1 w-full grid grid-cols-3 grid-rows-4 gap-4 items-center justify-items-center skillsets text-left text-4xl">
              <IconSet icons={skillIcons} />
            </div>
            <button onClick={flip} className="cursor-pointer md:hidden block mt-3">
              <i className="icomoon-arrow-left2" />
              <span className="sr-only">Show other side</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
