import type { SiteContent } from "@/lib/cms/mappers"
import { Navigation } from "./navigation"
import { HeroSection } from "./hero-section"
import { AboutSection } from "./about-section"
import { SkillsSection } from "./skills-section"
import { ProjectsSection } from "./projects-section"
import { CurrentlyBuildingSection } from "./currently-building-section"
import { ExperienceSection } from "./experience-section"
import { ContactSection } from "./contact-section"
import { Footer } from "./footer"

// Pure and isomorphic: rendered by the server page and by the live preview client component.
export function SiteSections({ content }: { content: SiteContent }) {
  const { settingsEntryId } = content
  return (
    <>
      <Navigation name={content.personalInfo.name} />
      <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-24">
        <HeroSection hero={content.personalInfo.hero} entryId={settingsEntryId} />
        <AboutSection aboutContent={content.about} entryId={settingsEntryId} />
        <SkillsSection skillCategories={content.skills} />
        <ProjectsSection projects={content.projects} />
        <CurrentlyBuildingSection currentlyBuilding={content.currentlyBuilding} />
        <ExperienceSection experiences={content.experiences} />
        <ContactSection contactContent={content.contact} entryId={settingsEntryId} />
      </div>
      <Footer socialLinks={content.contact.socialLinks} />
    </>
  )
}
