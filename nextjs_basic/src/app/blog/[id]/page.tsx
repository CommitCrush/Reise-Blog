import { getComments, getPostById } from "@/actions/blog";
import { getSessionUser } from "@/lib/auth";
import CommentBox from "@/app/_componennts/CommentBox";
import LikeButton from "@/app/_componennts/LikeButton";

export default async function BlogDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const post = await getPostById(params.id);
  const comments = await getComments(params.id);
  const user = await getSessionUser();

  if (!post) return <div>Post nicht gefunden.</div>;

  return (
    <div style={{ maxWidth: 700, margin: "2rem auto" }}>
      <h1>{post.title}</h1>
      {post.imageUrl && (
        <img
          src={post.imageUrl}
          alt={post.title}
          style={{ maxWidth: "100%", margin: "1rem 0" }}
        />
      )}
      <p>{post.content}</p>
      <div style={{ color: "#888", marginTop: 16 }}>
        Erstellt am: {new Date(post.createdAt).toLocaleString()}
      </div>
      <div style={{ marginTop: 16 }}>
        {user ? (
          <LikeButton
            postId={post._id.toString()}
            userId={user._id.toString()}
            initialLikes={post.likes || []}
          />
        ) : (
          <>
            <strong>Likes:</strong> {post.likes?.length || 0}
          </>
        )}
      </div>
      <div style={{ marginTop: 16 }}>
        <strong>Kommentare:</strong> {comments.length}
        <ul>
          {comments.map((c: any) => (
            <li key={c._id}>
              <b>{c.user?.username || "Unbekannt"}</b>: {c.text}
            </li>
          ))}
        </ul>
        {user && (
          <CommentBox
            postId={post._id.toString()}
            userId={user._id.toString()}
            onCommentAdded={async () => {}}
          />
        )}
      </div>
      <p style={{ color: "#888" }}>
        von: <b>
          {typeof post.author === "object" && "username" in post.author
            ? (post.author as { username: string }).username
            : "Unbekannt"}
        </b>
      </p>
    </div>
  );
}
