"use client";

import { useRef, useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

interface Project {
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
}

export default function ProjectCarousel({ projects }: { projects: Project[] }) {
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
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-20" />
      {/* Scroll Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-md shadow-md hover:bg-white px-2 py-2 rounded-full"
      >
        ←
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-md shadow-md hover:bg-white px-2 py-2 rounded-full"
      >
        →
      </button>

      {/* Carousel Track */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-4
          scrollbar-none scroll-smooth touch-pan-x
          pl-20
        "
        style={{ scrollSnapType: "x mandatory" }}
      >
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="min-w-[75%] mx-auto snap-center transform transition-transform duration-300 hover:scale-[1.02]"
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-3 mt-6">
        {projects.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all ${
              i === activeIndex ? "bg-slate-900 scale-110" : "bg-slate-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
