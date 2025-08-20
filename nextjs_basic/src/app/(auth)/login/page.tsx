"use client";

import Link from "next/link";
import { LoginUser } from "../../../actions/login";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);


  return (
    <main className="mx-auto h-screen flex items-center justify-center flex-col gap-5 bg-yellow-50">
      <h3 className="text-2xl font-bold text-yellow-700 mb-2">Login</h3>
      <form
        action={LoginUser}
        className="bg-white rounded-xl shadow-lg p-8 flex flex-col gap-6 min-w-[320px] border border-yellow-100"
        style={{fontFamily: 'Montserrat, sans-serif'}}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-green-700 font-semibold">Email</label>
          <input
            id="email"
            name="email"
            placeholder="email"
            type="email"
            required
            className="border border-yellow-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-200 bg-yellow-50 text-yellow-900"
          />
        </div>
        <div className="flex flex-col gap-2 relative">
          <label htmlFor="password" className="text-green-700 font-semibold">Password</label>
          <input
            id="register-password"
            name="password"
            placeholder="password"
            type={showPassword ? "text" : "password"}
            required
            className="border border-yellow-200 rounded px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-green-200 bg-yellow-50 text-yellow-900"
          />
          <button
            type="button"
            tabIndex={-1}
            className="absolute right-3 top-11 text-yellow-700 hover:text-green-700"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <button
          type="submit"
          className="bg-yellow-700 text-white font-bold rounded px-4 py-2 shadow hover:bg-green-700 transition"
        >
          Login
        </button>
        <p className="text-center text-green-700">
          Ich habe kein Account?
          <Link href="/register" className="text-yellow-700 underline ml-2 hover:text-green-700 transition">
            Registrieren
          </Link>
        </p>
      </form>
    </main>
  );
}
