// Every entry selects `__typename` and `sys { id }`: Contentful live updates need both.
export const SITE_CONTENT_QUERY = /* GraphQL */ `
  query SiteContent($preview: Boolean!, $locale: String!) {
    siteSettingsCollection(limit: 1, preview: $preview, locale: $locale) {
      items {
        __typename
        sys { id }
        name
        title
        tagline
        description
        heroGreeting
        heroRole
        heroPrimaryCtaText
        heroSecondaryCtaText
        heroImage { __typename sys { id } url description }
        seoTitle
        seoDescription
        seoKeywords
        email
        linkedin
        github
        location
        contactPreTitle
        contactTitle
        contactDescription
        aboutParagraphs
        focusAreas
      }
    }
    skillCategoryCollection(order: order_ASC, limit: 20, preview: $preview, locale: $locale) {
      items { __typename sys { id } title skills }
    }
    experienceCollection(order: order_ASC, limit: 20, preview: $preview, locale: $locale) {
      items {
        __typename
        sys { id }
        company
        rolesCollection(limit: 10) {
          items { __typename sys { id } role period location note description }
        }
      }
    }
    projectCollection(order: order_ASC, limit: 20, preview: $preview, locale: $locale) {
      items {
        __typename
        sys { id }
        title
        role
        description
        responsibilities
        tech
        image { __typename sys { id } url }
        live
        github
        flagship
      }
    }
    currentProjectCollection(order: order_ASC, limit: 20, preview: $preview, locale: $locale) {
      items { __typename sys { id } title description tech status }
    }
  }
`
