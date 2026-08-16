import { currentlyBuilding, sectionTitles } from "@/lib/content"
import { ScrollAnimationSection, AnimatedElement } from "./scroll-animation-section"

export function CurrentlyBuildingSection() {
  return (
    <ScrollAnimationSection as="section" id="currently-building" className="py-24">
      <h2 className="mb-10 flex items-center gap-2 text-2xl font-bold text-foreground sm:text-3xl">
        <span className="font-mono text-xl text-accent">{sectionTitles.currentlyBuilding.number}.</span>
        {sectionTitles.currentlyBuilding.title}
        <span className="ml-4 h-px flex-1 max-w-xs bg-border" />
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {currentlyBuilding.map((project, index) => (
          <AnimatedElement key={project.title} delay={index * 150}>
            <div className="relative h-full rounded border border-dashed border-border bg-card/60 p-6">
              <span className="absolute right-6 top-6 rounded-full border border-accent/40 px-2.5 py-0.5 font-mono text-xs text-accent/80">
                {project.status}
              </span>

              <h3 className="mb-3 pr-24 text-lg font-bold text-foreground">{project.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-muted">{project.description}</p>

              <ul className="flex flex-wrap gap-2 font-mono text-xs text-muted">
                {project.tech.map((tech) => (
                  <li key={tech} className="rounded bg-card px-2.5 py-1">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedElement>
        ))}
      </div>
    </ScrollAnimationSection>
  )
}
