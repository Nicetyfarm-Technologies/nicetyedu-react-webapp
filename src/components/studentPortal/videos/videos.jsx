import React, { useState, useEffect } from "react";
import { onSnapshot, query, collection } from "firebase/firestore";
import { db } from "../../firebase/config";
import "./Videos.css";
import StudentsMinNav from "../minNav/MinVav";

const StudentsVideos = () => {
  const [videosJunior, setVideosJunior] = useState([]);
  const [videosSenior, setVideosSenior] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "videosjunior"));
    const unSubscribe = onSnapshot(q, (querySnapshot) => {
      const companyBlogsArr = [];
      querySnapshot.forEach((doc) => {
        companyBlogsArr.push({ ...doc.data(), id: doc.id });
      });
      setVideosJunior(companyBlogsArr);
    });
    return () => unSubscribe();
  }, []);

  useEffect(() => {
    const q = query(collection(db, "videosssenior"));
    const unSubscribe = onSnapshot(q, (querySnapshot) => {
      const companyBlogsArr = [];
      querySnapshot.forEach((doc) => {
        companyBlogsArr.push({ ...doc.data(), id: doc.id });
      });
      setVideosSenior(companyBlogsArr);
    });
    return () => unSubscribe();
  }, []);

  return (
    <div className="portal-content">
      <StudentsMinNav />
      <div className="portal-page-content">
        <h2>Video Lessons</h2>
        <br />

        <h3>Junior Secondary</h3>
        <div className="vid-sub-container">
        {videosJunior.map((video, index) => (
              <div className="video-container" autoPlay="true" kind="captions">
              <p>{video.subject} - {video.topic}</p>
              <video className="w-100 h-80 rounded-" controls>
                <source src={video.fileUrl} type="video/mp4" />
                <track src="captions_en.vtt" kind="captions" />
              </video>
            </div>
            ))}
        </div>
        <br />

        <h3>Senior Secondary</h3>
        <div className="vid-sub-container">
        {videosSenior.map((video, index) => (
              <div className="video-container" autoPlay="true" kind="captions">
              <p>{video.subject} - {video.topic}</p>
              <video className="w-100 h-80 rounded-" controls>
                <source src={video.fileUrl} type="video/mp4" />
                <track src="captions_en.vtt" kind="captions" />
              </video>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default StudentsVideos;
