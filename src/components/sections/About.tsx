
import { DownloadOutlined, GithubFilled, IdcardOutlined, InstagramOutlined, LinkedinFilled } from "@ant-design/icons";

export default function About() {
  
  return (
    <div className="rounded-lg bg-zinc-100 dark:bg-zinc-950 w-[90vw] md:w-[50vw] shadow-lg dark:shadow-gray-800">
      <div className="p-4 md:p-8 flex flex-col justify-center space-y-2 md:space-y-4">
        <div className="flex flex-row space-x-2 font-semibold tracking-light">
          <IdcardOutlined className="text-3xl md:text-4xl"/>
          <h1 className="text-2xl md:text-3xl">
            About Me
          </h1>
        </div>
        <h2 className="md:text-xl text-gray-600 dark:text-gray-300">
          Software Engineer from 🇸🇬 Singapore. Computer Science undergraduate at the National University of Singapore (NUS).
        </h2>
        <div className="flex flex-row space-x-8 md:space-x-16">
          <h3 className="md:text-lg font-bold">
            Name:<br />
            Country:<br />
            Contact:<br />
            Email:
          </h3>
          <h3 className="md:text-lg text-gray-600 dark:text-gray-300">
            Han Yu<br />
            Singapore<br />
            <a href="tel:+6587164969" className="hover:underline hover:text-gray-700 hover:dark:text-gray-400">
              (+65) 8716 4969<br />
            </a>
            <a href="mailto:e1115696@u.nus.edu" className="hover:underline hover:text-gray-700 hover:dark:text-gray-400">
              e1115696@u.nus.edu
            </a>
          </h3>
        </div>
        <div className="py-1"></div>
        <div className="flex flex-row space-x-2 md:space-x-4">
          <a href="https://drive.google.com/uc?export=download&id=1nWrPr083vMk0N0q0wgn8YYsfy4eSttLT" download="HANYU_RESUME.pdf" className="px-2 py-1 md:px-3 md:py-2 rounded-lg text-white font-semibold tracking-tight bg-indigo-600 hover:bg-indigo-700 text-center">
            <DownloadOutlined /> Resume
          </a>
          <a href="https://www.instagram.com/hanyu_____" target="_blank" className="px-2 py-1 md:px-3 md:py-2 rounded-lg text-white font-semibold tracking-tight bg-indigo-600 hover:bg-indigo-700 justify-center">
            <InstagramOutlined />
          </a>
          <a href="https://www.linkedin.com/in/han-yu-5aa302248" target="_blank" className="px-2 py-1 md:px-3 md:py-2 rounded-lg text-white font-semibold tracking-tight bg-indigo-600 hover:bg-indigo-700 justify-center">
            <LinkedinFilled />
          </a>
          <a href="https://github.com/xhamyo" target="_blank" className="px-2 py-1 md:px-3 md:py-2 rounded-lg text-white font-semibold tracking-tight bg-indigo-600 hover:bg-indigo-700 justify-center">
            <GithubFilled />
          </a>
        </div>
      </div>
    </div>
  );
}