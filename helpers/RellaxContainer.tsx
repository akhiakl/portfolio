/* eslint-disable react/jsx-props-no-spreading */
import React, { createElement, ReactHTML, useEffect, useRef } from 'react'
import Rellax, { RellaxOptions } from 'rellax'

interface ContainerProps {
  options?: RellaxOptions
  as?: keyof ReactHTML
}

const RellaxContainer = ({
  options,
  children,
  as,
  ...props
}: ContainerProps & React.AllHTMLAttributes<HTMLElement>): JSX.Element => {
  const ref = useRef(null)
  useEffect(() => {
    const rellax = new Rellax(ref?.current || '.about-rellax', options)
    return () => {
      rellax?.destroy()
    }
  }, [options])
  return createElement(as || 'div', { ...props, ref }, children)
}

export default RellaxContainer
