"use client"

import { ReactNode, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsPersonFill } from "react-icons/bs";

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
    <div>
      <a href={link} target="_blank">
        <div className="flex flex-col p-3 space-y-2 rounded-lg hover:scale-[1.01] shadow-lg transition-all duration-200 ease-in-out bg-gradient-to-r bg-[#151515]">
          
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
            <div className="flex flex-row text-md justify-between font-bold">
              <h1>
                {title}
              </h1>
              {/* <Tooltip
                placement="left"
                title={nCollaborators == 1 ? "Independent project" : `Team size: ${nCollaborators}`}
              > */}
                <div className="flex flex-row items-center">
                  {Array.from({ length: nCollaborators }).map((_, index) => (
                    <BsPersonFill key={index} className="text-blue-500 -ml-2" />
                  ))}
                </div>
              {/* </Tooltip> */}
            </div>

            {/* Project Type and Date */}
            <div className="flex text-sm flex-row justify-between font-bold">
              <h1 className="text-gray-300">
                {type}
              </h1>
              <h1 className="text-indigo-500">
                {date}
              </h1>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default ProjectContainer;
