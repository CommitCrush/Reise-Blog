import { NextRequest, NextResponse } from "next/server";
import { uploadImage } from "@/actions/upload";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  try {
    const imageUrl = await uploadImage(formData);
    return NextResponse.json({ imageUrl });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 400 });
  }
}