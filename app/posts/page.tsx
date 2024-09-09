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
                className="font-bold text-gray-500"
                href={`/posts/${post.id}`}
              >
                {post.title}
              </Link>
              <p className="text-gray-500 h-[200px] my-[10px]">
                {post.content.slice(0, 300) + " ..."}
              </p>
              <div>
                <DeletePost id={post.id} />
                <Link
                  href={`/posts/${post.id}/edit`}
                  className="rounded-md border p-2 hover:bg-gray-100"
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
