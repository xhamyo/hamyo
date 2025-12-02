
import Image from "next/image"
import ResumeContainer from "./ResumeContainer"

export default function Experience() {
  return (
    <div className="flex flex-col w-full outline outline-red-500">
      <div className="flex flex-row space-x-1 md:space-x-2 lg:space-x-3 text-2xl md:text-4xl font-bold">
        <h1>
          Work
        </h1>
        <h1 className="bg-gradient-to-r from-[#d4a537] via-[#ffecb3] via-[#f0c24a] via-[#f5d670] to-[#fff7c6] text-transparent bg-clip-text">
          Experience
        </h1>
      </div>

      <div className="space-y-4">
        <ResumeContainer
          icon={<Image alt="imda" src="/images/organisations/imda.png" width={500} height={500} className="min-w-[4rem] w-[4rem]" />}
          date="Jan' 2025 - Present"
          title="Intern, Digital Transformation Office"
          entity="Infocomm Media Development Authority (IMDA)"
          content={
            <>
              <p className="mt-2">
                Collaborated with a team of 3 and external partners (AWS, Cognizant) using the <span className="font-bold text-blue-500">SCRUM framework</span> to iteratively design and develop customisable and specialised <span className="font-bold text-blue-500">Retrieval-Augmented Generation (RAG) chatbots</span> with domain-specific knowledge tailored for internal use.
              </p>
              <p className="mt-2">
                Developed a <span className="font-bold text-blue-500">film classification tool</span> with external partners (Google Cloud Platform) for the Content Standards & Classifications team. Implemented film chunking and deployed eight <span className="font-bold text-blue-500">parallel and specialised agents</span> to generate structured synopses and produce compliance reports for regulatory review.              </p>
              <p className="mt-2">
                Conducted <span className="font-bold text-blue-500">comprehensive evaluation</span> of Generative AI applications, focusing on <span className="font-bold text-blue-500">universal risks</span> including bias, toxicity, hallucinations, and data disclosures for responsible deployment.              </p>
            </>
          }
        />
      </div>
    </div>
  )
}