import React from "react";
import { useState, useEffect } from "react";
// import { getAuth } from "firebase/auth";
import logo from "../images/icon.png"
// import './Dashboard.css'
import MinNav from "../minNav/MinVav";
import { getAuth, updateProfile } from "firebase/auth";

const Profile = () => {
  const [displayName, setName] = useState("justine");
  const [displayImage, setImage] = useState({logo});

  const updateUser = (event) => {
    event.preventDefault();
    const auth = getAuth();
    updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: displayImage,
    })
      .then(() => {
        // Profile updated!
        // ...
        alert("Profile updated")
      })
      .catch((error) => {
        // An error occurred
        // ...
        alert(error)
      });
  };

  return (
    <div className="portal-content">
      <MinNav />
      <div className="portal-page-content">
        <form onSubmit={updateUser}>
          <input type="text" value={displayName} onChange={(e) => setName(e.target.value)} />
          <input type="file" id="myFile" name="filename" onChange={(e) => setImage(e.target.value)} />
          <button type="submit">Update</button>
        </form>
        <h2>Profile</h2>
        <button className="log-btn">Get User Profile</button>
      </div>
    </div>
  );
};

export default Profile;
