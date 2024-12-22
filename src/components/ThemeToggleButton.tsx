"use client";

import { useTheme } from 'next-themes';
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggleButton() {
  
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="w-[3rem] h-[3rem] hover:scale-[1.15] rounded-full bottom-5 right-5 flex items-center justify-center bg-black bg-opacity-10 transition-all"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? (
        <FaMoon size={24} />
      ) : (
        <FaSun size={24} />
      )}
    </button>
  );
}