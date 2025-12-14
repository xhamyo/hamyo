
"use client"

import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsPersonFill } from "react-icons/bs";

const projects = [
  {
    shell: true,
    justify: "items-end",
    rotate: "hover:rotate-2",
    date: "2025",
    nCollaborators: 1,
    link: "/juiceboxFinance",
  },
  {
    rotate: "hover:-rotate-2",
    date: "2025",
    title: "Juicebox Finance (In Development 🔨)",
    type: "iOS Application Development",
    imagePaths: [
      "juiceboxFinance/juiceboxFinancePage1",
      "juiceboxFinance/juiceboxFinancePage2",
      "juiceboxFinance/juiceboxFinancePage3",
      "juiceboxFinance/juiceboxFinancePage4",
    ],
    imageDescriptions: [
      "User Authentication",
      "Cash Accounts / Tools / Settings",
      "Manage Budgets",
      "Manage Transactions",
    ],
    nCollaborators: 1,
    link: "/juiceboxFinance",
  },
  {
    rotate: "hover:rotate-2",
    date: "2024",
    title: "Portfolio Page",
    type: "Static Front-End Web Development",
    imagePaths: [
      "portfolioPage/portfolioPage1",
      "portfolioPage/portfolioPage2",
      "portfolioPage/portfolioPage3",
      "portfolioPage/portfolioPage4",
    ],
    imageDescriptions: [
      "Introduction",
      "Resume",
      "Projects",
      "Contact"
    ],
    nCollaborators: 1,
    link:"https://hamyo.sg",
  },
  {
    shell: true,
    justify: "",
    rotate: "hover:-rotate-2",
    date: "2024",
    nCollaborators: 1,
    link:"https://hamyo.sg",
  },
  {
    shell: true,
    justify: "items-end",
    rotate: "hover:rotate-2",
    date: "2024",
    nCollaborators: 5,
  },
  {
    rotate: "hover:-rotate-2",
    date: "2024",
    title: "MATER for Vehicle Workshops",
    type: "Java Application Development",
    imagePaths: [
      "mater/mater1",
      "mater/mater2",
      "mater/mater3",
    ],
    imageDescriptions: [
      "Client Management",
      "Vehicle Management",
      "Information Overview"
    ],
    nCollaborators: 5,
  },
  {
    rotate: "hover:rotate-2",
    date: "2024",
    title: "Raining Fire",
    type: "2D Game Development",
    imagePaths: [
      "rainingFire/rainingFire1",
      "rainingFire/rainingFire2",
      "rainingFire/rainingFire3",
      "rainingFire/rainingFire4",
    ],
    imageDescriptions: [
      "Resupply at Friendly Base",
      "Player Plane Mechanics",
      "Destroy Red Land Buildings",
      "Enemy Base Mechanics"
    ],
    nCollaborators: 1,
    link: "https://youtu.be/pfm4cjbQtgI",
  },
  {
    shell: true,
    justify: "",
    rotate: "hover:-rotate-2",
    date: "2024",
    nCollaborators: 1,
    link: "https://youtu.be/pfm4cjbQtgI",
  },
  {
    shell: true,
    justify: "items-end",
    rotate: "hover:rotate-2",
    date: "2024",
    nCollaborators: 2,
    link: "https://youtu.be/Tw-SxNs0SXg?si=5dyqwYLNFFQYgoJE",
  },
  {
    rotate: "hover:-rotate-2",
    date: "2024",
    title: "PaperHans",
    type: "Full-Stack Web Development",
    imagePaths: [
      "paperHans/paperHans1",
      "paperHans/paperHans2",
      "paperHans/paperHans3",
      "paperHans/paperHans4",
      "paperHans/paperHans5",
      "paperHans/paperHans6",
    ],
    imageDescriptions: [
      "Firebase Authentication",
      "Profile & Achievements",
      "Real-Time Prices & Sentiments",
      "Lessons & Trivia",
      "Playground Environment",
      "News & Sentiment Analysis"
    ],
    nCollaborators: 2,
    link: "https://youtu.be/Tw-SxNs0SXg?si=5dyqwYLNFFQYgoJE",
  },
  {
    rotate: "hover:rotate-2",
    date: "2023",
    title: "HacX! Hack for Public Safety",
    type: "Full-Stack Web Development",
    imagePaths: [
      "hackX/hacX1",
      "hackX/hacX2",
      "hackX/hacX3",
      "hackX/hacX4",
    ],
    imageDescriptions: [
      "HacX! Grand Finals",
      "HackX! Semi-Finals",
      "Overview Dashboard",
      "Inmate Vitals Dashboard"
    ],
    nCollaborators: 4,
  },
  {
    shell: true,
    justify: "",
    rotate: "hover:-rotate-2",
    date: "2024",
    nCollaborators: 4,
  },
]

export default function Projects() {
  const [ imageIndices, setImageIndices ] = useState(projects.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndices(prev => prev.map((index, id) => projects[id].imagePaths ? (index + 1) % projects[id].imagePaths.length : 0))
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col space-y-3 w-full">
      <div className="flex flex-row space-x-1 md:space-x-2 text-2xl md:text-4xl justify-center font-bold">
        <h1>
          Featured
        </h1>
        <h1 className="text-gold-l">
          Projects
        </h1>
      </div>

      {/* Timeline. */}
      <div className="hidden lg:block absolute top-[1.5%] left-1/2 -translate-x-1/2 w-[3px] h-[97%] bg-pink-b rounded-full" />

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 justify-between auto-cols-min">
        {projects.map((item, id) =>
          <div key={id}>
            {!item.shell ? (
              <div className="sm: pb-8">

                {/* TIMELINE DOT (large screens only) */}
                <div className={`hidden lg:block absolute left-1/2 translate-y-[3.5rem] -translate-x-1/2 w-4 h-4 rounded-full bg-pink-r shadow-[0_0_10px_3px_rgba(246,163,198,0.7)]`}/>
    
                <div className={`p-3 flex flex-col space-y-3 rounded-lg transition duration-300 hover:scale-105 ${item.rotate} bg-gray-br outline outline-zinc-800`}>
                  {/* Images, Description. */}
                  <div className="flex flex-col relative overflow-hidden">
                    <AnimatePresence mode="popLayout">
                      <motion.div
                        key={imageIndices[id]}
                        initial={{ x: "100%", opacity: 1 }}
                        animate={{ x: "0%", opacity: 1 }}
                        exit={{ x: "-100%", opacity: 1 }}
                        transition={{ duration: 1.0 }}
                      >
                        <Image alt={item.imagePaths[imageIndices[id]]} src={`/images/projects/${item.imagePaths[imageIndices[id]]}.png`} width={1920} height={1080} className="w-full"/>
                      </motion.div>
                    </AnimatePresence>
                    <div className="h-2"/>
                    <AnimatePresence mode="popLayout">
                      <motion.div
                        key={imageIndices[id]}
                        initial={{ x: "100%", opacity: 1 }}
                        animate={{ x: "0%", opacity: 1 }}
                        exit={{ x: "-100%", opacity: 1 }}
                        transition={{ duration: 1.0 }}
                        className="text-center font-light text-gray-300"
                      >
                        {item.imageDescriptions[imageIndices[id]]}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  
                  {/* Type, Title. */}
                  <div className="relative flex flex-row space-x-3 rounded-lg font-medium text-base justify-between">
                    <div className="flex flex-col text-left">
                      <h2 className="font-bold text-sm">{item.type}</h2>
                      <h2 className="font-bold text-gold-r">{item.title}</h2>
                    </div>

                    <div className="absolute top-0 right-0 flex flex-row items-center">
                      {Array.from({ length: item.nCollaborators }).map((_, index) => (
                        <BsPersonFill key={index} className="-ml-0.5" />
                      ))}
                    </div>
                  </div>

                  {/* Date. (SMALL)*/}
                  <div className="lg:hidden flex flex-row flex-wrap gap-x-3 gap-y-1.5 text-xs">
                    <div className="group w-fit h-fit p-0.5 rounded-lg bg-pink-r hover:scale-[1.01] hover:bg-gold-r">
                      <div className="px-1.5 py-0.5 rounded-md bg-zinc-900">
                        <h2 className="font-bold text-pink-r group-hover:text-gold-r">{item.date}</h2>
                      </div>
                    </div>
                    {item.link && (
                      <a href={item.link} target="_blank" className="group w-fit h-fit p-0.5 rounded-lg bg-pink-r hover:scale-[1.01] hover:bg-gold-r">
                        <div className="flex flex-row  space-x-0.5 px-1.5 py-0.5 rounded-md bg-zinc-900">
                          <h2 className="font-bold text-pink-r group-hover:text-gold-l">View</h2>
                          <h2 className="font-bold text-gold-l group-hover:text-white">Demonstration</h2>
                        </div>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <>
                {/* Date. (LARGE)*/}
                <div className={`hidden lg:flex flex-col pt-8 space-y-2 text-sm ${item.justify} transition duration-300`}>
                  <div className={`group w-fit h-fit p-0.5 rounded-lg bg-pink-r hover:scale-[1.01] ${item.rotate} hover:bg-gold-r`}>
                    <div className="px-1.5 py-0.5 rounded-md bg-zinc-900">
                      <h2 className="font-bold text-pink-r group-hover:text-gold-r">{item.date}</h2>
                    </div>
                  </div>
                  {item.link ? (
                    <a href={item.link} target="_blank" className={`group w-fit h-fit p-0.5 rounded-lg bg-pink-r hover:scale-[1.01] ${item.rotate} hover:bg-gold-r`}>
                      <div className="flex flex-row space-x-0.5 px-1.5 py-0.5 rounded-md bg-zinc-900">
                        <h2 className="font-bold text-pink-r group-hover:text-gold-l">View</h2>
                        <h2 className="font-bold text-gold-l group-hover:text-white">Demonstration</h2>
                      </div>
                    </a>
                  ):(
                    <div className={`w-fit h-fit p-0.5 rounded-lg bg-zinc-500`}>
                      <div className="flex flex-row px-1.5 py-0.5 rounded-md bg-zinc-900">
                        <h2 className="font-bold text-zinc-500">Unavailable</h2>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}