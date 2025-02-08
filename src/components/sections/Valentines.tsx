
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function About() {
  
  return (
    <div className="rounded-lg bg-[#BC204B] w-[90vw] md:min-w-[48rem] md:w-[50vw] shadow-lg text-white">
      <div className="p-4 md:p-8 flex flex-col justify-center items-center space-y-2 md:space-y-3">
        
        <div className="flex flex-row space-x-2 font-black tracking-light">
          <h1 className="text-2xl md:text-3xl">
            For Edna
          </h1>
          <div className="animate-sizeCycle">
            <FaHeart className="text-3xl md:text-4xl animate-sizeCycle"/>
          </div>
        </div>

        <h1 className="text-xl md:text-2xl font-light" >
          You have <span className="font-bold underline">01</span> unread mail!
        </h1>

        <Link href="/valentines" className="flex flex-row p-2 md:p-3 rounded-xl space-x-2 font-bold tracking-light border-2 border-white animate-transparencyCycle">
          <IoIosMail className="text-3xl"/>
          <h1 className="text-lg md:text-xl">
            Open Mail
          </h1>
        </Link>
        
      </div>
    </div>
  );
}