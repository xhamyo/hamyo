
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Resume from "../components/sections/Resume";
import TechStackAndSkills from "../components/sections/TechStackAndSkills";
import Valentines from "../components/sections/Valentines";

export default function Home() {
  return (
    <main className="w-full h-full">
      {/* Small Screens */}
      <div className="flex flex-col items-center">
        <div className="flex flex-col space-y-4">
          <section id="home" className="space-y-4 scroll-mt-[6.5em]">
            <About />
          </section>
          <section id="experiences" className="scroll-mt-[6.5em]">
            <Resume />
          </section>
          <section id="technologies" className="scroll-mt-[6.5em]">
            <TechStackAndSkills />
          </section>
          <section id="projects" className="scroll-mt-[6.5em]">
            <Projects />
          </section>
          <div className="h-[1.5rem]"></div>
        </div>
      </div>
    </main>
  );
}
