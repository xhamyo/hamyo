
import ProjectContainer from "./ProjectContainer";

import Image from "next/image";
import { FaHammer } from "react-icons/fa6";

export default function Projects() {
  
  return (
    <div className="rounded-lg bg-zinc-100 dark:bg-zinc-950 w-[90vw] md:w-[50vw] shadow-lg dark:shadow-gray-800">
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
            <Image alt="logo" src="/images/placeholder.png" width={50} height={50} className="w-full"/>,
            <Image alt="logo" src="/images/placeholder.png" width={50} height={50} className="w-full"/>,
            <Image alt="logo" src="/images/placeholder.png" width={50} height={50} className="w-full"/>]}
          imageDescriptions={["Project Description", "Project Long Description", "Project Longest Long Description 3"]}
          content="Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content."
          link="https://hamyo.vercel.app"
        />
        <ProjectContainer
          title="Raining Fire"
          date="2024"
          type="2D Game Development"
          images={[
            <Image alt="logo" src="/images/placeholder.png" width={50} height={50} className="w-full"/>,
            <Image alt="logo" src="/images/placeholder.png" width={50} height={50} className="w-full"/>,
            <Image alt="logo" src="/images/placeholder.png" width={50} height={50} className="w-full"/>]}
          imageDescriptions={["Project Description", "Project Long Description", "Project Longest Long Description 3"]}
          content="Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content."
        />
        <ProjectContainer
          title="PaperHans"
          date="2024"
          type="Full-Stack Web Development"
          images={[
            <Image alt="logo" src="/images/placeholder.png" width={50} height={50} className="w-full"/>,
            <Image alt="logo" src="/images/placeholder.png" width={50} height={50} className="w-full"/>,
            <Image alt="logo" src="/images/placeholder.png" width={50} height={50} className="w-full"/>]}
          imageDescriptions={["Project Description", "Project Long Description", "Project Longest Long Description 3"]}
          content="Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content."
        />
        <ProjectContainer
          title="HacX! Hack for Public Safety"
          date="2023"
          type="Full-Stack Web Development"
          images={[
            <Image alt="logo" src="/images/placeholder.png" width={50} height={50} className="w-full"/>,
            <Image alt="logo" src="/images/placeholder.png" width={50} height={50} className="w-full"/>,
            <Image alt="logo" src="/images/placeholder.png" width={50} height={50} className="w-full"/>]}
          imageDescriptions={["Project Description", "Project Long Description", "Project Longest Long Description 3"]}
          content="Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content."
        />
      </div>
      <div className="h-2"></div>
    </div>
  );
}