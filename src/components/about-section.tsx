import { GameLoader } from "./game-loader"
import { ScrollAnimationSection } from "./scroll-animation-section"
import { aboutContent } from "@/lib/about-content"

export function AboutSection() {

  return (
    <ScrollAnimationSection as="section" id="about" className="py-24">
      <h2 className="mb-10 flex items-center gap-2 text-2xl font-bold text-foreground sm:text-3xl">
        <span className="font-mono text-xl text-accent">{aboutContent.sectionNumber}.</span>
        {aboutContent.title}
        <span className="ml-4 h-px flex-1 max-w-xs bg-border" />
      </h2>

      <div className="grid gap-12 md:grid-cols-3">
        <div className="space-y-4 md:col-span-2">
          {aboutContent.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-muted leading-relaxed">
              {paragraph.text}
              {paragraph.highlight && <span className="text-accent">{paragraph.highlight}</span>}
              {paragraph.continuation}
            </p>
          ))}
        </div>

        <div className="relative mx-auto w-full max-w-xs">
          <div className="group relative">
            <div className="relative z-10 overflow-hidden rounded bg-card border border-border aspect-square">
              <GameLoader />
            </div>
            <div className="absolute -bottom-3 -right-3 z-0 h-full w-full rounded border-2 border-accent transition-all duration-300 group-hover:-bottom-4 group-hover:-right-4" />
          </div>
        </div>
      </div>
    </ScrollAnimationSection>
  )
}
