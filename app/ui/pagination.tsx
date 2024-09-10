"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex flex-row justify-center gap-[20px] mb-[40px] mt-[20px] text-[13px] text-gray-800">
      <div>
        <Link
          className={clsx("", {
            "pointer-events-none text-gray-400": currentPage === 1,
            "pointer-events-auto hover:underline ": currentPage > 1,
          })}
          href={createPageURL(currentPage - 1)}
        >
          Previous
        </Link>
      </div>
      <div className="">
        Page {currentPage} of {totalPages}
      </div>
      <div>
        <Link
          className={clsx("", {
            "pointer-events-none text-gray-400": currentPage === totalPages,
            "pointer-events-auto hover:underline ": currentPage < totalPages,
          })}
          href={createPageURL(currentPage + 1)}
        >
          Nex
        </Link>
      </div>
    </div>
  );
}
