import { getPostById } from "@/actions/blog";

interface BlogDetailPageProps {
  params: { id: string };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const post = await getPostById(params.id);

  if (!post) {
    return <div>Post nicht gefunden.</div>;
  }

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
          </div>
  );
}