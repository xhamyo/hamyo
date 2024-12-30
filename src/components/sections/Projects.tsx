
import ProjectContainer from "./ProjectContainer";

import Image from "next/image";
import { FaHammer } from "react-icons/fa6";

export default function Projects() {
  
  return (
    <div className="rounded-lg bg-zinc-100 dark:bg-zinc-950 w-[90vw] md:min-w-[48rem] md:w-[50vw] shadow-lg dark:shadow-gray-800">
      <div className="p-4 md:p-8 flex flex-col justify-center space-y-5">
        <div className="flex flex-row space-x-2 font-semibold tracking-light">
          <FaHammer className="text-3xl md:text-4xl"/>
          <h1 className="text-2xl md:text-3xl">
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
          content="Personal portfolio page, designed to showcase my skills, achievements, and experiences."
          link="https://hamyo.vercel.app"
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
          content="Iterative brownfield project aimed at creating an efficient vehicle management system for Singapore workshops."
          nCollaborators={5}
          link="https://hamyo.vercel.app"
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
          content="Inspired by Skies of War (2011) released by Youda Games, the objective of the game is to destroy all Red Land buildings, and enemy bunkers, airport & planes."
          link="https://youtu.be/pfm4cjbQtgI"
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
          content="Cryptocurrency web application designed to educate and inform both novice and experienced enthusiasts alike through specially curated lessons, and real-time prices and sentiments analysis."
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
          content="Real-time inmate welfare monitoring system for the Singapore Prison Service, leveraging Microsoft Azure computer vision technology for fall detection, corroborated with vitals monitored through pre-existing wearable devices for an integrated and comprehensive overview."
        />
      </div>
      <div className="h-2"></div>
    </div>
  );
}