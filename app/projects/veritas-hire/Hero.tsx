export default function Hero() {
  return (
    <section className="relative space-y-4 animate-fadeIn">
      <h1 className="text-5xl font-bold tracking-tight text-gray-900">
        Veritas Hire
      </h1>
      <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
        An AI-powered resume analysis platform designed to give job seekers
        clear, meaningful, and actionable insights.
      </p>

      <div className="flex gap-3 mt-6">
        <a
          href="https://veritas-hire.vercel.app"
          target="_blank"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
        >
          Live Demo
        </a>
        <a
          href="https://github.com/ellisPae/veritas-hire"
          target="_blank"
          className="px-6 py-3 border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-50 transition"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
