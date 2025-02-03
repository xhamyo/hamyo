
import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";

export default function Contact() {
  
  return (
    <div className="rounded-lg bg-zinc-100 dark:bg-zinc-950 w-[90vw] md:min-w-[48rem] md:w-[50vw] shadow-lg">
      <div className="p-4 md:p-8 flex flex-col justify-center space-y-2 md:space-y-4">
        <div className="flex flex-row space-x-2 font-semibold tracking-light">
          <FaPhoneAlt className="text-3xl"/>
          <h1 className="text-2xl">
            Contact Me
          </h1>
        </div>
        <div className="flex flex-col space-y-2 items-center justify-center">
          <h1 className="md:text-xl text-gray-600 dark:text-gray-300">
              Please contact me for any enquiries!
          </h1>
          <div className="flex flex-row justify-center items-center px-3 py-3 md:px-4 md:py-4 space-x-2 rounded-xl shadow-xl w-[85vw] h-[48.6vw] md:w-[30rem] md:h-[17rem] hover:scale-[1.01] shadow-xl transition-all duration-200 ease-in-out dark:bg-[#151515]">
            <Image alt="logo" src="/images/hanyu.png" width={90} height={90} className="w-1/3 border-8 border-zinc-900 rounded-full shadow-2xl hover:scale-[1.05] transition-all duration-200 ease-in-out"/>
            <div className="flex flex-col">
              <h1 className="text-indigo-600 dark:text-indigo-500 font-bold text-2xl">Han Yu</h1>
              <h2 className="font-bold text-md md:text-xl">Software Engineer</h2>
              <div className="flex flex-row space-x-2 text-sm md:space-x-6">
                <div className="flex flex-col font-bold text-xs md:text-lg">
                  <h3>Phone</h3>
                  <h3>Email</h3>
                  <h3>LinkedIn</h3>
                  <h3>Instagram</h3>
                  <h3>Telegram</h3>
                </div>
                <div className="flex flex-col font-light text-gray-700 dark:text-gray-200 text-xs md:text-lg">
                  <a href="tel:+6587164969" className="hover:underline hover:text-gray-700 hover:dark:text-gray-400">
                    (+65) 8716 4969<br />
                  </a>
                  <a href="mailto:e1115696@u.nus.edu" className="hover:underline hover:text-gray-700 hover:dark:text-gray-400">
                    e1115696@u.nus.edu
                  </a>
                  <a href="https://www.linkedin.com/in/han-yu-5aa302248" target="_blank" className="hover:underline hover:text-gray-700 hover:dark:text-gray-400">
                    @han-yu-5aa302248
                  </a>
                  <a href="https://www.instagram.com/hanyu_____" target="_blank" className="hover:underline hover:text-gray-700 hover:dark:text-gray-400">
                    @hanyu_____
                  </a>
                  <a href="https://t.me/hanyuuuuu" target="_blank" className="hover:underline hover:text-gray-700 hover:dark:text-gray-400">
                    @hanyuuuuu
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="h-3 md:h-6"></div>
        </div>
      </div>
    </div>
  );
}