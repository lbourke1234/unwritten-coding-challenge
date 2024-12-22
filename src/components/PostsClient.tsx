"use client";

import { Post } from "@/types/types";
import Error from "./Error";
import { motion } from "framer-motion";

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
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            key={post.id}
            className="flex flex-col justify-between p-4 bg-black text-white rounded shadow-lg w-72"
          >
            <h2 className="text-lg font-bold mb-2">{post.title}</h2>
            <p>{post.body}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
