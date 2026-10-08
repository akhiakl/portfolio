import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { GoogleTagManager } from "@next/third-parties/google"
import GtmNoScript from "@/components/GtmNoScript"
import { draftMode } from "next/headers"
import type { PersonalInfo } from "@/lib/content"
import { getSiteContent } from "@/lib/cms/get-site-content"
import { LivePreviewProvider } from "@/components/preview/live-preview-provider"

const absolute = (url: string, src: string) => (src.startsWith("http") ? src : `${url}${src}`)

function buildMetadata(personalInfo: PersonalInfo): Metadata {
  const { seo } = personalInfo
  const { description, title, url } = seo
  return {
    title,
    description,
    keywords: seo.keywords,
    authors: [{ name: personalInfo.name, url: url }],
    creator: personalInfo.name,
    publisher: personalInfo.name,
    openGraph: {
      title,
      description,
      url,
      siteName: "Akhil K Portfolio",
      images: [
        {
          url: absolute(url, personalInfo.hero.image.src),
          alt: "Akhil K Portfolio Preview",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: personalInfo.title,
      description,
      creator: "@akhiakl",
      images: [absolute(url, personalInfo.hero.image.src)],
    },
    alternates: {
      canonical: url,
    },
    other: {
      "google-site-verification":
        process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "",
    },
    icons: {
      icon: [
        {
          url: "/icon-light-32x32.png",
          media: "(prefers-color-scheme: light)",
        },
        {
          url: "/icon-dark-32x32.png",
          media: "(prefers-color-scheme: dark)",
        },
        {
          url: "/icon.svg",
          type: "image/svg+xml",
        },
      ],
      apple: "/apple-icon.png",
    },
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const { personalInfo } = await getSiteContent()
  return buildMetadata(personalInfo)
}

const buildJsonLd = (personalInfo: PersonalInfo) => {
  const { description, url } = personalInfo.seo
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    url,
    image: absolute(url, personalInfo.hero.image.src),
    description,
    address: {
      "@type": "PostalAddress",
      addressRegion: "Kerala",
      addressCountry: "India",
    },
    sameAs: [personalInfo.contact.github, personalInfo.contact.linkedin],
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [{ personalInfo }, { isEnabled: preview }] = await Promise.all([getSiteContent(), draftMode()])
  const jsonLd = buildJsonLd(personalInfo)
  return (
    <html lang="en">
      {process.env.NEXT_PUBLIC_GTM_ID && (
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      )}
      <body className={`font-sans antialiased`}>
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <GtmNoScript gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {preview ? <LivePreviewProvider>{children}</LivePreviewProvider> : children}
        <Analytics />
      </body>
    </html>
  )
}
