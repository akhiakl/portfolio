import { experiences, sectionTitles } from "@/lib/content"
import VisibleOnScroll from "./visible-on-scroll"

export function ExperienceSection() {
  return (
    <VisibleOnScroll as="section" id="experience" className="section-shell">
      <h2 className="section-title">&gt; EXPERIENCE_LOG</h2>
      <h3 className="sr-only">{sectionTitles.experience.title}</h3>
      <div className="section-rule" />
      <p className="mb-8 font-mono text-[13px] text-on-surface-variant">{"// FETCHING_TIMELINE_DATA"}</p>

      <div className="relative ml-4 space-y-12 border-l border-outline-variant pb-4">
        {experiences.flatMap((exp) => exp.roles.map((role) => ({ exp, role }))).map(({ exp, role }, index) => (
          <div key={`${exp.company}-${role.role}`} className="relative pl-8">
            <div className={`absolute -left-[6.5px] top-2 h-3 w-3 ${index === 0 ? "bg-primary-container" : "bg-outline-variant"}`} />
            <div className={`mb-1 font-mono text-[13px] ${index === 0 ? "text-primary-container" : "text-on-surface-variant"}`}>
              {role.period}
            </div>
            <h4 className={`mb-1 font-mono text-2xl font-semibold ${index === 0 ? "text-primary" : "text-on-surface"}`}>
              {role.role}
            </h4>
            <div className="mb-4 font-mono text-[13px] text-on-surface-variant">@ {exp.company}</div>
            {role.note && <p className="mb-4 font-mono text-[13px] italic text-on-surface-variant">{role.note}</p>}
            <ul className={`list-disc max-w-3xl font-mono text-[15px] leading-relaxed ${index === 0 ? "text-on-surface" : "text-on-surface-variant"}`}>
              {role.description.map((item, i) => (
                <li key={i} className="flex gap-3 text-muted">
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </VisibleOnScroll>
  )
}
