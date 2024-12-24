"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["student at NUS.", "software engineer.", "full-stack developer.", "game developer.", "data analyst at IMDA."];

export default function Introduction() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border-4 rounded-xl border-gray-200 bg-gray-100 dark:border-gray-900 dark:bg-gray-800 w-[90vw] md:w-[48rem]">
      <div className="px-2 py-2 md:px-4 md:py-4 flex flex-row items-center space-x-2 md:space-x-4">
        <Image alt="logo" src="/images/hanyu.png" width={90} height={90} className="rounded-md w-[15vw] w-[15vw]"/>
        <div className="text-2xl md:text-6xl font-semibold tracking-tight">
          <h1>hello! I am Han Yu,</h1>
          <div className="relative flex flex-row overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={index}
                initial={{ y: "100%", opacity: 1 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-indigo-500 font-bold w-[65vw] md:w-[38rem]"
              >
                {words[index]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}