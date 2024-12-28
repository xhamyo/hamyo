"use client"

import { ReactNode, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectContainerProps {
  title: string;
  date: string;
  type: string;
  images: ReactNode[];
  imageDescriptions: string[];
  content: string;
  link?: string;
}
const ProjectContainer: React.FC<ProjectContainerProps> = ({ title, date, type, images, imageDescriptions, content, link }) => {
  
  const [ imageIndex, setImageIndex ] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="flex flex-col md:flex-row p-3 md:p-4 space-y-2 md:space-x-4 md:space-y-0 rounded-lg hover:scale-[1.01] shadow-lg dark:shadow-gray-500 dark:shadow-md transition-all duration-200 ease-in-out dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      
      {/* Image and Description */}
       <div className="border-2 border-red-500 flex flex-col relative overflow-hidden items-center md:w-1/2 hover:scale-[1.01] transition-all duration-200 ease-in-out">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={imageIndex}
            initial={{ x: "100%", opacity: 1 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ x: "-100%", opacity: 1 }}
            transition={{ duration: 1.0 }}
            className="flex flex-col w-full text-center font-semibold italic text-lg md:text-xl"
          >
            {images[imageIndex]}
            {imageDescriptions[imageIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Title and Content */}
      <div className="border-2 border-red-500 flex flex-col md:w-1/2">
        <h1 className="font-bold text-lg md:text-xl">
          {title}
        </h1>
        <div className="flex flex-row justify-between font-bold">
          <h1 className="text-justify text-gray-600 dark:text-gray-300">
            {type}
          </h1>
          <h1 className="text-indigo-500">
            {date}
          </h1>
        </div>
        {link && (
          <div className="flex flex-row space-x-1 md:space-x-2 font-light text-sm tracking-tight">
            <h1 className="text-gray-600 dark:text-gray-300">
              Available at:
            </h1>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex underline hover:scale-[1.01] hover:text-gray-800 hover:dark:text-gray-100"
            >
              {link}
            </a>
          </div>
        )}
        <h1 className="text-justify font-light text-gray-600 dark:text-gray-300">
          {content}
        </h1>
      </div>
    </div>
  );
}

export default ProjectContainer;
