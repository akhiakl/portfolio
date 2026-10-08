import { ScrollAnimationSection } from "./scroll-animation-section"
import { aboutContent as defaultAbout, type AboutContent } from "@/lib/content"
import { inspectorProps } from "@/lib/cms/inspector"

type AboutSectionProps = {
  aboutContent?: AboutContent
  entryId?: string
}

export function AboutSection({ aboutContent = defaultAbout, entryId }: AboutSectionProps) {
  return (
    <ScrollAnimationSection as="section" id="about" className="py-24">
      <h2 className="mb-10 flex items-center gap-2 text-2xl font-bold text-foreground sm:text-3xl">
        <span className="font-mono text-xl text-accent">{aboutContent.sectionNumber}.</span>
        {aboutContent.title}
        <span className="ml-4 h-px flex-1 max-w-xs bg-border" />
      </h2>

      <div className="grid gap-12 md:grid-cols-3">
        <div className="space-y-4 md:col-span-2" {...inspectorProps(entryId, "aboutParagraphs")}>
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
            <div className="relative z-10 rounded border border-border bg-card p-6">
              <h3 className="mb-4 font-mono text-sm text-accent">{aboutContent.technologies.title}</h3>
              <ul className="space-y-2" {...inspectorProps(entryId, "focusAreas")}>
                {aboutContent.technologies.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted">
                    <span className="text-accent">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute -bottom-3 -right-3 z-0 h-full w-full rounded border-2 border-accent transition-all duration-300 group-hover:-bottom-4 group-hover:-right-4" />
          </div>
        </div>
      </div>
    </ScrollAnimationSection>
  )
}
