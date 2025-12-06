// Core content - single source of truth
const coreContent = {
    tagline: "I build high-performance web experiences",
    description: "Senior Frontend Engineer with 8+ years of expertise in enterprise eCommerce and SaaS platforms. Specialized in React, Next.js, and TypeScript with a proven track record of delivering performance improvements and leading engineering teams."
}

// Personal information and SEO data
export const personalInfo = {
    name: "Akhil K",
    title: "Senior Frontend Engineer | Lead Experience Engineer",
    tagline: coreContent.tagline,
    description: coreContent.description,

    // SEO Meta
    seo: {
        title: "Akhil K - Senior Frontend Engineer | Lead Experience Engineer",
        description: coreContent.description,
        keywords: ["Senior Frontend Engineer", "Lead Experience Engineer", "React", "Next.js", "TypeScript", "Performance", "Accessibility", "eCommerce", "Enterprise"],
        author: "Akhil K",
        url: "https://akhiakl.in",
    },

    // Contact information  
    contact: {
        email: "hello@akhiakl.in",
        github: "https://github.com/akhiakl",
        linkedin: "https://www.linkedin.com/in/akhiakl/",
    },

    // Hero section content
    hero: {
        greeting: "Hi, my name is",
        name: "Akhil K.",
        tagline: coreContent.tagline,
        description: coreContent.description,
        primaryCta: {
            text: "View Work",
            href: "#projects"
        },
        secondaryCta: {
            text: "Contact Me",
            href: "#contact"
        },
        image: {
            src: "/images/akhil-portrait.webp",
            alt: "Akhil K - Lead Frontend Developer"
        }
    }
}

export type PersonalInfo = typeof personalInfo