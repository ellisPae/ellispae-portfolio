"use client";

import { motion } from "framer-motion";
// import GolfModule from "./modules/GolfModule";
// import MusicModule from "./modules/MusicModule";
// import ArticlesModule from "./modules/ArticlesModule";

const BeyondCode = () => {
  return (
    <motion.section
      id="beyond-code"
      className="max-w-5xl mx-auto px-6 py-24 snap-start min-h-screen"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-semibold mb-12">Beyond Code</h2>

      <div className="space-y-20">
        {/* <GolfModule />
        <MusicModule />
        <ArticlesModule /> */}
      </div>
    </motion.section>
  );
};

export default BeyondCode;
