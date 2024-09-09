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
