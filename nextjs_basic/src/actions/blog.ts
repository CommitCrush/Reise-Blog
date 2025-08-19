"use server";

import Post from "@/models/Post";

export async function createPost({
    title,
    content,
    author,
    imageUrl,
}: {
    title: string;
    content: string;
    author?: string;
    imageUrl?: string;
}) {
    const post = new Post({ title, content, author, imageUrl });
    await post.save();
    return post;
}