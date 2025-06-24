import TechCarousel from "../components/TechCarousel";
import DevOpsSection from "../components/DevOpsSection";
import About from "../components/About";
import ProjectsSection from "../components/ProjectsSection";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <About />
      <DevOpsSection />
      <ProjectsSection />
      <TechCarousel direction="left" />
      <TechCarousel direction="right" />
      <Experience />
      <Education />
      <Contact />
    </>
  );
}
