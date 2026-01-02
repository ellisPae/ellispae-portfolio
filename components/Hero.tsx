"use client";

const Hero = () => {
  return (
    <section className="relative w-full flex justify-center px-6 snap-start min-h-screen -mt-24 pt-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-50/40 to-white" />

      <div className="relative max-w-5xl w-full pt-32 pb-24 animate-fadeIn motion-reduce:animate-none motion-reduce:opacity-100">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
          Hi, I’m Ellis Pae.
        </h1>

        <h2 className="text-3xl md:text-4xl font-semibold text-slate-700 mt-4 tracking-tight leading-tight">
          I build clean, modern, and{" "}
          <span className="text-indigo-600">meaningful</span> digital
          experiences.
        </h2>

        <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
          I’m a full-stack software engineer who builds thoughtful product
          experiences end to end, from clean, performant interfaces to reliable
          backend systems. I primarily work with Next.js, React, and TypeScript,
          and regularly own features across the stack, including data modeling,
          APIs, and production delivery.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
          <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 transition-shadow hover:shadow-sm">
            Full-stack feature development, from frontend UX to backend logic
            and data.
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 transition-shadow hover:shadow-sm">
            Clean architecture, maintainable code, and systems built for scale.
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 transition-shadow hover:shadow-sm">
            Ownership across the lifecycle, from discovery and implementation to
            testing, deployment, and iteration.
          </div>
        </div>

        <div className="mt-12">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-xl bg-slate-900 text-white hover:bg-slate-800 hover:shadow-md active:scale-[0.98] transition-all shadow-sm"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
