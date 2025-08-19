import { getPosts } from "@/actions/blog";
import Link from "next/link";

export default async function BlogListPage() {
  const posts = await getPosts();

  return (
    <div style={{ maxWidth: 800, margin: "2rem auto" }}>
      <h1>Alle Blog-Posts</h1>
      {posts.length === 0 && <p>Keine Blog-Posts gefunden.</p>}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.map((post: any) => (
          <li key={post._id} style={{ marginBottom: 32, borderBottom: "1px solid #eee", paddingBottom: 16 }}>
            <Link href={`/blog/${post._id}`}>
              <h2 style={{ cursor: "pointer", color: "#0070f3" }}>{post.title}</h2>
            </Link>
            {post.imageUrl && (
              <img src={post.imageUrl} alt={post.title} style={{ maxWidth: "100%", margin: "1rem 0" }} />
            )}
            <p>{post.content.slice(0, 120)}...</p>
            <div style={{ color: "#888" }}>
              Erstellt am: {new Date(post.createdAt).toLocaleString()}
            </div>
            <div style={{ color: "#888" }}>
              Likes: {post.likes?.length || 0}
            </div>
            <Link href={`/blog/${post._id}`}>
              <button style={{ marginTop: 8 }}>Zum Beitrag</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}