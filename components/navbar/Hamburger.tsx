import React from 'react'
import classNames from 'classnames'

interface HamburgerProps {
  open: boolean
  primaryColor?: string
}

const Hamburger: React.FC<HamburgerProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  open,
  className,
  primaryColor,
  ...props
}) => {
  return (
    <button
      className={`${className} text-red-500 w-14 h-14 focus:outline-none rounded-full bg-${
        primaryColor || 'black-50'
      }`}
      {...props}
    >
      <span className="sr-only">Open main menu</span>
      <div className="block w-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-0.5 transform-gpu">
        <span
          aria-hidden="true"
          className={classNames(
            {
              'md:rotate-0 md:-translate-y-2.5 rotate-45': open,
              '-translate-y-2.5': !open,
            },
            'block absolute h-1 w-8 bg-current transform-gpu transition duration-500 ease-in-out'
          )}
        ></span>
        <span
          aria-hidden="true"
          className={classNames(
            {
              'md:opacity-100 opacity-0': open,
            },
            'block absolute h-1 w-8 bg-current transform-gpu transition duration-500 ease-in-out'
          )}
        ></span>
        <span
          aria-hidden="true"
          className={classNames(
            {
              'md:rotate-0 md:translate-y-2.5 -rotate-45': open,
              'translate-y-2.5': !open,
            },
            'block absolute h-1 w-8 bg-current transform-gpu transition duration-500 ease-in-out'
          )}
        ></span>
      </div>
    </button>
  )
}

export default Hamburger
