
"use client";

import React, { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-[1rem] right-[1rem] z-20">
      <button
        className="md:hidden hover:scale-[1.15] flex items-center justify-center transition-all duration-200 ease-in-out"
        onClick={() => setIsOpen(!isOpen)}
      >
        <IoMenuSharp className="text-2xl"/>
      </button>

      {isOpen && (
        <div className="md:hidden absolute top-12 right-0 rounded-md bg-zinc-950 shadow-lg">
          <div className="flex flex-col px-3 py-3 space-y-3 text-xl font-semibold">
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
            >
              Experiences
            </a>
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a
              href="#home"
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