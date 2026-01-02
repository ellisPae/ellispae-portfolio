"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="max-w-5xl mx-auto px-6 py-24 snap-start min-h-screen flex items-center scroll-mt-3"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="space-y-6 max-w-3xl">
        <h2 className="text-3xl font-semibold tracking-tight">About</h2>

        <p className="text-lg text-neutral-700 leading-relaxed">
          I’m a software engineer driven by curiosity and a deep desire to
          understand how systems work and how they can work better. I enjoy
          breaking down complex problems, asking thoughtful questions, and
          shaping solutions that are clear, reliable, and built to last.
        </p>

        <p className="text-lg text-neutral-700 leading-relaxed">
          My background spans full-stack development, quality engineering, and
          production ownership. That range has shaped how I build software: with
          care for the user experience, respect for long-term maintainability,
          and an appreciation for the unseen details that make products
          dependable in the real world.
        </p>

        <p className="text-lg text-neutral-700 leading-relaxed">
          I’m motivated by work that has real impact. Software that helps
          people, improves processes, and creates trust through thoughtful
          design and technical excellence matters deeply to me. I’m always
          learning, refining my craft, and looking for opportunities where
          curiosity and purpose meet.
        </p>

        <p className="text-lg text-neutral-700 leading-relaxed">
          Outside of work, you’ll usually find me exploring new coffee,
          traveling, playing golf, or learning something new simply for the joy
          of it.
        </p>
      </div>
    </motion.section>
  );
};

export default About;
