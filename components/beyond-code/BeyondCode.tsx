"use client";

import { motion } from "framer-motion";
import GolfModule from "./modules/golf/GolfModule";
import MusicModule from "./modules/music/MusicModule";

const BeyondCode = () => {
  return (
    <motion.section
      id="beyond-code"
      className="max-w-5xl mx-auto px-6 py-20 snap-start min-h-screen scroll-mt-18"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex flex-col justify-center min-h-[calc(100vh-5rem)]">
        <h2 className="text-3xl font-semibold mb-3">Beyond Code</h2>
        <p className="text-sm text-neutral-500 mb-10 max-w-2xl">
          A few things I enjoy outside of building software.
        </p>
        <div className="space-y-16">
          <GolfModule />
          <div className="border-t border-neutral-300/60 pt-20">
            <MusicModule />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default BeyondCode;
