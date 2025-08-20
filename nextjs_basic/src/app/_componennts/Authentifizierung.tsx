"use client";
import Link from "next/link";
import Image from "next/image";

export default function Authentifizierung() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "#f9f9f9"
    }}>
      {/* Logo */}
      <Image
        src="/reise-blog-logo.png"
        alt="Reise Blog Logo"
        width={120}
        height={120}
        style={{ marginBottom: 24 }}
        priority
      />

      {/* Willkommenstext */}
      <h1 style={{ marginBottom: 12, fontSize: "2rem", color: "#222" }}>
        Willkommen auf unserer Seite – Let's Inspire!
      </h1>
      <p style={{ marginBottom: 32, color: "#555" }}>
        Teile deine Reiseerlebnisse, entdecke neue Orte und lass dich inspirieren.
      </p>

      {/* Video */}
      <video
        width={360}
        height={200}
        controls
        style={{ marginBottom: 32, borderRadius: 12, boxShadow: "0 2px 8px #0001" }}
      >
        <source src="/welcome-video.mp4" type="video/mp4" />
        Dein Browser unterstützt das Video-Tag nicht.
      </video>

      {/* Login & Register Links */}
      <div style={{ display: "flex", gap: 24 }}>
        <Link href="/login">
          <button style={{
            padding: "10px 24px",
            background: "#0070f3",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            fontWeight: "bold",
            cursor: "pointer"
          }}>
            Login
          </button>
        </Link>
        <Link href="/register">
          <button style={{
            padding: "10px 24px",
            background: "#fff",
            color: "#0070f3",
            border: "2px solid #0070f3",
            borderRadius: 6,
            fontWeight: "bold",
            cursor: "pointer"
          }}>
            Registrieren
          </button>
        </Link>
      </div>
    </div>
  );
}