import { getPosts } from "@/actions/blog";

export default async function BlogListPage() {
  const posts = await getPosts();

  return (
    <div style={{ maxWidth: 900, margin: "3rem auto", padding: "0 1rem" }}>
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
            <h3 style={{ marginBottom: 8 }}>{post.title}</h3>
            <div style={{ color: "#888", fontSize: "0.98rem", marginBottom: 8 }}>
              von: <b>
                {typeof post.author === "object" && "username" in post.author
                  ? post.author.username
                  : "Unbekannt"}
              </b>
            </div>
            {/* Likes und Kommentare */}
            <div style={{ marginBottom: 10, color: "#2e7d32", fontWeight: 600 }}>
              👍 {post.likes?.length || 0} &nbsp;|&nbsp; 💬 {post.commentCount || 0}
            </div>
            {/* Optional: Bild anzeigen */}
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
            {/* Optional: Stadt */}
            {post.city && (
              <div style={{ color: "#388e3c", marginBottom: 8 }}>
                Stadt: {post.city}
              </div>
            )}
            {/* Optional: Erstellungsdatum */}
            <div style={{ color: "#888", marginBottom: 8 }}>
              Erstellt am: {new Date(post.createdAt).toLocaleString()}
            </div>
            {/* Optional: Link zum Beitrag */}
            <a
              href={`/blog/${post._id}`}
              style={{
                marginTop: "auto",
                padding: "10px 24px",
                background: "linear-gradient(90deg, #ffe066 60%, #b3ffab 100%)",
                color: "#2e7d32",
                border: "none",
                borderRadius: 8,
                fontWeight: "bold",
                fontSize: "1.05rem",
                cursor: "pointer",
                boxShadow: "0 2px 8px #b3ffab33",
                textDecoration: "none",
                display: "inline-block",
                textAlign: "center",
              }}
            >
              Zum Beitrag
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}