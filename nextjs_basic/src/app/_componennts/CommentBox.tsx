"use client";
import { useState } from "react";
import { addComment } from "@/actions/blog";

export default function CommentBox({ postId, userId, onCommentAdded }: { postId: string; userId: string; onCommentAdded?: () => void }) {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addComment({ postId, userId, text });
      setText("");
      if (onCommentAdded) onCommentAdded();
    } catch {
      alert("Kommentar konnte nicht gespeichert werden.");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 16 }}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Kommentar schreiben..."
        required
        style={{ width: "100%", marginBottom: 8 }}
      />
      <button type="submit" disabled={loading || !text}>
        {loading ? "Speichern..." : "Kommentieren"}
      </button>
    </form>
  );
}