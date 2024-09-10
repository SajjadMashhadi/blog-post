"use server";

import { z } from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const FormSchema = z.object({
  title: z.string().trim().min(1, { message: "Title can't be empty." }),
  content: z.string().trim().min(1, { message: "Content can't be empty." }),
});

const CreatePost = FormSchema.omit({});
const UpdatePost = FormSchema.omit({});

export type State = {
  errors?: {
    title?: string[];
    content?: string[];
  };
  message?: string | null;
};

//add post
export async function createPost(prevState: State, formData: FormData) {
  const validatedFields = CreatePost.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Post.",
    };
  }

  const { title, content } = validatedFields.data;

  try {
    await sql`
    INSERT INTO posts (title, content)
    VALUES (${title}, ${content})
  `;
  } catch (err) {
    return {
      message: "Database Error: Failed to Create Post.",
    };
  }

  revalidatePath("/posts");
  redirect("/posts");
}

//edit a post
export async function updatePost(
  id: string,
  prevState: State,
  formData: FormData
) {
  const validatedFields = UpdatePost.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Post.",
    };
  }

  const { title, content } = validatedFields.data;

  try {
    await sql`
    UPDATE posts
    SET  title = ${title}, content = ${content}
    WHERE id = ${id}
  `;
  } catch {
    return {
      message: "Database Error: Failed to Update Post.",
    };
  }

  revalidatePath("/posts");
  revalidatePath(`/posts/${id}`);
  redirect("/posts");
}

//remove a post
export async function deletePost(id: string) {
  try {
    await sql`DELETE FROM posts WHERE id = ${id}`;
    revalidatePath("/posts");
    return { message: "Deleted Post." };
  } catch (error) {
    return {
      message: "Database Error: Failed to Delete Post.",
    };
  }
}
