const CTA = () => {
  return (
    <section
      id="veritas-hire-cta"
      className="w-full max-w-3xl mx-auto space-y-8"
    >
      <p className="font-mono text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">
        Next Steps
      </p>

      <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-neutral-100">
        Where this project goes next
      </h2>

      <p className="text-[17px] leading-relaxed text-slate-700 dark:text-neutral-200/90">
        Veritas Hire continues to evolve. Planned iterations include expanding
        the evaluation model, introducing a dedicated backend API for
        persistence and analytics, and refining scoring logic based on real user
        feedback.
      </p>

      <p className="text-[17px] leading-relaxed text-slate-700 dark:text-neutral-200/90">
        Longer term, the project serves as a foundation for exploring
        responsible AI design, clearer hiring signals, and tools that empower
        candidates rather than obscure decision-making.
      </p>

      <a
        href="/"
        className="inline-block text-[17px] underline text-slate-700 dark:text-neutral-200/90 hover:text-slate-900 dark:hover:text-white transition"
      >
        ← Back to Home
      </a>
    </section>
  );
};

export default CTA;
