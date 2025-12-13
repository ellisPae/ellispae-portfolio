const Features = () => {
  return (
    <section className="w-full max-w-3xl mx-auto space-y-6">
      <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
        Features
      </p>

      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
        Core product capabilities
      </h2>

      <p className="text-[17px] leading-relaxed text-slate-700">
        Core features were designed around a single principle: reduce ambiguity
        without overwhelming the user. Structured scoring provides clear
        signals, while AI-assisted parsing translates raw resume content into
        readable insight.
      </p>

      <ul className="list-disc list-inside space-y-2 text-[17px] leading-relaxed text-slate-700">
        <li>
          Role-based, structured scoring across clearly defined dimensions
        </li>
        <li>
          AI-assisted resume parsing with consistent, human-readable output
        </li>
        <li>
          Transparent breakdowns of skills, experience, and growth potential
        </li>
        <li>
          An intentionally restrained interface designed to prioritize clarity
          and trust
        </li>
      </ul>
    </section>
  );
};

export default Features;
