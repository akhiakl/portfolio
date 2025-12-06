import Image from "next/image"
import { ScrollAnimationSection, AnimatedElement } from "./scroll-animation-section"

export function HeroSection() {
  return (
    <ScrollAnimationSection as="section" className="flex min-h-screen items-center py-20">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center w-full">
        {/* Text Content */}
        <div className="space-y-6 order-2 lg:order-1">
          <AnimatedElement as="p" delay={100} className="font-mono text-accent">
            Hi, my name is
          </AnimatedElement>

          <AnimatedElement
            as="h1"
            delay={200}
            className="text-4xl font-bold text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Akhil K.
          </AnimatedElement>

          <AnimatedElement
            as="h2"
            delay={300}
            className="text-2xl font-bold text-muted sm:text-3xl md:text-4xl lg:text-5xl"
          >
            I build intuitive user interfaces.
          </AnimatedElement>

          <AnimatedElement
            as="p"
            delay={400}
            className="max-w-xl text-lg text-muted"
          >
            Lead Frontend Developer specialized in React, Next.js, performance-first engineering, and full stack
            development with Node.js. I craft clean, scalable, and accessible web experiences.
          </AnimatedElement>

          <AnimatedElement delay={500} className="flex flex-wrap gap-4 pt-6">
            <a
              href="#projects"
              className="group relative overflow-hidden rounded border border-accent px-7 py-4 font-mono text-sm text-accent transition-all hover:bg-accent/10"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="rounded bg-accent px-7 py-4 font-mono text-sm text-primary-foreground transition-all hover:bg-accent/90"
            >
              Contact Me
            </a>
          </AnimatedElement>
        </div>

        {/* Portrait Image */}
        <AnimatedElement
          delay={300}
          className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
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
        </AnimatedElement>
      </div>
    </ScrollAnimationSection>
  )
}
