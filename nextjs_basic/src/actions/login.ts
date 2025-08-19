"use server";

import { User } from "../models/User";
import bcrypt from "bcrypt";
import { connectDB } from "@/lib/db";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";


export async function LoginUser(formData: FormData): Promise<void> {
  const email = formData.get("email") as string | null;
  const password = formData.get("password") as string | null;

  if (!email || !password) {
    console.log("Daten sind nicht vollständig");
    return;
  }

  await connectDB();

  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Benutzer nicht gefunden.");
  }

  // Passwort überprüfen
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new Error("Ungültiges Passwort.");
  }

  // Session-Token setzen
  const cookieStore = await cookies();

  cookieStore.set("sessionToken", String(user._id), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24, // 1 Tag
  });

  redirect("/");
}
