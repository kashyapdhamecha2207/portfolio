import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import FigmaProjects from "@/components/FigmaProjects";
import Hobbies from "@/components/Hobbies";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <FigmaProjects />
        <Hobbies />
        <Contact />
      </main>
    </div>
  );
}