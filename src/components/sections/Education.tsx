
import Image from "next/image";
import ResumeContainer from "./ResumeContainer"

export default function Education() {
  return (
    <div className="flex flex-col w-full outline outline-red-500">
      <div className="flex flex-row space-x-1 md:space-x-2 lg:space-x-3 text-2xl md:text-4xl font-bold">
        <h1 className="bg-gradient-to-r from-[#fff7c6] via-[#f5d670] via-[#f0c24a] via-[#ffecb3] to-[#d4a537] text-transparent bg-clip-text">
          Education
        </h1>
        <h1>
          Journey
        </h1>
      </div>

      <div className="space-y-4">
        <ResumeContainer
          icon={<Image alt="nus" src="/images/organisations/nus.png" width={500} height={500} className="min-w-[4rem] w-[4rem]" />}
          date="2023 - Present"
          title="Bachelor of Computing (Honours) in Computer Science"
          entity="National University of Singapore (NUS)"
          content={
            <>
              <p className="mt-2">
                <span className="font-bold text-blue-500">GPA:</span> 4.36 / 5.00
              </p>
              <p className="mt-2">
                <span className="font-bold text-blue-500">Relevant Coursework:</span> Software Engineering, Artificial Intelligence and Machine Learning, Computer Networks, Parallel Computing, Operating Systems, Computer Organisation, Design & Analysis of Algorithms, Programming Methodology, and Data Structures & Algorithms
              </p>
              <p className="mt-2">
                <span className="font-bold text-blue-500">Notable Commitments:</span> Computing Rag & Flag 2023 (Silver), NUS Climbing Club Member 2024, OGL for Computing Freshman Social Camp 2024 and Psychology Camp 2024
              </p>
            </>
          }
        />
        <ResumeContainer
          icon={<Image alt="nyjc" src="/images/organisations/nyjc.png" width={500} height={500} className="min-w-[4rem] w-[4rem]" />}
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
          icon={<Image alt="cchms" src="/images/organisations/cchms.png" width={500} height={500} className="min-w-[4rem] w-[4rem]" />}
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
        </div>
    </div>
  )
}