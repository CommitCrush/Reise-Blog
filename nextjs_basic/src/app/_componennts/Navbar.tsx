
import React from "react";
import Link from "next/link";
import { getSessionUser } from "../../lib/auth";
import LogoutButton from "./LogoutButton";

export default async function Navbar() {
	const user = await getSessionUser();
	if (!user) return null;
	return (
		<nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-yellow-200 via-yellow-400 to-green-300 shadow-lg flex items-center justify-between px-8 py-4" style={{fontFamily: 'Montserrat, sans-serif'}}>
			<div className="flex items-center gap-6">
				<Link href="/" className="text-2xl font-bold text-yellow-700 hover:text-green-700 transition">ReiseBlog</Link>
				<Link href="/" className="text-lg text-yellow-800 hover:text-green-700 transition">Home</Link>
				<Link href="/blog/create" className="bg-yellow-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition font-semibold">Neuen Blog posten</Link>
			</div>
			<div className="flex items-center gap-4">
				<form action="/search" method="GET" className="flex items-center bg-white rounded-lg px-2 py-1 shadow border border-yellow-300">
					<svg className="w-5 h-5 text-yellow-700 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
					<input
						type="text"
						name="q"
						placeholder="Suche..."
						className="outline-none bg-transparent text-yellow-900 placeholder-yellow-500"
					/>
				</form>
				<LogoutButton />
			</div>
		</nav>
	);
}
