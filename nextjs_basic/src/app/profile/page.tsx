import { getPosts } from "@/actions/blog";

export default async function BlogListPage() {
  const posts = await getPosts();

  return (
    <div style={{ maxWidth: 1000, margin: "3rem auto", padding: "0 1rem" }}>
      <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "4rem" }}>
        {posts.map((post: any, index: number) => (
          <li
            key={post._id}
            style={{
              display: "flex",
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
              gap: "2rem",
              background: "#fff",
              borderRadius: 18,
              boxShadow: "0 4px 24px #b3ffab33",
              overflow: "hidden",
              border: "1px solid #f0f0f0",
            }}
          >
            {/* Bild */}
            {post.imageUrl && (
              <div style={{ flex: "1 1 50%", minHeight: 250, overflow: "hidden" }}>
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.3s",
                  }}
                />
              </div>
            )}
            {/* Inhalt */}
            <div style={{ flex: "1 1 50%", padding: "2rem", display: "flex", flexDirection: "column" }}>
              <h3 style={{ marginBottom: 12, fontSize: "1.8rem", color: "#2e7d32" }}>{post.title}</h3>
              <div style={{ color: "#888", fontSize: "0.98rem", marginBottom: 8 }}>
                von:{" "}
                <b>
                  {typeof post.author === "object" && "username" in post.author
                    ? post.author.username
                    : "Unbekannt"}
                </b>
              </div>
              {post.city && (
                <div style={{ color: "#388e3c", marginBottom: 8 }}>
                  Stadt: {post.city}
                </div>
              )}
              <div style={{ color: "#888", marginBottom: 16 }}>
                Erstellt am: {new Date(post.createdAt).toLocaleString()}
              </div>
              {/* Likes und Kommentare */}
              <div style={{ marginBottom: 16, color: "#2e7d32", fontWeight: 600 }}>
                👍 {post.likes?.length || 0} &nbsp;|&nbsp; 💬 {post.commentCount || 0}
              </div>
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
                  textAlign: "center",
                  width: "fit-content",
                }}
              >
                Zum Beitrag
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
