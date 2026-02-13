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
      className="w-full snap-start flex items-start md:items-center pt-24 md:pt-36 pb-20 md:pb-28 scroll-mt-2"
    >
      <div
        id="featured-projects-container"
        className="mx-auto w-full max-w-6xl px-4 sm:px-6"
      >
        <h2
          id="featured-projects-heading"
          className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-gray-900 dark:text-slate-100"
        >
          Featured Projects
        </h2>

        <p
          id="featured-projects-description"
          className="text-base sm:text-lg text-gray-600 dark:text-slate-300/90 max-w-4xl mb-8 sm:mb-12"
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
