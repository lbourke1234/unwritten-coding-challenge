"use client";

import { Post } from "@/types/types";
import Error from "./Error";

type PostsClientProps = {
  posts: Post[];
  error: string | null;
};

export default function PostsClient({ posts, error }: PostsClientProps) {
  if (error) {
    return <Error error={error} />;
  }

  return (
    <div className="flex flex-col items-center p-8 container mx-auto">
      <div className="flex flex-wrap justify-center gap-6 w-full mt-6">
        {posts.slice(0, 20).map((post) => (
          <div
            key={post.id}
            className="flex flex-col justify-between p-4 bg-black text-white rounded shadow-lg w-72"
          >
            <h2 className="text-lg font-bold mb-2">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
