import Image from "next/image"
import { ScrollAnimationSection, AnimatedElement } from "./scroll-animation-section"
import { personalInfo, type PersonalInfo } from "@/lib/content"
import { inspectorProps } from "@/lib/cms/inspector"

type HeroSectionProps = {
  hero?: PersonalInfo["hero"]
  entryId?: string
}

export function HeroSection({ hero = personalInfo.hero, entryId }: HeroSectionProps) {
  return (
    <ScrollAnimationSection as="section" className="flex min-h-screen items-center py-20">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center w-full">
        {/* Text Content */}
        <div className="space-y-6 order-2 lg:order-1">
          <AnimatedElement as="p" delay={100} className="font-mono text-accent">
            {hero.greeting}
          </AnimatedElement>

          <AnimatedElement
            as="h1"
            delay={200}
            {...inspectorProps(entryId, "name")}
            className="text-4xl font-bold text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {hero.name}
          </AnimatedElement>

          <AnimatedElement as="p" delay={250} className="font-mono text-sm text-accent sm:text-base" {...inspectorProps(entryId, "heroRole")}>
            {hero.role}
          </AnimatedElement>

          <AnimatedElement
            as="h2"
            delay={300}
            {...inspectorProps(entryId, "tagline")}
            className="text-2xl font-bold text-muted sm:text-3xl md:text-4xl lg:text-5xl"
          >
            {hero.tagline}
          </AnimatedElement>

          <AnimatedElement
            as="p"
            delay={400}
            {...inspectorProps(entryId, "description")}
            className="max-w-xl text-lg text-muted"
          >
            {hero.description}
          </AnimatedElement>

          <AnimatedElement delay={500} className="flex flex-wrap gap-4 pt-6">
            <a
              href={hero.primaryCta.href}
              className="group relative overflow-hidden rounded border border-accent px-7 py-4 font-mono text-sm text-accent transition-all hover:bg-accent/10"
            >
              {hero.primaryCta.text}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="rounded bg-accent px-7 py-4 font-mono text-sm text-primary-foreground transition-all hover:bg-accent/90"
            >
              {hero.secondaryCta.text}
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
                src={hero.image.src}
                alt={hero.image.alt}
                width={400}
                height={500}
                className="grayscale hover:grayscale-0 transition-all duration-500 object-cover"
                preload
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
