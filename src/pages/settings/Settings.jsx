import React from "react";
import "./settings.scss";
import SideBar from "../../components/sideBar/SideBar";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your account</span>
          <span className="settingsDeleteTitle">Delete your account</span>
        </div>
        <form action="" className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/4220967/pexels-photo-4220967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
              className="settingsImg"
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>

          <input type="text" placeholder="Léo" autofocus="true" />
          <label>Email</label>
          <input type="email" placeholder="Léo@gmail.es" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  );
}
