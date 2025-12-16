import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import { projects } from "@/lib/projects";
import Experience from "@/components/experience/Experience";
import Skills from "@/components/skills/Skills";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
// import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main
        className="pt-24 min-h-screen w-full flex flex-col items-center 
                   bg-white text-gray-900 px-4
                   snap-y snap-proximity overflow-y-scroll h-screen"
      >
        <Hero />
        <FeaturedProjects projects={projects} />
        <Experience />
        <Skills />
        <About />
        <Contact />

        {/* Divider Placeholder */}
        <div className="w-full max-w-4xl mt-20 border-t border-gray-200" />

        <section className="max-w-4xl text-center py-16 min-h-screen">
          <h2 className="text-3xl font-semibold mb-4">Prototype Area</h2>
          <p className="text-gray-700 leading-relaxed">
            Use this space to test components like your upcoming About section,
            Experience timeline, Project cards, Contact form, and more.
          </p>
        </section>
      </main>
    </>
  );
};

export default HomePage;
