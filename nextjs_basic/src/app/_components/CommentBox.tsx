"use client";
import { useState } from "react";


export default function CommentBox({ postId, userId, onCommentAdded }: { postId: string; userId: string; onCommentAdded?: () => void }) {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  try {
    const res = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ postId, userId, text }),
    });
    if (!res.ok) {
      const data = await res.json();
      alert(data.error || "Kommentar konnte nicht gespeichert werden.");
    } else {
      setText("");
      if (onCommentAdded) onCommentAdded();
    }
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