import React from "react";
import "./single.scss";
import SideBar from "../../components/sideBar/SideBar";
import SinglePost from "../../components/singlePost/SinglePost";

export default function Single() {
  return (
    <div className="single">
      <SinglePost />
      <SideBar />
    </div>
  );
}
