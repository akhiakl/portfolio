import { skillCategories as defaultSkills, sectionTitles, type SkillCategory } from "@/lib/content"
import { inspectorProps } from "@/lib/cms/inspector"
import { ScrollAnimationSection, AnimatedElement } from "./scroll-animation-section"

export function SkillsSection({ skillCategories = defaultSkills }: { skillCategories?: SkillCategory[] }) {
  return (
    <ScrollAnimationSection as="section" id="skills" className="py-24">
      <h2 className="mb-10 flex items-center gap-2 text-2xl font-bold text-foreground sm:text-3xl">
        <span className="font-mono text-xl text-accent">{sectionTitles.skills.number}.</span>
        {sectionTitles.skills.title}
        <span className="ml-4 h-px flex-1 max-w-xs bg-border" />
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {skillCategories.map((category, categoryIndex) => (
          <AnimatedElement
            key={category.title}
            delay={categoryIndex * 150}
          >
            <h3 className="mb-4 font-mono text-lg text-accent" {...inspectorProps(category.entryId, "title")}>{category.title}</h3>
            <div className="flex flex-wrap gap-2" {...inspectorProps(category.entryId, "skills")}>
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded bg-card px-3 py-1.5 font-mono text-sm text-muted transition-colors hover:bg-accent/10 hover:text-accent"
                >
                  {skill}
                </span>
              ))}
            </div>
          </AnimatedElement>
        ))}
      </div>
    </ScrollAnimationSection>
  )
}
