"use client";
import { useState, useEffect } from "react";
import { getComments } from "@/actions/blog";
import CommentBox from "./CommentBox";

interface CommentsSectionProps {
  postId: string;
  userId: string;
}

export default function CommentsSection({ postId, userId }: CommentsSectionProps) {
  const [comments, setComments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const loadComments = async () => {
    setLoading(true);
    const data = await getComments(postId);
    setComments(data);
    setLoading(false);
  };

  useEffect(() => {
    loadComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId]);

  return (
    <div style={{ marginTop: 16 }}>
      <strong>Kommentare:</strong> {comments.length}
      {loading ? (
        <div>Kommentare werden geladen...</div>
      ) : (
        <ul>
          {comments.map((c) => (
            <li key={c._id}>
              <b>{c.user?.username || "Unbekannt"}</b>: {c.text}
            </li>
          ))}
        </ul>
      )}
      <CommentBox postId={postId} userId={userId} onCommentAdded={loadComments} />
    </div>
  );
}