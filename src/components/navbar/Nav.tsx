import classNames from 'classnames'
import React, { ReactElement } from 'react'
import NavLink from './NavLink'

interface NavProps {
  children: ReactElement<typeof NavLink>[] | ReactElement<typeof NavLink>
  className: string
}
const Nav: React.FC<NavProps & React.AllHTMLAttributes<HTMLElement>> = ({ children, className, ...props }: NavProps) => {
  return (
    <ul
      {...props}
      className={classNames(
        `flex md:gap-12 gap-4 md:flex-row flex-col flex-1 md:justify-end justify-center items-center`,
        className
      )}
    >
      {children}
    </ul>
  )
}

export default Nav
