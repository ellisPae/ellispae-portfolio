"use client";

import { motion } from "framer-motion";

import { ExperienceTimeline } from "./ExperienceTimeline";

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="w-full max-w-6xl mx-auto px-6 sm:px-8 pt-12 sm:pt-14 pb-20 snap-start scroll-mt-17"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="text-2xl font-semibold">Experience</h2>
      </div>

      <ExperienceTimeline />
    </motion.section>
  );
};

export default Experience;
