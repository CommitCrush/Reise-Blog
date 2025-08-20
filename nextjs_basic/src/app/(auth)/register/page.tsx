import Link from "next/link";
import { RegisterUser } from "../../../actions/register";

export default function RegisterPage() {
  return (
    <main className="mx-auto h-screen flex items-center justify-center flex-col gap-5 bg-yellow-50">
      <h3 className="text-2xl font-bold text-yellow-700 mb-2">Registrieren</h3>
      <form
        action={RegisterUser}
        className="bg-white rounded-xl shadow-lg p-8 flex flex-col gap-6 min-w-[320px] border border-yellow-100"
        style={{fontFamily: 'Montserrat, sans-serif'}}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="text-green-700 font-semibold">Username</label>
          <input
            id="username"
            name="username"
            placeholder="username"
            type="text"
            required
            className="border border-yellow-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-200 bg-yellow-50 text-yellow-900"
          />
        </div>
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
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-green-700 font-semibold">Password</label>
          <input
            id="password"
            name="password"
            placeholder="password"
            type="password"
            required
            className="border border-yellow-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-200 bg-yellow-50 text-yellow-900"
          />
        </div>
        <button
          type="submit"
          className="bg-yellow-600 text-white font-bold rounded px-4 py-2 shadow hover:bg-green-700 transition"
        >
          Registrieren
        </button>
        <p className="text-center text-green-700">
          Hast du schon ein Account?
          <Link href="/login" className="text-yellow-700 underline ml-2 hover:text-green-700 transition">
            Login
          </Link>
        </p>
      </form>
    </main>
  );
}
