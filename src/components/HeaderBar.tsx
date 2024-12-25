"use client";

import Link from "next/link"

export default function HeaderBar () {
  return (
    <div className="fixed left-0 right-0 flex space-x-1 items-center justify-center min-h-[6rem] bg-zinc-100 dark:bg-zinc-950 text-left text-2xl font-semibold z-10">
      <Link href="./#about" className="px-1 py-1 hover:text-3xl hover:bg-gray-200 hover:dark:bg-gray-800 rounded-lg transition-all duration-200 ease-in-out">
        About
      </Link>
      <Link href="./#resume" className="px-1 py-1 hover:text-3xl hover:bg-gray-200 hover:dark:bg-gray-800 rounded-lg transition-all duration-200 ease-in-out">
        Resume
      </Link>
      <Link href="./#projects" className="px-1 py-1 hover:text-3xl hover:bg-gray-200 hover:dark:bg-gray-800 rounded-lg transition-all duration-200 ease-in-out">
        Projects
      </Link>
      <Link href="./#contact" className="px-1 py-1 hover:text-3xl hover:bg-gray-200 hover:dark:bg-gray-800 rounded-lg transition-all duration-200 ease-in-out">
        Contact
      </Link>
    </div>
  );
}