"use client";

import ProjectCarousel from "./ProjectCarousel";

import { projects } from "@/lib/projects";

const FeaturedProjects = () => {
  if (!projects || projects.length === 0) {
    return <div>No projects available.</div>;
  }

  return (
    <section
      id="projects"
      className="w-full min-h-screen snap-start flex items-center pt-36 pb-28 scroll-mt-2"
    >
      <div id="featured-projects-container" className="mx-auto max-w-6xl px-6">
        <h2
          id="featured-projects-heading"
          className="text-4xl font-bold tracking-tight mb-4 text-gray-900 dark:text-slate-100"
        >
          Featured Projects
        </h2>

        <p
          id="featured-projects-description"
          className="text-gray-600 dark:text-slate-300/90 max-w-4xl mb-12"
        >
          A selection of meaningful work that reflects my interests in clean
          design, thoughtful engineering, and real-world impact.
        </p>

        <ProjectCarousel projects={projects} />
      </div>
    </section>
  );
};

export default FeaturedProjects;
