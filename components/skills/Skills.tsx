"use client";

import { motion, useReducedMotion } from "framer-motion";

import { skills } from "@/lib/skillsData";

const Skills = () => {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.06,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 6 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="skills"
      className="w-full max-w-6xl mx-auto px-6 sm:px-8 pt-26 pb-28 snap-start flex items-center scroll-mt-5 will-change-transform"
      variants={container}
      initial={shouldReduceMotion ? "show" : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="w-full">
        <div className="max-w-2xl mb-13">
          <h2
            id="skills-heading"
            className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100"
          >
            Skills
          </h2>
          <p
            id="skills-description"
            className="mt-2 text-sm text-neutral-500 dark:text-neutral-400"
          >
            A snapshot of the stack, tools, and practices I use to ship.
          </p>
        </div>

        <div
          id="skills-grid"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-14 gap-y-10 lg:gap-y-14"
        >
          {Object.entries(skills).map(([category, items]) => (
            <motion.div
              key={category}
              id={`skills-category-${category
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              variants={item}
              className="rounded-xl transition-colors dark:bg-transparent"
            >
              <h3
                id={`skills-category-title-${category
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="text-sm font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-300 mb-4 pb-2 border-b border-neutral-300 dark:border-white/20"
              >
                {category}
              </h3>

              <ul
                id={`skills-category-list-${category
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="space-y-2.5 text-sm text-neutral-800 dark:text-neutral-200/90 leading-relaxed"
              >
                {items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
