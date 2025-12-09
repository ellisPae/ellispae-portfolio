"use client";

export default function Hero() {
  return (
    <section className="w-full flex justify-center px-6">
      <div className="max-w-5xl w-full pt-32 pb-24 animate-fadeIn">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
          Building clean, modern, and meaningful digital experiences.
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
          I’m a software engineer focused on crafting thoughtful, efficient, and
          visually refined interfaces using technologies like Next.js, React,
          TypeScript, and modern frontend systems. I value clarity, intention,
          and engineering excellence.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="#projects"
            className="inline-block px-8 py-3 text-lg font-medium rounded-xl bg-slate-600 text-white hover:bg-slate-700 active:scale-[0.98] transition-all shadow-sm"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
}
