import type { Metadata } from 'next'
import './styles/globals.css'
import './styles/icomoon.css'
import { SpeedInsights } from '@vercel/speed-insights/next';
import { icomoon } from '@/helpers/fonts';
import Providers from './providers';
import { Navbar } from '@/components';
import { Analytics } from '@vercel/analytics/next';


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
    <html lang="en" className={icomoon.variable}>
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="preload" as="style" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
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
