"use client"

import { ReactNode, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectContainerProps {
  title: String;
  images: ReactNode[];
  imageDescriptions: String[];
  content: String;
}
const ProjectContainer: React.FC<ProjectContainerProps> = ({ title, images, imageDescriptions, content }) => {
  
  const [ imageIndex, setImageIndex ] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="flex flex-col md:flex-row">
      <div className="border-2 border-red-500 p-3 md:p-4 md:w-1/2 flex flex-col space-y-2">
        <div className="relative overflow-hidden">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={imageIndex}
              initial={{ x: "100%", opacity: 1 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: "-100%", opacity: 1 }}
              transition={{ duration: 0.75 }}
              className="w-full flex justify-center items-center"
            >
              {images[imageIndex]}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="relative overflow-hidden">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={imageIndex}
              initial={{ x: "100%", opacity: 1 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: "-100%", opacity: 1 }}
              transition={{ duration: 0.75 }}
              className="h-full flex bg-gray-500 justify-center items-center font-semibold italic text-lg md:text-xl"
            >
              {imageDescriptions[imageIndex]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="border-2 border-red-500 p-3 md:p-4 md:w-1/2 flex flex-col space-y-2">
        <h1 className="font-bold text-lg md:text-xl">
          {title}
        </h1>
        <h1 className="font-light text-gray-600 dark:text-gray-300">
          {content}
        </h1>
      </div>
    </div>
  );
}

export default ProjectContainer;