import { describe, expect, it } from "vitest"
import { buildSiteContent, fallbackContent } from "./mappers"
import type { RawSiteData } from "./types"

const settings = {
    __typename: "SiteSettings",
    sys: { id: "settings" },
    name: "Jane D",
    title: "Staff Engineer",
    tagline: "Tagline",
    description: "Description",
    email: "jane@example.com",
    github: "https://github.com/jane",
    heroImage: { url: "https://images.ctfassets.net/x/portrait.webp", description: "Jane portrait" },
    seoKeywords: ["one", ""],
    focusAreas: ["Focus"],
    aboutParagraphs: [{ text: "Hello ", highlight: "world" }, { nope: true }],
}

const raw: RawSiteData = {
    siteSettingsCollection: { items: [settings] },
    skillCategoryCollection: { items: [{ sys: { id: "s1" }, title: "Core", skills: ["React", 1 as unknown as string] }, { title: "Empty", skills: [] }, null] },
    experienceCollection: {
        items: [
            {
                sys: { id: "e1" },
                company: "Acme",
                rolesCollection: { items: [{ sys: { id: "r1" }, role: "Lead", period: "2024", description: ["Did things"] }, { role: "No period" }] },
            },
            { company: "No roles", rolesCollection: null },
        ],
    },
    projectCollection: { items: [{ sys: { id: "p1" }, title: "Proj", role: "Creator", description: "Desc", flagship: true, image: { url: "https://img" } }, { title: "Missing role" }] },
    currentProjectCollection: { items: [{ sys: { id: "c1" }, title: "WIP", description: "Soon" }] },
}

describe("buildSiteContent", () => {
    it("returns fallback content when there is no data", () => {
        expect(buildSiteContent(null)).toBe(fallbackContent)
    })

    it("maps every section and drops invalid items", () => {
        const content = buildSiteContent(raw)
        expect(content.personalInfo.name).toBe("Jane D")
        expect(content.personalInfo.hero.name).toBe("Jane D.")
        expect(content.personalInfo.hero.role).toBe("Staff Engineer")
        expect(content.personalInfo.hero.image).toEqual({ src: "https://images.ctfassets.net/x/portrait.webp", alt: "Jane portrait" })
        expect(content.personalInfo.seo.keywords).toEqual(["one"])
        expect(content.personalInfo.contact.linkedin).toBe(fallbackContent.personalInfo.contact.linkedin)
        expect(content.about.paragraphs).toEqual([{ text: "Hello ", highlight: "world", continuation: "" }])
        expect(content.about.technologies.items).toEqual(["Focus"])
        expect(content.contact.primaryCta.href).toBe("mailto:jane@example.com")
        expect(content.contact.socialLinks.find((l) => l.name === "GitHub")?.href).toBe("https://github.com/jane")
        expect(content.skills).toEqual([{ entryId: undefined, title: "Core", skills: ["React"] }])
        expect(content.experiences).toHaveLength(1)
        expect(content.experiences[0].roles).toEqual([{ entryId: undefined, role: "Lead", period: "2024", location: "", note: undefined, description: ["Did things"] }])
        expect(content.projects).toEqual([{ entryId: undefined, title: "Proj", role: "Creator", description: "Desc", responsibilities: [], tech: [], image: "https://img", live: undefined, github: undefined, flagship: true }])
        expect(content.currentlyBuilding).toEqual([{ entryId: undefined, title: "WIP", description: "Soon", tech: [], status: "In Progress" }])
        expect(content.settingsEntryId).toBeUndefined()
    })

    it("keeps entry ids only for preview", () => {
        const content = buildSiteContent(raw, { withEntryIds: true })
        expect(content.settingsEntryId).toBe("settings")
        expect(content.skills[0].entryId).toBe("s1")
        expect(content.experiences[0].entryId).toBe("e1")
        expect(content.experiences[0].roles[0].entryId).toBe("r1")
        expect(content.projects[0].entryId).toBe("p1")
        expect(content.currentlyBuilding[0].entryId).toBe("c1")
    })

    it("falls back per section when a section is empty or invalid", () => {
        const content = buildSiteContent({
            siteSettingsCollection: { items: [{ ...settings, email: "" }] },
            skillCategoryCollection: { items: [] },
            projectCollection: raw.projectCollection,
        })
        expect(content.personalInfo).toBe(fallbackContent.personalInfo)
        expect(content.about).toBe(fallbackContent.about)
        expect(content.contact).toBe(fallbackContent.contact)
        expect(content.skills).toBe(fallbackContent.skills)
        expect(content.experiences).toBe(fallbackContent.experiences)
        expect(content.currentlyBuilding).toBe(fallbackContent.currentlyBuilding)
        expect(content.projects[0].title).toBe("Proj")
    })

    it("uses fallback hero image, about and focus areas when settings omit them", () => {
        const content = buildSiteContent({
            siteSettingsCollection: { items: [{ name: "A", tagline: "T", description: "D", email: "a@b.c", aboutParagraphs: "bad" }] },
        })
        expect(content.personalInfo.hero.image).toBe(fallbackContent.personalInfo.hero.image)
        expect(content.personalInfo.title).toBe(fallbackContent.personalInfo.title)
        expect(content.about.paragraphs).toBe(fallbackContent.about.paragraphs)
        expect(content.about.technologies.items).toBe(fallbackContent.about.technologies.items)
    })
})
