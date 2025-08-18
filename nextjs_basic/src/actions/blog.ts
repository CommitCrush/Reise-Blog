"use server";


import Post from "@/models/Post";

export async function createPost({ title, content, author }: { title: string; content: string; author?: string }) {
	
	const post = new Post({ title, content, author });
	await post.save();
	return post;
}
