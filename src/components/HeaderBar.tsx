"use client";

import Link from "next/link"

export default function HeaderBar () {
  return (
    <div className="flex items-center justify-center space-x-4 flex-grow border-2 border-gray-700 hover:bg-gray-200">
      <h1 className="text-left text-2xl font-semibold">
        <Link href="./" className="hover:text-3xl transition-all duration-200 ease-in-out">
          About
        </Link>
      </h1>
      <h1 className="text-left text-2xl font-semibold">
        <Link href="/resume" className="hover:text-3xl transition-all duration-200 ease-in-out">
          Resume
        </Link>
      </h1>
      <h1 className="text-left text-2xl font-semibold">
        <Link href="/projects" className="hover:text-3xl transition-all duration-200 ease-in-out">
          Projects
        </Link>
      </h1>
      <h1 className="text-left text-2xl font-semibold">
        <Link href="/contac" className="hover:text-3xl transition-all duration-200 ease-in-out">
          Contact
        </Link>
      </h1>
    </div>
  );
}