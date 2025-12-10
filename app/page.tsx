import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
// import Experience from "@/components/Experience";
// import Skills from "@/components/Skills";
// import About from "@/components/About";
// import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";

const projects = [
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
      "Production engineering work for Metro Church improving content architecture, SEO metadata, and front‑end UI clarity using Next.js, Sanity CMS, GraphQL, and AWS S3.",
    image: "/projects/metro-logo.png",
    tech: ["Next.js", "Tailwind", "Sanity CMS", "GraphQL", "AWS S3"],
    links: {
      live: "https://metrophilly.org",
    },
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main
        className="pt-24 min-h-screen w-full flex flex-col items-center 
                 bg-white text-gray-900 px-4
                 snap-y snap-mandatory overflow-y-scroll h-screen"
      >
        <Hero />
        <FeaturedProjects projects={projects} />

        {/* Divider Placeholder */}
        <div className="w-full max-w-4xl mt-20 border-t border-gray-200" />

        <section className="max-w-4xl text-center py-16 snap-start min-h-screen">
          <h2 className="text-3xl font-semibold mb-4">Prototype Area</h2>
          <p className="text-gray-700 leading-relaxed">
            Use this space to test components like your upcoming About section,
            Experience timeline, Project cards, Contact form, and more.
          </p>
        </section>
      </main>
    </>
  );
}
