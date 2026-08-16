import { describe, expect, it } from "vitest"
import {
    achievements,
    aboutContent,
    contactContent,
    currentlyBuilding,
    education,
    experiences,
    featuredProjects,
    footerContent,
    languages,
    navigationLinks,
    personalInfo,
    projects,
    sectionTitles,
    skillCategories,
} from "./content"

describe("content exports", () => {
    it("keeps core personal and SEO data", () => {
        expect(personalInfo.name).toBe("Akhil K")
        expect(personalInfo.seo.keywords.length).toBeGreaterThan(5)
        expect(personalInfo.contact.email).toContain("@")
    })

    it("links contact and footer values from personal info", () => {
        expect(contactContent.primaryCta.href).toBe(`mailto:${personalInfo.contact.email}`)
        expect(contactContent.socialLinks[1].href).toBe(personalInfo.contact.linkedin)
        expect(footerContent.builtBy).toContain(personalInfo.name)
    })

    it("contains sectioned portfolio data", () => {
        expect(sectionTitles.projects.number).toBe("03")
        expect(navigationLinks).toHaveLength(5)
        expect(aboutContent.paragraphs.length).toBeGreaterThan(0)
        expect(skillCategories.length).toBeGreaterThan(0)
        expect(experiences.length).toBeGreaterThan(0)
        expect(featuredProjects.length).toBeGreaterThan(0)
        expect(projects.length).toBeGreaterThan(0)
        expect(currentlyBuilding.length).toBeGreaterThan(0)
        expect(achievements.length).toBe(4)
        expect(education.institution).toContain("Cochin")
        expect(languages[0].language).toBe("English")
    })
})
