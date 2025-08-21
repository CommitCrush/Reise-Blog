"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

// Dummy-Login-Status (ersetze das durch echten Auth-Status)
const isLoggedIn = false;

// Beispiel-Posts (ersetzte das durch echte Daten aus deinem Backend)
const posts = [
  {
    _id: "1",
    title: "Abenteuer in Peru",
    imageUrl: "/Sehenswuerdigkeiten-Peru-Machu-Picchu-scaled.jpg",
    author: { username: "Maria" },
    likes: [1, 2],
    commentCount: 3,
  },
  {
    _id: "2",
    title: "Chiles wilde Natur",
    imageUrl: "/Chile-Large.jpg",
    author: { username: "Jonas" },
    likes: [1],
    commentCount: 1,
  },
  {
    _id: "3",
    title: "Frankreich entdecken",
    imageUrl: "/Blog-voyage-corse-france-768x288.jpg",
    author: { username: "Sophie" },
    likes: [],
    commentCount: 0,
  },
  {
    _id: "4",
    title: "Kultur erleben",
    imageUrl: "/reise-blog-logo.png",
    author: { username: "Ali" },
    likes: [1, 2, 3],
    commentCount: 5,
  },
];

// Bilder für die Slideshow
const galleryImages = [
  "/Blog-voyage-corse-france-768x288.jpg",
  "/Chile-Large.jpg",
  "/Collage_HD+2022-10-27+21_16_00.webp",
  "/Sehenswuerdigkeiten-Peru-Machu-Picchu-scaled.jpg",
  "/reise-blog-logo.png",
];

export default function HomePage() {
  // Slideshow-Logik
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % galleryImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Blog-Vorschau-Logik
  const [showAll, setShowAll] = useState(false);
  const INITIAL_COUNT = 3;
  const visiblePosts = showAll ? posts : posts.slice(0, INITIAL_COUNT);

  const handleShowAll = () => {
    if (!isLoggedIn) {
      alert("Bitte logge dich ein, um alle Beiträge zu sehen!");
      // Optional: window.location.href = "/login";
      return;
    }
    setShowAll(true);
  };

  // Handler für "Alle Beiträge lesen"
  const handleAllPosts = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isLoggedIn) {
      alert("Bitte logge dich ein, um alle Beiträge zu sehen!");
      // Optional: window.location.href = "/login";
      return;
    }
    window.location.href = "/profile";
  };

  return (
    <div className="font-sans min-h-screen relative">
      {/* Slideshow-Hintergrund */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          background: "#000",
        }}
      >
        {galleryImages.map((img, idx) => (
          <Image
            key={img}
            src={img}
            alt={`Reisebild ${idx + 1}`}
            fill
            style={{
              objectFit: "cover",
              opacity: idx === current ? 1 : 0,
              transition: "opacity 1s",
              zIndex: 0,
            }}
            priority={idx === 0}
          />
        ))}
        {/* Overlay für bessere Lesbarkeit */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.35)",
            zIndex: 1,
          }}
        />
      </div>

      {/* Inhalt */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative h-[85vh] flex items-center">
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg mb-6">
              Entdecke die Welt neu
            </h1>
            <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-8 text-gray-200">
              Abenteuer, Inspiration und praktische Tipps für deine nächste Reise.
            </p>
            {/* Call to action Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#kategorien"
                className="px-6 py-3 bg-gradient-to-r from-[#ffe066] to-[#b3ffab] text-[#2e7d32] font-semibold rounded-lg shadow-lg hover:opacity-90 transition"
              >
                Themen entdecken →
              </a>
              <button
                onClick={handleAllPosts}
                className="px-6 py-3 bg-white text-[#2e7d32] font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
              >
                Alle Beiträge lesen
              </button>
            </div>
          </div>
        </section>

        {/* Über diese Seite */}
    <section className="max-w-5xl mx-auto my-20 px-4 grid md:grid-cols-2 gap-12 items-center bg-white/95 rounded-2xl shadow-lg">
  <img
    src="/Collage_HD+2022-10-27+21_16_00.webp"
    alt="Über diese Seite"
    className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
  />
  <div>
    <h2 className="text-3xl font-bold text-[#2e7d32] mb-4">
      Über diese Seite 🌍
    </h2>
    <p className="text-gray-700 mb-4 leading-relaxed">
      Diese Seite ist eine Sammlung von Ideen, Tipps und Inspirationen für
      alle, die die Welt entdecken möchten. Ob du von großen Abenteuern
      träumst oder kleine Auszeiten im Alltag suchst – hier findest du
      Anregungen, Geschichten und Ressourcen, die dich weiterbringen.
    </p>
    <p className="text-gray-700 leading-relaxed">
      Ziel dieser Seite ist es, Menschen zu motivieren, mit offenen Augen
      zu reisen und neue Perspektiven zu entdecken.
    </p>
  </div>
</section>

        {/* Kategorien */}
        <section id="kategorien" className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#2e7d32] mb-12">
              Entdecke Themen
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Reisetipps",
                  img: "/Chile-Large.jpg",
                  desc: "Praktische Tipps für Planung, Budget und Sicherheit.",
                },
                {
                  title: "Abenteuer",
                  img: "/Sehenswuerdigkeiten-Peru-Machu-Picchu-scaled.jpg",
                  desc: "Inspiration für spannende Aktivitäten und Outdoor-Trips.",
                },
                {
                  title: "Kultur erleben",
                  img: "/reise-blog-logo.png",
                  desc: "Traditionen, Menschen und neue Perspektiven kennenlernen.",
                },
              ].map((cat) => (
                <div
                  key={cat.title}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                >
                  <img
                    src={cat.img}
                    alt={cat.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {cat.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2">{cat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog-Vorschau */}
        <section className="max-w-5xl mx-auto my-20 px-4">
          <h2 className="text-2xl font-bold text-[#2e7d32] mb-6">Neueste Blogposts</h2>
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {visiblePosts.map((post) => (
              <li key={post._id} className="bg-white rounded-xl shadow-md p-5">
                <img
                  src={post.imageUrl || "/reise-blog-logo.png"}
                  alt={post.title}
                  className="w-full h-40 object-cover rounded-lg mb-3"
                />
                <h3 className="text-lg font-semibold mb-1">{post.title}</h3>
                <div className="text-sm text-gray-600 mb-2">
                  von: {post.author?.username || "Unbekannt"}
                </div>
                <div className="text-[#2e7d32] font-semibold text-sm mb-2">
                  👍 {post.likes?.length || 0} &nbsp;|&nbsp; 💬 {post.commentCount || 0}
                </div>
                <button
                  onClick={() => {
                    if (!isLoggedIn) {
                      alert("Bitte logge dich ein, um den Beitrag zu sehen!");
                      // Optional: window.location.href = "/login";
                      return;
                    }
                    window.location.href = `/blog/${post._id}`;
                  }}
                  className="inline-block mt-2 text-[#2e7d32] font-bold hover:underline"
                >
                  Zum Beitrag →
                </button>
              </li>
            ))}
          </ul>
          {/* Mehr anzeigen Button */}
          {!showAll && posts.length > INITIAL_COUNT && (
            <div className="flex justify-center mt-8">
              <button
                onClick={handleShowAll}
                className="px-8 py-3 bg-gradient-to-r from-[#b3ffab] to-[#ffe066] text-[#2e7d32] font-bold rounded-lg shadow-md hover:scale-105 transition-transform"
              >
                Mehr anzeigen
              </button>
            </div>
          )}
        </section>

        {/* Zitat / Highlight */}
        <section className="relative py-20 bg-gradient-to-r from-[#2e7d32]/90 via-[#4caf50]/70 to-[#b3ffab]/50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <svg
              className="mx-auto mb-6 w-12 h-12 text-white/70"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.17 6A5 5 0 0 1 12 2a5 5 0 0 1 4.83 4h-3.66a2 2 0 0 0-2 2v3.66a5 5 0 0 1-4-3.66zM16.83 18A5 5 0 0 1 12 22a5 5 0 0 1-4.83-4h3.66a2 2 0 0 0 2-2v-3.66a5 5 0 0 1 4 3.66z" />
            </svg>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-relaxed drop-shadow-md">
              „Reisen ist das Einzige, was du kaufen kannst, das dich reicher macht.“
            </h2>
            <p className="text-lg text-white/80 italic">– Unbekannt</p>
          </div>
        </section>
      </div>
    </div>
  );
}