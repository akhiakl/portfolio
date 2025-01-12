'use client'
import React, { PropsWithChildren, useEffect } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import AOS from 'aos'

const Providers = ({ children }: PropsWithChildren) => {
    useEffect(() => {
        AOS.init({
            easing: 'ease-out-cubic',
            // once: true,
        })
    }, [])
    return (
        <ParallaxProvider>
            {children}
        </ParallaxProvider>
    )
}

export default Providers