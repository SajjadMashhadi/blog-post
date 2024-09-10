"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center text-gray-500 mt-[50px]">
        Something went wrong!
      </h2>
      <button
        className="border-blue-500 hover:bg-blue-50 border-[1px] p-[5px] px-[20px] capitalize  rounded-[5px] text-blue-500 mt-[50px]"
        onClick={() => reset()}
      >
        Try again
      </button>
    </main>
  );
}
