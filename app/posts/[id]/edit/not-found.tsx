import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2 mt-[50px]">
      <h2 className="  text-gray-400">404 Not Found</h2>
      <Link
        href="/posts"
        className="border-blue-500 hover:bg-blue-50 border-[1px] p-[5px] px-[20px] capitalize  rounded-[5px] text-blue-500 mt-[50px]"
      >
        Go Back
      </Link>
    </main>
  );
}
