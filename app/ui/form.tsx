"use client";

import { createPost, updatePost } from "@/app/lib/actions";
import { Post } from "../lib/definition";

export default function Form({ post }: { post?: Post }) {
  let updatePostWithId;
  if (post) {
    updatePostWithId = updatePost.bind(null, post.id);
  }

  return (
    <form
      action={post ? updatePostWithId : createPost}
      className="flex flex-col justify-around items-center gap-[10px] my-[50px]"
    >
      {post && <input type="hidden" name="id" value={post.id} />}
      <div className="w-full flex flex-row justify-center gap-[20px]">
        <label className="w-[80px]" htmlFor="title">
          Title:{" "}
        </label>
        <input
          className=" w-[400px] border-[1px] border-blue-300 rounded-[5px] p-[5px]"
          id="title"
          name="title"
          type="text"
          defaultValue={post ? post.title : ""}
        />
      </div>
      <div className=" w-full flex flex-row justify-center gap-[20px]">
        <label className="w-[80px]" htmlFor="content">
          Content:{" "}
        </label>
        <textarea
          className="w-[400px] h-[300px] border-[1px] border-blue-300 rounded-[5px] p-[5px]"
          id="content"
          name="content"
          defaultValue={post ? post.content : ""}
        />
      </div>
      <div>
        <button
          className="border-blue-500 hover:bg-blue-50 border-[1px] p-[5px] px-[20px] capitalize  rounded-[5px] text-blue-500 mt-[50px]"
          type="submit"
        >
          submit
        </button>
      </div>
    </form>
  );
}
