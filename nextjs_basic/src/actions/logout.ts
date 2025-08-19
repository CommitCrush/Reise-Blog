"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// Logout-Funktion, die das Session-Cookie löscht
export async function logout() {
  const cookieStore = await cookies();

  // Cookies löschen
  cookieStore.set("sessionToken", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });

  redirect("/");
}
