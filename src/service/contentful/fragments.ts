import { graphql } from "@/generated/graphql"


export const AssetFragment = graphql(`
  fragment AssetFragment on Asset {
    width
    height
    title
    description
    fileName
    url
    sys {
      id
    }
  }
`)
export const ProfileFragment = graphql(`
  fragment ProfileFragment on Profile {
  sys {
    id
  }
  name
  title
  bio {
    json
  }
  profilePhoto {
    ...AssetFragment
  }
  location
  profileLinksCollection {
    items {
      sys {
        id
      }
      platformName
      url
    }
  }
}`)

export const ProjectFragment = graphql(`
  fragment ProjectFragment on Project {
    sys {
      id
    }
    title
    description {
      json
    }
    thumbnail {
      ...AssetFragment
    }
    liveUrl
    repoUrl
    techStackCollection(limit: 10) {
      items {
        ... on Skill {
          sys {
            id
          }
          name
          category
          icon {
            ...AssetFragment
          }
        }
      }
    }
}`)

export const ContactInfoFragment = graphql(`
  fragment ContactInfoFragment on ContactInfo {
    sys {
      id
    }
    email
    phone
    preferredMethod
}`)
export const SkillFragment = graphql(`
  fragment SkillFragment on Skill {
    sys {
      id
    }
    name
    category
    icon {
      ...AssetFragment
    }
}`)
export const ExperienceFragment = graphql(`
  fragment ExperienceFragment on Experience {
    sys {
      id
    }
    company
    description {
      json
    }
    role
    skillsUsedCollection {
      items {
        ...SkillFragment
      }
    }
    startDate
    endDate
    company
    companyLogo {
      ...AssetFragment
    }
}`)
