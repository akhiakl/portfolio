/**
 * Creates the Contentful content model and seeds it from src/lib/content.ts.
 * Idempotent: existing content types, entries and assets are left untouched.
 *
 *   CONTENTFUL_SPACE_ID=... CONTENTFUL_MANAGEMENT_TOKEN=... pnpm cms:setup
 */
import { readFile } from "node:fs/promises"
import path from "node:path"
import { createClient, type ContentFields, type CreateContentTypeProps } from "contentful-management"
import {
  aboutContent,
  contactContent,
  currentlyBuilding,
  experiences,
  personalInfo,
  projects,
  skillCategories,
} from "../src/lib/content"

const spaceId = process.env.CONTENTFUL_SPACE_ID
const accessToken = process.env.CONTENTFUL_MANAGEMENT_TOKEN
const environmentId = process.env.CONTENTFUL_ENVIRONMENT ?? "master"
const locale = process.env.NEXT_PUBLIC_CONTENTFUL_LOCALE ?? "en-US"

if (!spaceId || !accessToken) {
  console.error("Set CONTENTFUL_SPACE_ID and CONTENTFUL_MANAGEMENT_TOKEN.")
  process.exit(1)
}

const client = createClient({ accessToken }, { type: "plain", defaults: { spaceId, environmentId } })

// ---------------------------------------------------------------------------
// Content model
// ---------------------------------------------------------------------------

const symbol = (id: string, name: string, required = false): ContentFields => ({ id, name, type: "Symbol", required, localized: false })
const text = (id: string, name: string, required = false): ContentFields => ({ id, name, type: "Text", required, localized: false })
const symbols = (id: string, name: string, required = false): ContentFields => ({ id, name, type: "Array", items: { type: "Symbol" }, required, localized: false })
const order: ContentFields = { id: "order", name: "Order", type: "Integer", required: true, localized: false }
const asset = (id: string, name: string): ContentFields => ({
  id, name, type: "Link", linkType: "Asset", required: false, localized: false,
  validations: [{ linkMimetypeGroup: ["image"] }],
})

const contentTypes: (CreateContentTypeProps & { id: string })[] = [
  {
    id: "siteSettings",
    name: "Site Settings",
    description: "Singleton: hero, about, SEO and contact copy.",
    displayField: "name",
    fields: [
      symbol("name", "Name", true),
      symbol("title", "Title", true),
      text("tagline", "Tagline", true),
      text("description", "Description", true),
      symbol("heroGreeting", "Hero greeting"),
      symbol("heroRole", "Hero role line"),
      symbol("heroPrimaryCtaText", "Hero primary CTA"),
      symbol("heroSecondaryCtaText", "Hero secondary CTA"),
      asset("heroImage", "Hero image"),
      symbol("seoTitle", "SEO title"),
      text("seoDescription", "SEO description"),
      symbols("seoKeywords", "SEO keywords"),
      symbol("email", "Email", true),
      symbol("linkedin", "LinkedIn URL"),
      symbol("github", "GitHub URL"),
      symbol("location", "Location"),
      symbol("contactPreTitle", "Contact pre-title"),
      symbol("contactTitle", "Contact title"),
      text("contactDescription", "Contact description"),
      { id: "aboutParagraphs", name: "About paragraphs (JSON)", type: "Object", required: false, localized: false },
      symbols("focusAreas", "Focus areas"),
    ],
  },
  {
    id: "skillCategory",
    name: "Skill Category",
    displayField: "title",
    fields: [symbol("title", "Title", true), symbols("skills", "Skills", true), order],
  },
  {
    id: "experienceRole",
    name: "Experience Role",
    displayField: "role",
    fields: [symbol("role", "Role", true), symbol("period", "Period", true), symbol("location", "Location"), symbol("note", "Note"), symbols("description", "Highlights", true)],
  },
  {
    id: "experience",
    name: "Experience",
    displayField: "company",
    fields: [
      symbol("company", "Company", true),
      {
        id: "roles", name: "Roles", type: "Array", required: true, localized: false,
        items: { type: "Link", linkType: "Entry", validations: [{ linkContentType: ["experienceRole"] }] },
      },
      order,
    ],
  },
  {
    id: "project",
    name: "Project",
    displayField: "title",
    fields: [
      symbol("title", "Title", true),
      symbol("role", "Role", true),
      text("description", "Description", true),
      symbols("responsibilities", "Highlights"),
      symbols("tech", "Tech stack"),
      asset("image", "Image"),
      symbol("live", "Live URL"),
      symbol("github", "Repository URL"),
      { id: "flagship", name: "Flagship", type: "Boolean", required: false, localized: false },
      order,
    ],
  },
  {
    id: "currentProject",
    name: "Currently Building",
    displayField: "title",
    fields: [symbol("title", "Title", true), text("description", "Description", true), symbols("tech", "Tech stack"), symbol("status", "Status"), order],
  },
]

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const isNotFound = (error: unknown) =>
  error instanceof Error && (error.name === "NotFound" || error.message.includes('"status": 404'))

const slug = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 40)

const localize = (fields: Record<string, unknown>) =>
  Object.fromEntries(Object.entries(fields).filter(([, v]) => v !== undefined).map(([k, v]) => [k, { [locale]: v }]))

const link = (id: string, linkType: "Entry" | "Asset") => ({ sys: { type: "Link", linkType, id } })

function assertSymbols(label: string, values: string[]) {
  const tooLong = values.find((v) => v.length > 256)
  if (tooLong) throw new Error(`${label}: "${tooLong.slice(0, 40)}..." exceeds Contentful's 256 character Symbol limit`)
}

async function ensureContentType({ id, ...props }: CreateContentTypeProps & { id: string }) {
  try {
    await client.contentType.get({ contentTypeId: id })
    console.log(`= content type ${id} exists`)
  } catch (error) {
    if (!isNotFound(error)) throw error
    const created = await client.contentType.createWithId({ contentTypeId: id }, props)
    await client.contentType.publish({ contentTypeId: id }, created)
    console.log(`+ content type ${id}`)
  }
}

async function ensureEntry(contentTypeId: string, entryId: string, fields: Record<string, unknown>) {
  try {
    await client.entry.get({ entryId })
    console.log(`= entry ${entryId} exists`)
  } catch (error) {
    if (!isNotFound(error)) throw error
    const created = await client.entry.createWithId({ contentTypeId, entryId }, { fields: localize(fields) })
    await client.entry.publish({ entryId }, created)
    console.log(`+ entry ${entryId}`)
  }
}

async function ensureImage(assetId: string, title: string, publicPath: string | undefined) {
  if (!publicPath || publicPath.startsWith("http")) return undefined
  const filePath = path.join(process.cwd(), "public", publicPath)
  try {
    await client.asset.get({ assetId })
    console.log(`= asset ${assetId} exists`)
    return assetId
  } catch (error) {
    if (!isNotFound(error)) throw error
  }
  const file = await readFile(filePath).catch(() => undefined)
  if (!file) {
    console.warn(`! skipping missing image ${filePath}`)
    return undefined
  }
  const ext = path.extname(filePath).slice(1)
  const upload = await client.upload.create({}, { file: file.buffer.slice(file.byteOffset, file.byteOffset + file.byteLength) as ArrayBuffer })
  const created = await client.asset.createWithId({ assetId }, {
    fields: {
      title: { [locale]: title },
      description: { [locale]: title },
      file: {
        [locale]: {
          contentType: `image/${ext === "jpg" ? "jpeg" : ext}`,
          fileName: path.basename(filePath),
          uploadFrom: { sys: { type: "Link", linkType: "Upload", id: upload.sys.id } },
        },
      },
    },
  })
  const processed = await client.asset.processForAllLocales({}, created)
  await client.asset.publish({ assetId }, processed)
  console.log(`+ asset ${assetId}`)
  return assetId
}

// ---------------------------------------------------------------------------
// Seed
// ---------------------------------------------------------------------------

async function main() {
  console.log(`Space ${spaceId}, environment ${environmentId}, locale ${locale}`)
  for (const type of contentTypes) await ensureContentType(type)

  const heroImage = await ensureImage("hero-portrait", personalInfo.hero.image.alt, personalInfo.hero.image.src)
  assertSymbols("SEO keywords", personalInfo.seo.keywords)
  await ensureEntry("siteSettings", "site-settings", {
    name: personalInfo.name,
    title: personalInfo.title,
    tagline: personalInfo.hero.tagline,
    description: personalInfo.hero.description,
    heroGreeting: personalInfo.hero.greeting,
    heroRole: personalInfo.hero.role,
    heroPrimaryCtaText: personalInfo.hero.primaryCta.text,
    heroSecondaryCtaText: personalInfo.hero.secondaryCta.text,
    heroImage: heroImage ? link(heroImage, "Asset") : undefined,
    seoTitle: personalInfo.seo.title,
    seoDescription: personalInfo.seo.description,
    seoKeywords: personalInfo.seo.keywords,
    email: personalInfo.contact.email,
    linkedin: personalInfo.contact.linkedin,
    github: personalInfo.contact.github,
    location: personalInfo.contact.location,
    contactPreTitle: contactContent.preTitle,
    contactTitle: contactContent.title,
    contactDescription: contactContent.description,
    aboutParagraphs: aboutContent.paragraphs,
    focusAreas: aboutContent.technologies.items,
  })

  for (const [i, category] of skillCategories.entries()) {
    assertSymbols(`Skills ${category.title}`, category.skills)
    await ensureEntry("skillCategory", `skill-${slug(category.title)}`, { title: category.title, skills: category.skills, order: i })
  }

  for (const [i, experience] of experiences.entries()) {
    const roleIds: string[] = []
    for (const role of experience.roles) {
      const roleId = `role-${slug(`${experience.company}-${role.role}`)}`
      assertSymbols(`${experience.company} ${role.role}`, role.description)
      await ensureEntry("experienceRole", roleId, { role: role.role, period: role.period, location: role.location, note: role.note, description: role.description })
      roleIds.push(roleId)
    }
    await ensureEntry("experience", `experience-${slug(experience.company)}`, {
      company: experience.company,
      roles: roleIds.map((id) => link(id, "Entry")),
      order: i,
    })
  }

  for (const [i, project] of projects.entries()) {
    const id = `project-${slug(project.title)}`
    assertSymbols(`${project.title} highlights`, project.responsibilities)
    const image = await ensureImage(`${id}-image`, project.title, project.image)
    await ensureEntry("project", id, {
      title: project.title,
      role: project.role,
      description: project.description,
      responsibilities: project.responsibilities,
      tech: project.tech,
      image: image ? link(image, "Asset") : undefined,
      live: project.live,
      github: project.github,
      flagship: project.flagship ?? false,
      order: i,
    })
  }

  for (const [i, project] of currentlyBuilding.entries()) {
    await ensureEntry("currentProject", `current-${slug(project.title)}`, {
      title: project.title,
      description: project.description,
      tech: project.tech,
      status: project.status,
      order: i,
    })
  }

  console.log("Done. Configure the preview URL and webhook as described in the README.")
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
