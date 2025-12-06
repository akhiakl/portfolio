"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import { createContext, useContext, ReactNode, ElementType } from "react"

// Context to share scroll visibility state
const ScrollVisibilityContext = createContext<boolean>(false)

export const useScrollVisibility = () => useContext(ScrollVisibilityContext)

interface ScrollAnimationSectionProps {
    children: ReactNode
    className?: string
    threshold?: number
    as?: ElementType
    [key: string]: any
}

export function ScrollAnimationSection({
    children,
    className,
    threshold = 0.1,
    as: Component = 'div',
    ...props
}: ScrollAnimationSectionProps) {
    const { ref, isVisible } = useScrollAnimation({ threshold })

    return (
        <ScrollVisibilityContext.Provider value={isVisible}>
            <Component
                ref={ref}
                className={cn(
                    "transition-all duration-700",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                    className
                )}
                {...props}
            >
                {children}
            </Component>
        </ScrollVisibilityContext.Provider>
    )
}

// Helper component for individual animated elements
interface AnimatedElementProps {
    children: ReactNode
    className?: string
    delay?: number
    as?: ElementType
}

export function AnimatedElement({
    children,
    className,
    delay = 0,
    as: Component = 'div'
}: AnimatedElementProps) {
    const isVisible = useScrollVisibility()

    return (
        <Component
            className={cn(
                "transition-all duration-500",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                className
            )}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </Component>
    )
}