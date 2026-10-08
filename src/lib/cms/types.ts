// Raw GraphQL shapes. Every field is optional because entries may be drafts or partially filled.

type Sys = { sys?: { id?: string | null } | null; __typename?: string }
type Maybe<T> = T | null | undefined
type Collection<T> = Maybe<{ items?: Maybe<Maybe<T>[]> }>

export type RawAsset = Sys & { url?: Maybe<string>; description?: Maybe<string> }

export type RawSiteSettings = Sys & {
  name?: Maybe<string>
  title?: Maybe<string>
  tagline?: Maybe<string>
  description?: Maybe<string>
  heroGreeting?: Maybe<string>
  heroRole?: Maybe<string>
  heroPrimaryCtaText?: Maybe<string>
  heroSecondaryCtaText?: Maybe<string>
  heroImage?: Maybe<RawAsset>
  seoTitle?: Maybe<string>
  seoDescription?: Maybe<string>
  seoKeywords?: Maybe<string[]>
  email?: Maybe<string>
  linkedin?: Maybe<string>
  github?: Maybe<string>
  location?: Maybe<string>
  contactPreTitle?: Maybe<string>
  contactTitle?: Maybe<string>
  contactDescription?: Maybe<string>
  aboutParagraphs?: unknown
  focusAreas?: Maybe<string[]>
}

export type RawSkillCategory = Sys & { title?: Maybe<string>; skills?: Maybe<string[]> }

export type RawExperienceRole = Sys & {
  role?: Maybe<string>
  period?: Maybe<string>
  location?: Maybe<string>
  note?: Maybe<string>
  description?: Maybe<string[]>
}

export type RawExperience = Sys & {
  company?: Maybe<string>
  rolesCollection?: Collection<RawExperienceRole>
}

export type RawProject = Sys & {
  title?: Maybe<string>
  role?: Maybe<string>
  description?: Maybe<string>
  responsibilities?: Maybe<string[]>
  tech?: Maybe<string[]>
  image?: Maybe<RawAsset>
  live?: Maybe<string>
  github?: Maybe<string>
  flagship?: Maybe<boolean>
}

export type RawCurrentProject = Sys & {
  title?: Maybe<string>
  description?: Maybe<string>
  tech?: Maybe<string[]>
  status?: Maybe<string>
}

export type RawSiteData = {
  siteSettingsCollection?: Collection<RawSiteSettings>
  skillCategoryCollection?: Collection<RawSkillCategory>
  experienceCollection?: Collection<RawExperience>
  projectCollection?: Collection<RawProject>
  currentProjectCollection?: Collection<RawCurrentProject>
}
