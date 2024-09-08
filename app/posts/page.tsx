import { fetchPosts } from "../lib/data";

export default async function Page() {
  const posts = await fetchPosts();
  if (posts) {
    console.log(posts);
  }
  console.log(posts);
  if (posts) {
    return (
      <div>
        <div>
          {posts.rows.map((post) => (
            <div key={post.id}>{post.title}</div>
          ))}
        </div>
      </div>
    );
  }
  return <div></div>;
}
