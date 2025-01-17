
import ResumeContainer from "./ResumeContainer";
import ResumeTechnologyContainer from "./ResumeTechnologyContainer";
import { BookOutlined, BankFilled, CodeOutlined, DownloadOutlined, FileTextOutlined} from "@ant-design/icons";
import { FaCss3Alt, FaDatabase, FaGitAlt, FaHtml5, FaJava, FaPython, FaReact } from "react-icons/fa6";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

export default function Resume() {
  
  return (
    <div className="rounded-lg bg-zinc-100 dark:bg-zinc-950 w-[90vw] md:min-w-[48rem] md:w-[50vw] font-semibold tracking-light shadow-lg dark:shadow-gray-800">
      <div className="p-4 md:p-8 flex flex-col justify-center space-y-3 md:space-y-6">
        <div className="flex flex-row space-x-2">
          <FileTextOutlined className="text-3xl"/>
          <h1 className="text-2xl">
            Resume
          </h1>
        </div>

        {/* Education */}
        <h1 className="text-center text-2xl">
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
                <span className="font-bold text-blue-500">Notable Commitments:</span> Assistant Senior Patrol Leader / <span className="font-bold text-blue-500">Vice-Chairperson</span> of Chung Cheng Panther Scout Group (Scout Unit) and <span className="font-bold text-blue-500">Programme Head</span> of Chung Cheng Panther Scout Group (Venture Unit)
              </p>

            </>}
        />
        
        {/* Work Experience */}
        <div className="w-full h-[2px] bg-gray-400"></div>
        <h1 className="text-center text-2xl">
          Work Experience
        </h1>
        <ResumeContainer
          icon={<CodeOutlined />}
          date="Jan' 2025 - Present"
          title="Data Analyst (Generative AI) Intern"
          entity="Infocomm Media Development Authority (IMDA)"
          content="To be updated :D"
        />

        {/* Certification */}
        <div className="w-full h-[2px] bg-gray-400"></div>
        <h1 className="text-center text-2xl">
          Certification
        </h1>
        <ResumeContainer
          icon={<BookOutlined />}
          date="2024"
          title="NUS Orbital 2024, Apollo 11 (Advanced)"
          entity="National Unviersity of Singapore (NUS)"
          content="This course empowers students to engage in self-learning to develop practical applications using current technology, with a strong emphasis on adhering to software engineering principles."
        />
        <ResumeContainer
          icon={<BookOutlined />}
          date="2024"
          title="CS50's Introduction to Game Development"
          entity="Harvard University"
          content="This course focuses on the development of 2D and 3D games using frameworks like Unity and LÖVE 2D, as well as the languages C# and Lua. Topics include the principles of graphics, animation, sound, and collision detection."
        />
        <ResumeContainer
          icon={<BookOutlined />}
          date="2024"
          title="CS50's Introduction to Computer Science"
          entity="Harvard University"
          content="This course teaches students how to solve problems, with an emphasis on correctness, design, and style. Topics include computational thinking, abstraction, algorithms, data structures, resource management, cybersecurity, and web programming."
        />
        
        {/* Technology Stack */}
        <div className="w-full h-[2px] bg-gray-400"></div>
        <h1 className="text-center text-2xl">
          Technology Stack
        </h1>

        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-3 md:w-[32rem] justify-items-center">
            {/* Row 1 */}
            <ResumeTechnologyContainer
              icon={<FaJava />}
              technology="Java"
            />
            <ResumeTechnologyContainer
              icon={<FaPython />}
              technology="Python"
              />
            <ResumeTechnologyContainer
              icon={<IoLogoJavascript />}
              technology="JavaScript"
            />

            {/* Row 2 */}
            <ResumeTechnologyContainer
              icon={<SiTypescript />}
              technology="TypeScript"
            />
            <ResumeTechnologyContainer
              icon={<FaHtml5 />}
              technology="HMTL"
            />
            <ResumeTechnologyContainer
              icon={<FaCss3Alt />}
              technology="CSS"
            />

            {/* Row 3 */}
            <ResumeTechnologyContainer
              icon={<SiTailwindcss />}
              technology="Tailwind CSS"
            />
            <ResumeTechnologyContainer
              icon={<FaReact />}
              technology="React"
            />
            <ResumeTechnologyContainer
              icon={<SiNextdotjs />}
              technology="Next.js"
            />

            {/* Row 4 */}
            <ResumeTechnologyContainer
              icon={<IoLogoFirebase />}
              technology="Firebase"
            />
            <ResumeTechnologyContainer
              icon={<FaDatabase />}
              technology="SQL"
            />
            <ResumeTechnologyContainer
              icon={<FaGitAlt />}
              technology="Git"
            />
          </div>
        </div>

        <h2 className="text-center font-light text-gray-600 dark:text-gray-300">
          and many more!
        </h2>
        
        {/* Resume Download Link */}
        <div className="py-1"></div>
        <div className="flex flex-row items-center justify-center">
          <a href="https://drive.google.com/uc?export=download&id=1nWrPr083vMk0N0q0wgn8YYsfy4eSttLT"
            download="HANYU_RESUME.pdf"
            className="px-2 py-1 md:px-3 md:py-2 rounded-lg text-white font-semibold text-2xl tracking-wide bg-indigo-600 hover:bg-indigo-700 text-center"
          >
            <DownloadOutlined /> Resume
          </a>
        </div>
      </div>
    </div>
  );
}