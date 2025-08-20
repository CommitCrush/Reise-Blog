"use server";

import Post from "@/models/Post";
import Comment from "@/models/Comment";

// CREATE: Einen neuen Blog-Post erstellen

import { getSessionUser } from "@/lib/auth";

export async function createPost({
  title,
  content,
  imageUrl,
  city,
}: {
  title: string;
  content: string;
  imageUrl?: string;
  city?: string;
}) {
  const user = await getSessionUser();
  if (!user) throw new Error("Nicht eingeloggt.");
  const author = user._id;

  if (!title || !content) {
    throw new Error("Titel und Inhalt sind erforderlich.");
  }

  try {
    const post = new Post({ title, content, author, imageUrl, city });
    await post.save();
    return post;
  } catch {
    throw new Error("Post konnte nicht erstellt werden.");
  }
}

// READ (alle): Alle Blog-Posts abrufen

export async function getPosts() {
  const posts = await Post.find()
    .populate("author", "username")
    .sort({ createdAt: -1 })
    .lean();

  // Kommentare zählen (optional, falls du ein Comment-Modell hast)
  // Hole alle Kommentare für alle Posts und zähle sie pro Post
  const postIds = posts.map(post => post._id);
  const comments = await Comment.find({ post: { $in: postIds } }).lean();

  return posts.map(post => ({
    ...post,
    likeCount: post.likes ? post.likes.length : 0,
    commentCount: comments.filter(c => c.post.toString() === post._id.toString()).length,
  }));
}

// READ (einzelner): Einen Blog-Post anhand der ID abrufen

export async function getPostById(id: string) {
  try {
    const post = await Post.findById(id)
      .populate("author", "username")
      .populate("likes", "username") // <--- Füge das hinzu!
      .lean();
    if (!post) throw new Error("Post nicht gefunden.");
    return post;
  } catch {
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
  } catch {
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
  } catch {
    throw new Error("Post konnte nicht gelöscht werden.");
  }
}


// LIKE/UNLIKE: Like oder Unlike für einen Blog-Post toggeln 

export async function toggleLike(postId: string, userId: string) {
  if (!postId || !userId) throw new Error("Post-ID und User-ID sind erforderlich.");

  const post = await Post.findById(postId);
  if (!post) throw new Error("Post nicht gefunden.");

  const index = post.likes.indexOf(userId);
  if (index > -1) {
    // User hat schon geliked → Unlike
    post.likes.splice(index, 1);
  } else {
    // User hat noch nicht geliked → Like
    post.likes.push(userId);
  }
  await post.save();
  return post.likes.length;
}
// KOMMENTAR: Kommentar zu einem Blog-Post hinzufügen
export async function addComment({
  postId,
  userId,
  text,
}: {
  postId: string;
  userId: string;
  text: string;
}) {
  if (!postId || !userId || !text) throw new Error("Alle Felder sind erforderlich.");
  try {
    const comment = new Comment({ post: postId, user: userId, text });
    await comment.save();
    return comment;
  } catch {
    throw new Error("Kommentar konnte nicht gespeichert werden.");
  }
}
// Alle Kommentare zu einem Post abrufen
export async function getComments(postId: string) {
  if (!postId) throw new Error("Post-ID ist erforderlich.");
  try {
    const comments = await Comment.find({ post: postId })
      .sort({ createdAt: -1 })
      .populate("user", "username") // Username mitliefern!
      .lean();
    return comments;
  } catch {
    throw new Error("Kommentare konnten nicht geladen werden.");
  }
}
