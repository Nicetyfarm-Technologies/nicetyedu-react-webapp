import React, { useState } from "react";
// import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import "./Reset.css";

function ResetPassword() {
  const [schoolEmail, setSchoolEmail] = useState("");

  const passwordReset = (event) => {
    event.preventDefault();
    const auth = getAuth();
    sendPasswordResetEmail(auth, schoolEmail)
      .then(() => {
        alert("Password reset email sent!")
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        alert(error)
      });
  };

  return (
    <div className="reset-container">
      <form className="reset" onSubmit={passwordReset}>
        <div className="form-intro">
          <h2>Reset Password form</h2>
        </div>
        <hr />
        <p>Kindly Enter the Admin Email address for Password Reset</p>
        <label>
          <h4>Admin Email:</h4>
          <input
            type="email"
            value={schoolEmail}
            onChange={(e) => setSchoolEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </label>
        <button type="submit" className="log-btn">
          Reset Password
        </button>
      </form>
    </div>
  );
}

export default ResetPassword;
