"use client";

import Link from "next/link";
import { RegisterUser } from "../../../actions/register";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);


  return (
  <main className="mx-auto h-screen flex items-center justify-center flex-col gap-5 bg-[#F1EBDD]">
  <h3 className="text-2xl font-bold text-[#445954] mb-2">Registrieren</h3>
      <form
        action={RegisterUser}
        className="bg-[#E7E0C4] rounded-xl shadow-lg p-8 flex flex-col gap-6 min-w-[320px] border border-[#BDAC73]"
        style={{fontFamily: 'Montserrat, sans-serif'}}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="text-[#227468] font-semibold">Username</label>
          <input
            id="username"
            name="username"
            placeholder="username"
            type="text"
            required
            className="border border-[#77B5A8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#6D8F7A] bg-[#6D8F7A]/10 text-[#445954]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-[#227468] font-semibold">Email</label>
          <input
            id="email"
            name="email"
            placeholder="email"
            type="email"
            required
            className="border border-[#77B5A8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#6D8F7A] bg-[#6D8F7A]/10 text-[#445954]"
          />
        </div>
        <div className="flex flex-col gap-2 relative">
          <label htmlFor="password" className="text-[#227468] font-semibold">Password</label>
          <input
            id="register-password"
            name="password"
            placeholder="password"
            type={showPassword ? "text" : "password"}
            required
            className="border border-[#77B5A8] rounded px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#6D8F7A] bg-[#6D8F7A]/10 text-[#445954]"
          />
          <button
            type="button"
            tabIndex={-1}
            className="absolute right-3 top-11 text-[#77B5A8] hover:text-[#227468]"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <button
          type="submit"
          className="bg-[#227468] text-white font-bold rounded px-4 py-2 shadow hover:bg-[#445954] transition"
        >
          Registrieren
        </button>
        <p className="text-center text-[#445954]">
          Hast du schon ein Account?
          <Link href="/login" className="text-[#227468] underline ml-2 hover:text-[#77B5A8] transition">
            Login
          </Link>
        </p>
      </form>
    </main>
  );
}
