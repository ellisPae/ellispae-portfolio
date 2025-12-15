"use client";

import { ExperienceTimeline } from "./ExperienceTimeline";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <motion.section
      id="experience"
      className="max-w-5xl mx-auto px-6 pt-28 pb-28 snap-start scroll-mt-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-2xl font-semibold mb-10">Experience</h2>
      <ExperienceTimeline />
    </motion.section>
  );
}
