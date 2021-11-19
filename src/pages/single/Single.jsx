import React from "react";
import "./single.scss";
import SideBar from "../../components/sideBar/SideBar";
import SInglePost from "../../components/singlePost/SInglePost";

export default function Single() {
  return (
    <div className="single">
      <SInglePost />
      <SideBar />
    </div>
  );
}
