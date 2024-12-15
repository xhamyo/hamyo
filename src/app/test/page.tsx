"use client";

import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  return (
    <div className="w-full px-8 py-12 md:py-20 flex flex-col items-center">
      Test
      <button
          data-testid='home-button'
          onClick={() => {router.push("./");}}
      >
        Home
      </button>
    </div>
  );
}
