"use server"

import { User } from "../models/User";
import bcrypt from "bcrypt";

import { connectDB } from "@/lib/db";
import { redirect } from "next/navigation";


// Registrierung eines neuen Benutzers
export async function RegisterUser(formData: FormData): Promise<void> {

    const username = formData.get("username") as string | null;
    const email = formData.get("email") as string | null;
    const password = formData.get("password") as string | null;
    
if (!username || !email || !password) {
    console.log("Daten sind nicht vollständig");
    return;
}   

await connectDB();

const existingUser = await User.findOne({ email});

if (existingUser) {
    throw new Error("Ein Benutzer mit dieser E-Mail-Adresse existiert bereits.");
}

const hashedPassword = await bcrypt.hash(password, 10);

// Speichern des neuen Benutzers in der Datenbank
await User.create({
    username,
    email,
    password: hashedPassword
});
    redirect("/login");
}