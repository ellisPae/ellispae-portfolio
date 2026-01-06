import Hero from "./Hero";
import Overview from "./Overview";
import Problem from "./Problem";
import Solution from "./Solution";
import Architecture from "./Architecture";
import Features from "./Features";
import Results from "./Results";
import Lessons from "./Lessons";
import CTA from "./CTA";

const VeritasHireCaseStudy = () => {
  return (
    <main
      id="veritas-hire-case-study"
      className="w-full flex flex-col items-center px-6 pt-24 pb-28 animate-fadeIn text-neutral-900 dark:text-neutral-100 bg-white dark:bg-[#0b0f19]"
    >
      <div className="max-w-4xl w-full space-y-24">
        <Hero />
        <div className="border-t border-slate-200 dark:border-white/10 my-12" />

        <Overview />
        <div className="border-t border-slate-200 dark:border-white/10 my-12" />

        <Problem />
        <div className="border-t border-slate-200 dark:border-white/10 my-12" />

        <Solution />
        <div className="border-t border-slate-200 dark:border-white/10 my-12" />

        <Architecture />
        <div className="border-t border-slate-200 dark:border-white/10 my-12" />

        <Features />
        <div className="border-t border-slate-200 dark:border-white/10 my-12" />

        <Results />
        <div className="border-t border-slate-200 dark:border-white/10 my-12" />

        <Lessons />
        <div className="border-t border-slate-200 dark:border-white/10 my-12" />

        <CTA />
      </div>
    </main>
  );
};

export default VeritasHireCaseStudy;
