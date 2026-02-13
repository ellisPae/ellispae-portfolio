"use client";

import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/types/project";

const ProjectCard = ({ title, description, image, tech, links }: Project) => {
  return (
    <div
      id={`project-card-${title.toLowerCase().replace(/\s+/g, "-")}`}
      className="group w-full max-w-3xl rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between bg-white border border-gray-200 dark:bg-[#0f172a]/70 dark:border-white/10 dark:shadow-black/20"
    >
      {/* Image */}
      <div className="relative w-full h-44 sm:h-60 rounded-xl overflow-hidden flex-shrink-0 bg-white dark:bg-white/5">
        <Image
          src={image}
          alt={`${title} Thumbnail`}
          fill
          className="object-contain bg-white dark:bg-transparent transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/20 to-white/0 dark:from-white/5 dark:to-transparent" />
      </div>

      <div className="flex-grow mt-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-slate-100">
          {title}
        </h3>
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {description}
        </p>

        {/* Tech badges */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="px-3 py-1 text-sm rounded-full bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-slate-200"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* CTA buttons */}
      <div className="mt-5 sm:mt-6 flex flex-wrap gap-3 sm:gap-4 flex-shrink-0">
        {links.caseStudy && (
          <Link
            href={links.caseStudy}
            className="px-4 py-2 text-sm sm:text-base rounded-lg transition bg-slate-900 text-white hover:bg-slate-700 dark:bg-white/10 dark:text-slate-100 dark:hover:bg-white/15"
          >
            Case Study
          </Link>
        )}

        {links.demo && (
          <Link
            href={links.demo}
            target="_blank"
            className="px-4 py-2 text-sm sm:text-base rounded-lg transition bg-blue-600 text-white hover:bg-blue-500 dark:bg-indigo-500/90 dark:hover:bg-indigo-400"
          >
            Demo
          </Link>
        )}

        {links.github && (
          <Link
            href={links.github}
            target="_blank"
            className="px-4 py-2 text-sm sm:text-base rounded-lg transition border border-gray-300 text-gray-800 hover:bg-gray-50 dark:border-white/15 dark:text-slate-100 dark:hover:bg-white/10"
          >
            GitHub
          </Link>
        )}

        {links.live && (
          <Link
            href={links.live}
            target="_blank"
            className="px-4 py-2 text-sm sm:text-base rounded-lg transition border border-gray-300 text-gray-800 hover:bg-gray-50 dark:border-white/15 dark:text-slate-100 dark:hover:bg-white/10"
          >
            Live Site
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
