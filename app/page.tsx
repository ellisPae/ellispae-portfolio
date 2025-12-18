import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import Experience from "@/components/experience/Experience";
import Skills from "@/components/skills/Skills";
import About from "@/components/about/About";
import BeyondCode from "@/components/beyond-code/BeyondCode";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main
        className="pt-24 min-h-screen w-full flex flex-col items-center 
             bg-white text-gray-900 px-4
             snap-y snap-proximity
             pb-32"
      >
        <Hero />
        <FeaturedProjects />
        <Experience />
        <Skills />
        <About />
        <BeyondCode />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
