const Lessons = () => {
  return (
    <section className="w-full max-w-3xl mx-auto space-y-6">
      <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
        Lessons
      </p>

      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
        Balancing technical capability with clarity and trust
      </h2>

      <p className="text-[17px] leading-relaxed text-slate-700">
        Building Veritas Hire reinforced the importance of restraint when
        applying AI to user-facing systems. Sophisticated models are only
        valuable if users can understand, trust, and act on their outputs.
      </p>

      <ul className="list-disc list-inside space-y-2 text-[17px] leading-relaxed text-slate-700">
        <li>
          Designing AI-assisted workflows with an emphasis on transparency
          rather than opaque or purely algorithmic scoring.
        </li>
        <li>
          Parsing resume and job description data through structured prompt
          design to reduce hallucination and improve consistency.
        </li>
        <li>
          Treating prompt engineering as an interface layer that requires
          iteration, versioning, and testing.
        </li>
        <li>
          Implementing caching strategies and explicit data clearing to balance
          performance with correctness.
        </li>
        <li>
          Strengthening hands-on experience with Next.js server-first patterns,
          Tailwind CSS for consistent UI, and rapid deployment through Vercel.
        </li>
      </ul>
    </section>
  );
};

export default Lessons;
