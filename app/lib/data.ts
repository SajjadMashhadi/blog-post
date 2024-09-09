import { sql } from "@vercel/postgres";
import { Post } from "./definition";

const ITEMS_PER_PAGE = 6;

//get all posts
export async function fetchPosts(currentPage: number) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const data = await sql<Post>`
        SELECT * FROM posts LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}`;
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch posts.");
  }
}

//get a post by id
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

//get number of pages
export async function fetchPostsPages() {
  try {
    const count = await sql`SELECT COUNT(*) FROM posts`;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of posts.");
  }
}
