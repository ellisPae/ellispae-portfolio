"use client";

import ProjectCarousel from "./projects/ProjectCarousel";

type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  links: {
    caseStudy?: string;
    demo?: string;
    github?: string;
    live?: string;
  };
};

export default function FeaturedProjects({
  projects,
}: {
  projects: Project[];
}) {
  if (!projects || projects.length === 0) {
    return <div>No projects available.</div>;
  }

  return (
    <section
      id="projects"
      className="w-full min-h-screen snap-start flex items-center pt-36 pb-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <h2 className="text-4xl font-bold tracking-tight mb-4">
          Featured Projects
        </h2>

        <p className="text-gray-600 max-w-4xl mb-12">
          A selection of meaningful work that reflects my interests in clean
          design, thoughtful engineering, and real-world impact.
        </p>

        {/* Actual Carousel */}
        <ProjectCarousel projects={projects} />
      </div>
    </section>
  );
}
