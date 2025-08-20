"use client";

import { logout } from "../../actions/logout";

export default function LogoutButton() {
  return (
    <button
      onClick={() => logout()}
      className="bg-yellow-700 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition font-semibold border border-yellow-300"
      style={{fontFamily: 'Montserrat, sans-serif'}}
    >
      Logout
    </button>
  );
}
