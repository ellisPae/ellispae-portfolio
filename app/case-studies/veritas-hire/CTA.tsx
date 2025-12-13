const CTA = () => {
  return (
    <section className="w-full max-w-3xl mx-auto space-y-8">
      <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
        Next Steps
      </p>

      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
        Where this project goes next
      </h2>

      <p className="text-[17px] leading-relaxed text-slate-700">
        Veritas Hire continues to evolve. Planned iterations include expanding
        the evaluation model, introducing a dedicated backend API for
        persistence and analytics, and refining scoring logic based on real user
        feedback.
      </p>

      <p className="text-[17px] leading-relaxed text-slate-700">
        Longer term, the project serves as a foundation for exploring
        responsible AI design, clearer hiring signals, and tools that empower
        candidates rather than obscure decision-making.
      </p>

      <a
        href="/"
        className="inline-block text-[17px] underline text-slate-700 hover:text-slate-900 transition"
      >
        ← Back to Home
      </a>
    </section>
  );
};

export default CTA;
