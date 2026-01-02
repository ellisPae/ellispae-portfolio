"use client";

import { motion } from "framer-motion";

import { ExperienceTimeline } from "./ExperienceTimeline";

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="max-w-5xl mx-auto px-6 pt-28 pb-28 snap-start scroll-mt-1"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-2xl font-semibold mb-6">Experience</h2>
      <ExperienceTimeline />
    </motion.section>
  );
};

export default Experience;
