
"use client";

import React, { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-[1rem] right-[1rem] z-30">
      <button
        className="md:hidden hover:scale-[1.15] flex items-center justify-center transition-all duration-200 ease-in-out"
        onClick={() => setIsOpen(!isOpen)}
      >
        <IoMenuSharp className="text-2xl"/>
      </button>

      {isOpen && (
        <div className="md:hidden absolute top-9 right-0 rounded-md bg-zinc-950 shadow-lg">
          <div className="flex flex-col px-1 py-1 space-y-3 text-base font-semibold">
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#experience"
              onClick={() => setIsOpen(false)}
            >
              Experience
            </a>
            <a
              href="#education"
              onClick={() => setIsOpen(false)}
            >
              Education
            </a>
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a
              href="#technologies"
              onClick={() => setIsOpen(false)}
            >
              Technologies
            </a>
            <a
              href="#certifications"
              onClick={() => setIsOpen(false)}
            >
              Certifications
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;