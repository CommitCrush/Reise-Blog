import { NextRequest, NextResponse } from "next/server";
import { toggleLike, getPostById } from "@/actions/blog";

export async function POST(req: NextRequest) {
  const { postId, userId } = await req.json();
  try {
    await toggleLike(postId, userId);
    // Likes mit Usernamen zurückgeben
    const post = await getPostById(postId);
    return NextResponse.json({ likes: post.likes });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 400 });
  }
}