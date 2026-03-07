import { projects, sectionTitles } from "@/lib/content"
import { cn } from "@/lib/utils"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import { ScrollAnimationSection, AnimatedElement } from "./scroll-animation-section"

export function ProjectsSection() {
  return (
    <ScrollAnimationSection as="section" id="projects" className="py-24">
      <h2 className="mb-10 flex items-center gap-2 text-2xl font-bold text-foreground sm:text-3xl">
        <span className="font-mono text-xl text-accent">{sectionTitles.projects.number}.</span>
        {sectionTitles.projects.title}
        <span className="ml-4 h-px flex-1 max-w-xs bg-border" />
      </h2>      <div className="space-y-24">
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
  const isEven = index % 2 === 0

  return (
    <AnimatedElement
      delay={index * 200}
      className="group relative grid gap-4 md:grid-cols-12 md:items-center"
    >
      {/* Project Image */}
      <div
        className={cn(
          "relative overflow-hidden rounded bg-card md:col-span-7 md:row-start-1",
          isEven ? "md:col-start-1" : "md:col-start-6",
        )}
      >
        <a href={project.live} className="block">
          <div className="aspect-video overflow-hidden">
            {project.image && <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 700px"
              className="h-full w-full object-cover opacity-60 transition-all duration-300 group-hover:opacity-80 group-hover:scale-105"
            />}
          </div>
          <div className="absolute inset-0 bg-accent/10 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-0" />
        </a>
      </div>

      {/* Project Info */}
      <div
        className={cn(
          "relative z-10 md:col-span-6 md:row-start-1",
          isEven ? "md:col-start-6 md:text-right" : "md:col-start-1 md:text-left",
        )}
      >
        <p className="mb-1 font-mono text-sm text-accent">Featured Project</p>
        <h3 className="mb-4 text-2xl font-bold text-foreground transition-colors group-hover:text-accent">
          <a href={project.live}>{project.title}</a>
        </h3>

        <div className="mb-4 rounded bg-card p-6 shadow-xl">
          <p className="text-muted leading-relaxed">{project.description}</p>
          <ul className={cn("mt-4 space-y-1", isEven ? "md:text-right" : "md:text-left")}>
            {project.responsibilities.map((resp) => (
              <li
                key={resp}
                className="flex items-center gap-2 text-sm text-muted"
                style={{
                  justifyContent: isEven ? "flex-end" : "flex-start",
                }}
              >
                <span className="text-accent">▹</span>
                {resp}
              </li>
            ))}
          </ul>
        </div>

        <ul
          className={cn(
            "mb-4 flex flex-wrap gap-3 font-mono text-sm text-muted",
            isEven ? "md:justify-end" : "md:justify-start",
          )}
        >
          {project.tech.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <div className={cn("flex gap-4", isEven ? "md:justify-end" : "md:justify-start")}>
          <a
            href={project.live}
            className="text-foreground transition-colors hover:text-accent"
            aria-label="Live Demo"
          >
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </div>
    </AnimatedElement>
  )
}
