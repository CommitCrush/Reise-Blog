"use client";
import { useState } from "react";

export default function LikeButton({
  postId,
  userId,
  initialLikes,
}: {
  postId: string;
  userId: string;
  initialLikes: any[];
}) {
  const [likes, setLikes] = useState(initialLikes);
  const liked = likes.some(
    (like) =>
      (typeof like === "object" && "username" in like && like._id === userId) ||
      like === userId
  );

  const handleLike = async () => {
    const res = await fetch("/api/posts/like",  {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ postId, userId }),
    });
    const data = await res.json();
    if (data.likes) setLikes(data.likes);
  };

  return (
    <button
      onClick={handleLike}
      style={{
        marginRight: 8,
        background: "none",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        color: liked ? "#e0245e" : "#888",
        fontWeight: "bold",
        fontSize: "1rem",
        gap: "0.5em",
      }}
      aria-label={liked ? "Unlike" : "Like"}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={liked ? "#e0245e" : "none"}
        stroke={liked ? "#e0245e" : "#888"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transition: "fill 0.2s, stroke 0.2s" }}
      >
        <path d="M12 21C12 21 4 13.36 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.36 16 21 16 21H12Z" />
      </svg>
      {likes.length}
    </button>
  );
}