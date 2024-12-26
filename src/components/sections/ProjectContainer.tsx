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
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    // <div className="flex flex-col md:flex-row p-3 md:p-4 space-y-2 md:space-x-4 rounded-lg hover:scale-[1.01] shadow-xl dark:shadow-gray-500 dark:shadow-md transition-all duration-200 ease-in-out dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      
    //   {/* Image and Description */}
       <div className="flex flex-col md:w-1/2 items-center">
        <div className="relative overflow-hidden hover:scale-[1.1] transition-all duration-200 ease-in-out">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={imageIndex}
              initial={{ x: "100%", opacity: 1 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: "-100%", opacity: 1 }}
              transition={{ duration: 1.0 }}
              className="border-4 border-red-500 w-[80vw] h-[45vw] md:w-[22rem] md:h-[12.375rem]"
            >
              {images[imageIndex]}
            </motion.div>
          </AnimatePresence>
        </div>
    </div>
    //     <div className="relative overflow-hidden hover:scale-[1.01] transition-all duration-200 ease-in-out">
    //       <AnimatePresence mode="popLayout">
    //         <motion.div
    //           key={imageIndex}
    //           initial={{ x: "100%", opacity: 1 }}
    //           animate={{ x: "0%", opacity: 1 }}
    //           exit={{ x: "-100%", opacity: 1 }}
    //           transition={{ duration: 1.0 }}
    //           className="border-4 border-red-500 w-[80vw] md:w-[22rem] text-center font-semibold italic text-lg md:text-xl"
    //         >
    //           {imageDescriptions[imageIndex]}
    //         </motion.div>
    //       </AnimatePresence>
    //     </div>
    //   </div>

    //   {/* Title and Content */}
    //   <div className="flex flex-col md:w-1/2 space-y-2">
    //     <h1 className="font-bold text-lg md:text-xl">
    //       {title}
    //     </h1>
    //     <h1 className="font-light text-gray-600 dark:text-gray-300">
    //       {content}
    //     </h1>
    //   </div>
    // </div>
  );
}

export default ProjectContainer;
