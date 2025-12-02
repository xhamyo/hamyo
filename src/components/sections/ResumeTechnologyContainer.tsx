
import { ReactNode } from "react";

interface ResumeTechnologyContainerProps {
  icon: ReactNode;
  technology: string;
}
const ResumeTechnologyContainer: React.FC<ResumeTechnologyContainerProps> = ({ icon, technology }) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg font-bold text-sm md:text-xl w-[25vw] h-[20vw] md:w-[10rem] md:h-[7rem] hover:scale-[1.05] shadow-lg transition-all duration-200 ease-in-out bg-gradient-to-r from-[#101010] via-[#1B1B1B] to-[#202020]">
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
