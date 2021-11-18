import React from "react";
import "./header.scss";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        src="https://images.pexels.com/photos/1415131/pexels-photo-1415131.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        alt=""
        className="headerImg"
      />
    </div>
  );
}
