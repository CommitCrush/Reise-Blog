import React from "react";
import Link from "next/link";
import { getSessionUser } from "../../lib/auth";
import LogoutButton from "./LogoutButton";

export default async function Navbar() {
  const user = await getSessionUser();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#6D8F7A] via-[#227468] to-[#445954] shadow-lg flex items-center justify-between px-8 py-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <div className="flex items-center gap-6">
        {/* Logo immer sichtbar */}
        <Link href="/home" className="text-2xl font-bold text-[#F9E879] hover:text-[#BDAC73] transition">ReiseBlog</Link>
        {/* Home immer sichtbar */}
        <Link href="/home" className="text-lg text-[#F9E879] hover:text-[#BDAC73] transition">Home</Link>
        {/* Diese Links nur wenn eingeloggt */}
        {user && (
          <>
            <Link href="/profile" className="text-lg text-[#F9E879] hover:text-[#BDAC73] transition">Alle Posts</Link>
            <Link href="/blog/create" className="bg-[#77B5A8] text-white px-4 py-2 rounded-lg shadow hover:bg-[#227468] transition font-semibold">Neuen Blog posten</Link>
          </>
        )}
      </div>
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <form action="/search" method="GET" className="flex items-center bg-[#F1EBDD] rounded-lg px-2 py-1 shadow border border-[#BDAC73]">
              <svg className="w-5 h-5 text-[#227468] mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input
                type="text"
                name="q"
                placeholder="Suche..."
                className="outline-none bg-transparent text-[#445954] placeholder-[#77B5A8]"
              />
            </form>
            <LogoutButton />
          </>
        ) : (
          <>
            <Link href="/login" className="bg-[#F9E879] text-[#445954] px-4 py-2 rounded-lg shadow hover:bg-[#BDAC73] transition font-semibold">
              Login
            </Link>
            <Link href="/register" className="bg-[#77B5A8] text-white px-4 py-2 rounded-lg shadow hover:bg-[#227468] transition font-semibold">
              Registrieren
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}