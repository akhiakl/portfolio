"use client"

import { cn } from '@/lib/utils'
import React, { useEffect, useState } from 'react'

type MobileNavigationProps = {
    navLinks: { name: string; href: string }[]
}

export const MobileNavigation = ({ navLinks }: MobileNavigationProps) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
        return () => {
            document.body.style.overflow = ""
        }
    }, [mobileMenuOpen])

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape" && mobileMenuOpen) {
                setMobileMenuOpen(false)
            }
        }
        window.addEventListener("keydown", handleEscape)
        return () => window.removeEventListener("keydown", handleEscape)
    }, [mobileMenuOpen])

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
            >
                <span
                    className={cn(
                        "h-0.5 w-6 bg-accent transition-all duration-300",
                        mobileMenuOpen && "translate-y-2 rotate-45",
                    )}
                />
                <span
                    className={cn(
                        "h-0.5 w-6 bg-accent transition-all duration-300",
                        mobileMenuOpen && "opacity-0",
                    )}
                />
                <span
                    className={cn(
                        "h-0.5 w-6 bg-accent transition-all duration-300",
                        mobileMenuOpen && "-translate-y-2 -rotate-45",
                    )}
                />
            </button>

            <div
                className={cn(
                    "fixed inset-0 top-0 left-0 h-screen w-screen flex items-center justify-center bg-card transition-all duration-300 md:hidden",
                    mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none",
                )}
            >
                <ul className="flex flex-col items-center gap-8">
                    {navLinks.map((link, index) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex flex-col items-center gap-1 text-lg text-foreground transition-colors hover:text-accent"
                            >
                                <span className="font-mono text-sm text-accent">0{index + 1}.</span>
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            href="/resume.pdf"
                            onClick={() => setMobileMenuOpen(false)}
                            className="mt-4 rounded border border-accent px-6 py-3 text-accent transition-all hover:bg-accent/10"
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}