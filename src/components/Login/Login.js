import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../Assets/Images/icon2.png";
import auth from "../firebase/config";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user.uid);
    localStorage.setItem('uid',JSON.stringify(user.uid));
    navigate("/dashboard");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error);
  });
  };

  return (
    <div className="login-container">
      <div className="welcome-container">
        <img src={logo} />
        <h3>Hello Again</h3>
        <p>We are glad to see you again, kindly login to continue</p>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          required
        />
        <div className="password-reset">
          <p>forgot password?</p>
          <Link to="/reset" className="reset-password">
            Reset Here
          </Link>
        </div>
        <button type="submit" className="log-btn">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
