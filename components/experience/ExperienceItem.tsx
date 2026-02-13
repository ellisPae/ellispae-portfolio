import type { Experience } from "@/types/experience";

interface ExperienceItemProps {
  experience: Experience;
}

const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  const { role, company, date, bullets, tech } = experience;

  const baseId = `experience-item-${company
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}-${role
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}`;

  return (
    <div id={baseId} className="relative flex gap-4 sm:gap-6 md:gap-8">
      <div className="relative flex-none w-6 sm:w-10 md:w-12">
        <div className="absolute left-1/2 top-2.5 -translate-x-1/2 z-10 h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-neutral-900 dark:bg-indigo-200 shadow-sm" />
      </div>

      <div className="flex-1">
        <h3
          id={`${baseId}-role`}
          className="text-[0.98rem] sm:text-base font-semibold leading-snug text-neutral-900 dark:text-neutral-100"
        >
          {role}
        </h3>

        <p
          id={`${baseId}-meta`}
          className="mt-1 text-[0.8125rem] text-neutral-600 dark:text-neutral-400 tracking-wide"
        >
          {company}
          {date && ` · ${date}`}
        </p>

        <ul
          id={`${baseId}-bullets`}
          className="mt-2 space-y-1.5 text-sm text-neutral-700 dark:text-neutral-200/90 list-disc pl-5 leading-relaxed"
        >
          {bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>

        {tech && (
          <p
            id={`${baseId}-tech`}
            className="mt-3 text-xs text-neutral-500 dark:text-neutral-400 tracking-wide"
          >
            {tech.join(" · ")}
          </p>
        )}
      </div>
    </div>
  );
};

export { ExperienceItem };
