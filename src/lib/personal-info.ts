// Personal information and SEO data
export const personalInfo = {
    name: "Akhil K",
    title: "Lead Frontend Developer",
    tagline: "I build intuitive user interfaces",
    description: "Lead Frontend Developer specialized in React, Next.js, performance-first engineering, and full stack development with Node.js. I craft clean, scalable, and accessible web experiences.",

    // SEO Meta
    seo: {
        title: "Akhil K - Lead Frontend Developer",
        description: "Lead Frontend Developer specialized in React, Next.js, and full stack development. Building scalable, accessible web experiences with 8+ years of experience.",
        keywords: ["Frontend Developer", "React", "Next.js", "TypeScript", "Full Stack", "UI/UX", "Web Development"],
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
        tagline: "I build intuitive user interfaces.",
        description: "Lead Frontend Developer specialized in React, Next.js, performance-first engineering, and full stack development with Node.js. I craft clean, scalable, and accessible web experiences.",
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