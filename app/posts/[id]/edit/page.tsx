import { fetchPostById } from "@/app/lib/data";
import Form from "@/app/ui/form";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const post = await fetchPostById(id);
  return (
    <main>
      <Form post={post} />
    </main>
  );
}
