"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

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
    <div className="flex flex-row justify-center gap-[20px]">
      <div>
        <Link href={createPageURL(currentPage - 1)}>Previous</Link>
      </div>
      <div>
        Page {currentPage} of {totalPages}
      </div>
      <div>
        <Link href={createPageURL(currentPage + 1)}>Nex</Link>
      </div>
    </div>
  );
}
