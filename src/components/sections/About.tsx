
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DownloadOutlined } from "@ant-design/icons";
import { SiLeetcode } from "react-icons/si";
import { IoIosMail } from "react-icons/io";
import { FaDownload, FaGithub, FaGraduationCap, FaLinkedin, FaLocationDot, FaSquareInstagram, FaSuitcase, FaTelegram } from "react-icons/fa6";

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
  {
    icon: <FaTelegram />,
    tooltip: "Telegram",
    text: [
      "hanyuuuuu",
    ],
    link: "https://t.me/hanyuuuuu",
  },
  {
    icon: <FaSquareInstagram />,
    tooltip: "Instagram",
    text: [
      "hanyu_____",
    ],
    link: "https://www.instagram.com/hanyu_____",
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
    <div className="p-3 rounded-lg bg-zinc-100 dark:bg-zinc-950 w-[90vw] md:min-w-[22rem] md:w-[22rem] shadow-lg outline outline-2 outline-red-500">
      <div className="flex flex-row items-center space-x-2 md:space-x-4">
        <Image alt="introductionPicture" src="/images/hanyu.png" width={90} height={90} className="rounded-md w-[4rem]"/>
        <div className="text-2xl tracking-tight">
          <h1>hello! I am <span className="text-orange-500 font-bold">HAN YU</span>,</h1>
          <div className="flex flex-row relative overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={index}
                initial={{ y: "100%", opacity: 1 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-indigo-500 font-semibold w-[65vw] md:w-[38rem] md:h-[2rem]"
              >
                {titles[index]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className="h-2"></div>

    
      <div className="flex flex-col justify-center space-y-1 text-sm text-gray-600 dark:text-gray-300">
        {info.map((item, id) =>
          <div key={id} className="relative flex flex-row space-x-2">
            <h1 className="my-1 peer">
              {item.icon}
            </h1>
            <h1 className="absolute z-0 left-3 top-0 rounded-lg opacity-0 peer-hover:opacity-100">
              {item.tooltip}
            </h1>
            {item.link ? (
              <a href={item.link} target="_blank" className="z-10 hover:underline peer-hover:blur-md">
                {item.text[0]}
              </a>
            ) : (
              <div className="peer-hover:blur-md">
                {item.text.map((line, lid) =>
                  <h1 key={lid}>
                    {line}
                  </h1>
                )}
              </div>
            )}
          </div>
        )}
        
        <a href="https://drive.google.com/uc?export=download&id=1Bl-qKIOIklu_4vDPOfHfUBVKJA1vkK7u" download="HANYU_RESUME.pdf" className="py-1 rounded-lg bg-indigo-200 dark:bg-indigo-300 hover:bg-indigo-300 dark:hover:bg-indigo-400">
          <div className="flex flex-row space-x-2 justify-center text-indigo-700 dark:text-indigo-800 font-semibold tracking-tight">
            <FaDownload className="my-1 text-3xl"/>
            <div className="flex-col">
              <h1>
                Resume
              </h1>
              <h1 className="text-xs font-light">
                Last Updated Aug 2025
              </h1>
            </div>
          </div>
        </a>

      </div>
    </div>
  );
}