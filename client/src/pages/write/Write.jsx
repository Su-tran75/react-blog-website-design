import React from "react";
import "./write.scss";

export default function Write() {
  return (
    <div className="write">
      <img
        src="https://images.pexels.com/photos/1743165/pexels-photo-1743165.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt=""
        className="writeImg"
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeFormIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeFormInput"
            autofocus="true"
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story ..."
            type="text"
            className="writeFormInput writeFormText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
