// Featured projects from resume and portfolio
export const featuredProjects = [
    {
        index: "01",
        title: "Enterprise Design System",
        description: "Architected a TypeScript-first design system supporting multi-brand theming and accessibility standards. Built with Storybook and integrated Figma tokens for seamless design-to-code workflow.",
        responsibilities: [
            "Architected modular component library",
            "Integrated Figma design tokens",
            "Implemented accessibility standards (WCAG 2.1)",
            "Built comprehensive Storybook documentation"
        ],
        tech: ["React", "TypeScript", "Storybook", "Figma", "Design Tokens"],
        github: "https://github.com/akhiakl", // Update with actual repo
        live: "#",
        featured: true,
        type: "Enterprise"
    },
    {
        index: "02",
        title: "GNC eCommerce Migration",
        description: "Led frontend migration to Next.js, improving page load times by 50% using ISR and optimized data-fetching strategies. Delivered measurable Core Web Vitals improvements.",
        responsibilities: [
            "Led Next.js migration architecture",
            "Implemented ISR strategies",
            "Optimized Core Web Vitals",
            "Reduced page load times by 50%"
        ],
        tech: ["Next.js", "React", "TypeScript", "ISR", "Performance"],
        github: "#",
        live: "https://www.gnc.com", // If publicly accessible
        featured: true,
        type: "eCommerce"
    },
    {
        index: "03",
        title: "Giblib Medical Platform",
        description: "Built real-time dashboards for live session updates and analytics using React, GraphQL, and WebSockets. Created interactive medical education platform with live streaming capabilities.",
        responsibilities: [
            "Built real-time dashboard interfaces",
            "Implemented WebSocket connections",
            "Created analytics visualizations",
            "Optimized for medical workflows"
        ],
        tech: ["React", "GraphQL", "WebSockets", "Real-time", "Analytics"],
        github: "#",
        live: "https://giblib.com", // If publicly accessible
        featured: true,
        type: "Healthcare"
    },
    {
        index: "04",
        title: "svgIn-react",
        description: "Open source library for secure SVG inlining in React applications. Provides TypeScript support, tree-shaking, and security features for scalable icon systems.",
        responsibilities: [
            "Created npm package architecture",
            "Built CLI tooling for SVG processing",
            "Implemented security features",
            "Wrote comprehensive documentation"
        ],
        tech: ["React", "TypeScript", "Node.js", "CLI", "Security"],
        github: "https://github.com/akhiakl/svgIn-react", // Update with actual repo
        live: "https://www.npmjs.com/package/svgin-react", // Update with actual npm link
        featured: true,
        type: "Open Source"
    }
]

export type FeaturedProject = typeof featuredProjects[0]