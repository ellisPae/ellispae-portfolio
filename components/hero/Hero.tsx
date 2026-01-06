"use client";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden snap-start min-h-screen -mt-24 pt-24 flex items-center"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-50/60 via-white to-white dark:hidden" />

      <div className="pointer-events-none absolute inset-0 hidden dark:block bg-[#0b0f19]" />
      <div className="pointer-events-none absolute inset-0 hidden dark:block bg-gradient-to-b from-[#0b0f19] via-[#070a14] to-[#050816]" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_700px_at_50%_18%,transparent_55%,rgba(0,0,0,0.05)_88%)] dark:bg-[radial-gradient(1200px_700px_at_50%_18%,transparent_55%,rgba(0,0,0,0.22)_92%)]" />

      <div className="relative w-full flex justify-center px-6">
        <div className="relative max-w-5xl w-full pt-24 pb-24 sm:pt-28 sm:pb-28 animate-fadeIn motion-reduce:animate-none motion-reduce:opacity-100">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
            Hi, I’m Ellis Pae.
          </h1>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight leading-tight text-slate-700 dark:text-neutral-200">
            I build clean, modern, and{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 bg-clip-text text-transparent dark:from-indigo-300 dark:via-violet-300 dark:to-sky-300">
              meaningful
            </span>{" "}
            digital experiences.
          </h2>

          <p className="mt-6 text-lg md:text-xl max-w-2xl leading-relaxed text-slate-600 dark:text-neutral-300/90">
            I’m a full-stack software engineer who builds thoughtful product
            experiences end to end, from clean, performant interfaces to
            reliable backend systems. I primarily work with Next.js, React, and
            TypeScript, and regularly own features across the stack, including
            data modeling, APIs, and production delivery.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
            <div className="rounded-xl border border-slate-200/80 bg-white/75 backdrop-blur-sm px-4 py-3 text-sm text-slate-700 shadow-[0_1px_0_rgba(0,0,0,0.02)] transition-all hover:-translate-y-0.5 hover:shadow-sm dark:border-white/12 dark:bg-white/7 dark:text-neutral-200/90 dark:hover:bg-white/10">
              Full-stack feature development, from frontend UX to backend logic
              and data.
            </div>
            <div className="rounded-xl border border-slate-200/80 bg-white/75 backdrop-blur-sm px-4 py-3 text-sm text-slate-700 shadow-[0_1px_0_rgba(0,0,0,0.02)] transition-all hover:-translate-y-0.5 hover:shadow-sm dark:border-white/12 dark:bg-white/7 dark:text-neutral-200/90 dark:hover:bg-white/10">
              Clean architecture, maintainable code, and systems built for
              scale.
            </div>
            <div className="rounded-xl border border-slate-200/80 bg-white/75 backdrop-blur-sm px-4 py-3 text-sm text-slate-700 shadow-[0_1px_0_rgba(0,0,0,0.02)] transition-all hover:-translate-y-0.5 hover:shadow-sm dark:border-white/12 dark:bg-white/7 dark:text-neutral-200/90 dark:hover:bg-white/10">
              Ownership across the lifecycle, from discovery and implementation
              to testing, deployment, and iteration.
            </div>
          </div>

          <div className="mt-12">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-xl bg-slate-900 text-white shadow-sm transition-all hover:bg-slate-800 hover:shadow-md active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:bg-white/12 dark:text-white dark:hover:bg-white/16 dark:focus-visible:ring-offset-[#0b0f19]"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
