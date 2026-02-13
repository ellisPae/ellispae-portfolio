"use client";

const CALLOUTS = [
  "Full-stack feature development, from frontend UX to backend logic and data.",
  "Clean architecture, maintainable code, and systems built for scale.",
  "Ownership across the lifecycle, from discovery and implementation to testing, deployment, and iteration.",
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden snap-start -mt-24 pt-24 flex min-h-[92svh] sm:min-h-[100svh] items-start md:items-center"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-50/60 via-white to-white dark:hidden" />

      <div className="pointer-events-none absolute inset-0 hidden dark:block bg-[#0b0f19]" />
      <div className="pointer-events-none absolute inset-0 hidden dark:block bg-gradient-to-b from-[#0b0f19] via-[#070a14] to-[#050816]" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_700px_at_50%_18%,transparent_55%,rgba(0,0,0,0.05)_88%)] dark:bg-[radial-gradient(1200px_700px_at_50%_18%,transparent_55%,rgba(0,0,0,0.22)_92%)]" />

      <div className="relative w-full flex justify-center px-5 sm:px-8">
        <div className="relative w-full max-w-5xl py-14 sm:py-18 md:py-22 animate-fadeIn motion-reduce:animate-none motion-reduce:opacity-100">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.05]">
              Hi, I’m Ellis Pae.
            </h1>

            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight leading-tight text-slate-700 dark:text-neutral-200">
              I build clean, modern, and{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 bg-clip-text text-transparent dark:from-indigo-300 dark:via-violet-300 dark:to-sky-300">
                meaningful
              </span>{" "}
              digital experiences.
            </h2>

            <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed text-slate-600 dark:text-neutral-300/90">
              I’m a full-stack software engineer focused on building thoughtful
              product experiences from end to end, spanning clean, performant
              interfaces and reliable backend systems. I primarily work with
              Next.js, React, TypeScript, and Ruby on Rails, and regularly own
              features across the stack, including data modeling, APIs, and
              production delivery.
            </p>
          </div>

          {/* Mobile: compact callouts */}
          <div className="mt-8 space-y-3 sm:hidden">
            {CALLOUTS.map((text) => (
              <div key={text} className="flex gap-3">
                <div className="w-[3px] h-10 mt-1 flex-shrink-0 rounded-full bg-gradient-to-b from-indigo-500 via-violet-500 to-sky-400 opacity-80 dark:opacity-60" />
                <p className="text-sm leading-relaxed text-slate-700 dark:text-neutral-200/90">
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* Tablet+ : cards */}
          <div className="mt-8 hidden sm:grid grid-cols-3 gap-4 max-w-4xl">
            {CALLOUTS.map((text) => (
              <div
                key={text}
                className="rounded-xl border border-slate-200/80 bg-white/75 backdrop-blur-sm px-4 py-3 text-sm leading-relaxed text-slate-700 shadow-[0_1px_0_rgba(0,0,0,0.02)] transition-all hover:-translate-y-0.5 hover:shadow-sm dark:border-white/12 dark:bg-white/7 dark:text-neutral-200/90 dark:hover:bg-white/10"
              >
                {text}
              </div>
            ))}
          </div>

          <div className="mt-10 sm:mt-12">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-7 sm:px-8 py-3 text-base font-medium rounded-xl bg-slate-900 text-white shadow-sm transition-all hover:bg-slate-800 hover:shadow-md active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:bg-white/12 dark:text-white dark:hover:bg-white/16 dark:focus-visible:ring-offset-[#0b0f19]"
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
