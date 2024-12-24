
import { IdcardOutlined, InstagramOutlined, LinkedinFilled, GithubFilled } from "@ant-design/icons";

export default function About() {
  
  return (
    <div className="border-4 rounded-xl border-gray-200 bg-gray-100 dark:border-gray-900 dark:bg-gray-800 w-[90vw] md:w-[48rem]">
      <div className="px-2 py-2 md:px-4 md:py-4 flex flex-col justify-center space-y-2 md:space-y-4">
        <div className="flex flex-row space-x-2 text-red-700 font-semibold tracking-light">
          <IdcardOutlined className="text-3xl md:text-6xl"/>
          <h1 className="text-2xl md:text-5xl">
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
            Email:<br />
          </h3>
          <h3 className="md:text-lg text-gray-600 dark:text-gray-300">
            Han Yu<br />
            Singapore<br />
            (+65) 8716 4969<br />
            e1115696@u.nus.edu<br />
          </h3>
        </div>
        <div className="py-1"></div>
        <div className="flex flex-row space-x-2 md:space-x-4">
          <a href="https://drive.google.com/uc?export=download&id=1nWrPr083vMk0N0q0wgn8YYsfy4eSttLT" download="HANYU_RESUME.pdf" className="px-2 py-1 md:px-3 md:py-2 rounded-lg text-white font-semibold tracking-tight bg-indigo-600 hover:bg-indigo-700 text-center">
            Download Resume
          </a>
          <a href="https://www.instagram.com/hanyu_____/" target="_blank" className="px-2 py-1 md:px-3 md:py-2 rounded-lg text-white font-semibold tracking-tight bg-indigo-600 hover:bg-indigo-700 justify-center">
            <InstagramOutlined />
          </a>
          <a href="https://www.linkedin.com/in/han-yu-5aa302248/" target="_blank" className="px-2 py-1 md:px-3 md:py-2 rounded-lg text-white font-semibold tracking-tight bg-indigo-600 hover:bg-indigo-700 justify-center">
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