import React from 'react'

const AnimatedButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    primaryColor?: string
    secondaryColor?: string
  }
> = ({ children, className, primaryColor, secondaryColor, ...props }) => {
  const textColorClass = `md:group-hover:text-${primaryColor || 'black-50'}`
  console.log(textColorClass);

  return (
    <button
      {...props}
      className={`group relative bg-${primaryColor || 'black-50'} border-2 border-${secondaryColor || 'red-500'
        } box-content text-${secondaryColor || 'red-500'} shadow-sm px-6 py-2 ${className || ''}`}
    >
      <span
        className={`top-line bg-${primaryColor || 'black-50'
          } absolute -top-0.5 left-0 h-0.5 w-4 md:group-hover:w-0 transition-size duration-500`}
      ></span>
      <span className={`relative z-10 ${textColorClass}`}>
        {children}
      </span>
      <span
        className={`bottom-line bg-${primaryColor || 'black-50'
          } absolute -bottom-0.5 right-0 h-0.5 w-4 md:group-hover:w-0 transition-size duration-500`}
      ></span>
      <span
        className={`absolute bg-${secondaryColor || 'red-500'
          } w-0 h-full left-0 top-0 md:group-hover:w-full z-1 transition-size duration-500`}
      ></span>
    </button>
  )
}

export default AnimatedButton
