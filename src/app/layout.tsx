import type { Metadata } from 'next'
import './styles/globals.css'
import './styles/icomoon.css'
import './styles/preloader.css'
import {LoadingScreen} from '@/components'
import 'aos/dist/aos.css'

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
    <html>
        <head>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        </head>
        <body className="overflow-hidden">
          <LoadingScreen />
          {children}
        </body>
      </html>
  )
}
