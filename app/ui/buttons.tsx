import { deletePost } from "@/app/lib/actions";

export function DeletePost({ id }: { id: string }) {
  const deletePostWithId = deletePost.bind(null, id);

  return (
    <form action={deletePostWithId}>
      <button
        type="submit"
        className="w-[70px] text-center border-red-800 hover:bg-red-50 border-[1px] p-[5px]  capitalize  rounded-[5px] text-[13px] text-red-800 "
      >
        Delete
      </button>
    </form>
  );
}
