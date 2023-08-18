import React, { useState, useEffect } from "react";
import {
  onSnapshot,
  query,
  collection,
  updateDoc,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase/config";
import auth from "../../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import 'react-slideshow-image/dist/styles.css'
import './Dashboard.css'
import MinNav from '../minNav/MinVav';
import Announcement from "./Announcement";

const Dashboard = () => {
const [assigned, setAssigned] = useState("pupils")
const [title, setTitle] = useState("")
const [description, setDescription] = useState("")
const [announceDate, setAnnounceDate] = useState("")
const [announceTime, setAnnounceTime] = useState("")
const [announcements, setAnnouncements] = useState([
  {
    title: "Closure Of Schools",
    description: "Dear pupils, kindly be informed that schools will be closed on the 4th to 8th of October due to the announcement by the ministry of Education",
    
  }
])
const [adminEmail, setAdminEmail] = useState(null)


useEffect(() => {
  const intervalId = setInterval(() => {
    setAnnounceDate(new Date());
    setAnnounceTime(new Date().toLocaleTimeString());
  }, 1000);
  return () => clearInterval(intervalId);
}, []);

useEffect(() => {
  const q = query(collection(db, 'announcementsstaff'));
  const unSubscribe = onSnapshot(q, (querySnapshot) => {
    const companyBlogsArr = [];
    querySnapshot.forEach((doc) => {
      companyBlogsArr.push({ ...doc.data(), id: doc.id });
    });
    setAnnouncements(companyBlogsArr);
  });
  return () => unSubscribe();
}, []);


const postAnnouncement = async (e) => {
  e.preventDefault();
  if(assigned === "pupils") {
    await setDoc(
      doc(db, "announcementspupils", "annouce" + announceDate),
      {
        id: "announce" + announceDate,
        title: title,
        description: description,
        date: announceDate
      }
    );
  } else if(assigned === "staff") {
    await setDoc(
      doc(db, "announcementsstaff", "annouce" + announceDate),
      {
        id: "announce" + announceDate,
        title: title,
        description: description,
        date: announceDate
      }
    );
  } else {
    return
  }
  setTitle("");
  setDescription("");
  setAssigned("pupils");
  alert("Post Success");
};

const deleteAnnounce = async (id) => {
  await deleteDoc(doc(db, "announcementsstaff", id));
};

    return (
      <div className="portal-content">
        <MinNav />
        <div className="portal-page-content">
        <h2>Announcements</h2>
        <form onSubmit={postAnnouncement} className='annonce-form2'>
          <h3>Give Announcements</h3>
          <div className='inputs'>
          <select
              value={assigned}
              onChange={(e) => {
                setAssigned(e.target.value);
              }}
            >
              <option value="pupils">Pupils</option>
              <option value="staff">Staff</option>
            </select>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              required
            />
            <textarea
              // type="address"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              required
            />
            <button type='submit'>Post</button>
          </div>
        </form>
        <p>Latest</p>
        <ul className="announcements">
        {announcements.map((announcement, index) => (
              <Announcement
                key={index}
                announcement={announcement}
                deleteAnnounce={deleteAnnounce}
              />
            ))}
        </ul>
        </div>
      </div>
    )
}

export default Dashboard;