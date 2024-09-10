import { Suspense } from "react";
import { fetchPosts, fetchPostsPages } from "../lib/data";
import Loading from "./loading";
import Pagination from "../ui/pagination";
import PostCard from "../ui/postCard";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;

  const posts = await fetchPosts(currentPage);
  const totalPages = await fetchPostsPages();

  return (
    <Suspense fallback={<Loading />}>
      <div>
        <div className="flex flex-wrap gap-[20px] py-[20px] px-[20px] lg:px-[50px]  2xl:px-[200px]">
          {posts.rows.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        <Pagination totalPages={totalPages} />
      </div>
    </Suspense>
  );
}
