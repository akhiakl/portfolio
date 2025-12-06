"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import Image from "next/image"

export function HeroSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section ref={ref} className="flex min-h-screen items-center py-20">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center w-full">
        {/* Text Content */}
        <div className="space-y-6 order-2 lg:order-1">
          <p
            className={cn(
              "font-mono text-accent transition-all duration-500",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            )}
            style={{ transitionDelay: "100ms" }}
          >
            Hi, my name is
          </p>

          <h1
            className={cn(
              "text-4xl font-bold text-foreground transition-all duration-500 sm:text-5xl md:text-6xl lg:text-7xl",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            )}
            style={{ transitionDelay: "200ms" }}
          >
            Akhil K.
          </h1>

          <h2
            className={cn(
              "text-2xl font-bold text-muted transition-all duration-500 sm:text-3xl md:text-4xl lg:text-5xl",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            )}
            style={{ transitionDelay: "300ms" }}
          >
            I build intuitive user interfaces.
          </h2>

          <p
            className={cn(
              "max-w-xl text-lg text-muted transition-all duration-500",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            )}
            style={{ transitionDelay: "400ms" }}
          >
            Lead Frontend Developer specialized in React, Next.js, performance-first engineering, and full stack
            development with Node.js. I craft clean, scalable, and accessible web experiences.
          </p>

          <div
            className={cn(
              "flex flex-wrap gap-4 pt-6 transition-all duration-500",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            )}
            style={{ transitionDelay: "500ms" }}
          >
            <a
              href="#projects"
              className="group relative overflow-hidden rounded border border-accent px-7 py-4 font-mono text-sm text-accent transition-all hover:bg-accent/10"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="rounded bg-accent px-7 py-4 font-mono text-sm text-primaryoreground)] transition-all hover:bg-accent/90"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Portrait Image */}
        <div
          className={cn(
            "relative order-1 lg:order-2 flex justify-center lg:justify-end transition-all duration-700",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8",
          )}
          style={{ transitionDelay: "300ms" }}
        >
          <div className="relative">
            {/* Decorative accent border */}
            <div className="absolute -inset-4 rounded-lg border border-accent/20 -z-10" />
            <div className="absolute -inset-8 rounded-lg border border-accent/10 -z-20" />

            <div className="relative overflow-hidden rounded-lg bg-card">
              <Image
                src="/images/akhil-portrait.webp"
                alt="Akhil K - Lead Frontend Developer"
                width={400}
                height={500}
                className="grayscale hover:grayscale-0 transition-all duration-500 object-cover"
                priority
              />
              {/* Red accent overlay on hover */}
              <div className="absolute inset-0 bg-accent/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
