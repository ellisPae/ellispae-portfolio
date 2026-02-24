"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";

import { skills } from "@/lib/skillsData";

const Skills = () => {
  const shouldReduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        when: "beforeChildren",
        staggerChildren: 0.06,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 6 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.section
      id="skills"
      className="w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 pt-10 sm:pt-12 lg:pt-12 pb-10 sm:pb-12 lg:pb-12 snap-start scroll-mt-10 will-change-transform"
      variants={container}
      initial={shouldReduceMotion ? "show" : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="w-full">
        <div className="max-w-2xl mb-6 sm:mb-7">
          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100"
          >
            Skills
          </h2>
          <p
            id="skills-description"
            className="mt-2 text-base text-neutral-600 dark:text-neutral-400"
          >
            A snapshot of the stack, tools, and practices I use to ship.
          </p>
        </div>

        <div
          id="skills-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {Object.entries(skills).map(([category, items]) => (
            <motion.div
              key={category}
              id={`skills-category-${category.toLowerCase().replace(/\s+/g, "-")}`}
              variants={item}
              className={`rounded-2xl border border-neutral-200/70 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-sm p-3 sm:p-4 lg:p-4 shadow-sm transition-all hover:shadow-md hover:border-neutral-300/70 dark:hover:border-white/20`}
            >
              <h3
                id={`skills-category-title-${category
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-300 mb-1.5 pb-1.5 border-b border-neutral-200/80 dark:border-white/15"
              >
                {category}
              </h3>

              <ul
                id={`skills-category-list-${category
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="space-y-1.5 text-sm text-neutral-800 dark:text-neutral-200/90 leading-relaxed"
              >
                {items.map((skill) => (
                  <li key={skill} className="leading-snug">
                    {skill}
                  </li>
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
