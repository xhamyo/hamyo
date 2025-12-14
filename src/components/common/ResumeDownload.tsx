
import { FaFileAlt } from "react-icons/fa";

export default function ResumeDownload() {
  return (
    <div className="fixed top-3 right-[3rem] px-2 py-1 rounded-lg bg-[#88B0F7] hover:bg-[#5690f4] z-30">
      <a href="https://drive.google.com/uc?export=download&id=1Bl-qKIOIklu_4vDPOfHfUBVKJA1vkK7u" download="HANYU_RESUME.pdf">
        <div className="flex flex-row space-x-2 justify-center text-zinc-950 font-semibold tracking-tight">
          <FaFileAlt className="my-1 text-2xl"/>
          <div className="flex-col">
            <h1 className="text-sm">
              Resume
            </h1>
            <h1 className="-my-1.5 text-xs font-light">
              Last Updated Aug 2025
            </h1>
          </div>
        </div>
      </a>
    </div>
  )
}