import dynamic from "next/dynamic"
import { ScrollAnimationSection, AnimatedElement } from "./scroll-animation-section"
import { personalInfo } from "@/lib/content"
const BinaryPanel = dynamic(() => import("./binary-system"))

export function HeroSection() {
  return (
    <ScrollAnimationSection
      as="section"
      id="hero"
      className="relative flex min-h-[614px] flex-col justify-center overflow-hidden bg-surface-container-low p-8 md:p-16"
    >
      <div className="relative z-10 max-w-3xl">
        <div className="space-y-6">
          <AnimatedElement as="p" delay={100} className="font-mono text-[13px] text-primary-container">
            &gt; SYSTEM_INIT: <span className="blinking-cursor">READY</span>
          </AnimatedElement>

          <AnimatedElement
            as="h1"
            delay={200}
            className="font-mono text-4xl font-bold uppercase leading-tight text-primary sm:text-5xl lg:text-6xl"
          >
            Architecting Digital Infrastructures
          </AnimatedElement>

          <AnimatedElement
            as="p"
            delay={300}
            className="max-w-2xl font-mono text-lg leading-relaxed text-on-surface-variant"
          >
            Technical architect specializing in scalable frontend systems, robust cloud architectures, and high-performance digital experiences. Translating complex business logic into precise code.
          </AnimatedElement>

          <AnimatedElement delay={400} className="flex flex-wrap gap-4 pt-2">
            <a
              href={personalInfo.hero.primaryCta.href}
              className="cyber-btn shadow-neon bg-primary-container/10 px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest"
            >
              VIEW_WORKS
            </a>
            <a
              href={personalInfo.hero.secondaryCta.href}
              className="border border-outline-variant px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest text-on-surface transition-colors hover:text-primary-container"
            >
              INITIALIZE_CONTACT
            </a>
          </AnimatedElement>
        </div>
      </div>

      <BinaryPanel />
    </ScrollAnimationSection>
  )
}
