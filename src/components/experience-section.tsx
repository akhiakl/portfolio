"use client"

import { cn } from "@/lib/utils"
import { experiences } from "@/lib/experience"
import { sectionTitles } from "@/lib/site-content"
import { useState } from "react"
import VisibleOnScroll from "./visible-on-scroll"

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <VisibleOnScroll as="section" id="experience" className="py-24">
      <h2 className="mb-10 flex items-center gap-2 text-2xl font-bold text-foreground sm:text-3xl">
        <span className="font-mono text-xl text-accent">{sectionTitles.experience.number}.</span>
        {sectionTitles.experience.title}
        <span className="ml-4 h-px flex-1 max-w-xs bg-border" />
      </h2>

      <div className="flex flex-col gap-4 md:flex-row md:gap-8">
        {/* Tab List */}
        <div className="flex overflow-x-auto md:flex-col md:overflow-visible">
          {experiences.map((exp, index) => (
            <button
              key={exp.company}
              onClick={() => setActiveTab(index)}
              className={cn(
                "relative whitespace-nowrap px-5 py-3 font-mono text-sm transition-all text-left",
                activeTab === index
                  ? "text-accent bg-card"
                  : "text-muted hover:text-accent hover:bg-card/50",
              )}
            >
              {exp.company}
              <span
                className={cn(
                  "absolute bottom-0 left-0 h-0.5 w-full bg-accent transition-transform md:bottom-auto md:left-0 md:top-0 md:h-full md:w-0.5",
                  activeTab === index ? "scale-100" : "scale-0",
                )}
              />
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-80 flex-1">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className={cn(
                "transition-all duration-300",
                activeTab === index ? "opacity-100 visible" : "opacity-0 invisible absolute",
              )}
            >
              <h3 className="text-xl font-medium text-foreground">
                {exp.role} <span className="text-accent">@ {exp.company}</span>
              </h3>
              <p className="mb-2 mt-1 font-mono text-sm text-muted">{exp.period}</p>
              {exp.location && (
                <p className="mb-2 font-mono text-sm text-muted">{exp.location}</p>
              )}
              {exp.note && (
                <p className="mb-6 text-sm text-muted italic">{exp.note}</p>
              )}
              {!exp.note && <div className="mb-6" />}
              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex gap-3 text-muted">
                    <span className="mt-1.5 text-accent">▹</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </VisibleOnScroll>
  )
}
