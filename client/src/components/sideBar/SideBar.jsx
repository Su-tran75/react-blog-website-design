import React, { useState, useEffect } from "react";
import "./sideBar.scss";
import axios from "axios";

export default function SideBar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    fetchCats();
  }, [cats]);
  return (
    <div className="sideBar">
      <div className="sideBarItem">
        <span className="sideBarTitle">ABOUT ME</span>
        <img
          className="sideBarImg"
          src="https://images.pexels.com/photos/1194034/pexels-photo-1194034.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          deleniti neque inventore nulla sunt eveniet quis eligendi non facilis
          beatae?
        </p>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">CATEGORIES</span>
        <ul className="sideBarList">
          {cats.map((c) => (
            <li className="sideBarListItem">{c.name}</li>
          ))}
        </ul>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">FOLLOW US</span>
        <div className="sideBarSocial">
          <i className="sideBarIcon fab fa-facebook-square"></i>
          <i className="sideBarIcon fab fa-twitter-square"></i>
          <i className="sideBarIcon fab fa-pinterest-square"></i>
          <i className="sideBarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
