"use client"
import React, { createElement, useEffect, useRef, type JSX } from 'react';
import Rellax, { RellaxOptions } from 'rellax'

interface ContainerProps {
  options?: RellaxOptions
  as?: keyof JSX.IntrinsicElements
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
