
import ResumeContainer from "./ResumeContainer";
import ResumeTechnologyContainer from "./ResumeTechnologyContainer";
import { BookOutlined, BankFilled, CodeOutlined, DownloadOutlined, FileTextOutlined} from "@ant-design/icons";
import { FaCss3Alt, FaDatabase, FaGitAlt, FaHtml5, FaJava, FaPython, FaReact } from "react-icons/fa6";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

export default function Resume() {
  
  return (
    <div className="rounded-lg bg-zinc-100 dark:bg-zinc-950 w-[90vw] md:w-[48rem] font-semibold tracking-light">
      <div className="px-2 py-2 md:px-4 md:py-4 flex flex-col justify-center space-y-3 md:space-y-6">
        <div className="flex flex-row space-x-2 text-red-700 dark:text-red-800">
          <FileTextOutlined className="text-3xl md:text-4xl"/>
          <h1 className="text-2xl md:text-3xl">
            Resume
          </h1>
        </div>

        {/* Education */}
        <h1 className="text-center text-2xl md:text-3xl">
          Education
        </h1>
        <ResumeContainer
          icon={<BankFilled />}
          date="2023 - Present"
          title="Bachelor of Computing (Honours) in Computer Science"
          entity="National University of Singapore (NUS)"
          content={
            <>
              <p className="mt-2">
                <span className="font-bold text-blue-500">GPA:</span> 4.34 / 5.00
              </p>
              <p className="mt-2">
                <span className="font-bold text-blue-500">Relevant Coursework:</span> Software Engineering, Computer Networks, Programming Methodology I and II, Data Structures and Algorithms, and Computer Organisation
              </p>
              <p className="mt-2">
                <span className="font-bold text-blue-500">Notable Commitments:</span> Computing Rag & Flag 2023 (Silver), NUS Climbing Club Member 2024, OGL for Computing Freshman Social Camp 2024 and Psychology Camp 2024
              </p>
            </>
          }
        />
        <ResumeContainer
          icon={<BankFilled />}
          date="2019 - 2020"
          title="Singapore-Cambridge GCE Advanced Level"
          entity="Nanyang Junior College (NYJC)"
          content={
            <>
              <p className="mt-2">
                <span className="font-bold text-blue-500">Rank Points:</span> 88.75 / 90.00
              </p>
              <p className="mt-2">
                Achieved <span className="font-bold text-blue-500">Distinctions</span> in H1 General Paper, and 4 H2 subjects: Physics, Chemistry, Mathematics, and Economics
              </p>
              <p className="mt-2">
                Awarded <span className="font-bold text-blue-500">NYJC Academic Excellence Award</span> for excellent performance in the 2020 GCE 'A' Level
              </p>

            </>}
        />
        <ResumeContainer
          icon={<BankFilled />}
          date="2015 - 2018"
          title="Singapore-Cambridge GCE Ordinary Level"
          entity="Chung Cheng High School (Main)"
          content={
            <>
              <p className="mt-2">
                <span className="font-bold text-blue-500">L1R5:</span> 8 Points
              </p>
              <p className="mt-2">
                Achieved <span className="font-bold text-blue-500">Distinctions</span> in Pure Physics, Pure Chemistry, Elementary & Additional Mathematics, Pure Geography and Elective History
              </p>
              <p className="mt-2">
                <span className="font-bold text-blue-500">Notable Commitments:</span> Assistant Senior Patrol Leader / <span className="font-bold text-blue-500">Vice-Chairperson</span> of Chung Cheng Panther Scout Group (Scout Unit) and <span className="font-bold text-blue-500">Programme Head</span> of Chung Cheng Panther Scout Group (Venture Unit).
              </p>

            </>}
        />
        
        {/* Work Experience */}
        <div className="py-1"></div>
        <div className="w-full h-[2px] bg-gray-400"></div>
        <div className="py-1"></div>
        <h1 className="text-center text-2xl md:text-3xl">
          Work Experience
        </h1>
        <ResumeContainer
          icon={<CodeOutlined />}
          date="Jan' 2025 - Present"
          title="Data Analyst (Generative AI) Intern"
          entity="Infocomm Media Development Authority (IMDA)"
          content="NULL"
        />

        {/* Certification */}
        <div className="py-1"></div>
        <div className="w-full h-[2px] bg-gray-400"></div>
        <div className="py-1"></div>
        <h1 className="text-center text-2xl md:text-3xl">
          Certification
        </h1>
        <ResumeContainer
          icon={<BookOutlined />}
          date="2024"
          title="NUS Orbital 2024, Apollo 11 (Advanced)"
          entity="National Unviersity of Singapore (NUS)"
          content="NULL"
        />
        <ResumeContainer
          icon={<BookOutlined />}
          date="2024"
          title="CS50's Introduction to Game Development"
          entity="Harvard University"
          content="NULL"
        />
        <ResumeContainer
          icon={<BookOutlined />}
          date="2024"
          title="CS50's Introduction to Computer Science"
          entity="Harvard University"
          content="NULL"
        />
        
        {/* Technology Stack */}
        <div className="py-1"></div>
        <div className="w-full h-[2px] bg-gray-400"></div>
        <div className="py-1"></div>
        <h1 className="text-center text-2xl md:text-3xl">
          Technology Stack
        </h1>
        <ResumeTechnologyContainer
          icon1={<FaJava />}
          technology1="Java"
          icon2={<FaPython />}
          technology2="Python"
          icon3={<IoLogoJavascript />}
          technology3="JavaScript"
        />
        <ResumeTechnologyContainer
          icon1={<SiTypescript />}
          technology1="TypeScript"
          icon2={<FaHtml5 />}
          technology2="HMTL"
          icon3={<FaCss3Alt />}
          technology3="CSS"
        />
        <ResumeTechnologyContainer
          icon1={<SiTailwindcss />}
          technology1="Tailwind CSS"
          icon2={<FaReact />}
          technology2="React"
          icon3={<SiNextdotjs />}
          technology3="Next.js"
        />
        <ResumeTechnologyContainer
          icon1={<IoLogoFirebase />}
          technology1="Firebase"
          icon2={<FaDatabase />}
          technology2="SQL"
          icon3={<FaGitAlt />}
          technology3="Git"
        />
        
        {/* Resume Download Link */}
        <div className="py-1"></div>
        <div className="flex flex-row items-center justify-center">
          <a href="https://drive.google.com/uc?export=download&id=1nWrPr083vMk0N0q0wgn8YYsfy4eSttLT"
            download="HANYU_RESUME.pdf"
            className="px-2 py-1 md:px-3 md:py-2 rounded-lg text-white font-semibold text-2xl tracking-tight bg-indigo-600 hover:bg-indigo-700 text-center"
          >
            <DownloadOutlined /> Resume
          </a>
        </div>
      </div>
    </div>
  );
}