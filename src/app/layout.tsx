import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const generateMetadata = (): Metadata => {
  return {
    title: 'Akhil K | Senior Frontend Developer & UI Engineer',
    description:
      'Akhil K is a Senior Frontend Developer with 8+ years of experience building scalable, accessible, and high-performance web applications using React, Next.js, and TypeScript.',
    keywords: [
      'Akhil K',
      'Senior Frontend Developer',
      'React Developer',
      'Next.js Developer',
      'TypeScript',
      'Web Accessibility',
      'UI Engineer',
      'Frontend Lead',
      'JavaScript Developer',
      'Remote Developer',
      'India',
    ],
    authors: [{ name: 'Akhil K', url: 'https://www.akhiakl.in' }],
    metadataBase: new URL('https://www.akhiakl.in'),
    openGraph: {
      title: 'Akhil K | Senior Frontend Developer & UI Engineer',
      description:
        '8+ years of experience creating scalable, accessible, and high-performance UI systems with React, Next.js, and TypeScript.',
      url: 'https://www.akhiakl.in',
      siteName: 'Akhil K Portfolio',
      images: [
        {
          url: '/logo.svg', // ideally 1200x630px
          width: 1200,
          height: 630,
          alt: 'Portfolio preview of Akhil K, Senior Frontend Developer',
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Akhil K | Senior Frontend Developer & UI Engineer',
      description:
        'Building accessible, scalable, and high-performance web applications using React, Next.js, and TypeScript.',
      images: ['/logo.svg'],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: 'https://www.akhiakl.in',
    },
    icons: {
      icon: '/logo.svg',
    },
  };
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
