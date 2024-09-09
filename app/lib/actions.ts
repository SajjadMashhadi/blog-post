"use server";

import { z } from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const FormSchema = z.object({
  title: z.string(),
  content: z.string(),
});

const CreatePost = FormSchema.omit({});
const UpdatePost = FormSchema.omit({});

//add post
export async function createPost(formData: FormData) {
  const { title, content } = CreatePost.parse({
    title: formData.get("title"),
    content: formData.get("content"),
  });
  console.log(title);
  await sql`
      INSERT INTO posts (title, content)
      VALUES (${title}, ${content})
    `;

  revalidatePath("/posts");
  redirect("/posts");
}

//edit a post
export async function updatePost(id: string, formData: FormData) {
  const { title, content } = UpdatePost.parse({
    title: formData.get("title"),
    content: formData.get("content"),
  });

  await sql`
    UPDATE posts
    SET  title = ${title}, content = ${content}
    WHERE id = ${id}
  `;

  revalidatePath("/posts");
  redirect("/posts");
}

//remove a post
export async function deletePost(id: string) {
  await sql`DELETE FROM posts WHERE id = ${id}`;
  revalidatePath("/posts");
}
