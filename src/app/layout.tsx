import type { Metadata } from 'next'
import './styles/globals.css'
import '@material-design-icons/font/filled.css';
import './styles/icomoon.css'
import 'aos/dist/aos.css'
import { SpeedInsights } from '@vercel/speed-insights/next';


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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preload" as="style" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
      </head>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
