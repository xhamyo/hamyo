"use client";

import React, { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-4 right-20 z-20 z-30">
      <button
        className="md:hidden w-[3rem] h-[3rem] hover:scale-[1.15] flex items-center justify-center transition-all duration-200 ease-in-out"
        onClick={() => setIsOpen(!isOpen)}
      >
        <IoMenuSharp className="text-2xl"/>
      </button>

      {isOpen && (
        <div className="md:hidden absolute top-12 right-0 rounded-md bg-zinc-100 dark:bg-zinc-950 shadow-lg">
          <div className="flex flex-col px-3 py-3 space-y-3 text-xl font-semibold">
            <a
              href="#about"
              className="hover:text-2xl transition-all duration-200 ease-in-out"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#resume"
              className="hover:text-2xl transition-all duration-200 ease-in-out"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </a>
            <a
              href="#projects"
              className="hover:text-2xl transition-all duration-200 ease-in-out"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-2xl transition-all duration-200 ease-in-out"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;