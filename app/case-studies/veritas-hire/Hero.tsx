const Hero = () => {
  return (
    <section
      id="veritas-hire-hero"
      className="w-full max-w-3xl mx-auto space-y-6"
    >
      <p className="font-mono text-sm uppercase tracking-[0.2em] text-slate-600 dark:text-slate-400">
        Case Study
      </p>

      <h1
        id="veritas-hire-title"
        className="text-5xl font-semibold tracking-tight text-slate-900 dark:text-neutral-100 typewriter-title"
      >
        Veritas Hire
      </h1>

      <p className="text-[17px] leading-relaxed text-slate-700 dark:text-neutral-200/90">
        Veritas Hire is an AI-powered resume analysis platform designed to bring
        clarity to an often opaque hiring process. Rather than relying on vague
        summaries or keyword matching, it helps job seekers understand how their
        experience aligns with specific roles through structured, transparent
        evaluation.
      </p>

      <div className="flex gap-4 pt-4">
        <a
          href="https://veritas-hire.vercel.app"
          target="_blank"
          className="text-[15px] underline text-slate-700 dark:text-neutral-200/90 hover:text-slate-900 dark:hover:text-white transition"
        >
          Live Demo
        </a>
        <a
          href="https://github.com/ellisPae/veritas-hire"
          target="_blank"
          className="text-[15px] underline text-slate-700 dark:text-neutral-200/90 hover:text-slate-900 dark:hover:text-white transition"
        >
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Hero;
