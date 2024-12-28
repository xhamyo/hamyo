
import { ReactNode } from "react";

interface ResumeTechnologyContainerProps {
  icon1: ReactNode;
  technology1: string;
  icon2: ReactNode;
  technology2: string;
  icon3: ReactNode;
  technology3: string;
}
const ResumeTechnologyContainer: React.FC<ResumeTechnologyContainerProps> = ({ icon1, technology1, icon2, technology2, icon3, technology3 }) => {
  return (
    <div className="flex flex-row items-center justify-center space-x-4 md:space-x-6 font-bold text-sm md:text-2xl">
      <div className="flex flex-col items-center justify-center rounded-lg space-y-4 w-[25vw] h-[20vw] md:w-[14rem] md:h-[11rem] hover:scale-[1.05] shadow-lg dark:shadow-gray-500 dark:shadow-md transition-all duration-200 ease-in-out dark:bg-gradient-to-r dark:from-gray-600 dark:via-gray-700 dark:to-gray-800">
        <div className="text-3xl md:text-5xl">
          {icon1}
        </div>
        <h4>
          {technology1}
        </h4>
      </div>
      <div className="flex flex-col items-center justify-center rounded-lg space-y-4 w-[25vw] h-[20vw] md:w-[14rem] md:h-[11rem] hover:scale-[1.05] shadow-lg dark:shadow-gray-500 dark:shadow-md transition-all duration-200 ease-in-out dark:bg-gradient-to-r dark:bg-gray-800">
        <div className="text-3xl md:text-5xl">
          {icon2}
        </div>
        <h4>
          {technology2}
        </h4>
      </div>
      <div className="flex flex-col items-center justify-center rounded-lg space-y-4 w-[25vw] h-[20vw] md:w-[14rem] md:h-[11rem] hover:scale-[1.05] shadow-lg dark:shadow-gray-500 dark:shadow-md transition-all duration-200 ease-in-out dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-700 dark:to-gray-600">
        <div className="text-3xl md:text-5xl">
          {icon3}
        </div>
        <h4>
          {technology3}
        </h4>
      </div>
    </div>
  );
}

export default ResumeTechnologyContainer;
