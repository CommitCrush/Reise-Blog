"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateBlogPage() {
  const [username, setUsername] = useState("");
  const [content, setContent] = useState("");
  const [city, setCity] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

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
      formData.append("image", imageFile);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.imageUrl) imageUrl = data.imageUrl;
      else {
        alert("Bild-Upload fehlgeschlagen!");
        setLoading(false);
        return;
      }
    }

    // Post erstellen
    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ author: { username }, content, imageUrl, city }),
      });
      if (!res.ok) throw new Error("Fehler beim Erstellen des Posts.");
      setUsername("");
      setContent("");
      setCity("");
      setImageFile(null);
      setPreview(null);
      router.push("/profile");
    } catch (error) {
      alert("Fehler beim Erstellen des Posts.");
    }
    setLoading(false);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Hintergrund-Overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          background: "rgba(30,40,40,0.85)",
          zIndex: 0,
        }}
      />

      {/* Inhalt */}
      <form
        onSubmit={handleSubmit}
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 500,
          margin: "4rem auto",
          background: "rgba(255,255,255,0.07)",
          borderRadius: 18,
          boxShadow: "0 4px 32px #222a",
          padding: "2.5rem 2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            color: "#ffe066",
            fontWeight: 900,
            fontSize: "2rem",
            marginBottom: 24,
            letterSpacing: 1,
            textShadow: "0 2px 12px #222a",
            textAlign: "center",
          }}
        >
          Neuen Blog-Post erstellen
        </h2>
        <input
          type="text"
          placeholder="Titel"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{
            width: "100%",
            marginBottom: 14,
            padding: "12px",
            borderRadius: 8,
            border: "none",
            fontSize: "1.1rem",
            background: "#fffde4",
            color: "#222",
            boxShadow: "0 1px 4px #ffe06633",
          }}
        />
        <input
          type="text"
          placeholder="Stadt"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
          style={{
            width: "100%",
            marginBottom: 14,
            padding: "12px",
            borderRadius: 8,
            border: "none",
            fontSize: "1.1rem",
            background: "#b3ffab",
            color: "#222",
            boxShadow: "0 1px 4px #b3ffab33",
          }}
        />
        <textarea
          placeholder="Inhalt"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={6}
          style={{
            width: "100%",
            marginBottom: 14,
            padding: "12px",
            borderRadius: 8,
            border: "none",
            fontSize: "1.1rem",
            background: "#fff",
            color: "#222",
            boxShadow: "0 1px 4px #ffe06633",
            resize: "vertical",
          }}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{
            marginBottom: 14,
            color: "#2e7d32",
            background: "#fffde4",
            borderRadius: 8,
            padding: "8px",
            width: "100%",
          }}
        />
        {preview && (
          <div style={{ marginBottom: 14 }}>
            <img
              src={preview}
              alt="Vorschau"
              style={{
                maxWidth: "100%",
                borderRadius: 10,
                boxShadow: "0 2px 8px #b3ffab55",
                border: "2px solid #ffe066",
              }}
            />
          </div>
        )}
        <button
          type="submit"
          disabled={loading}
          style={{
            marginTop: 10,
            padding: "12px 32px",
            background: "linear-gradient(90deg, #ffe066 60%, #b3ffab 100%)",
            color: "#2e7d32",
            border: "none",
            borderRadius: 8,
            fontWeight: "bold",
            fontSize: "1.1rem",
            cursor: loading ? "not-allowed" : "pointer",
            boxShadow: "0 2px 8px #b3ffab55",
            transition: "background 0.2s, color 0.2s",
          }}
        >
          {loading ? "Erstellen..." : "Erstellen"}
        </button>
      </form>
    </div>
  );
}