export default function Architecture() {
  return (
    <section className="space-y-8 animate-fadeIn">
      <h2 className="text-3xl font-semibold text-gray-900">Architecture</h2>

      <p className="text-slate-700 leading-relaxed">
        Veritas Hire is built on a modular service-oriented architecture that
        cleanly separates the frontend, backend, and AI analysis layers. This
        ensures predictable behavior, easy scaling, and reliable performance.
      </p>

      <ul className="list-disc list-inside text-slate-700 space-y-2">
        <li>
          <strong>Next.js + Tailwind</strong>: UI, server components, and a
          clean developer experience.
        </li>
        <li>
          <strong>Django REST API</strong>: Role parsing, validation, and
          structured scoring logic.
        </li>
        <li>
          <strong>OpenAI API</strong>: Natural-language interpretation of resume
          content.
        </li>
        <li>
          <strong>PostgreSQL</strong>: Storage for roles, score history, and
          evaluation metadata.
        </li>
      </ul>
    </section>
  );
}
