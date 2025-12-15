import { Experience } from "@/types/experience";

export const experience: Experience[] = [
  {
    role: "Software Developer",
    company: "Metro Church",
    date: "Jan 2023 – Present",
    bullets: [
      "Built and maintained the church’s production website using React, Next.js, TypeScript, and AWS S3 to deliver dynamic content for sermons, events, and community resources",
      "Designed and launched a sermon platform powered by Sanity CMS and GraphQL, featuring modern layouts, summaries, and advanced filtering to improve discoverability and engagement",
      "Improved content organization, URL consistency, and publishing workflows through CMS automation and structured content models",
      "Optimized site performance, SEO, and reliability while integrating third-party services to expand accessibility and reduce manual maintenance",
    ],
    tech: ["React", "Next.js", "Tailwind CSS", "Sanity", "GraphQL", "AWS"],
  },
  {
    role: "Software Engineer in Test",
    company: "The Gnar Company",
    date: "Aug 2022 – Feb 2024",
    bullets: [
      "Developed and optimized a large-scale web application using React, RxJS, and Ruby on Rails, supporting 7,300+ submissions and delivering more than $3.3M in benefits",
      "Led and owned quality assurance strategy across the platform, coordinating test coverage, releases, and production readiness while contributing production code",
      "Improved usability, responsiveness, and reliability across frontend and backend systems through targeted enhancements",
      "Implemented production-grade code and automated unit, integration, and end-to-end tests to increase release confidence and system stability",
      "Supported deployments and production troubleshooting to maintain application stability under real-world usage",
    ],
    tech: [
      "React",
      "TypeScript",
      "RxJS",
      "Ruby on Rails",
      "PostgreSQL",
      "Auth0",
      "Cypress",
      "Jest",
      "Docker",
      "CI/CD",
    ],
  },
  {
    role: "CBRN (Chemical, Biological, Radiological and Nuclear) Specialist",
    company: "U.S. Army",
    date: "Jul 2010 – Jul 2018",
    bullets: [
      "Led and trained a 40-soldier platoon in CBRN defense, decontamination procedures, and emergency response, achieving a 100% readiness rating",
      "Conducted risk assessments and developed mitigation strategies for CBRN threats, strengthening safety protocols and operational readiness",
      "Managed and maintained a $1M inventory of specialized CBRN detection and decontamination equipment, ensuring reliability during critical missions",
    ],
  },
];
