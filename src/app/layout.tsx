import type { Metadata } from 'next'
import './styles/globals.css'
import './styles/icomoon.css'
import 'aos/dist/aos.css'
import { SpeedInsights } from '@vercel/speed-insights/next';
import { icomoon } from '@/helpers/fonts';
import Providers from './providers';
import { Navbar } from '@/components';
import { Analytics } from '@vercel/analytics/next';
import { Karla, Unica_One } from 'next/font/google'

const karla = Karla({
  subsets: ['latin'],
  variable: '--font-google-karla',
  display: 'swap',
})
const unica_one = Unica_One({
  subsets: ['latin'],
  variable: '--font-google-unica-one',
  display: 'swap',
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Akhil',
  description: 'portfolio website of Akhil K',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${icomoon.variable} ${karla.variable} ${unica_one.variable}`}>
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="preload" as="style" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
      </head>
      <body>
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
