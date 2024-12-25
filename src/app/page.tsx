
import About from "../components/About";
import Contact from "../components/Contact";
import Introduction from "../components/Introduction";
import Projects from "../components/Projects";
import Resume from "../components/Resume";

export default function Home() {

  return (
    <main>
      <div className="w-full h-[200vh] flex flex-col items-center">
        <div className="flex flex-col space-y-2">
          <section id="about" className="space-y-2 scroll-mt-[6.25em]">
            <Introduction />
            <About />
          </section>
          <section id="resume" className="space-y-2 scroll-mt-[6.25em]">
            <Resume />
          </section>
          <section id="projects" className="space-y-2 scroll-mt-[6.25em]">
            <Projects />
          </section>
          <section id="contact" className="space-y-2 scroll-mt-[6.25em]">
            <Contact />
          </section>
          <div className="h-[1.5rem]"></div>
        </div>
      </div>
    </main>
  );
}
