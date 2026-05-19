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
                className="cyber-btn relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
            >
                <span
                    className={cn(
                        "h-0.5 w-6 bg-primary-container transition-all duration-300",
                        mobileMenuOpen && "translate-y-2 rotate-45",
                    )}
                />
                <span
                    className={cn(
                        "h-0.5 w-6 bg-primary-container transition-all duration-300",
                        mobileMenuOpen && "opacity-0",
                    )}
                />
                <span
                    className={cn(
                        "h-0.5 w-6 bg-primary-container transition-all duration-300",
                        mobileMenuOpen && "-translate-y-2 -rotate-45",
                    )}
                />
            </button>

            <div
                className={cn(
                    "fixed inset-0 left-0 top-0 flex h-screen w-screen items-center justify-center bg-surface-container-low transition-all duration-300 md:hidden",
                    mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none",
                )}
            >
                <ul className="flex flex-col items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="font-mono text-lg uppercase text-on-surface-variant transition-colors hover:text-primary"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            href="/resume.pdf"
                            onClick={() => setMobileMenuOpen(false)}
                            className="cyber-btn mt-4 px-6 py-3 font-mono uppercase"
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}
