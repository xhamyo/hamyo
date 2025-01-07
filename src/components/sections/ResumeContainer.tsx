
import { ReactNode } from "react";

interface ResumeContainerProps {
  icon: ReactNode;
  date: string;
  title: string;
  entity: string;
  content: ReactNode;

}
const ResumeContainer: React.FC<ResumeContainerProps> = ({ icon, date, title, entity, content }) => {
  return (
    <div className="flex flex-row space-x-3 md:space-x-4 font-medium">
      <div className="text-indigo-500 text-3xl">
        {icon}
      </div>
      <div className="flex-col">
        <h1 className="font-bold text-sm text-indigo-500">{date}</h1>
        <h2 className="font-bold">{title}</h2>
        <h3 className="font-bold text-sm italic">{entity}</h3>
        <h4 className="font-light text-sm text-gray-600 dark:text-gray-300">{content}</h4>
      </div>
    </div>
  );
}

export default ResumeContainer;
