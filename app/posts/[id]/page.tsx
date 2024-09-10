import { fetchPostById } from "@/app/lib/data";
import { Suspense } from "react";
import Loading from "./loading";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const post = await fetchPostById(id);
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <div className="flex flex-col gap-[50px] mt-[20px] items-center capitalize">
          <h2 className="text-[24px] font-bold capitalize">{post.title}</h2>
          <p className="text-gray-500 w-[800px] text-justify capitalize">
            {post.content}
          </p>
        </div>
      </Suspense>
    </main>
  );
}
