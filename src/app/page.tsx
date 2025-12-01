
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Resume from "../components/sections/Resume";
import Valentines from "../components/sections/Valentines";

export default function Home() {

  return (
    <main className="w-full h-full">
      {/* Small Screens */}
      <div className="md:hidden flex flex-col items-center">
        <div className="flex flex-col space-y-4">
          <section id="about" className="space-y-4 scroll-mt-[6.5em]">
            <About />
          </section>
          <section id="resume" className="scroll-mt-[6.5em]">
            <Resume />
          </section>
          <section id="projects" className="scroll-mt-[6.5em]">
            <Projects />
          </section>
          <div className="h-[1.5rem]"></div>
        </div>
      </div>


      {/* Large Screens */}
      <div className="hidden md:flex">
        {/* Left */}
        <div className="fixed left-[1rem] flex-col space-y-4">
          <About />
        </div>
        {/* Right */}
        <div className="ml-[24rem] mr-[1rem] w-full outline outline-2 outline-red-500">
          <Resume />
        </div>
      </div>
    </main>
  );
}
