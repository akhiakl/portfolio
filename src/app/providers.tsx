'use client'
import React, { PropsWithChildren, useEffect } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'

const Providers = ({ children }: PropsWithChildren) => {
    return (
        <ParallaxProvider>
            {children}
        </ParallaxProvider>
    )
}

export default Providers