
import Image from "next/image"

const experience = [
  {
    rotate: "hover:rotate-2",
    icon: <Image alt="tiktok" src="/images/organisations/tiktok.png" width={500} height={500} className="min-w-[4rem] w-[4rem]" />,
    date: "Jan 2026 - Present",
    title: <>Mobile Software Engineer Intern<br/>Social</>,
    entity: "TikTok Pte. Ltd.",
    content:  <>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, <span className="font-bold text-purple-r">sed do eiusmod tempor incididunt</span> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="mt-2">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <span className="font-bold text-purple-l">Excepteur sint occaecat cupidatat</span> non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </>,
  },
  {
    shell: true,
    justify: "",
    rotate: "hover:-rotate-2",
    date: "Jan 2026 - Present",
  },
  {
    shell: true,
    justify: "justify-end",
    rotate: "hover:rotate-2",
    date: "Jan - Dec 2025",
  },
  {
    rotate: "hover:-rotate-2",
    icon: <Image alt="imda" src="/images/organisations/imda.png" width={500} height={500} className="min-w-[4rem] w-[4rem]" />,
    date: "Jan - Dec 2025",
    title: <>Software Engineer Intern<br/>Digital Transformation Office</>,
    entity: "Infocomm Media Development Authority",
    content:  <>
                <p className="mt-2">
                  Collaborated with a team of 3 and external partners (AWS, Cognizant) using the <span className="font-bold text-purple-l">SCRUM framework</span> to iteratively design and develop customisable and specialised <span className="font-bold text-purple-r">Retrieval-Augmented Generation (RAG) chatbots</span> with domain-specific knowledge tailored for internal use.
                </p>
                <p className="mt-2">
                  Developed a <span className="font-bold text-purple-l">film classification tool</span> with external partners (Google Cloud Platform) for the Content Standards & Classifications team. Implemented film chunking and deployed eight <span className="font-bold text-purple-r">parallel and specialised agents</span> to generate structured synopses and produce compliance reports for regulatory review.              </p>
                <p className="mt-2">
                  Conducted <span className="font-bold text-purple-l">comprehensive evaluation</span> of Generative AI applications, focusing on <span className="font-bold text-purple-r">universal risks</span> including bias, toxicity, hallucinations, and data disclosures for responsible deployment.              </p>
              </>,
  }
]

export default function Experience() {
  return (
    <div className="relative flex flex-col space-y-3 w-full">
      <div className="flex flex-row space-x-1 md:space-x-2 text-2xl md:text-4xl justify-center font-bold">
        <h1>
          Work
        </h1>
        <h1 className="text-gold-l">
          Experience
        </h1>
      </div>

      {/* Timeline. */}
      <div className="hidden lg:block absolute top-[5%] left-1/2 -translate-x-1/2 w-[3px] h-[90%] bg-blue-b rounded-full" />

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 justify-between auto-cols-min">
        {experience.map((item, id) =>
          <div key={id}>
            {!item.shell ? (
              <div className="sm: pb-8">

                {/* TIMELINE DOT (large screens only) */}
                <div className={`hidden lg:block absolute left-1/2 translate-y-[2.3rem] -translate-x-1/2 w-4 h-4 rounded-full bg-blue-r shadow-[0_0_10px_3px_rgba(59,130,246,0.8)]`}/>
    
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

                  {/* Date. (SMALL)*/}
                  <div className="lg:hidden group w-fit h-fit p-0.5 rounded-lg bg-blue-r text-xs hover:scale-[1.01] hover:bg-gold-r">
                    <div className="px-1.5 py-0.5 rounded-md bg-zinc-900">
                      <h2 className="font-bold text-blue-r group-hover:text-gold-r">{item.date}</h2>
                    </div>
                  </div>
                  
                  <h3 className="font-light text-sm text-gray-300">{item.content}</h3>
                </div>
              </div>
            ) : (
              <>
                {/* Date. (LARGE)*/}
                <div className={`hidden lg:flex pt-8 text-sm ${item.justify} transition duration-300`}>
                  <div className={`group w-fit h-fit p-0.5 rounded-lg bg-blue-r hover:scale-[1.01] ${item.rotate} hover:bg-gold-r`}>
                    <div className="px-1.5 py-0.5 rounded-md bg-zinc-900">
                      <h2 className="font-bold text-blue-r group-hover:text-gold-r">{item.date}</h2>
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