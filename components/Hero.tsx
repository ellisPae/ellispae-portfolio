"use client";

const Hero = () => {
  return (
    <section className="w-full flex justify-center px-6 snap-start min-h-screen">
      <div className="max-w-5xl w-full pt-32 pb-24 animate-fadeIn">
        <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          <span className="px-3 py-1 rounded-full bg-slate-100">
            Software Engineer
          </span>
          <span className="px-3 py-1 rounded-full bg-slate-100">
            Frontend + Full-stack
          </span>
          <span className="px-3 py-1 rounded-full bg-slate-100">
            Remote-friendly
          </span>
        </div>

        <h1 className="mt-8 text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
          Hi, I&apos;m Ellis Pae. I build clean, modern, and meaningful digital
          experiences.
        </h1>

        <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
          I’m a software engineer focused on thoughtful product experiences,
          performant interfaces, and reliable systems. I work across Next.js,
          React, TypeScript, and modern frontend tooling to ship work that feels
          intentional and easy to use.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3 text-sm text-slate-700">
          {[
            "Design-minded engineering with strong UX collaboration.",
            "Clean architecture, maintainable code, and system clarity.",
            "Ownership from discovery to delivery and iteration.",
          ].map((detail) => (
            <div
              key={detail}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
            >
              {detail}
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-xl bg-slate-900 text-white hover:bg-slate-800 active:scale-[0.98] transition-all shadow-sm"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-xl border border-slate-300 text-slate-700 hover:border-slate-400 hover:text-slate-900 transition-all"
          >
            Let&apos;s Connect
          </a>
          <a
            href="/Ellis_Pae_Resume.pdf"
            className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
