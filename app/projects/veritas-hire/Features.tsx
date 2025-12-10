export default function Features() {
  return (
    <section className="space-y-4 animate-fadeIn">
      <h2 className="text-3xl font-semibold text-gray-900">Key Features</h2>

      <ul className="space-y-4 text-slate-700 leading-relaxed">
        <li className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-blue-600" />
          Role-based structured scoring
        </li>
        <li className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-blue-600" />
          Intelligent resume parsing
        </li>
        <li className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-blue-600" />
          AI-driven career insights
        </li>
        <li className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-blue-600" />
          Clean, modern UI
        </li>
        <li className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-blue-600" />
          Detailed skill breakdowns
        </li>
      </ul>
    </section>
  );
}
