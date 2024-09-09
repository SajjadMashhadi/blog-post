import { Suspense } from "react";
import { fetchPosts } from "../lib/data";
import Loading from "./loading";
import Link from "next/link";
import { DeletePost } from "../ui/buttons";

export default async function Page() {
  const posts = await fetchPosts();

  return (
    <Suspense fallback={<Loading />}>
      <div>
        <div className="flex flex-wrap gap-[10px] p-[20px]">
          {posts.rows.map((post) => (
            <div
              className="w-[300px] h-fit rounded-[5px] bg-gray-50 p-[10px] flex flex-col "
              key={post.id}
            >
              <Link
                className="font-bold text-gray-500 capitalize"
                href={`/posts/${post.id}`}
              >
                {post.title}
              </Link>
              <p className="text-gray-500 h-[200px] my-[10px] capitalize">
                {post.content.slice(0, 300) + " ..."}
              </p>
              <div className="flex flex-col gap-[10px] md:flex-row justify-evenly">
                <DeletePost id={post.id} />
                <Link
                  href={`/posts/${post.id}/edit`}
                  className="w-[80px] text-center border-gray-600 hover:bg-gray-100 border-[1px] p-[5px]  capitalize  rounded-[5px] text-gray-600"
                >
                  edit
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Suspense>
  );
}
