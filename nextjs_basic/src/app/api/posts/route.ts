import { NextRequest, NextResponse } from "next/server";
import { createPost } from "@/actions/blog";

export async function POST(req: NextRequest) {
  const { title, content, imageUrl, city } = await req.json();
  try {
    await createPost({ title, content, imageUrl, city });
    return NextResponse.json({ success: true });
  } catch (error) {
    // Genaue Fehlermeldung zurückgeben
    return NextResponse.json({ error: (error as Error).message }, { status: 400 });
  }
}