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
      className="w-full max-w-6xl mx-auto px-6 sm:px-8 pt-20 pb-20 snap-start min-h-screen flex items-center scroll-mt-5 will-change-transform"
      variants={container}
      initial={shouldReduceMotion ? "show" : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="w-full">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl font-semibold tracking-tight">Skills</h2>
          <p className="mt-2 text-sm text-neutral-500">
            A snapshot of the stack, tools, and practices I use to ship.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-6">
          {Object.entries(skills).map(([category, items]) => (
            <motion.div
              key={category}
              variants={item}
              className="rounded-xl border border-transparent hover:border-neutral-200/70 hover:bg-neutral-50/40 transition-colors"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-600 mb-3 pb-1 border-b border-neutral-200">
                {category}
              </h3>

              <ul className="space-y-1.5 text-sm text-neutral-800 leading-relaxed">
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
