"use client";

import { useState } from "react";
import { createPost } from "@/actions/blog";

export default function CreateBlogPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setImageFile(file || null);
    if (file) setPreview(URL.createObjectURL(file));
    else setPreview(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    let imageUrl = "";

    // Bild zuerst hochladen (wenn vorhanden)
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

    // Post erstellen
    try {
      await createPost({ title, content, imageUrl });
      setTitle("");
      setContent("");
      setImageFile(null);
      setPreview(null);
      alert("Post erstellt!");
    } catch {
      alert("Fehler beim Erstellen des Posts.");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 500, margin: "2rem auto" }}>
      <h2>Neuen Blog-Post erstellen</h2>
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
        {loading ? "Erstellen..." : "Erstellen"}
      </button>
          </form>
  );
}