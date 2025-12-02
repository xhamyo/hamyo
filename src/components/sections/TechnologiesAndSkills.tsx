
import { BsGpuCard } from "react-icons/bs";
import { FaConfluence, FaGithub, FaGitlab, FaMarkdown, FaSwift } from "react-icons/fa";
import { FaMicrochip as Fa5Microchip } from "react-icons/fa";
import { FaCss3Alt, FaDatabase, FaGitAlt, FaHtml5, FaJava, FaMicrochip, FaNetworkWired, FaPython, FaReact, FaAws, FaDocker } from "react-icons/fa6";
import { SiCplusplus, SiNextdotjs, SiTailwindcss, SiTypescript, SiJupyter, SiLeetcode, SiGooglecloud, SiJavascript, SiJira, SiConfluence } from "react-icons/si";

const techs = [
  {
    icon: <SiLeetcode />,
    title: "LeetCode",
    text: "436 Solved",
  },
  {
    icon: <FaMicrochip />,
    title: "OpenMP (C++)",
    text: "Parallel Computing",
  },
  {
    icon: <FaNetworkWired />,
    title: "OpenMPI (C++)",
    text: "Parallel Computing",
  },
  {
    icon: <BsGpuCard />,
    title: "CUDA (C++)",
    text: "Parallel Computing",
  },
  {
    icon: <Fa5Microchip />,
    title: "MIPS",
    text: "Assembly Language",
  },
  {
    icon: <FaJava />,
    title: "Java",
    text: "Programming Language",
  },
  {
    icon: <FaSwift />,
    title: "Swift",
    text: "Programming Language",
  },
  {
    icon: <FaPython />,
    title: "Python",
    text: "Programming Language",
  },
  {
    icon: <SiCplusplus />,
    title: "C/C++",
    text: "Programming Language",
  },
  {
    icon: <FaDatabase />,
    title: "SQL",
    text: "Programming Language",
  },
  {
    icon: <SiJavascript />,
    title: "JavaScript",
    text: "Programming Language"
  },
  {
    icon: <SiTypescript />,
    title: "TypeScript",
    text: "Programming Language"
  },
  {
    icon: <FaHtml5 />,
    title: "HTML",
    text: "Markup Language"
  },
  {
    icon: <FaMarkdown />,
    title: "Markdown",
    text: "Markup Language"
  },
  {
    icon: <FaCss3Alt />,
    title: "CSS",
    text: "Style Sheet Language"
  },
  {
    icon: <SiTailwindcss />,
    title: "Tailwind CSS",
    text: "CSS Framework"
  },
  {
    icon: <FaReact />,
    title: "React",
    text: "JavaScript UI Library"
  },
  {
    icon: <SiNextdotjs />,
    title: "Next.js",
    text: "React Framework"
  },
  {
    icon: <FaAws />,
    title: "AWS",
    text: "Cloud Computing Services"
  },
  {
    icon: <SiGooglecloud />,
    title: "Google Cloud",
    text: "Cloud Computing Services"
  },
  {
    icon: <SiJupyter />,
    title: "Jupyter",
    text: "Interactive Computing Environment"
  },
  {
    icon: <FaDocker />,
    title: "Docker",
    text: "Container Application Development"
  },
  {
    icon: <FaGitAlt />,
    title: "Git",
    text: "Version Control System"
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    text: "Project Management Tools"
  },
  {
    icon: <FaGitlab />,
    title: "GitLab",
    text: "Project Management Tools"
  },
  {
    icon: <SiJira />,
    title: "Jira",
    text: "Project Management Tools"
  },
  {
    icon: <FaConfluence />,
    title: "Confluence",
    text: "Project Management Tools"
  },
]

export default function TechnologiesAndSkills() {
  return (
    <div className="md:fixed md:w-[22rem] md:top-[26.75rem] md:left-[1rem] md:bottom-[1rem] overflow-y-scroll max-h-[40vh] md:max-h-[100vh] rounded-lg bg-zinc-950 shadow-lg outline outline-2 outline-red-500">
      <h1 className="sticky top-0 px-3 pt-3 pb-1 bg-zinc-950 shadow-lg font-semibold z-10 text-2xl">
        <span className="bg-gradient-to-r from-[#d4a537] via-[#ffecb3] via-[#f0c24a] via-[#f5d670] to-[#fff7c6] text-transparent bg-clip-text">Technologies</span> and <span className="bg-gradient-to-r from-[#d4a537] via-[#ffecb3] via-[#f0c24a] via-[#f5d670] to-[#fff7c6] text-transparent bg-clip-text">Skills</span>
      </h1>
      <div className="px-2">
        {techs.map((tech, id) => 
          <div key={id} className="group flex flex-row py-1 space-x-2 items-center hover:scale-[1.005]">
            <h1 className="text-3xl text-gray-200 group-hover:text-[#fff7c6]">
              {tech.icon}
            </h1>
            <div className="flex flex-col">
              <h1 className="text-sm font-bold text-gray-100 group-hover:bg-gradient-to-r from-[#fff7c6] via-[#f5d670] via-[#f0c24a] via-[#ffecb3] to-[#d4a537] group-hover:text-transparent group-hover:bg-clip-text">
                {tech.title}
              </h1>
              <h1 className="text-xs text-gray-300 group-hover:bg-gradient-to-r from-[#fff7c6] via-[#f5d670] via-[#f0c24a] via-[#ffecb3] to-[#d4a537] group-hover:text-transparent group-hover:bg-clip-text">
                {tech.text}
              </h1>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}