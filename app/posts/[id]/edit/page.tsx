import { fetchPostById } from "@/app/lib/data";
import Form from "@/app/ui/form";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Loading from "./loading";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const post = await fetchPostById(id);

  if (!post) {
    notFound();
  }
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <Form post={post} />
      </Suspense>
    </main>
  );
}
