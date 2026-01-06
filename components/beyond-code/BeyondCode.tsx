"use client";

import { motion, Variants } from "framer-motion";

import GolfModule from "./modules/golf/GolfModule";
import MusicModule from "./modules/music/MusicModule";

const container: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

const BeyondCode = () => {
  return (
    <>
      <motion.section
        id="beyond-code"
        className="max-w-5xl mx-auto px-6 pt-12 pb-20 scroll-mt-24 snap-start min-h-[calc(100vh-6rem)] flex flex-col justify-start"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-2xl mb-6">
          <h2 className="text-3xl font-semibold mb-2 text-neutral-900 dark:text-neutral-100">
            Beyond Code
          </h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            A few things I enjoy outside of building software.
          </p>
        </div>

        <motion.div
          variants={item}
          className="rounded-2xl border border-neutral-200 bg-white/60 p-6 sm:p-8 dark:border-white/10 dark:bg-white/5"
        >
          <GolfModule />
        </motion.div>
      </motion.section>

      <motion.section
        id="beyond-code-music"
        className="max-w-5xl mx-auto px-6 pt-12 pb-20 scroll-mt-24 snap-start min-h-[calc(100vh-6rem)] flex flex-col justify-start"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          variants={item}
          className="rounded-2xl border border-neutral-200 bg-white/60 p-6 sm:p-8 dark:border-white/10 dark:bg-white/5"
        >
          <MusicModule />
        </motion.div>
      </motion.section>
    </>
  );
};

export default BeyondCode;
