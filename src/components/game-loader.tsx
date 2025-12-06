"use client"

import { useState, lazy, Suspense } from "react"
import { Play } from "lucide-react"

const SpaceGame = lazy(() => import("./space-game").then((mod) => ({ default: mod.SpaceGame })))

export function GameLoader() {
    const [isLoaded, setIsLoaded] = useState(false)

    if (!isLoaded) {
        return (
            <button
                onClick={() => setIsLoaded(true)}
                className="w-full h-full flex flex-col items-center justify-center gap-4 bg-[var(--color-background)] hover:bg-[var(--color-card)] transition-colors cursor-pointer group"
                aria-label="Click to play Space Invaders game"
            >
                {/* Static invader icons as placeholder */}
                <div className="flex gap-3 opacity-40 group-hover:opacity-60 transition-opacity">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="relative">
                            <div className="w-4 h-3 bg-[var(--color-muted)]" />
                            <div className="absolute -left-1 top-1 w-1 h-1.5 bg-[var(--color-muted)]" />
                            <div className="absolute -right-1 top-1 w-1 h-1.5 bg-[var(--color-muted)]" />
                        </div>
                    ))}
                </div>

                <div className="flex items-center gap-2 text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-colors">
                    <Play className="w-5 h-5" />
                    <span className="font-mono text-sm">play game</span>
                </div>

                <p className="text-xs text-[var(--color-muted)] opacity-60">move with mouse or touch</p>
            </button>
        )
    }

    return (
        <Suspense
            fallback={
                <div className="w-full h-full flex items-center justify-center bg-[var(--color-background)]">
                    <span className="font-mono text-sm text-[var(--color-muted)] animate-pulse">loading...</span>
                </div>
            }
        >
            <SpaceGame />
        </Suspense>
    )
}
