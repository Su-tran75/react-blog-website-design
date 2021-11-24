import React from "react";
import "./posts.scss";
import Post from "../post/Post";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.length === 0 && <p>There is no post in this category ...</p>}

      {posts.map((p) => (
        <Post post={p} key={p._id} />
      ))}
    </div>
  );
}
