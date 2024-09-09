import { sql } from "@vercel/postgres";
import { Post } from "./definition";

export async function fetchPosts() {
  try {
    const data = await sql<Post>`
        SELECT * FROM posts`;
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch posts.");
  }
}

export async function fetchPostById(id: string) {
  try {
    const data = await sql<Post>`
      SELECT *  FROM posts
      WHERE posts.id = ${id};
    `;

    return data.rows[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch post.");
  }
}
