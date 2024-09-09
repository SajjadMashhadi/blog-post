"use client";

import { createPost } from "@/app/lib/actions";

export default function Form() {
  return (
    <form action={createPost}>
      <div>
        <label htmlFor="title">Title: </label>
        <input id="title" name="title" type="text" />
      </div>
      <div>
        <label htmlFor="content">Content: </label>
        <input id="content" name="content" type="text" />
      </div>
      <div>
        <button type="submit">submit</button>
      </div>
    </form>
  );
}
