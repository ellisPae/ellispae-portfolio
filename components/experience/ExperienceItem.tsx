import type { Experience } from "@/types/experience";

interface ExperienceItemProps {
  experience: Experience;
}

const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  const { role, company, date, bullets, tech } = experience;

  return (
    <div className="relative flex gap-8">
      <div className="relative z-10 mt-2 h-3 w-3 rounded-full bg-neutral-900" />

      <div className="flex-1">
        <h3 className="text-[0.98rem] sm:text-base font-semibold leading-snug">
          {role}
        </h3>

        <p className="mt-1 text-[0.8125rem] text-neutral-600 tracking-wide">
          {company}
          {date && ` · ${date}`}
        </p>

        <ul className="mt-2 space-y-1.5 text-sm text-neutral-700 list-disc pl-5 leading-relaxed">
          {bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>

        {tech && (
          <p className="mt-3 text-xs text-neutral-500 tracking-wide">
            {tech.join(" · ")}
          </p>
        )}
      </div>
    </div>
  );
};

export { ExperienceItem };
