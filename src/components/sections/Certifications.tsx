
import Image from "next/image"
import ResumeContainer from "./ResumeContainer"

export default function Certifications() {
  return (
    <div className="flex flex-col w-full outline outline-red-500">
      <div className="flex flex-row space-x-1 md:space-x-2 lg:space-x-3 text-2xl md:text-4xl font-bold">
        <h1>
          Verified
        </h1>
        <h1 className="bg-gradient-to-r from-[#d4a537] via-[#ffecb3] via-[#f0c24a] via-[#f5d670] to-[#fff7c6] text-transparent bg-clip-text">
          Certifications
        </h1>
      </div>

      <div className="space-y-4">
        <ResumeContainer
          icon={<Image alt="nus" src="/images/organisations/nus.png" width={500} height={500} className="min-w-[4rem] w-[4rem]" />}
          date="2024"
          title="NUS Orbital 2024, Apollo 11 (Advanced)"
          entity="National University of Singapore (NUS)"
          content="This course empowers students to engage in self-learning to develop practical applications using current technology, with a strong emphasis on adhering to software engineering principles."
        />
        <ResumeContainer
          icon={<Image alt="harvard-edx" src="/images/organisations/harvard.png" width={500} height={500} className="min-w-[4rem] w-[4rem]" />}
          date="2024"
          title="CS50's Introduction to Game Development"
          entity="Harvard University"
          content="This course focuses on the development of 2D and 3D games using frameworks like Unity and LÖVE 2D, as well as the languages C# and Lua. Topics include the principles of graphics, animation, sound, and collision detection."
        />
        <ResumeContainer
          icon={<Image alt="harvard-edx" src="/images/organisations/harvard.png" width={500} height={500} className="min-w-[4rem] w-[4rem]" />}
          date="2024"
          title="CS50's Introduction to Computer Science"
          entity="Harvard University"
          content="This course teaches students how to solve problems, with an emphasis on correctness, design, and style. Topics include computational thinking, abstraction, algorithms, data structures, resource management, cybersecurity, and web programming."
        />
      </div>
    </div>
  )
}