
import ProjectContainer from "./ProjectContainer";

import Image from "next/image";
import { FaHammer } from "react-icons/fa6";

export default function Projects() {
  
  return (
    <div className="rounded-lg bg-zinc-100 dark:bg-zinc-950 w-[90vw] md:min-w-[48rem] md:w-[50vw] shadow-lg">
      <div className="p-4 md:p-8 flex flex-col justify-center space-y-5">
        <div className="flex flex-row space-x-2 font-semibold tracking-light">
          <FaHammer className="text-3xl"/>
          <h1 className="text-2xl">
            My Projects
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <ProjectContainer
            title="Portfolio Page"
            date="2024"
            type="Static Front-End Web Development"
            images={[
              <Image alt="portfolioPage1" src="/images/projects/portfolioPage/portfolioPage1.png" width={1920} height={1080} className="w-full"/>,
              <Image alt="portfolioPage2" src="/images/projects/portfolioPage/portfolioPage2.png" width={1920} height={1080} className="w-full"/>,
              <Image alt="portfolioPage3" src="/images/projects/portfolioPage/portfolioPage3.png" width={1920} height={1080} className="w-full"/>,
              <Image alt="portfolioPage4" src="/images/projects/portfolioPage/portfolioPage4.png" width={1920} height={1080} className="w-full"/>
            ]}
            imageDescriptions={[
              "Introduction",
              "Resume",
              "Projects",
              "Contact"
            ]}
            link="https://hamyo.sg"
          />
          <ProjectContainer
            title="MATER for Vehicle Workshops"
            date="2024"
            type="Java Application Development"
            images={[
              <Image alt="mater1" src="/images/projects/mater/mater1.png" width={1920} height={1080} className="w-full"/>,
              <Image alt="mater2" src="/images/projects/mater/mater2.png" width={1920} height={1080} className="w-full"/>,
              <Image alt="mater3" src="/images/projects/mater/mater3.png" width={1920} height={1080} className="w-full"/>,
            ]}
            imageDescriptions={["Client Management", "Vehicle Management", "Information Overview"]}
            nCollaborators={5}
          />
          <ProjectContainer
            title="Raining Fire"
            date="2024"
            type="2D Game Development"
            images={[
              <Image alt="rainingFire1" src="/images/projects/rainingFire/rainingFire1.png" width={1920} height={1080} className="w-full"/>,
              <Image alt="rainingFire2" src="/images/projects/rainingFire/rainingFire2.png" width={1920} height={1080} className="w-full"/>,
              <Image alt="rainingFire3" src="/images/projects/rainingFire/rainingFire3.png" width={1920} height={1080} className="w-full"/>,
              <Image alt="rainingFire4" src="/images/projects/rainingFire/rainingFire4.png" width={1920} height={1080} className="w-full"/>
            ]}
            imageDescriptions={[
              "Resupply at Friendly Base",
              "Player Plane Mechanics",
              "Destroy Red Land Buildings",
              "Enemy Base Mechanics"
            ]}
            link="https://youtu.be/pfm4cjbQtgI"
          />
          <ProjectContainer
            title="PaperHans"
            date="2024"
            type="Full-Stack Web Development"
            images={[
              <Image alt="paperHans1" src="/images/projects/paperHans/paperHans1.png" width={1920} height={1080} className="w-full"/>,
              <Image alt="paperHans2" src="/images/projects/paperHans/paperHans2.png" width={1920} height={1080} className="w-full"/>,
              <Image alt="paperHans3" src="/images/projects/paperHans/paperHans3.png" width={1920} height={1080} className="w-full"/>,
              <Image alt="paperHans4" src="/images/projects/paperHans/paperHans4.png" width={1920} height={1080} className="w-full"/>,
              <Image alt="paperHans5" src="/images/projects/paperHans/paperHans5.png" width={1920} height={1080} className="w-full"/>,
              <Image alt="paperHans6" src="/images/projects/paperHans/paperHans6.png" width={1920} height={1080} className="w-full"/>
            ]}
            imageDescriptions={[
              "Firebase Authentication",
              "Profile & Achievements",
              "Real-Time Prices & Sentiments",
              "Lessons & Trivia",
              "Playground Environment",
              "News & Sentiment Analysis"
            ]}
            nCollaborators={2}
            link="https://youtu.be/Tw-SxNs0SXg?si=5dyqwYLNFFQYgoJE"
          />
          <ProjectContainer
            title="HacX! Hack for Public Safety"
            date="2023"
            type="Full-Stack Web Development"
            images={[
              <Image alt="hacX1" src="/images/projects/hackX/hacX1.png" width={1920} height={1080} className="w-full"/>,
              <Image alt="hacX2" src="/images/projects/hackX/hacX2.png" width={1920} height={1080} className="w-full"/>,
              <Image alt="hacX3" src="/images/projects/hackX/hacX3.png" width={1920} height={1080} className="w-full"/>,
              <Image alt="hacX4" src="/images/projects/hackX/hacX4.png" width={1920} height={1080} className="w-full"/>
            ]}
            imageDescriptions={[
              "HacX! Grand Finals",
              "HackX! Semi-Finals",
              "Overview Dashboard",
              "Inmate Vitals Dashboard"
            ]}
            nCollaborators={4}
          />
        </div>
      </div>
      <div className="h-2"></div>
    </div>
  );
}