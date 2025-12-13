const Architecture = () => {
  return (
    <section className="w-full max-w-3xl mx-auto space-y-6">
      <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
        Architecture
      </p>

      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
        A modular foundation designed for growth
      </h2>

      <p className="text-[17px] leading-relaxed text-slate-700">
        Veritas Hire is built on a modular foundation designed to evolve
        alongside the product. The frontend is implemented using Next.js and
        Tailwind, enabling a server-first rendering model and a restrained,
        composable UI focused on clarity and performance.
      </p>

      <p className="text-[17px] leading-relaxed text-slate-700">
        The application architecture emphasizes clear data boundaries and
        predictable state. Backend services and scoring logic are intentionally
        planned as a decoupled API layer, allowing the system to scale and adapt
        as requirements mature without significant architectural rewrites.
      </p>
    </section>
  );
};

export default Architecture;
