import { motion } from "framer-motion";

import { experience } from "@/lib/experienceData";
import { ExperienceItem } from "./ExperienceItem";

const ExperienceTimeline = () => {
  return (
    <div className="relative mt-4 sm:mt-6" id="experience-timeline">
      <div className="absolute left-3 sm:left-5 top-0 h-full w-px bg-neutral-200" />

      <div className="space-y-8 sm:space-y-10">
        {experience.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: Math.min(index * 0.05, 0.2),
            }}
          >
            <ExperienceItem experience={item} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export { ExperienceTimeline };
