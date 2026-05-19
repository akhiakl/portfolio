import { skillCategories, sectionTitles } from "@/lib/content"
import { ScrollAnimationSection, AnimatedElement } from "./scroll-animation-section"

export function SkillsSection() {
  return (
    <ScrollAnimationSection as="section" id="skills" className="section-shell">
      <h2 className="section-title">&gt; TECHNICAL_ARSENAL</h2>
      <h3 className="sr-only">{sectionTitles.skills.title}</h3>
      <div className="section-rule" />
      <p className="mb-8 font-mono text-[13px] text-on-surface-variant">{"// SKILL_MATRIX_LOADED"}</p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, categoryIndex) => (
          <AnimatedElement
            key={category.title}
            delay={categoryIndex * 150}
            className="bg-surface-container-low p-6 transition-colors duration-300 hover:border-primary-container"
          >
            <h4 className="mb-4 font-mono text-xs font-bold uppercase tracking-widest text-primary-container">{category.title}</h4>
            <p className="font-mono text-[13px] leading-relaxed text-on-surface">{category.skills.join(", ")}.</p>
          </AnimatedElement>
        ))}
      </div>
    </ScrollAnimationSection>
  )
}
