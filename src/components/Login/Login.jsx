import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [id, setID] = useState("");
  // const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(id);
    if(id === "20230001") {
      navigate("/studentsdashboard/dashboard");
    } else {
      alert("wrong");
    }
    console.log(id);
  };

  return (
    <div className="login-container">
      <div className="welcome-container">
        <h3>Hello Again</h3>
        <p>We are glad to see you again, kindly login to continue</p>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Login In As Pupil</h3>
        <input
          type="number"
          value={id}
          onChange={(e) => setID(e.target.value)}
          placeholder="School ID"
          required
        />
        <button type="submit" name="Login" className="log-btn">
          Login
        </button>
        <Link to="/adminlogin">Login As Staff</Link>
      </form>
    </div>
  );
}

export default Login;
