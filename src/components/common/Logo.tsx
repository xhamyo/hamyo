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
        className="fixed top-5 left-[5rem] hover:scale-[1.05] transition-all duration-200 ease-in-out z-20">
          <Image alt="logo" src={logoSource} width={100} height={40} />
      </button>
  )
}