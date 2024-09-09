import { Suspense } from "react";
import { fetchPosts } from "../lib/data";
import Loading from "./loading";

export default async function Page() {
  const posts = await fetchPosts();

  return (
    <Suspense fallback={<Loading />}>
      <div>
        <div>
          {posts.rows.map((post) => (
            <div key={post.id}>{post.title}</div>
          ))}
        </div>
      </div>
    </Suspense>
  );
}
