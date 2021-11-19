import React from "react";
import "./login.scss";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
    <span className="loginTitle">Login</span>
      <form action="" className="loginForm">
        <label>Email</label>
        <input type="text" placeholder="Enter your email" />
        <label>Password</label>
        <input type="password" placeholder="Enter your password" />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">    <Link to="/register" className="link">
                Register
              </Link></button>
    </div>
  );
}
