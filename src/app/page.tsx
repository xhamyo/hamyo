
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Introduction from "../components/sections/Introduction";
import Projects from "../components/sections/Projects";
import Resume from "../components/sections/Resume";
import Valentines from "../components/sections/Valentines";

export default function Home() {

  return (
    <main>
      <div className="w-full h-[200vh] flex flex-col items-center">
        <div className="flex flex-col space-y-4">
          <section id="about" className="space-y-4 scroll-mt-[6.5em]">
            <Introduction />
            <Valentines />
            <About />
          </section>
          <section id="resume" className="scroll-mt-[6.5em]">
            <Resume />
          </section>
          <section id="projects" className="scroll-mt-[6.5em]">
            <Projects />
          </section>
          <section id="contact" className="scroll-mt-[6.5em]">
            <Contact />
          </section>
          <div className="h-[1.5rem]"></div>
        </div>
      </div>
    </main>
  );
}
