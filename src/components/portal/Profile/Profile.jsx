import React from "react";
import { useState, useEffect } from "react";
import logo from "../images/icon.png"
// import './Dashboard.css'
import MinNav from "../minNav/MinVav";
import { getAuth, updateProfile } from "firebase/auth";
import { storage } from "../../firebase/config";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

const Profile = () => {
  const [imgUrl, setImgUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault()
    const file = e.target[0]?.files[0]
    if (!file) return;
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on("state_changed",
      (snapshot) => {
        const progress =
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL)
        });
      }
    );
  }
  const [displayName2, setName] = useState("");
  const [displayImage, setImage] = useState({logo});

  const updateUser = (event) => {
    event.preventDefault();
    const auth = getAuth();
    updateProfile(auth.currentUser, {
      displayName: displayName2,
      photoURL: imgUrl,
    })
      .then(() => {
        // Profile updated!
        // ...
        // alert(photoURL)
        getUserProfile()
        console.log(auth.currentUser);
        alert("Profile Updated");
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

}
  }

  

  useEffect(() => {
    getUserProfile()
  }, [])

  // console.log(displayImage);

  return (
    <div className="portal-content">
      <MinNav />
      <div className="portal-page-content">
        <h2>Profile</h2>
        <div className="cont-form">
        {
        !imgUrl &&
        <div className='outerbar'>
          <div className='innerbar' style={{ width: `${progresspercent}%` }}>{progresspercent}%</div>
        </div>
      }
      {
        imgUrl &&
        <img src={imgUrl} alt='uploaded file' height={200} />
      }
        <form onSubmit={handleSubmit} className='orm'>
          <label>School Logo</label>
        <input type='file' />
        <button type='submit' className="btn2">Upload</button>
      </form>
        <form onSubmit={updateUser} className="orm">
          <label>School Name:</label>
          <input type="text" value={displayName2} onChange={(e) => setName(e.target.value)} />          
          <button type="submit" name="Submit" className="log-btn">Update</button>
        </form>
        </div>
      
        {/* <button className="log-btn" onClick={getUserProfile}>Get User Profile</button> */}
      </div>


    </div>
  );
};

export default Profile;
