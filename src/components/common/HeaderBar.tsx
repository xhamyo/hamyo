
"use client";

import Link from "next/link"

export default function HeaderBar () {
  return (
    <div className="hidden md:flex fixed top-6 left-0 right-0 flex space-x-5 h-5 items-center justify-center text-left text-sm font-semibold z-20 text-gray-300">
      <Link href="./#home" className="hover:pb-1 hover:text-white">
        Home
      </Link>
      <Link href="./#experience" className="hover:pb-1 hover:text-white">
        Experience
      </Link>
      <Link href="./#education" className="hover:pb-1 hover:text-white">
        Education
      </Link>
      <Link href="./#projects" className="hover:pb-1 hover:text-white">
        Projects
      </Link>
      <Link href="./#certifications" className="hover:pb-1 hover:text-white">
        Certification
      </Link>
    </div>
  );
}