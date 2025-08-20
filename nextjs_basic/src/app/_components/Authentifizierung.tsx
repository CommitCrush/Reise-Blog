"use client";
import Link from "next/link";
import Image from "next/image";

export default function Authentifizierung() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Hintergrundvideo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 0,
          background: "#000",
        }}
      >
        <source src="/ourvideo.mp4" type="video/mp4" />
        Dein Browser unterstützt das Video-Tag nicht.
      </video>

      {/* Overlay für bessere Lesbarkeit */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          background: "rgba(0,0,0,0.35)",
          zIndex: 1,
        }}
      />

      {/* Inhalt */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Slogan */}
        <h2
          style={{
            color: "#ffe066",
            fontWeight: 900,
            fontSize: "2.3rem",
            marginBottom: 18,
            letterSpacing: 1,
            textShadow: "0 2px 12px #222a",
            textAlign: "center",
          }}
        >
          Reise Blog – Inspiriere und werde inspiriert!
        </h2>
        <Image
          src="/reise-blog-logo.png"
          alt="Reise Blog Logo"
          width={120}
          height={120}
          style={{
            marginBottom: 24,
            borderRadius: "50%",
            background: "#fffde4",
            boxShadow: "0 4px 24px #b3ffab88",
          }}
          priority
        />
        <h1
          style={{
            marginBottom: 12,
            fontSize: "2.2rem",
            color: "#fff",
            fontWeight: 800,
            letterSpacing: 1,
            textShadow: "0 2px 8px #2228",
          }}
        >
          Willkommen auf unserer Seite – Let's Inspire!
        </h1>
        <p style={{ marginBottom: 32, color: "#fff", fontSize: "1.1rem", textShadow: "0 1px 4px #2228" }}>
          Teile deine Reiseerlebnisse, entdecke neue Orte und lass dich inspirieren.
        </p>
        <div style={{ display: "flex", gap: 24 }}>
          <Link href="/login">
            <button
              style={{
                padding: "12px 32px",
                background: "linear-gradient(90deg, #ffe066 60%, #b3ffab 100%)",
                color: "#2e7d32",
                border: "none",
                borderRadius: 8,
                fontWeight: "bold",
                fontSize: "1.1rem",
                cursor: "pointer",
                boxShadow: "0 2px 8px #b3ffab55",
                transition: "background 0.2s",
              }}
            >
              Login
            </button>
          </Link>
          <Link href="/register">
            <button
              style={{
                padding: "12px 32px",
                background: "linear-gradient(90deg, #b3ffab 60%, #ffe066 100%)",
                color: "#2e7d32",
                border: "none",
                borderRadius: 8,
                fontWeight: "bold",
                fontSize: "1.1rem",
                cursor: "pointer",
                boxShadow: "0 2px 8px #ffe06655",
                transition: "background 0.2s",
              }}
            >
              Registrieren
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}