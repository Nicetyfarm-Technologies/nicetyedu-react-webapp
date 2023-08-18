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
import "./Announcements.css";
import StudentsMinNav from "../minNav/MinVav";
import Announcement from "./Announcement";

const Announcements = () => {

  const [announcements, setAnnouncements] = useState([
    {
      title: "Closure Of Schools",
      description: "Dear pupils, kindly be informed that schools will be closed on the 4th to 8th of October due to the announcement by the ministry of Education",
    }
  ])

  useEffect(() => {
    const q = query(collection(db, 'announcementspupils'));
    const unSubscribe = onSnapshot(q, (querySnapshot) => {
      const companyBlogsArr = [];
      querySnapshot.forEach((doc) => {
        companyBlogsArr.push({ ...doc.data(), id: doc.id });
      });
      setAnnouncements(companyBlogsArr);
    });
    return () => unSubscribe();
  }, []);

  const deleteAnnounce = async (id) => {
    await deleteDoc(doc(db, "announcementspupils", id));
  };

  return (
    <div className="portal-content">
      <StudentsMinNav />
      <div className="portal-page-content">
        <h2>Announcements</h2>
        <br />
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
  );
};

export default Announcements;
