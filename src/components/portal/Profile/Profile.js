import React from "react";
import { useState, useEffect } from "react";
import logo from "../images/icon.png"
// import './Dashboard.css'
import MinNav from "../minNav/MinVav";
import { getAuth, updateProfile } from "firebase/auth";

const Profile = () => {
  const [displayName2, setName] = useState("");
  const [displayImage, setImage] = useState({logo});

  const updateUser = (event) => {
    event.preventDefault();
    const auth = getAuth();
    updateProfile(auth.currentUser, {
      displayName: displayName2,
      photoURL: displayImage,
    })
      .then(() => {
        // Profile updated!
        // ...
        
        getUserProfile()
        alert("Profile updated")
      })
      .catch((error) => {
        // An error occurred
        // ...
        alert(error)
      });
  };

  const getUserProfile = () => {
    // event.preventDefault();
    const auth = getAuth();
const user = auth.currentUser;
if (user !== null) {
  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;
  const uid = user.uid;
  setName(displayName);
  setImage(photoURL);
  console.log(displayName + '' + email)

}
  }

  useEffect(() => {
    getUserProfile()
  }, [])

  console.log(displayImage);

  return (
    <div className="portal-content">
      <MinNav />
      <div className="portal-page-content">
        <h2>Profile</h2>
        <form onSubmit={updateUser} className="form2">
          <label>School Name:
          <input type="text" value={displayName2} onChange={(e) => setName(e.target.value)} />
          </label>
          
          <label>School Logo:
          <input type="file" id="myFile" name="filename" onChange={(e) => setImage(e.target.value)} />
          </label>
          
          <button type="submit" className="log-btn">Update</button>
        </form>
        {/* <button className="log-btn" onClick={getUserProfile}>Get User Profile</button> */}
      </div>
    </div>
  );
};

export default Profile;
