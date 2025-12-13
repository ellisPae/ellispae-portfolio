import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "Veritas Hire",
    description:
      "An AI-powered resume analysis platform that provides actionable insights using structured scoring and modern UI.",
    image: "/projects/vh-thumbnail.png",
    tech: ["Next.js", "Tailwind", "Django REST", "PostgreSQL", "OpenAI API"],
    links: {
      caseStudy: "/case-studies/veritas-hire",
      demo: "https://veritas-hire-demo.com",
      github: "https://github.com/ellispae/veritas-hire",
    },
  },
  {
    title: "Metro Church",
    description:
      "Production engineering work for Metro Church improving content architecture, SEO metadata, and front-end UI clarity using Next.js, Sanity CMS, GraphQL, and AWS S3.",
    image: "/projects/metro-logo.png",
    tech: ["Next.js", "Tailwind", "Sanity CMS", "GraphQL", "AWS S3"],
    links: {
      live: "https://metrophilly.org",
    },
  },
];
