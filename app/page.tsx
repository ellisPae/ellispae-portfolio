export default function HomePage() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-start bg-white text-gray-900">
      {/* Temporary Header Placeholder */}
      <div className="w-full max-w-5xl py-8 border-b border-gray-200 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Test Main Page</h1>
        <p className="mt-2 text-gray-600">
          This is your starting point. Add components above and below this
          section.
        </p>
      </div>

      {/* Content Section */}
      <section className="w-full max-w-4xl py-16 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Welcome to Your Portfolio
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Replace this content with actual components like Navbar, Hero, About,
          Experience, Projects, Contact, and Footer.
          <br />
          For now, this serves as a visual sanity check that Tailwind and
          Next.js rendering are working correctly.
        </p>

        {/* Example button */}
        <button className="mt-8 px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
          Test Button
        </button>
      </section>

      {/* Placeholder Footer Line */}
      <div className="w-full max-w-5xl py-6 border-t border-gray-200 text-center text-sm text-gray-500">
        Footer placeholder — replace later
      </div>
    </main>
  );
}
