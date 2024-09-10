import Link from "next/link";
import { DeletePost } from "../ui/buttons";
import { Post } from "@/app/lib/definition";

export default function PostCard({ post }: { post: Post }) {
  return (
    <div
      className="w-full md:w-[48%] lg:w-[30%] xl:w-[32%] h-fit rounded-[10px] bg-gray-50 p-[20px] flex flex-col "
      key={post.id}
    >
      <Link
        className="font-bold text-gray-500 capitalize"
        href={`/posts/${post.id}`}
      >
        {post.title}
      </Link>
      <p className="text-gray-500 h-[110px] my-[10px] capitalize text-[12px]">
        {post.content.slice(0, 300) + " ..."}
      </p>
      <div className="flex  gap-[10px] flex-row justify-evenly">
        <DeletePost id={post.id} />
        <Link
          href={`/posts/${post.id}/edit`}
          className="w-[70px] text-center border-gray-600 hover:bg-gray-100 border-[1px] p-[5px]  capitalize  rounded-[5px] text-[13px] text-gray-600"
        >
          edit
        </Link>
      </div>
    </div>
  );
}
