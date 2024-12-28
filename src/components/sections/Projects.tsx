
import ProjectContainer from "./ProjectContainer";

import Image from "next/image";
import { FaHammer } from "react-icons/fa6";

export default function Projects() {
  
  return (
    <div className="rounded-lg bg-zinc-100 dark:bg-zinc-950 w-[90vw] md:w-[48rem] shadow-lg dark:shadow-gray-800">
      <div className="px-3 py-3 md:px-4 md:py-4 flex flex-col justify-center space-y-3 md:space-y-6">
        <div className="flex flex-row space-x-2 font-semibold tracking-light">
          <FaHammer className="text-3xl md:text-4xl"/>
          <h1 className="text-2xl md:text-3xl">
            My Projects
          </h1>
        </div>
        <ProjectContainer
          title="Project Title"
          date="Project Date"
          type="Project Type"
          images={[
            <Image alt="logo" src="/images/placeholder.png" width={50} height={50} className="w-full"/>,
            <Image alt="logo" src="/images/placeholder.png" width={50} height={50} className="w-full"/>,
            <Image alt="logo" src="/images/placeholder.png" width={50} height={50} className="w-full"/>]}
          imageDescriptions={["Project Description", "Project Long Description", "Project Longest Long Description 3"]}
          content="Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content."
        />
        <ProjectContainer
          title="Project Title"
          date="Project Date"
          type="Project Type"
          images={[
            <Image alt="logo" src="/images/placeholder.png" width={50} height={50} className="w-full"/>,
            <Image alt="logo" src="/images/placeholder.png" width={50} height={50} className="w-full"/>,
            <Image alt="logo" src="/images/placeholder.png" width={50} height={50} className="w-full"/>]}
          imageDescriptions={["Project Description", "Project Long Description", "Project Longest Long Description 3"]}
          content="Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content."
        />
        <ProjectContainer
          title="Project Title"
          date="Project Date"
          type="Project Type"
          images={[
            <Image alt="logo" src="/images/placeholder.png" width={50} height={50} className="w-full"/>,
            <Image alt="logo" src="/images/placeholder.png" width={50} height={50} className="w-full"/>,
            <Image alt="logo" src="/images/placeholder.png" width={50} height={50} className="w-full"/>]}
          imageDescriptions={["Project Description", "Project Long Description", "Project Longest Long Description 3"]}
          content="Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content. Project content."
        />
        <div className="h-1"></div>
      </div>
    </div>
  );
}