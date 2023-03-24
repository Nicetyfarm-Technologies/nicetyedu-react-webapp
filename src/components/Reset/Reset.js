import React, { useState } from "react";
import "./Reset.css";

function ResetPassword() {
  const [schoolEmail, setSchoolEmail] = useState("");

  return (
    <div className="reset-container">
      <form className="reset">
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
