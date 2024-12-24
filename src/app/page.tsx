import Introduction from "../components/Introduction";
import About from "../components/About";

export default function Home() {

  return (
    <main>
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-col space-y-2">
          <Introduction />
          <About />
        </div>
      </div>
    </main>
  );
}
