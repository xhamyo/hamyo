"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useTheme } from 'next-themes';

export default function Logo() {

  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const logoSource = theme === "light"
    ? "/images/logoLight.png"
    : "/images/logoDark.png";

  return (
      <button
        data-testid='home-button'
        onClick={() => {router.push("./");}}
        className="fixed top-4 left-4 hover:scale-[1.05] transition-all duration-200 ease-in-out">
        <div className="flex flex-row items-center space-x-1">
          <Image alt="logo" src={logoSource} width={50} height={50} />
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl font-semibold">
              HanYu
            </h1>
            <h1 className="text-xs md:text-base font-semibold">
              Portfolio Page
            </h1>
          </div>
        </div>
      </button>
  )
}