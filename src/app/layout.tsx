import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { GoogleTagManager } from "@next/third-parties/google"
import GtmNoScript from "@/components/GtmNoScript"
import { personalInfo } from "@/lib/content"

const { seo } = personalInfo
const description = seo.description
const title = seo.title
const url = seo.url
export const metadata: Metadata = {
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
        url: `${url}/images/akhil-portrait.webp`,
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
    images: [`${url}${personalInfo.hero.image.src}`],
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
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalInfo.name,
  jobTitle: personalInfo.title,
  url,
  image: `${url}${personalInfo.hero.image.src}`,
  description,
  address: {
    "@type": "PostalAddress",
    addressRegion: "Kerala",
    addressCountry: "India",
  },
  sameAs: [personalInfo.contact.github, personalInfo.contact.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
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
        {children}
        <Analytics />
      </body>
    </html>
  )
}
