import {
  aboutContent,
  contactContent,
  currentlyBuilding,
  experiences,
  personalInfo,
  projects,
  skillCategories,
  type AboutContent,
  type ContactContent,
  type CurrentlyBuildingProject,
  type Experience,
  type PersonalInfo,
  type ShowcaseProject,
  type SkillCategory,
} from "@/lib/content"
import type {
  RawCurrentProject,
  RawExperience,
  RawProject,
  RawSiteData,
  RawSiteSettings,
  RawSkillCategory,
} from "./types"

export type SiteContent = {
  settingsEntryId?: string
  personalInfo: PersonalInfo
  about: AboutContent
  contact: ContactContent
  skills: SkillCategory[]
  experiences: Experience[]
  projects: ShowcaseProject[]
  currentlyBuilding: CurrentlyBuildingProject[]
}

export const fallbackContent: SiteContent = {
  personalInfo,
  about: aboutContent,
  contact: contactContent,
  skills: skillCategories,
  experiences,
  projects,
  currentlyBuilding,
}

type MapOptions = { withEntryIds: boolean }

const str = (value: unknown): string | undefined =>
  typeof value === "string" && value.trim() !== "" ? value : undefined

const strList = (value: unknown): string[] =>
  Array.isArray(value) ? value.filter((v): v is string => typeof v === "string" && v.trim() !== "") : []

function items<T>(collection: { items?: (T | null | undefined)[] | null } | null | undefined): T[] {
  return (collection?.items ?? []).filter((item): item is T => item != null)
}

function entryId(item: { sys?: { id?: string | null } | null }, { withEntryIds }: MapOptions) {
  return withEntryIds ? str(item.sys?.id) : undefined
}

function mapParagraphs(value: unknown): AboutContent["paragraphs"] | undefined {
  if (!Array.isArray(value)) return undefined
  const paragraphs = value
    .filter((p): p is Record<string, unknown> => typeof p === "object" && p !== null && typeof p.text === "string")
    .map((p) => ({
      text: p.text as string,
      highlight: str(p.highlight) ?? "",
      continuation: str(p.continuation) ?? "",
    }))
  return paragraphs.length > 0 ? paragraphs : undefined
}

/** Settings feed personal info, about and contact. Required: name, tagline, description, email. */
export function mapSettings(raw: RawSiteSettings | undefined, options: MapOptions) {
  if (!raw) return null
  const name = str(raw.name)
  const tagline = str(raw.tagline)
  const description = str(raw.description)
  const email = str(raw.email)
  if (!name || !tagline || !description || !email) return null

  const fb = fallbackContent
  const linkedin = str(raw.linkedin) ?? fb.personalInfo.contact.linkedin
  const github = str(raw.github) ?? fb.personalInfo.contact.github
  const title = str(raw.title) ?? fb.personalInfo.title
  const keywords = strList(raw.seoKeywords)
  const focusAreas = strList(raw.focusAreas)
  const imageUrl = str(raw.heroImage?.url)

  const info: PersonalInfo = {
    ...fb.personalInfo,
    name,
    title,
    tagline,
    description,
    contact: {
      ...fb.personalInfo.contact,
      email,
      linkedin,
      github,
      location: str(raw.location) ?? fb.personalInfo.contact.location,
    },
    seo: {
      ...fb.personalInfo.seo,
      title: str(raw.seoTitle) ?? fb.personalInfo.seo.title,
      description: str(raw.seoDescription) ?? fb.personalInfo.seo.description,
      keywords: keywords.length > 0 ? keywords : fb.personalInfo.seo.keywords,
      author: name,
    },
    hero: {
      ...fb.personalInfo.hero,
      greeting: str(raw.heroGreeting) ?? fb.personalInfo.hero.greeting,
      name: `${name}.`,
      role: str(raw.heroRole) ?? title,
      tagline,
      description,
      primaryCta: { ...fb.personalInfo.hero.primaryCta, text: str(raw.heroPrimaryCtaText) ?? fb.personalInfo.hero.primaryCta.text },
      secondaryCta: { ...fb.personalInfo.hero.secondaryCta, text: str(raw.heroSecondaryCtaText) ?? fb.personalInfo.hero.secondaryCta.text },
      image: imageUrl
        ? { src: imageUrl, alt: str(raw.heroImage?.description) ?? fb.personalInfo.hero.image.alt }
        : fb.personalInfo.hero.image,
    },
  }

  const about: AboutContent = {
    ...fb.about,
    paragraphs: mapParagraphs(raw.aboutParagraphs) ?? fb.about.paragraphs,
    technologies: {
      ...fb.about.technologies,
      items: focusAreas.length > 0 ? focusAreas : fb.about.technologies.items,
    },
  }

  const hrefs: Record<string, string> = { Email: `mailto:${email}`, LinkedIn: linkedin, GitHub: github }
  const contact: ContactContent = {
    ...fb.contact,
    preTitle: str(raw.contactPreTitle) ?? fb.contact.preTitle,
    title: str(raw.contactTitle) ?? fb.contact.title,
    description: str(raw.contactDescription) ?? fb.contact.description,
    primaryCta: { ...fb.contact.primaryCta, href: `mailto:${email}` },
    socialLinks: fb.contact.socialLinks.map((link) => ({ ...link, href: hrefs[link.name] ?? link.href })),
  }

  return { settingsEntryId: entryId(raw, options), personalInfo: info, about, contact }
}

export function mapSkills(raw: RawSkillCategory[], options: MapOptions): SkillCategory[] {
  return raw.flatMap((item) => {
    const title = str(item.title)
    const skills = strList(item.skills)
    return title && skills.length > 0 ? [{ entryId: entryId(item, options), title, skills }] : []
  })
}

export function mapExperiences(raw: RawExperience[], options: MapOptions): Experience[] {
  return raw.flatMap((item) => {
    const company = str(item.company)
    const roles = items(item.rolesCollection).flatMap((r) => {
      const role = str(r.role)
      const period = str(r.period)
      const description = strList(r.description)
      if (!role || !period || description.length === 0) return []
      return [{
        entryId: entryId(r, options),
        role,
        period,
        location: str(r.location) ?? "",
        note: str(r.note),
        description,
      }]
    })
    return company && roles.length > 0 ? [{ entryId: entryId(item, options), company, roles }] : []
  })
}

export function mapProjects(raw: RawProject[], options: MapOptions): ShowcaseProject[] {
  return raw.flatMap((item) => {
    const title = str(item.title)
    const role = str(item.role)
    const description = str(item.description)
    if (!title || !role || !description) return []
    return [{
      entryId: entryId(item, options),
      title,
      role,
      description,
      responsibilities: strList(item.responsibilities),
      tech: strList(item.tech),
      image: str(item.image?.url),
      live: str(item.live),
      github: str(item.github),
      flagship: item.flagship === true,
    }]
  })
}

export function mapCurrentProjects(raw: RawCurrentProject[], options: MapOptions): CurrentlyBuildingProject[] {
  return raw.flatMap((item) => {
    const title = str(item.title)
    const description = str(item.description)
    if (!title || !description) return []
    return [{
      entryId: entryId(item, options),
      title,
      description,
      tech: strList(item.tech),
      status: str(item.status) ?? "In Progress",
    }]
  })
}

const nonEmpty = <T,>(list: T[]) => (list.length > 0 ? list : undefined)

/**
 * Maps a Contentful response to site content. Each section falls back to the local
 * content.ts value on its own, so one empty or invalid content type never blanks the page.
 * Pure and isomorphic: used on the server and by the live preview client component.
 */
export function buildSiteContent(raw: RawSiteData | null | undefined, options: MapOptions = { withEntryIds: false }): SiteContent {
  if (!raw) return fallbackContent
  const settings = mapSettings(items(raw.siteSettingsCollection)[0], options)
  return {
    settingsEntryId: settings?.settingsEntryId,
    personalInfo: settings?.personalInfo ?? fallbackContent.personalInfo,
    about: settings?.about ?? fallbackContent.about,
    contact: settings?.contact ?? fallbackContent.contact,
    skills: nonEmpty(mapSkills(items(raw.skillCategoryCollection), options)) ?? fallbackContent.skills,
    experiences: nonEmpty(mapExperiences(items(raw.experienceCollection), options)) ?? fallbackContent.experiences,
    projects: nonEmpty(mapProjects(items(raw.projectCollection), options)) ?? fallbackContent.projects,
    currentlyBuilding: nonEmpty(mapCurrentProjects(items(raw.currentProjectCollection), options)) ?? fallbackContent.currentlyBuilding,
  }
}
