
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiLeetcode } from "react-icons/si";
import { IoIosMail } from "react-icons/io";
import { FaGithub, FaGraduationCap, FaLinkedin, FaLocationDot, FaSuitcase } from "react-icons/fa6";

const titles = [
  "student at NUS.",
  "mobile SWE at TikTok.",
  "(ex)developer IMDA.",
  "full-stack developer.",
  "game developer.",
  "iOS developer."
];

const info = [
  {
    icon: <FaGraduationCap />,
    tooltip: "Education",
    text: [
      "National University of Singapore (Year 3)",
      "Bachelor of Computing in Computer Science",
      "Second Class Honours (Upper)",
    ]
  },
  {
    icon: <FaSuitcase />,
    tooltip: "Work",
    text: [
      "TikTok Pte. Ltd.",
      "Mobile Software Engineer",
    ]
  },
  {
    icon: <FaLocationDot />,
    tooltip: "Location",
    text: [
      "Singapore",
    ]
  },
  {
    icon: <IoIosMail />,
    tooltip: "Email",
    text: [
      "e1115696@u.nus.edu",
    ],
    link: "mailto:e1115696@u.nus.edu",
  },
  {
    icon: <FaGithub />,
    tooltip: "GitHub",
    text: [
      "xhamyo",
    ],
    link: "https://github.com/xhamyo",
  },
  {
    icon: <SiLeetcode />,
    tooltip: "LeetCode",
    text: [
      "hanyuuuuu",
    ],
    link: "https://leetcode.com/u/hanyuuuuu",
  },
  {
    icon: <FaLinkedin />,
    tooltip: "LinkedIn",
    text: [
      "hanyuuuuu",
    ],
    link: "https://www.linkedin.com/in/hanyuuuuu"
  },
]

export default function About() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="md:fixed md:w-[22rem] md:top-[5rem] md:left-[1rem] p-3 rounded-lg bg-zinc-950 shadow-lg outline outline-2 outline-red-500">
      <div className="flex flex-row items-center space-x-2 md:space-x-4">
        <Image alt="introductionPicture" src="/images/hanyu.png" width={500} height={500} className="rounded-md w-[4rem]"/>
        <div className="text-2xl tracking-tight">
          <h1>hello! I am <span className="bg-gradient-to-r from-[#d4a537] via-[#ffecb3] via-[#f0c24a] via-[#f5d670] to-[#fff7c6] text-transparent bg-clip-text font-bold">HAN YU</span>,</h1>
          <div className="flex flex-row relative overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={index}
                initial={{ y: "100%", opacity: 1 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-[#b792ff] via-[#9f5bff] via-[#7d2fe3] via-[#5c14b8] to-[#d9c5ff] text-transparent bg-clip-text font-semibold w-[65vw] md:w-[38rem] md:h-[2rem]"
              >
                {titles[index]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className="h-2"></div>

    
      <div className="flex flex-col justify-center space-y-1 text-sm text-gray-300">
        {info.map((item, id) =>
          <div key={id} className="group relative flex flex-row space-x-2 hover:scale-[1.005]">
            <h1 className="my-1 peer group-hover:text-[#fff7c6]">
              {item.icon}
            </h1>
            <h1 className="absolute z-0 left-3 top-0 rounded-lg opacity-0 peer-hover:opacity-100 group-hover:bg-gradient-to-r from-[#fff7c6] via-[#f5d670] via-[#f0c24a] via-[#ffecb3] to-[#d4a537] group-hover:text-transparent group-hover:bg-clip-text">
              {item.tooltip}
            </h1>
            {item.link ? (
              <a href={item.link} target="_blank" className="z-10 hover:underline peer-hover:blur-lg group-hover:bg-gradient-to-r from-[#fff7c6] via-[#f5d670] via-[#f0c24a] via-[#ffecb3] to-[#d4a537] group-hover:text-transparent group-hover:bg-clip-text">
                {item.text[0]}
              </a>
            ) : (
              <div className="peer-hover:blur-lg group-hover:bg-gradient-to-r from-[#fff7c6] via-[#f5d670] via-[#f0c24a] via-[#ffecb3] to-[#d4a537] group-hover:text-transparent group-hover:bg-clip-text">
                {item.text.map((line, lid) =>
                  <h1 key={lid}>
                    {line}
                  </h1>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}