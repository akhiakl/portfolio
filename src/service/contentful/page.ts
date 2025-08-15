import { graphql } from "@/generated/graphql"
import { contentfulClient } from "@/graphql/contentfulClient"



const PageQuery = graphql(`
  query PageBySlug($slug: String!) {
    pageCollection(where: { slug: $slug }, limit: 1) {
      items {
        sys {
          id
        }
        title
        slug
        metaTitle
        metaDescription
        metaKeywords
        noindex
        ogTitle
        ogDescription
        ogImage {
          ...AssetFragment
        }
        robotsFollow
        robotsIndex
        canonicalUrl
        heroImage {
          ...AssetFragment
        }
        contentCollection {
          items {
            __typename
            ... on ContactInfo{
              sys {
                id
              }
            }
            ... on Education{
              sys {
                id
              }
            }
            ... on Experience{
              sys {
                id
              }
            }
            ... on Profile {
             ...ProfileFragment
            }
            ... on Project {
              ...ProjectFragment
            }
          }
        }
      }
    }
  }
`)
export const getPageBySlug = async (slug: string) => {

  const response = await contentfulClient.execute(PageQuery, {
    slug
  })

  return response?.pageCollection?.items[0] || null;
}

export default getPageBySlug