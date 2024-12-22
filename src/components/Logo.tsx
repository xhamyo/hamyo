"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Logo() {

  const router = useRouter();

  return (
      <button
        data-testid='home-button'
        onClick={() => {router.push("./");}}
        className="border-2 border-gray-700 hover:bg-gray-200"
      >
        <div className="flex flex-row items-center space-x-1">
          <Image alt="logo" src="/images/logo.png" width={50} height={50} />
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