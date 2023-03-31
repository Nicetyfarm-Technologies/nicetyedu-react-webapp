import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import auth from "../firebase/config";

function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // const user = auth.app._options.appId;
        // if(user == "1:509399461359:web:266d4b518a78bc78bd5a1a") {
          // alert(user)
          navigate("/dashboard");
        // } else
        // navigate("/studentsdashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
          // alert(errorMessage);
        
      });
  };

  return (
    <div className="login-container">
      <div className="welcome-container">
        <h3>Hello Again</h3>
        <p>We are glad to see you again, kindly login to continue</p>
      </div>
      <form className="form" onSubmit={handleSubmit}>
      <h3>Login In As Admin</h3>
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
        <button type="submit" name="Login" className="log-btn">
          Login
        </button>
        <Link to="/signin">Login As Pupil</Link>
      </form>
    </div>
  );
}

export default AdminLogin;