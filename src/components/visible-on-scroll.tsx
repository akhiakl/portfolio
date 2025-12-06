"use client"
import React from 'react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'

type VisibleOnScrollProps<T extends React.ElementType = 'div'> = React.ComponentProps<T> & {
    containerClassName?: string
    as?: React.ElementType
}

const VisibleOnScroll = ({ containerClassName, as: Component = 'div', ...props }: VisibleOnScrollProps) => {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

    return (
        <Component ref={ref} {...props}>
            <div className={cn(
                "transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                containerClassName
            )} />
        </Component>
    )
}

export default VisibleOnScroll