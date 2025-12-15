import { motion } from "framer-motion";
import { experience } from "@/lib/experienceData";
import { ExperienceItem } from "./ExperienceItem";

export function ExperienceTimeline() {
  return (
    <div className="relative mt-10">
      {/* Vertical line */}
      <div className="absolute left-4 sm:left-6 top-0 h-full w-px bg-neutral-200" />

      <div className="space-y-10">
        {experience.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
          >
            <ExperienceItem experience={item} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
