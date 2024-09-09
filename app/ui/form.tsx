"use client";

import { createPost, updatePost, State } from "@/app/lib/actions";
import { Post } from "@/app/lib/definition";
import { useFormStatus, useFormState } from "react-dom";

export default function Form({ post }: { post?: Post }) {
  const updatePostWithId = updatePost.bind(null, post ? post.id : "");

  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useFormState(createPost, initialState);

  const initialEditState: State = { message: null, errors: {} };

  const [editState, editFormAction] = useFormState(
    updatePostWithId,
    initialEditState
  );

  const { pending } = useFormStatus();

  return (
    <form
      action={post ? editFormAction : formAction}
      className="flex flex-col justify-around items-center gap-[10px] my-[50px]"
    >
      {post && <input type="hidden" name="id" value={post.id} />}

      <div
        id="title-error"
        aria-live="polite"
        aria-atomic="true"
        className="h-[20px]"
      >
        {state.errors?.title &&
          state.errors.title.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
        {editState.errors?.title &&
          editState.errors.title.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>

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
          aria-describedby="customer-error"
        />
      </div>
      <div
        id="content-error"
        aria-live="polite"
        aria-atomic="true"
        className="h-[20px]"
      >
        {state.errors?.content &&
          state.errors.content.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
        {editState.errors?.content &&
          editState.errors.content.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
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
          aria-describedby="customer-error"
        />
      </div>
      <div>
        <button
          className="border-blue-500 hover:bg-blue-50 border-[1px] p-[5px] px-[20px] capitalize  rounded-[5px] text-blue-500 mt-[50px]"
          type="submit"
          disabled={pending}
        >
          submit
        </button>
      </div>
    </form>
  );
}
