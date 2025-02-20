"use client";

import { useTheme } from 'next-themes';
import { SunOutlined, MoonOutlined } from "@ant-design/icons";

export default function ThemeToggleButton() {
  
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed top-4 right-4 z-20">
      <button
        className="w-[3rem] h-[3rem] hover:scale-[1.15] flex items-center justify-center transition-all duration-200 ease-in-out"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        {theme === 'light' ? (
          <MoonOutlined className="text-2xl"/>
        ) : (
          <SunOutlined className="text-2xl"/>
        )}
      </button>
    </div>
  );
}