"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="w-full max-w-5xl mx-auto px-6 sm:px-8 pt-20 pb-20 snap-start min-h-screen flex items-center scroll-mt-1"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="w-full max-w-3xl mx-auto space-y-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: 0.06 },
          },
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 10 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">About</h2>
            <p className="mt-2 text-sm text-neutral-500">
              Curiosity, craft, and work that earns trust.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 10 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          <p className="text-lg text-neutral-700 leading-relaxed">
            I’m a software engineer driven by curiosity and a desire to
            understand how systems work, why they break, and how to make them
            better. I enjoy breaking down complex problems, asking good
            questions, and shaping solutions that are clear, reliable, and built
            to last.
          </p>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 10 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          <p className="text-lg text-neutral-700 leading-relaxed">
            My background spans full-stack development, quality engineering, and
            production ownership. That range has shaped how I build: with care
            for user experience, respect for maintainability, and attention to
            the details that make software dependable in the real world.
          </p>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 10 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          <p className="text-lg text-neutral-700 leading-relaxed">
            I’m motivated by work that has real impact. Software that helps
            people, improves processes, and creates trust through thoughtful
            design and technical excellence matters deeply to me. I’m always
            learning, refining my craft, and looking for roles where curiosity
            and purpose meet.
          </p>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 10 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          <p className="text-lg text-neutral-700 leading-relaxed">
            Outside of work, you’ll usually find me exploring new coffee,
            traveling, playing golf, or learning something new simply for the
            joy of it.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
