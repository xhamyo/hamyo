
import Image from "next/image";

const education = [
  {
    rotate: "hover:rotate-2",
    icon: <Image alt="nus" src="/images/organisations/nus.png" width={500} height={500} className="min-w-[4rem] w-[4rem]" />,
    date: "2023 - Present",
    grade: "4.36 / 5.00",
    grade_title: "GPA:",
    title:  <>
              Bachelor of Computing (Honours)<br/>in Computer Science
            </>,
    entity: "National University of Singapore",
    content:  <>
                <p className="mt-2">
                  <span className="font-bold text-blue-r">Relevant Coursework:</span> Software Engineering, Artificial Intelligence and Machine Learning, Computer Networks, Parallel Computing, Operating Systems, Computer Organisation, Design & Analysis of Algorithms, Programming Methodology, and Data Structures & Algorithms
                </p>
                <p className="mt-2">
                  <span className="font-bold text-blue-l">Notable Commitments:</span> Computing Rag & Flag 2023 (Silver), NUS Climbing Club Member 2024, OGL for Computing Freshman Social Camp 2024 and Psychology Camp 2024
                </p>
              </>,
  },
  {
    shell: true,
    justify: "",
    rotate: "hover:-rotate-2",
    date: "2023 - Present",
    grade: "4.36 / 5.00",
    grade_title: "GPA:",
  },
  {
    shell: true,
    justify: "items-end",
    rotate: "hover:rotate-2",
    date: "2019 - 2020",
    grade_title: "Rank Points:",
    grade: "88.75 / 90.00",
  },
  {
    rotate: "hover:-rotate-2",
    icon: <Image alt="nyjc" src="/images/organisations/nyjc.png" width={500} height={500} className="min-w-[4rem] w-[4rem]" />,
    date: "2019 - 2020",
    grade_title: "Rank Points:",
    grade: "88.75 / 90.00",
    title:  <>
              Singapore-Cambridge GCE<br/>Advanced Level
            </>,
    entity: "Nanyang Junior College",
    content:  <>
                <p className="mt-2">
                  Achieved <span className="font-bold text-blue-r">Distinctions</span> in H1 General Paper, and 4 H2 subjects: Physics, Chemistry, Mathematics, and Economics
                </p>
                <p className="mt-2">
                  Awarded <span className="font-bold text-blue-l">NYJC Academic Excellence Award</span> for excellent performance in the 2020 GCE 'A' Level
                </p>
              </>,
  },
  {
    rotate: "hover:rotate-2",
    icon: <Image alt="cchms" src="/images/organisations/cchms.png" width={500} height={500} className="min-w-[4rem] w-[4rem]" />,
    date: "2015 - 2018",
    grade_title: "L1R5:",
    grade: "8 points",
    title:  <>
              Singapore-Cambridge GCE<br/>Ordinary Level
            </>,
    entity: "Chung Cheng High School (Main)",
    content:  <>
                <p className="mt-2">
                  Achieved <span className="font-bold text-blue-r">Distinctions</span> in Pure Physics, Pure Chemistry, Elementary & Additional Mathematics, Pure Geography and Elective History with Social Studies
                </p>
                <p className="mt-2">
                  <span className="font-bold text-blue-l">Notable Commitments:</span> Assistant Senior Patrol Leader / <span className="font-bold text-blue-r">Vice-Chairperson</span> of Chung Cheng Panther Scout Group (Scout Unit) and <span className="font-bold text-blue-r">Programme Head</span> of Chung Cheng Panther Scout Group (Venture Unit)
                </p>
              </>,
  },
  {
    shell:true,
    justify: "",
    rotate: "hover:-rotate-2",
    date: "2015 - 2018",
    grade_title: "L1R5:",
    grade: "8 points",
  }
]

export default function Education() {
  return (
    <div className="relative flex flex-col space-y-3 w-full">
      <div className="flex flex-row space-x-1 md:space-x-2 text-2xl md:text-4xl justify-center font-bold">
        <h1 className="text-gold-r">
          Education
        </h1>
        <h1>
          Journey
        </h1>
      </div>

      {/* Timeline. */}
      <div className="hidden lg:block absolute top-[5%] left-1/2 -translate-x-1/2 w-[3px] h-[90%] bg-purple-t rounded-full" />

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 justify-between auto-cols-min">
        {education.map((item, id) =>
          <div key={id}>
            {!item.shell ? (
              <div className="sm: pb-8">

                {/* TIMELINE DOT (large screens only) */}
                <div className={`hidden lg:block absolute left-1/2 translate-y-[3.5rem] -translate-x-1/2 w-4 h-4 rounded-full bg-purple-r shadow-[0_0_10px_3px_rgba(180,120,255,0.8)]`}/>
    
                <div className={`p-6 flex flex-col space-y-3 rounded-lg transition duration-300 hover:scale-105 ${item.rotate} bg-gray-br outline outline-zinc-800`}>
                  {/* Icon, Entity, Title. */}
                  <div className="flex flex-row space-x-3 rounded-lg font-medium text-base">
                    <div>
                      {item.icon}
                    </div>
                    <div className="flex flex-col text-left">
                      <h2 className="font-bold text-sm italic">{item.entity}</h2>
                      <h2 className="font-bold text-gold-r">{item.title}</h2>
                    </div>
                  </div>

                  {/* Date, Grade. (SMALL)*/}
                  <div className="lg:hidden flex flex-row flex-wrap gap-x-3 gap-y-1.5 text-xs">
                    <div className="group w-fit h-fit p-0.5 rounded-lg bg-purple-r hover:scale-[1.01] hover:bg-gold-r">
                      <div className="px-1.5 py-0.5 rounded-md bg-zinc-900">
                        <h2 className="font-bold text-purple-r group-hover:text-gold-r">{item.date}</h2>
                      </div>
                    </div>
                    <div className="group w-fit h-fit p-0.5 rounded-lg bg-purple-r hover:scale-[1.01] hover:bg-gold-r">
                      <div className="flex flex-row  space-x-0.5 px-1.5 py-0.5 rounded-md bg-zinc-900">
                        <h2 className="font-bold text-purple-r group-hover:text-gold-l">{item.grade_title}</h2>
                        <h2 className="font-bold text-gold-l group-hover:text-white">{item.grade}</h2>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="font-light text-sm text-gray-300">{item.content}</h3>
                </div>
              </div>
            ) : (
              <>
                {/* Date, Grade. (LARGE)*/}
                <div className={`hidden lg:flex flex-col pt-8 space-y-2 text-sm ${item.justify} transition duration-300`}>
                  <div className={`group w-fit h-fit p-0.5 rounded-lg bg-purple-r hover:scale-[1.01] ${item.rotate} hover:bg-gold-r`}>
                    <div className="px-1.5 py-0.5 rounded-md bg-zinc-900">
                      <h2 className="font-bold text-purple-r group-hover:text-gold-r">{item.date}</h2>
                    </div>
                  </div>
                  <div className={`group w-fit h-fit p-0.5 rounded-lg bg-purple-r hover:scale-[1.01] ${item.rotate} hover:bg-gold-r`}>
                    <div className="flex flex-row  space-x-0.5 px-1.5 py-0.5 rounded-md bg-zinc-900">
                      <h2 className="font-bold text-purple-r group-hover:text-gold-l">{item.grade_title}</h2>
                      <h2 className="font-bold text-gold-l group-hover:text-white">{item.grade}</h2>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}