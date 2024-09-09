"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const links = [
  { name: "home", href: "/" },

  { name: "posts", href: "/posts" },
  {
    name: "add post",
    href: "/addPost",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="flex flex-row justify-center gap-[50px] mt-[50px] mb-[10px] pb-[20px]  border-b-[1px] border-b-blue-50">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={clsx("font-bold capitalize text-[20px]", {
            "text-blue-500 ": pathname === link.href,
            "text-gray-400 ": pathname !== link.href,
          })}
        >
          <p className="hidden md:block">{link.name}</p>
        </Link>
      ))}
    </div>
  );
}
