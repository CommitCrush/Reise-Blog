import { getPosts } from "@/actions/blog";
import Link from "next/link";

export default async function BlogListPage() {
  const posts = await getPosts();

  return (
    <div style={{ maxWidth: 900, margin: "3rem auto", padding: "0 1rem" }}>
      <h1
        style={{
          fontSize: "2.3rem",
          fontWeight: 900,
          color: "#2e7d32",
          marginBottom: 32,
          letterSpacing: 1,
          textAlign: "center",
          textShadow: "0 2px 12px #b3ffab33",
        }}
      >
        Alle Blog-Posts
      </h1>
      {posts.length === 0 && (
        <p style={{ textAlign: "center", color: "#888", fontSize: "1.2rem" }}>
          Keine Blog-Posts gefunden.
        </p>
      )}
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "2rem",
        }}
      >
        {posts.map((post: any) => (
          <li
            key={post._id}
            style={{
              background: "#fff",
              borderRadius: 18,
              boxShadow: "0 4px 24px #b3ffab33",
              padding: "2rem 1.5rem 1.5rem 1.5rem",
              display: "flex",
              flexDirection: "column",
              minHeight: 350,
              border: "1px solid #f0f0f0",
            }}
          >
            <Link href={`/blog/${post._id}`}>
              <h2
                style={{
                  cursor: "pointer",
                  color: "#2e7d32",
                  fontWeight: 800,
                  fontSize: "1.4rem",
                  marginBottom: 12,
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
              >
                <div style={{ color: "#888", fontSize: "0.98rem" }}>
                  <b>
                    {typeof post.author === "object" &&
                    "username" in post.author
                      ? post.author.username
                      : "Unbekannt"}
                  </b>
                </div>
              </h2>
            </Link>
            {post.imageUrl && (
              <img
                src={post.imageUrl}
                alt={post.title}
                style={{
                  maxWidth: "100%",
                  maxHeight: 180,
                  objectFit: "cover",
                  borderRadius: 12,
                  marginBottom: 14,
                  boxShadow: "0 2px 8px #b3ffab33",
                  border: "1px solid #eee",
                }}
              />
            )}
            <p
              style={{
                color: "#333",
                fontSize: "1.05rem",
                marginBottom: 16,
                flexGrow: 1,
              }}
            >
              {post.content.slice(0, 120)}...
            </p>
            {post.city && (
              <div
                style={{
                  color: "#388e3c",
                  fontWeight: 600,
                  fontSize: "1rem",
                  marginBottom: 4,
                }}
              >
                Stadt: {post.city}
              </div>
            )}
            <div
              style={{ color: "#888", fontSize: "0.98rem", marginBottom: 4 }}
            >
              Erstellt am: {new Date(post.createdAt).toLocaleString()}
            </div>

            <div
              style={{ color: "#888", fontSize: "0.98rem", marginBottom: 10 }}
            >
              Likes: {post.likes?.length || 0}
            </div>
            <Link href={`/blog/${post._id}`}>
              <button
                style={{
                  marginTop: "auto",
                  padding: "10px 24px",
                  background:
                    "linear-gradient(90deg, #ffe066 60%, #b3ffab 100%)",
                  color: "#2e7d32",
                  border: "none",
                  borderRadius: 8,
                  fontWeight: "bold",
                  fontSize: "1.05rem",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px #b3ffab33",
                  transition: "background 0.2s, color 0.2s",
                }}
              >
                Zum Beitrag
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
