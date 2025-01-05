"use client"

import { ReactNode, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsPersonFill } from "react-icons/bs";
import { Tooltip } from "antd";

interface ProjectContainerProps {
  title: string;
  date: string;
  type: string;
  images: ReactNode[];
  imageDescriptions: string[];
  nCollaborators?: number;
  link?: string;
}
const ProjectContainer: React.FC<ProjectContainerProps> = ({ title, date, type, images, imageDescriptions, nCollaborators = 1, link }) => {
  
  const [ imageIndex, setImageIndex ] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="flex flex-col p-3 space-y-2 rounded-lg hover:scale-[1.01] shadow-lg dark:shadow-gray-500 dark:shadow-md transition-all duration-200 ease-in-out dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      
      {/* Image and Description */}
      <div className="flex flex-col relative overflow-hidden hover:scale-[1.01] transition-all duration-200 ease-in-out">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={imageIndex}
            initial={{ x: "100%", opacity: 1 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ x: "-100%", opacity: 1 }}
            transition={{ duration: 1.0 }}
            className="w-[80vw] max-h-[45vw] md:w-full"
          >
            {images[imageIndex]}
          </motion.div>
        </AnimatePresence>
        <AnimatePresence mode="popLayout">
          <motion.div
            key={imageIndex}
            initial={{ x: "100%", opacity: 1 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ x: "-100%", opacity: 1 }}
            transition={{ duration: 1.0 }}
            className="w-[80vw] md:w-full text-center font-semibold italic text-lg"
          >
            {imageDescriptions[imageIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex flex-col">

        {/* Title and Collaborators */}
        <div className="flex flex-row text-md md:text-xl justify-between font-bold">
          <h1>
            {title}
          </h1>
          <Tooltip
            placement="left"
            title={nCollaborators == 1 ? "Independent project" : `Team size: ${nCollaborators}`}
          >
            <div className="flex flex-row items-center">
              {Array.from({ length: nCollaborators }).map((_, index) => (
                <BsPersonFill key={index} className="text-blue-600 dark:text-blue-500 -ml-2" />
              ))}
            </div>
          </Tooltip>
        </div>

        {/* Project Type and Date */}
        <div className="flex text-sm md:text-lg flex-row justify-between font-bold">
          <h1 className="text-gray-600 dark:text-gray-300">
            {type}
          </h1>
          <h1 className="text-indigo-500">
            {date}
          </h1>
        </div>

        {/* Link (if any) */}
        {link && (
          <div className="flex flex-row space-x-1 md:space-x-2 font-light text-sm md:text-lg tracking-tight">
            <h1 className="text-gray-600 dark:text-gray-300">
              Available at:
            </h1>
            <a
              href={link}
              target="_blank"
              className="flex underline italic hover:scale-[1.01] hover:text-gray-800 hover:dark:text-gray-100"
            >
              {link}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectContainer;
