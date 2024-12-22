import { Suspense } from "react";
import PostsContent from "./PostsContent";
import Loading from "./Loading";

export default function Posts() {
  return (
    <Suspense fallback={<Loading />}>
      <PostsContent />
    </Suspense>
  );
}
