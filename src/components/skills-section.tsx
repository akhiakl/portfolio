"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Styled Components",
      "shadcn/ui",
      "Webpack",
      "Vite",
      "Storybook",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "NestJS", "PostgreSQL", "MongoDB", "GraphQL", "REST APIs"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "Docker", "AWS", "Vercel", "CI/CD", "Jest", "React Testing Library"],
  },
]

export function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section id="skills" ref={ref} className="py-24">
      <div
        className={cn(
          "transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        )}
      >
        <h2 className="mb-10 flex items-center gap-2 text-2xl font-bold text-foreground sm:text-3xl">
          <span className="font-mono text-xl text-accent">02.</span>
          Skills & Technologies
          <span className="ml-4 h-px flex-1 max-w-xs bg-border" />
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={cn(
                "transition-all duration-500",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
              )}
              style={{ transitionDelay: `${categoryIndex * 150}ms` }}
            >
              <h3 className="mb-4 font-mono text-lg text-accent">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded bg-card px-3 py-1.5 font-mono text-sm text-muted transition-colors hover:bg-cardover)] hover:text-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
