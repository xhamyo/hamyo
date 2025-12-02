
import { BsGpuCard } from "react-icons/bs";
import { FaCss3Alt, FaDatabase, FaGitAlt, FaHtml5, FaJava, FaMicrochip, FaNetworkWired, FaPython, FaReact, FaAws, FaDocker } from "react-icons/fa6";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { SiCplusplus, SiNextdotjs, SiTailwindcss, SiTypescript, SiJupyter } from "react-icons/si";

const techs = [
  {
    icon: <FaJava />,
    title: "Java",
    text: "Text Text Text",
  },
  {
    icon: <FaPython />,
    title: "Python",
    text: "Text Text Text",
  },
  {
    icon: <SiCplusplus />,
    title: "C/C++",
    text: "Text Text Text",
  },
  {
    icon: <FaMicrochip />,
    title: "OpenMP (C++)",
    text: "Text Text Text",
  },
  {
    icon: <FaNetworkWired />,
    title: "OpenMPI (C++)",
    text: "Text Text Text",
  },
  {
    icon: <BsGpuCard />,
    title: "CUDA (C++)",
    text: "Text Text Text",
  },
  {
    icon: <IoLogoJavascript />,
    title: "JavaScript",
    text: "Text Text Text"
  },
  {
    icon: <SiTypescript />,
    title: "TypeScript",
    text: "Text Text Text"
  },
  {
    icon: <FaHtml5 />,
    title: "HTML",
    text: "Text Text Text"
  },
  {
    icon: <FaCss3Alt />,
    title: "CSS",
    text: "Text Text Text"
  },
  {
    icon: <SiTailwindcss />,
    title: "Tailwind CSS",
    text: "Text Text Text"
  },
  {
    icon: <FaReact />,
    title: "React",
    text: "Text Text Text"
  },
  {
    icon: <SiNextdotjs />,
    title: "Next.js",
    text: "Text Text Text"
  },
  {
    icon: <FaAws />,
    title: "SageMaker AI",
    text: "Text Text Text"
  },
  {
    icon: <SiJupyter />,
    title: "Jupyter",
    text: "Text Text Text"
  },
  {
    icon: <FaDocker />,
    title: "Docker",
    text: "Text Text Text"
  },
  {
    icon: <IoLogoFirebase />,
    title: "Firebase",
    text: "Text Text Text"
  },
  {
    icon: <FaDatabase />,
    title: "SQL",
    text: "Text Text Text"
  },
  {
    icon: <FaGitAlt />,
    title: "Git",
    text: "Text Text Text"
  },
]

export default function TechStackAndSkills() {
  return (
    <div className="md:fixed md:top-[30rem] md:left-[1rem] md:bottom-[1rem] md:overflow-y-scroll px-3 pb-3 rounded-lg bg-zinc-950 w-[90vw] md:w-[22rem] shadow-lg outline outline-2 outline-red-500">
      <h1 className="sticky top-0 py-3 bg-zinc-950 shadow-lg font-semibold z-10">
        Technologies and Skills
      </h1>
      {techs.map((tech, id) => 
        <div key={id} className="flex flex-row py-1 space-x-2 items-center hover:scale-[1.01] outline outline-red-500">
          <h1 className="text-3xl text-gray-200">
            {tech.icon}
          </h1>
          <div className="flex flex-col">
            <h1 className="text-sm font-bold text-gray-100">
              {tech.title}
            </h1>
            <h1 className="text-xs text-gray-300">
              {tech.text}
            </h1>
          </div>
        </div>
      )}
    </div>
  )
}