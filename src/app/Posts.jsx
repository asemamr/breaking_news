"use client";
import Post from "./Post";
import { Suspense } from "react";
import Loading from "./loading";

export default function Posts({ posts }) {
  return (
    <div>
      <div>
        <Suspense fallback={<Loading />}>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {posts.map((post) => (
                <Post key={post.title} post={post} />
              ))}
            </div>
          </div>
        </Suspense>
      </div>
    </div>
  );
}
