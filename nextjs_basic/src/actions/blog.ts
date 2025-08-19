"use server";

import Post from "@/models/Post";

// CREATE: Einen neuen Blog-Post erstellen

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
  if (!title || !content) {
    throw new Error("Titel und Inhalt sind erforderlich.");
  }

  try {
    const post = new Post({ title, content, author, imageUrl });
    await post.save();
    return post;
  } catch (error) {
    throw new Error("Post konnte nicht erstellt werden.");
  }
}

// READ (alle): Alle Blog-Posts abrufen

export async function getPosts() {
  try {
    const posts = await Post.find().sort({ createdAt: -1 }).lean();
    return posts;
  } catch (error) {
    throw new Error("Posts konnten nicht geladen werden.");
  }
}

// READ (einzelner): Einen Blog-Post anhand der ID abrufen

export async function getPostById(id: string) {
  if (!id) {
    throw new Error("Post-ID ist erforderlich.");
  }

  try {
    const post = await Post.findById(id).lean();
    if (!post) throw new Error("Post nicht gefunden.");
    return post;
  } catch (error) {
    throw new Error("Post konnte nicht geladen werden.");
  }
}


// UPDATE: Einen Blog-Post anhand der ID aktualisieren

export async function updatePost(
  id: string,
  data: { title?: string; content?: string; imageUrl?: string }
) {
  if (!id) throw new Error("Post-ID ist erforderlich.");

  try {
    const updatedPost = await Post.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    }).lean();
    if (!updatedPost) throw new Error("Post nicht gefunden.");
    return updatedPost;
  } catch (error) {
    throw new Error("Post konnte nicht aktualisiert werden.");
  }
}

// DELETE: Einen Blog-Post anhand der ID löschen

export async function deletePost(id: string) {
  if (!id) throw new Error("Post-ID ist erforderlich.");

  try {
    const deleted = await Post.findByIdAndDelete(id).lean();
    if (!deleted) throw new Error("Post nicht gefunden.");
    return deleted;
  } catch (error) {
    throw new Error("Post konnte nicht gelöscht werden.");
  }
}
