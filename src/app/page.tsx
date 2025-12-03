
import About from "../components/sections/About";
import Certifications from "../components/sections/Certifications";
import Education from "../components/sections/Education";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import TechnologiesAndSkills from "../components/sections/TechnologiesAndSkills";
import Valentines from "../components/sections/Valentines";

export default function Home() {
  return (
    <main className="w-full h-full">
        <div className="px-[1rem] md:fixed md:left-[23rem] md:overflow-y-scroll top-[4rem] bottom-[0rem] flex flex-col space-y-4">
          <section id="home" className="scroll-mt-[6.5em]">
            <About />
          </section>
          <section id="experience" className="scroll-mt-[6.5em]">
            <Experience />
          </section>
          <section id="education" className="scroll-mt-[6.5em]">
            <Education />
          </section>
          <section id="projects" className="scroll-mt-[6.5em]">
            <Projects />
          </section>
          <section id="technologies" className="scroll-mt-[6.5em]">
            <TechnologiesAndSkills />
          </section>
          <section id="certifications" className="scroll-mt-[6.5em]">
            <Certifications />
          </section>
          <div className="h-[1.5rem]"></div>
      </div>
    </main>
  );
}
