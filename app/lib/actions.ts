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
