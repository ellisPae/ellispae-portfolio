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
    <main className="w-full flex flex-col items-center px-6 pt-24 pb-28 animate-fadeIn">
      <div className="max-w-4xl w-full space-y-24">
        <Hero />
        <div className="border-t border-slate-200 my-12" />

        <Overview />
        <div className="border-t border-slate-200 my-12" />

        <Problem />
        <div className="border-t border-slate-200 my-12" />

        <Solution />
        <div className="border-t border-slate-200 my-12" />

        <Architecture />
        <div className="border-t border-slate-200 my-12" />

        <Features />
        <div className="border-t border-slate-200 my-12" />

        <Results />
        <div className="border-t border-slate-200 my-12" />

        <Lessons />
        <div className="border-t border-slate-200 my-12" />

        <CTA />
      </div>
    </main>
  );
};

export default VeritasHireCaseStudy;
