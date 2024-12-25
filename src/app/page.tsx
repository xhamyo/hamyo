
import About from "../components/About";
import Introduction from "../components/Introduction";
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
        </div>
      </div>
    </main>
  );
}
