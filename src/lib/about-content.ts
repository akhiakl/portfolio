export const aboutContent = {
    sectionNumber: "01",
    title: "About Me",

    paragraphs: [
        {
            text: "Senior Frontend Engineer with ",
            highlight: "8+ years",
            continuation: " building scalable, high-performance web applications for enterprise eCommerce and SaaS. I've architected modular React + TypeScript foundations, built component design systems, and delivered measurable Core Web Vitals improvements across multiple enterprise clients."
        },
        {
            text: "My expertise spans from ",
            highlight: "performance optimization",
            continuation: " and accessibility to leading engineering teams and establishing CI/CD pipelines. I've reduced perceived load times by 25-40% through strategic bundle-splitting, SSR/ISR tuning, and automated performance gates in production."
        },
        {
            text: "I'm passionate about ",
            highlight: "developer experience",
            continuation: " and engineering culture. Whether I'm mentoring engineers, championing TypeScript-first workflows, or building tools that accelerate delivery velocity, I focus on creating sustainable solutions that elevate entire teams."
        }
    ],

    technologies: {
        title: "Core Technologies:",
        items: [
            "React, Next.js & Remix",
            "TypeScript & JavaScript (ES6+)",
            "Node.js, NestJS & GraphQL",
            "Component Design Systems",
            "Performance & Accessibility",
            "GraphQL & REST APIs"
        ]
    },

    image: {
        src: "/images/akhil-working.webp", // Update with your image
        alt: "Akhil K working on code"
    }
}

export type AboutContent = typeof aboutContent