"use client";

import { motion } from "framer-motion";

import { skills } from "@/lib/skillsData";

const Skills = () => {
  return (
    <motion.section
      id="skills"
      style={{ scrollMarginTop: "128px" }}
      className="max-w-6xl mx-auto px-6 py-16 snap-start min-h-screen flex items-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="w-full">
        <h2 className="text-3xl font-semibold tracking-tight mb-10">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-600 mb-3 pb-1 border-b border-neutral-200">
                {category}
              </h3>

              <ul className="space-y-1.5 text-sm text-neutral-900">
                {items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
