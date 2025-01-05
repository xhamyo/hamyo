
import ProjectContainer from "./ProjectContainer";

import Image from "next/image";
import { FaHammer } from "react-icons/fa6";

export default function Projects() {
  
  return (
    <div className="rounded-lg bg-zinc-100 dark:bg-zinc-950 w-[90vw] md:min-w-[40rem] md:w-[50vw] shadow-lg dark:shadow-gray-800">
      <div className="p-4 md:p-8 flex flex-col justify-center space-y-5">
        <div className="flex flex-row space-x-2 font-semibold tracking-light">
          <FaHammer className="text-3xl"/>
          <h1 className="text-2xl">
            My Projects
          </h1>
        </div>
        <ProjectContainer
          title="Portfolio Page"
          date="2024"
          type="Static Front-End Web Development"
          images={[
            <Image alt="logo" src="/images/projects/portfolioPage/portfolioPage1.png" width={1920} height={1080} className="w-full"/>,
            <Image alt="logo" src="/images/projects/portfolioPage/portfolioPage2.png" width={1920} height={1080} className="w-full"/>,
            <Image alt="logo" src="/images/projects/portfolioPage/portfolioPage3.png" width={1920} height={1080} className="w-full"/>,
            <Image alt="logo" src="/images/projects/portfolioPage/portfolioPage4.png" width={1920} height={1080} className="w-full"/>
          ]}
          imageDescriptions={["Introduction", "Resume", "Projects", "Contact"]}
        />
        <ProjectContainer
          title="MATER for Vehicle Workshops"
          date="2024"
          type="Java Application Development"
          images={[
            <Image alt="logo" src="/images/projects/mater/mater1.png" width={1920} height={1080} className="w-full"/>,
            <Image alt="logo" src="/images/projects/mater/mater2.png" width={1920} height={1080} className="w-full"/>,
            <Image alt="logo" src="/images/projects/mater/mater3.png" width={1920} height={1080} className="w-full"/>,
          ]}
          imageDescriptions={["Client Management", "Vehicle Management", "Information Overview"]}
        />
        <ProjectContainer
          title="Raining Fire"
          date="2024"
          type="2D Game Development"
          images={[
            <Image alt="logo" src="/images/projects/rainingFire/rainingFire1.png" width={1920} height={1080} className="w-full"/>,
            <Image alt="logo" src="/images/projects/rainingFire/rainingFire2.png" width={1920} height={1080} className="w-full"/>,
            <Image alt="logo" src="/images/projects/rainingFire/rainingFire3.png" width={1920} height={1080} className="w-full"/>,
            <Image alt="logo" src="/images/projects/rainingFire/rainingFire4.png" width={1920} height={1080} className="w-full"/>
          ]}
          imageDescriptions={[
            "Resupply at Friendly Base",
            "Player Plane Mechanics",
            "Destroy Red Land Buildings",
            "Enemy Base Mechanics"
          ]}
        />
        <ProjectContainer
          title="PaperHans"
          date="2024"
          type="Full-Stack Web Development"
          images={[
            <Image alt="logo" src="/images/projects/paperHans/paperHans1.png" width={1920} height={1080} className="w-full"/>,
            <Image alt="logo" src="/images/projects/paperHans/paperHans2.png" width={1920} height={1080} className="w-full"/>,
            <Image alt="logo" src="/images/projects/paperHans/paperHans3.png" width={1920} height={1080} className="w-full"/>,
            <Image alt="logo" src="/images/projects/paperHans/paperHans4.png" width={1920} height={1080} className="w-full"/>,
            <Image alt="logo" src="/images/projects/paperHans/paperHans5.png" width={1920} height={1080} className="w-full"/>,
            <Image alt="logo" src="/images/projects/paperHans/paperHans6.png" width={1920} height={1080} className="w-full"/>
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
        />
        <ProjectContainer
          title="HacX! Hack for Public Safety"
          date="2023"
          type="Full-Stack Web Development"
          images={[
            <Image alt="logo" src="/images/projects/hackX/hacX1.png" width={1920} height={1080} className="w-full"/>,
            <Image alt="logo" src="/images/projects/hackX/hacX2.png" width={1920} height={1080} className="w-full"/>,
            <Image alt="logo" src="/images/projects/hackX/hacX3.png" width={1920} height={1080} className="w-full"/>,
            <Image alt="logo" src="/images/projects/hackX/hacX4.png" width={1920} height={1080} className="w-full"/>
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
      <div className="h-2"></div>
    </div>
  );
}