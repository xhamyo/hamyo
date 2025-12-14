
"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Logo() {

  const router = useRouter();

  return (
      <button
        data-testid='home-button'
        onClick={() => {router.push("./");}}
        className="fixed top-3 left-[3rem] hover:scale-[1.05] transition-all duration-200 ease-in-out z-30">
          <Image alt="logo" src="/images/logo.png" width={100} height={40} />
      </button>
  )
}