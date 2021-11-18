import React from "react";
import "./post.scss";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/556662/pexels-photo-556662.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        alt=""
      />
      <div className="postInfo">
        <div className="postCategories">
          <span className="postCategory">Music</span>
          <span className="postCategory">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eius,
        doloremque quasi alias, cumque at soluta vel voluptas a dolor sed sequi,
        suscipit eum ipsam animi autem officia inventore qui! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Dicta eius, doloremque quasi
        alias, cumque at soluta vel voluptas a dolor sed sequi, suscipit eum
        ipsam animi autem officia inventore qui! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Dicta eius, doloremque quasi alias, cumque
        at soluta vel voluptas a dolor sed sequi, suscipit eum ipsam animi autem
        officia inventore qui! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Dicta eius, doloremque quasi alias, cumque at soluta
        vel voluptas a dolor sed sequi, suscipit eum ipsam animi autem officia
        inventore qui!
      </p>
    </div>
  );
}
