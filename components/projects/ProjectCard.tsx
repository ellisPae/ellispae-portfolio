"use client";

import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
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

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  links,
}: ProjectCardProps) {
  return (
    <div className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 min-h-[520px] flex flex-col justify-between">
      {/* Image */}
      <div className="relative w-full h-60 rounded-xl overflow-hidden flex-shrink-0">
        <Image
          src={image}
          alt={`${title} Thumbnail`}
          fill
          className="object-contain bg-white transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/10 pointer-events-none" />
      </div>

      <div className="flex-grow mt-6">
        <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-3 text-slate-600 leading-relaxed">{description}</p>

        {/* Tech badges */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="px-3 py-1 text-sm bg-slate-100 rounded-full text-slate-700"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* CTA buttons */}
      <div className="mt-6 flex gap-4 flex-shrink-0">
        {links.caseStudy && (
          <Link
            href={links.caseStudy}
            className="px-5 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-700 transition"
          >
            Case Study
          </Link>
        )}

        {links.demo && (
          <Link
            href={links.demo}
            target="_blank"
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
          >
            Demo
          </Link>
        )}

        {links.github && (
          <Link
            href={links.github}
            target="_blank"
            className="px-5 py-2 border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-50 transition"
          >
            GitHub
          </Link>
        )}

        {links.live && (
          <Link
            href={links.live}
            target="_blank"
            className="px-5 py-2 border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-50 transition"
          >
            Live Site
          </Link>
        )}
      </div>
    </div>
  );
}
