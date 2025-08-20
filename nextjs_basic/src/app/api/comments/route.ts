import { NextRequest, NextResponse } from "next/server";
import { getComments, addComment } from "@/actions/blog";

// GET: Kommentare abrufen
export async function GET(req: NextRequest) {
  const postId = req.nextUrl.searchParams.get("postId");
  if (!postId) return NextResponse.json([], { status: 200 });
  try {
    const comments = await getComments(postId);
    return NextResponse.json(comments);
  } catch (error) {
    return NextResponse.json([], { status: 200 });
  }
}

// POST: Kommentar hinzufügen
export async function POST(req: NextRequest) {
  try {
    const { postId, userId, text } = await req.json();
    if (!postId || !userId || !text) {
      return NextResponse.json({ error: "Alle Felder sind erforderlich." }, { status: 400 });
    }
    const comment = await addComment({ postId, userId, text });
    return NextResponse.json(comment);
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 400 });
  }
}