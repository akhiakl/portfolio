import classNames from 'classnames'
import React, { ReactElement, useState } from 'react'
import { Link } from 'react-scroll'
import { ReactScrollLinkProps } from 'react-scroll/modules/components/Link'

interface NavLinkProps {
  text?: string
  children?: ReactElement
}

const NavLink = ({
  children,
  text,
  onSetActive,
  onSetInactive,
  ...props
}: ReactScrollLinkProps & NavLinkProps): JSX.Element => {
  const [active, setActive] = useState(false)
  const handleSetActive = (to: string, element: HTMLElement): void => {
    setActive(true)
    onSetActive?.(to, element)
  }
  const handleSetInactive = (to: string, element: HTMLElement): void => {
    setActive(false)
    onSetInactive?.(to, element)
  }
  return (
    <li
      className={classNames('text-xs text-center cursor-pointer navlink', {
        active: active,
      })}
    >
      <Link
        activeClass="text-red-500"
        spy={true}
        hashSpy={true}
        smooth={true}
        duration={300}
        onSetActive={handleSetActive}
        onSetInactive={handleSetInactive}
        {...props}
      >
        <p className="uppercase">{children || text || props?.to}</p>
      </Link>
    </li>
  )
}

export default NavLink
