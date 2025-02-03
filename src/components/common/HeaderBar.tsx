"use client";

import Link from "next/link"

export default function HeaderBar () {
  return (
    <div className="hidden md:flex fixed left-0 right-0 flex space-x-1 items-center justify-center min-h-[6rem] text-left text-2xl font-semibold z-10">
      <Link href="./#about" className="p-1 hover:px-2 hover:text-3xl hover:bg-zinc-200 hover:dark:bg-zinc-800 rounded-lg transition-all duration-200 ease-in-out">
        About
      </Link>
      <Link href="./#resume" className="p-1 hover:px-2 hover:text-3xl hover:bg-zinc-200 hover:dark:bg-zinc-800 rounded-lg transition-all duration-200 ease-in-out">
        Resume
      </Link>
      <Link href="./#projects" className="p-1 hover:px-2 hover:text-3xl hover:bg-zinc-200 hover:dark:bg-zinc-800 rounded-lg transition-all duration-200 ease-in-out">
        Projects
      </Link>
      <Link href="./#contact" className="p-1 hover:px-2 hover:text-3xl hover:bg-zinc-200 hover:dark:bg-zinc-800 rounded-lg transition-all duration-200 ease-in-out">
        Contact
      </Link>
    </div>
  );
}