import { projects, sectionTitles } from "@/lib/content"
import { ScrollAnimationSection, AnimatedElement } from "./scroll-animation-section"

export function ProjectsSection() {
  return (
    <ScrollAnimationSection as="section" id="projects" className="section-shell">
      <h2 className="section-title">&gt; SELECTED_WORKS</h2>
      <h3 className="sr-only">{sectionTitles.projects.title}</h3>
      <div className="section-rule" />
      <p className="mb-8 font-mono text-[13px] text-on-surface-variant">{"// EXECUTE_PROJECT_QUERY"}</p>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </ScrollAnimationSection>
  )
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const ctaHref = project.github && project.github !== "#" ? project.github : project.live
  const isExternal = ctaHref.startsWith("http")

  return (
    <AnimatedElement
      delay={index * 200}
      className="group flex flex-col items-start justify-between gap-4 bg-surface-container-low p-6 transition-colors duration-300 hover:bg-surface-container md:flex-row md:items-center"
    >
      <div>
        <h3 className="mb-2 font-mono text-2xl font-semibold text-primary transition-colors group-hover:text-primary-container">
          {project.title}
        </h3>
        <p className="mb-4 max-w-3xl font-mono text-[15px] leading-relaxed text-on-surface-variant">{project.description}</p>
        <ul className="flex flex-wrap gap-2 font-mono text-[13px] text-primary-container">
          {project.tech.map((tech) => (
            <li key={tech} className="border-primary-container/30 bg-primary-container/5 px-2 py-1">
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <a
        href={ctaHref}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="cyber-btn self-start px-4 py-2 font-mono text-[13px] uppercase opacity-100 transition-opacity md:self-auto md:opacity-0 md:group-hover:opacity-100"
      >
        {project.github && project.github !== "#" ? "VIEW_SOURCE" : "VIEW_LIVE"}
      </a>
    </AnimatedElement>
  )
}
