export default function CTA() {
  return (
    <section className="pt-10 animate-fadeIn">
      <a
        href="/"
        className="text-slate-600 hover:text-slate-800 transition underline"
      >
        ← Back to Home
      </a>
      <div className="mt-6">
        <a
          href="/projects"
          className="px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-700 transition"
        >
          View More Projects
        </a>
      </div>
    </section>
  );
}
