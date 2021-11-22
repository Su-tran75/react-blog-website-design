import React from "react";
import "./post.scss";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  console.log("Post -> post", post);
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={post.photo} alt="" />}
      <div className="postInfo">
        <div className="postCategories">
          {post.categories.map((c) => (
            <span className="postCategory">{c.name}</span>
          ))}
        </div>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
