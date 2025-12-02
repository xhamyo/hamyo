
import { FaDownload } from "react-icons/fa6";

export default function ResumeDownload() {
  return (
    <div className="fixed top-3 right-[3rem] px-2 py-1 rounded-lg bg-[#88B0F7] hover:bg-[#5690f4] z-20">
      <a href="https://drive.google.com/uc?export=download&id=1Bl-qKIOIklu_4vDPOfHfUBVKJA1vkK7u" download="HANYU_RESUME.pdf">
        <div className="flex flex-row space-x-2 justify-center text-blue-950 font-semibold tracking-tight">
          <FaDownload className="my-1 text-lg"/>
          <div className="flex-col">
            <h1 className="text-sm -my-1">
              Resume
            </h1>
            <h1 className="text-xs font-light">
              Last Updated Aug 2025
            </h1>
          </div>
        </div>
      </a>
    </div>
  )
}