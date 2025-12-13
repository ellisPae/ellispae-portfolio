const Hero = () => {
  return (
    <section className="w-full max-w-3xl mx-auto space-y-6">
      <p className="font-mono text-sm uppercase tracking-[0.2em] text-slate-600">
        Case Study
      </p>

      <h1 className="text-5xl font-semibold tracking-tight text-slate-900 typewriter-title">
        Veritas Hire
      </h1>

      <p className="text-[17px] leading-relaxed text-slate-700">
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
          className="text-[15px] underline text-slate-700 hover:text-slate-900 transition"
        >
          Live Demo
        </a>
        <a
          href="https://github.com/ellisPae/veritas-hire"
          target="_blank"
          className="text-[15px] underline text-slate-700 hover:text-slate-900 transition"
        >
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Hero;
