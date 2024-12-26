
import { ReactNode } from "react";

interface ResumeContainerProps {
  icon: ReactNode;
  date: String;
  title: String;
  entity: String;
  content: ReactNode;

}
const ResumeContainer: React.FC<ResumeContainerProps> = ({ icon, date, title, entity, content }) => {
  return (
    <div className="flex flex-row space-x-3 md:space-x-4 text-md md:text-lg font-medium">
      <div className="text-indigo-500 text-3xl md:text-4xl tracking-tight">
        {icon}
      </div>
      <div className="flex-col">
        <h1 className="text-indigo-500 font-bold">{date}</h1>
        <h2 className="font-bold text-lg md:text-xl">{title}</h2>
        <h3 className="font-bold italic">{entity}</h3>
        <h4 className="font-light">{content}</h4>
      </div>
    </div>
  );
}

export default ResumeContainer;
