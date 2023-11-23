import React from 'react'

const AnimatedButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className,...props }) => (
  <button
    {...props}
    className={`group relative bg-red-500 border-2 border-gray-50 box-content text-gray-50 shadow-sm px-6 py-2 ${className || ''}`}
  >
    <span
      className={`top-line bg-red-500 absolute -top-0.5 left-0 h-0.5 w-4 md:group-hover:w-0 transition-size duration-500`}
    ></span>
    <span className={`relative z-10 md:group-hover:text-red-500`}>
      {children}
    </span>
    <span
      className={`bottom-line bg-red-500 absolute -bottom-0.5 right-0 h-0.5 w-4 md:group-hover:w-0 transition-size duration-500`}
    ></span>
    <span
      className={`absolute bg-gray-50 w-0 h-full left-0 top-0 md:group-hover:w-full z-1 transition-size duration-500`}
    ></span>
  </button>
)

export default AnimatedButton
