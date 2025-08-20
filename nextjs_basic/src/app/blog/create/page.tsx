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
    <main className="min-h-screen flex items-center justify-center bg-[#F1EBDD] px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-[#E7E0C4] rounded-2xl shadow-2xl p-8 flex flex-col gap-6 "
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        <h2 className="text-2xl font-bold text-[#445954] mb-2 text-center">Neuen Blog-Post erstellen</h2>
        <input
          type="text"
          placeholder="Titel"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="border border-[#77B5A8] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6D8F7A] bg-[#6D8F7A]/10 text-[#445954] placeholder-[#77B5A8]"
        />
        <textarea
          placeholder="Inhalt"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="border border-[#77B5A8] rounded-lg px-4 py-2 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-[#6D8F7A] bg-[#6D8F7A]/10 text-[#445954] placeholder-[#77B5A8]"
        />
        <label className="text-[#227468] font-semibold">Bild hochladen:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[#77B5A8] file:text-white file:font-semibold file:hover:bg-[#227468] file:transition"
        />
        {preview && (
          <div className="flex justify-center">
            <img src={preview} alt="Vorschau" className="max-w-xs rounded-lg shadow-lg mt-2 border border-[#BDAC73]" />
          </div>
        )}
        <button
          type="submit"
          disabled={loading}
          className="bg-[#227468] text-white font-bold rounded-lg px-6 py-3 shadow hover:bg-[#445954] transition mt-2"
        >
          {loading ? "Erstellen..." : "Erstellen"}
        </button>
      </form>
    </main>
  );
}