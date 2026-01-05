"use client";

import { useEffect, useRef, useState } from "react";

import ProjectCard from "./ProjectCard";

import type { Project } from "@/types/project";

const ProjectCarousel = ({ projects }: { projects: Project[] }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.clientWidth;
    const newIndex = direction === "left" ? activeIndex - 1 : activeIndex + 1;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -width : width,
      behavior: "smooth",
    });

    setActiveIndex(Math.max(0, Math.min(projects.length - 1, newIndex)));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % projects.length;
      setActiveIndex(nextIndex);
      if (scrollRef.current) {
        const width = scrollRef.current.clientWidth;
        scrollRef.current.scrollTo({
          left: width * nextIndex,
          behavior: "smooth",
        });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex, projects.length]);

  return (
    <div className="relative w-full">
      {/* Scroll Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-30 rounded-full px-2 py-2 backdrop-blur-md shadow-md transition bg-white/80 hover:bg-white dark:bg-white/10 dark:hover:bg-white/15"
      >
        ←
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-30 rounded-full px-2 py-2 backdrop-blur-md shadow-md transition bg-white/80 hover:bg-white dark:bg-white/10 dark:hover:bg-white/15"
      >
        →
      </button>

      {/* Carousel Track */}
      <div
        ref={scrollRef}
        id="projects-carousel-track"
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none scroll-smooth"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {projects.map((project, idx) => (
          <div
            key={idx}
            id={`project-slide-${idx}`}
            className="min-w-full flex justify-center snap-center px-6"
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
      <div
        id="projects-carousel-indicators"
        className="flex justify-center gap-3 mt-6"
      >
        {projects.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all ${
              i === activeIndex
                ? "bg-slate-900 scale-110 dark:bg-white"
                : "bg-slate-300 dark:bg-white/25"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
