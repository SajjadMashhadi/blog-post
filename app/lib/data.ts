import { sql } from "@vercel/postgres";
import { Post } from "./definition";

export async function fetchPosts() {
  try {
    const data = await sql<Post>`
        SELECT * FROM posts`;
    console.log(data);
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch posts.");
  }
}
