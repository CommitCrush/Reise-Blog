import { NextRequest, NextResponse } from "next/server";
import { getComments, addComment } from "@/actions/blog";

export async function GET(req: NextRequest) {
  const postId = req.nextUrl.searchParams.get("postId");
  if (!postId) return NextResponse.json({ error: "postId fehlt" }, { status: 400 });
  const comments = await getComments(postId);
  return NextResponse.json(comments);
}

export async function POST(req: NextRequest) {
  const { postId, userId, text } = await req.json();
  try {
    const comment = await addComment({ postId, userId, text });
    return NextResponse.json(comment);
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 400 });
  }
}