import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import Experience from "@/components/experience/Experience";
import Skills from "@/components/skills/Skills";
import About from "@/components/about/About";
import BeyondCode from "@/components/beyond-code/BeyondCode";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

const MAIN_CLASSES =
  "pt-24 min-h-screen w-full flex flex-col items-center bg-white text-gray-900 dark:bg-[#0b0f19] dark:text-neutral-100 px-0 snap-y snap-proximity scroll-smooth pb-32 overflow-x-hidden";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main className={MAIN_CLASSES}>
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
