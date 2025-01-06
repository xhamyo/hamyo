
import { ReactNode } from "react";

interface ResumeTechnologyContainerProps {
  icon: ReactNode;
  technology: string;
}
const ResumeTechnologyContainer: React.FC<ResumeTechnologyContainerProps> = ({ icon, technology }) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg font-bold text-sm md:text-xl w-[25vw] h-[20vw] md:w-[10rem] md:h-[7rem] hover:scale-[1.05] shadow-lg dark:shadow-gray-500 dark:shadow-md transition-all duration-200 ease-in-out dark:bg-gradient-to-r dark:from-gray-600 dark:via-gray-700 dark:to-gray-800">
      <div className="text-3xl md:text-5xl">
        {icon}
      </div>
      <h4>
        {technology}
      </h4>
    </div>
  );
}

export default ResumeTechnologyContainer;
