
import { Metadata } from 'next'
import getPageBySlug from '@/service/contentful/page'
import { getAssetData } from '@/service/contentful/assets'
import type { Asset } from '@/generated/graphql/graphql'
import ContentfulImage from '@/components/ContentfulImage'
import ContentRenderer from '@/components/ContentRenderer'
import JsonLd from '@/components/seo/JsonLd'
import { notFound } from 'next/navigation'
import { getPageContents, getPersonJsonLd } from '@/utils/page'

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('home')

  if (!page) {
    return {
      title: 'Portfolio',
      description: 'My Portfolio Website'
    }
  }

  const ogImage = getAssetData(page.ogImage as unknown as Asset);

  const metadata: Metadata = {
    title: page.metaTitle || page.title || 'Portfolio',
    description: page.ogDescription || page.metaDescription || undefined,
    openGraph: {
      title: page.ogTitle || page.title || 'Portfolio',
      description: page.ogDescription || page.metaDescription || undefined,
      images: ogImage?.url ? [{ url: ogImage.url }] : undefined,
    },
    robots: {
      index: !page.noindex,
      follow: page.robotsFollow ?? true,
    },
    ...(page.canonicalUrl && {
      alternates: {
        canonical: page.canonicalUrl
      }
    })
  }

  return metadata;
}


export default async function Home() {
  const page = await getPageBySlug('home')

  if (!page) {
    return notFound()
  }

  const pageContents = getPageContents(page);

  const personJsonLd = getPersonJsonLd(
    pageContents['Profile'],
    pageContents['ContactInfo'],
    pageContents['Experience']
  );

  return (
    <main className="flex flex-col min-h-screen">
      <JsonLd content={personJsonLd} />
      {page.heroImage && (
        <div className="absolute inset-0 -z-10">
          <ContentfulImage
            asset={page.heroImage}
            fill
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
        </div>
      )}

      <div className="container mx-auto px-4 py-16">
        <div className="space-y-24">
          <ContentRenderer contents={page.contentCollection?.items} />
        </div>
      </div>
    </main>
  );
}
