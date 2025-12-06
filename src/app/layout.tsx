import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { GoogleTagManager } from "@next/third-parties/google"
import GtmNoScript from "@/components/GtmNoScript"

const description =
  "Lead Frontend Developer building intuitive user interfaces. Specialized in React, Next.js, TypeScript, and full stack development."
const title = "Akhil K | Lead Frontend Developer"
const url = "https://www.akhiakl.in"
export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Akhil K",
    "Senior Frontend Developer",
    "UI Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "JavaScript",
    "Frontend Portfolio",
    "Kerala Developer",
    "Web Developer Portfolio",
    "Full Stack Developer",
  ],
  authors: [{ name: "Akhil K", url: url }],
  creator: "Akhil K",
  publisher: "Akhil K",
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
    title: "Akhil K | Senior Frontend Developer & UI Engineer",
    description,
    creator: "@akhiakl",
    images: [`${url}/images/akhil-portrait.webp`],
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
  name: "Akhil K",
  jobTitle: "Lead Experience Engineer",
  url,
  image: `${url}/profile-bg.webp`,
  description,
  address: {
    "@type": "PostalAddress",
    addressRegion: "Kerala",
    addressCountry: "India",
  },
  sameAs: ["https://github.com/akhiakl", "https://www.linkedin.com/in/akhiakl"],
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
