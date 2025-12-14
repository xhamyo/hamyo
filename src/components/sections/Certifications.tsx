
import Image from "next/image"

const certifications = [
  {
    rotate: "hover:rotate-2",
    icon: <Image alt="nus" src="/images/organisations/nus.png" width={500} height={500} className="min-w-[4rem] w-[4rem]" />,
    date: "2024",
    title: <>NUS Orbital 2024<br/>Apollo 11 (Advanced)</>,
    entity: "National University of Singapore (NUS)",
    content:"This course empowers students to engage in self-learning to develop practical applications using current technology, with a strong emphasis on adhering to software engineering principles.",
    link: "https://credentials.nus.edu.sg/c6149aa9-7e8a-4f85-8b88-3b4f44fd9f45#acc.50SsJbOc",
  },
  {
    shell: true,
    justify: "",
    rotate: "hover:-rotate-2",
    date: "2024",
    link: "https://credentials.nus.edu.sg/c6149aa9-7e8a-4f85-8b88-3b4f44fd9f45#acc.50SsJbOc",
  },
  {
    shell: true,
    justify: "items-end",
    rotate: "hover:rotate-2",
    date: "2024",
    link: "https://certificates.cs50.io/a8d9d97f-2cb2-41a4-8b4a-4f810d4ffdea.pdf?size=letter",
  },
  {
    rotate: "hover:-rotate-2",
    icon: <Image alt="harvard-edx" src="/images/organisations/harvard.png" width={500} height={500} className="min-w-[4rem] w-[4rem]" />,
    date: "2024",
    title: <>CS50's Introduction to<br/>Game Development</>,
    entity: "Harvard University",
    content: "This course focuses on the development of 2D and 3D games using frameworks like Unity and LÖVE 2D, as well as the languages C# and Lua. Topics include the principles of graphics, animation, sound, and collision detection.",
    link: "https://certificates.cs50.io/a8d9d97f-2cb2-41a4-8b4a-4f810d4ffdea.pdf?size=letter",
  },
  {
    rotate: "hover:rotate-2",
    icon: <Image alt="harvard-edx" src="/images/organisations/harvard.png" width={500} height={500} className="min-w-[4rem] w-[4rem]" />,
    date: "2024",
    title: <>CS50's Introduction to<br/>Computer Science</>,
    entity: "Harvard University",
    content: "This course teaches students how to solve problems, with an emphasis on correctness, design, and style. Topics include computational thinking, abstraction, algorithms, data structures, resource management, cybersecurity, and web programming.",
    link: "https://certificates.cs50.io/8dc756c8-57a5-4c6f-83b5-e7890e87181f.pdf?size=letter",
  },
  {
    shell: true,
    justify: "",
    rotate: "hover:-rotate-2",
    date: "2024",
    link: "https://certificates.cs50.io/8dc756c8-57a5-4c6f-83b5-e7890e87181f.pdf?size=letter",
  }
]
export default function Certifications() {
  return (
    <div className="relative flex flex-col space-y-3 w-full">
      <div className="flex flex-row space-x-1 md:space-x-2 text-2xl md:text-4xl justify-center font-bold">
        <h1>
          Verified
        </h1>
        <h1 className="text-gold-l">
          Certifications
        </h1>
      </div>

      {/* Timeline. */}
      <div className="hidden lg:block absolute top-[5%] left-1/2 -translate-x-1/2 w-[3px] h-[90%] bg-red-t rounded-full" />

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 justify-between auto-cols-min">
        {certifications.map((item, id) =>
          <div key={id}>
            {!item.shell ? (
              <div className="sm: pb-8">

                {/* TIMELINE DOT (large screens only) */}
                <div className={`hidden lg:block absolute left-1/2 translate-y-[3.5rem] -translate-x-1/2 w-4 h-4 rounded-full bg-red-r shadow-[0_0_10px_3px_rgba(255,179,179,0.7)]`}/>
    
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
                    <div className="group w-fit h-fit p-0.5 rounded-lg bg-red-r hover:scale-[1.01] hover:bg-gold-r">
                      <div className="px-1.5 py-0.5 rounded-md bg-zinc-900">
                        <h2 className="font-bold text-red-r group-hover:text-gold-r">{item.date}</h2>
                      </div>
                    </div>
                    <a href={item.link} target="_blank" className="group w-fit h-fit p-0.5 rounded-lg bg-red-r hover:scale-[1.01] hover:bg-gold-r">
                      <div className="flex flex-row  space-x-0.5 px-1.5 py-0.5 rounded-md bg-zinc-900">
                        <h2 className="font-bold text-red-r group-hover:text-gold-l">View</h2>
                        <h2 className="font-bold text-gold-l group-hover:text-white">Certificate</h2>
                      </div>
                    </a>
                  </div>
                  
                  <h3 className="font-light text-sm text-gray-300">{item.content}</h3>
                </div>
              </div>
            ) : (
              <>
                {/* Date, Grade. (LARGE)*/}
                <div className={`hidden lg:flex flex-col pt-8 space-y-2 text-sm ${item.justify} transition duration-300`}>
                  <div className={`group w-fit h-fit p-0.5 rounded-lg bg-red-r hover:scale-[1.01] ${item.rotate} hover:bg-gold-r`}>
                    <div className="px-1.5 py-0.5 rounded-md bg-zinc-900">
                      <h2 className="font-bold text-red-r group-hover:text-gold-r">{item.date}</h2>
                    </div>
                  </div>
                  <a href={item.link} target="_blank" className={`group w-fit h-fit p-0.5 rounded-lg bg-red-r hover:scale-[1.01] ${item.rotate} hover:bg-gold-r`}>
                    <div className="flex flex-row space-x-0.5 px-1.5 py-0.5 rounded-md bg-zinc-900">
                      <h2 className="font-bold text-red-r group-hover:text-gold-l">View</h2>
                      <h2 className="font-bold text-gold-l group-hover:text-white">Certificate</h2>
                    </div>
                  </a>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}