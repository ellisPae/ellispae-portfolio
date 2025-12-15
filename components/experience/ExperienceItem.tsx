import type { Experience } from "@/types/experience";

interface ExperienceItemProps {
  experience: Experience;
}
export function ExperienceItem({ experience }: ExperienceItemProps) {
  const { role, company, date, bullets, tech } = experience;

  return (
    <div className="relative flex gap-8">
      {/* Dot */}
      <div className="relative z-10 mt-2 h-3 w-3 rounded-full bg-neutral-900" />

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-base font-semibold">{role}</h3>

        <p className="text-[0.8125rem] text-neutral-600 mt-1 tracking-wide">
          {company}
          {date && ` · ${date}`}
        </p>

        <ul className="mt-1.5 space-y-1 text-sm text-neutral-700 list-disc pl-5">
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
}
