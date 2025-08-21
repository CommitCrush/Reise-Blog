"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logout() {
  const cookieStore = await cookies();
  
  // Remove the session token
  cookieStore.delete("sessionToken");
  
  // Redirect to home page
  redirect("/");
}
