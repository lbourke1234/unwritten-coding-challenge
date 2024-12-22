import { Post } from "@/types/types";
import PostsClient from "./PostsClient";

async function fetchPosts(): Promise<Post[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch posts. Error code: ${response.status}`);
  }

  return response.json();
}

export default async function PostsContent() {
  let posts: Post[] = [];
  let error: string | null = null;

  try {
    posts = await fetchPosts();
  } catch (err: any) {
    error = err.message;
  }

  return <PostsClient posts={posts} error={error} />;
}
