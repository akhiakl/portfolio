import type { Metadata } from 'next'
import './styles/globals.css'
import './styles/icomoon.css'
import 'aos/dist/aos.css'
import { SpeedInsights } from '@vercel/speed-insights/next';
import { icomoon } from '@/helpers/fonts';
import Providers from './providers';
import { Navbar } from '@/components';
import { Analytics } from '@vercel/analytics/next';


export const metadata: Metadata = {
  title: 'Akhil K | Senior Frontend Developer & UI Engineer',
  description:
    'Senior Frontend Developer specializing in React, Next.js, and TypeScript. Explore my projects, skills, and contact details.',
  keywords: [
    'Akhil K',
    'Senior Frontend Developer',
    'UI Engineer',
    'React Developer',
    'Next.js Developer',
    'TypeScript',
    'JavaScript',
    'Frontend Portfolio',
    'Kerala Developer',
    'Web Developer Portfolio',
  ],
  authors: [{ name: 'Akhil K', url: 'https://akhiakl.in' }],
  creator: 'Akhil K',
  publisher: 'Akhil K',
  openGraph: {
    title: 'Akhil K | Senior Frontend Developer & UI Engineer',
    description:
      'Portfolio of Akhil K, Senior Frontend Developer specializing in React, Next.js, and TypeScript.',
    url: 'https://akhiakl.in',
    siteName: 'Akhil K Portfolio',
    images: [
      {
        url: 'https://akhiakl.in/profile-bg.webp',
        width: 1200,
        height: 630,
        alt: 'Akhil K Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akhil K | Senior Frontend Developer & UI Engineer',
    description:
      'Portfolio of Akhil K, Senior Frontend Developer specializing in React, Next.js, and TypeScript.',
    creator: '@yourtwitterhandle',
    images: ['https://akhiakl.in/profile-bg.webp'],
  },
  alternates: {
    canonical: 'https://akhiakl.in',
  },
  other: {
    'google-site-verification': process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? ''
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Akhil K",
  "jobTitle": "Front End Lead",
  "url": "https://www.akhiakl.in",
  "image": "https://akhiakl.in/profile-bg.webp",
  "description": "Senior Frontend Developer specializing in React, Next.js, and TypeScript",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Kerala",
    "addressCountry": "India"
  },
  "sameAs": [
    "https://github.com/akhiakl",
    "https://www.linkedin.com/in/akhiakl"
  ]
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={icomoon.variable}>
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="preload" as="style" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
        <Providers>
          <div className="font-karla subpixel-antialiased">
            <Navbar />
            {children}
          </div>
        </Providers>
        <SpeedInsights />
        <Analytics />
      </body>
    </html >
  )
}
