import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from "../Assets/Images/icon2.png";

function Login() {

  return (
    <div className="login-container">
      <div className="welcome-container">
         <img src={logo} />
         <h3>Hello Again</h3>
         <p>We are glad to see you again, kindly login to continue</p>
      </div>
      <form className="form">
        <input type={"email"} placeholder="email" required />
        <input type={"password"} placeholder="password" required />
        <div className="password-reset">
            <p>forgot password?</p>
            <Link to="/reset-password" className="reset-password">Reset Here</Link>
        </div>
        <button type="button" className="log-btn">Login</button>
      </form>
    </div>
  );
}

export default Login;
