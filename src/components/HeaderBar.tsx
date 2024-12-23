"use client";

import Link from "next/link"

export default function HeaderBar () {
  return (
    <div className="flex items-center justify-center space-x-1 flex-grow">
      <h1 className="text-left text-2xl font-semibold">
        <Link href="/about" className="px-1 py-1 hover:text-3xl hover:bg-gray-200 hover:dark:bg-gray-800 rounded-lg transition-all duration-200 ease-in-out">
          About
        </Link>
      </h1>
      <h1 className="text-left text-2xl font-semibold">
        <Link href="/resume" className="px-1 py-1 hover:text-3xl hover:bg-gray-200 hover:dark:bg-gray-800 rounded-lg transition-all duration-200 ease-in-out">
          Resume
        </Link>
      </h1>
      <h1 className="text-left text-2xl font-semibold">
        <Link href="/projects" className="px-1 py-1 hover:text-3xl hover:bg-gray-200 hover:dark:bg-gray-800 rounded-lg transition-all duration-200 ease-in-out">
          Projects
        </Link>
      </h1>
      <h1 className="text-left text-2xl font-semibold">
        <Link href="/contact" className="px-1 py-1 hover:text-3xl hover:bg-gray-200 hover:dark:bg-gray-800 rounded-lg transition-all duration-200 ease-in-out">
          Contact
        </Link>
      </h1>
    </div>
  );
}