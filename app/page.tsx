import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen w-full flex flex-col items-center bg-white text-gray-900 px-4">
        {/* Hero Section */}
        <section className="max-w-4xl text-center animate-fadeIn">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900">
            Crafting Clean, Modern, and Meaningful Experiences
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            A portfolio that blends design, engineering, and precision. Built
            with modern web technologies including Next.js 16, Tailwind v4, and
            a focus on elegant minimalism.
          </p>

          <button className="mt-10 px-8 py-3 rounded-xl bg-blue-600 text-white font-medium text-lg shadow-md hover:bg-blue-700 active:scale-[0.98] transition-all">
            View My Work
          </button>
        </section>

        {/* Divider Placeholder */}
        <div className="w-full max-w-4xl mt-20 border-t border-gray-200" />

        <section className="max-w-4xl text-center py-16">
          <h2 className="text-3xl font-semibold mb-4">Prototype Area</h2>
          <p className="text-gray-700 leading-relaxed">
            Use this space to test components like your upcoming About section,
            Experience timeline, Project cards, Contact form, and more.
          </p>
        </section>
      </main>
    </>
  );
}
