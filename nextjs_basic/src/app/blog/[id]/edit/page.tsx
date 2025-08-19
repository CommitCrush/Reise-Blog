"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { getPostById, updatePost } from "@/actions/blog";

export default function EditBlogPage() {
  const router = useRouter();
  const params = useParams();
  const postId = params?.id as string;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Post-Daten laden
  useEffect(() => {
    async function fetchPost() {
      if (!postId) return;
      const post = await getPostById(postId);
      if (post) {
        setTitle(post.title);
        setContent(post.content);
        setPreview(post.imageUrl || null);
      }
    }
    fetchPost();
  }, [postId]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setImageFile(file || null);
    if (file) setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    let imageUrl = preview || "";

    // Bild zuerst hochladen (wenn geändert)
    if (imageFile) {
      const formData = new FormData();
      formData.append("file", imageFile);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.imageUrl) imageUrl = data.imageUrl;
    }

    try {
      await updatePost(postId, { title, content, imageUrl });
      alert("Post aktualisiert!");
      router.push(`/blog/${postId}`);
    } catch (error) {
      alert("Fehler beim Aktualisieren des Posts.");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 500, margin: "2rem auto" }}>
      <h2>Blog-Post bearbeiten</h2>
      <input
        type="text"
        placeholder="Titel"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{ width: "100%", marginBottom: 8 }}
      />
      <textarea
        placeholder="Inhalt"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        style={{ width: "100%", marginBottom: 8 }}
      />
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {preview && (
        <div>
          <img src={preview} alt="Vorschau" style={{ maxWidth: "100%", marginTop: 8 }} />
        </div>
      )}
      <button type="submit" style={{ marginTop: 12 }} disabled={loading}>
        {loading ? "Speichern..." : "Speichern"}
      </button>
         </form>
  );
}