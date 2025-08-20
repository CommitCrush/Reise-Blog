"use server";

import { writeFile } from "fs/promises";
import path from "path";


export async function uploadImage(formData: FormData) {
  const file = formData.get("image") as File;

  if (!file) {
    throw new Error("No file provided");
  }

  // Validierung
  const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
  if (!allowedTypes.includes(file.type)) {
    throw new Error("Invalid file type");
  }

  // Dateiname
  const bytes = await file.arrayBuffer(); // ArrayBuffer in Buffer umwandeln
  const buffer = Buffer.from(bytes);

  const filename = Date.now() + "-" + file.name.replace(/\s+/g, "_");
  const filepath = path.join(process.cwd(), "public/uploads", filename);//zeigt auf den Speicherort

  // Datei speichern
  await writeFile(filepath, buffer);

  // Pfad zurückgeben (für DB speichern)
  return `/uploads/${filename}`;//  // Pfad zurückgeben (für DB speichern)
}
