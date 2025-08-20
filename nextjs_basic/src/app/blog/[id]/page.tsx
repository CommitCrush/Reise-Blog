import { getPostById } from "@/actions/blog";
import { getSessionUser } from "@/lib/auth";
import LikeButton from "@/app/_components/LikeButton";
import CommentsSection from "@/app/_components/CommentsSection.tsx";


export default async function BlogDetailPage({ params }: { params: { id: string } }) {
  const post = await getPostById(params.id);
  const user = await getSessionUser();

  if (!post) return <div>Post nicht gefunden.</div>;

  return (
    <div
      style={{
        maxWidth: 700,
        margin: "3rem auto",
        background: "#fff",
        borderRadius: 18,
        boxShadow: "0 4px 24px #b3ffab33",
        padding: "2.5rem 2rem",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h1 style={{
        color: "#2e7d32",
        fontWeight: 900,
        fontSize: "2rem",
        marginBottom: 10,
        letterSpacing: 1,
      }}>
        {post.title}
      </h1>
      {post.city && (
        <div style={{
          color: "#388e3c",
          fontWeight: 600,
          fontSize: "1.1rem",
          marginBottom: 10,
        }}>
          Stadt: {post.city}
        </div>
      )}
      <div style={{ color: "#888", marginBottom: 18 }}>
        Erstellt am: {new Date(post.createdAt).toLocaleString()}
      </div>
      <p style={{
        color: "#333",
        fontSize: "1.13rem",
        marginBottom: 18,
        whiteSpace: "pre-line",
      }}>
        {post.content}
      </p>
      {post.imageUrl && (
        <img
          src={post.imageUrl}
          alt={post.title}
          style={{
            maxWidth: "100%",
            margin: "1rem 0",
            borderRadius: 12,
            boxShadow: "0 2px 8px #b3ffab33",
            border: "1px solid #eee",
          }}
        />
      )}

      {/* Likes und Liker */}
      <div style={{ marginTop: 18 }}>
        {user ? (
          <LikeButton
            postId={post._id.toString()}
            userId={user._id.toString()}
            initialLikes={post.likes || []}
          />
        ) : (
          <span style={{ color: "#888" }}>
            <strong>Likes:</strong> {post.likes?.length || 0}
          </span>
        )}
        {/* Liker-Namen */}
        {post.likes && post.likes.length > 0 && (
          <div style={{ color: "#388e3c", marginTop: 4, fontSize: "1rem" }}>
            {post.likes
              .map((like: any) =>
                typeof like === "object" && "username" in like
                  ? like.username
                  : "Unbekannt"
              )
              .join(", ")}
          </div>
        )}
      </div>

      {/* Kommentare */}
      <div style={{ marginTop: 32 }}>
        <CommentsSection
          postId={post._id.toString()}
          userId={user ? user._id.toString() : ""}
        />
      </div>

      <p style={{ color: "#888", marginTop: 24 }}>
        von: <b>
          {typeof post.author === "object" && "username" in post.author
            ? (post.author as { username: string }).username
            : "Unbekannt"}
        </b>
      </p>
    </div>
  );
}