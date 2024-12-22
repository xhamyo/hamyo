"use client";

import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  return (
    <main>
      <div className="w-full px-8 py-12 md:py-20 flex flex-col items-center">
        <h1 className="text-center text-4xl md:text-6xl max-w-xl font-semibold">
          Home page
        </h1>
        <p className="text-center max-w-xl my-6">
          Portfolio Page.
        </p>
        <button
          data-testid='test-button'
          onClick={() => {router.push("/test");}}
        >
          Test
        </button>
      </div>
    </main>
  );
}
