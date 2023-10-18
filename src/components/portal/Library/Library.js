import React, { useState, useEffect } from "react";
import {
  onSnapshot,
  query,
  collection,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase/config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import AddFile from "./AddFile";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

const delet = <FontAwesomeIcon icon={faDeleteLeft} />;

const customStyles = {
  content: {
    top: "10%",
    left: "10%",
    right: "auto",
    bottom: "auto",
    margin: "2%",
    // transform: 'translate(-10%, -10%)',
  },
};

const Library = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [val, setVal] = useState(null);
  const [title, setTitle] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [level, setLevel] = useState("Junior-Secondary");
  const [term, setTerm] = useState("Term-1");
  const [category, setCategory] = useState("Mid-Term");
  const [subject, setSubject] = useState("Mathematics");
  const [type, setType] = useState("Textbook");
  const [topic, setTopic] = useState("");
  const [year, setYear] = useState("2015");
  const [date, setDate] = useState();
  const [adminEmail, setAdminEmail] = useState(null);
  const [booksJunior, setBooksJunior] = useState([{}]);
  const [booksSenior, setBooksSenior] = useState([{}]);
  const [videosJunior, setVideosJunior] = useState([]);
  const [videosSenior, setVideosSenior] = useState([]);

  const deleteJuniorBook = async (id) => {
    console.log("How about now");
    await deleteDoc(doc(db, "booksjunior", id));
  };

  const deleteSeniorBook = async (id) => {
    console.log("How about now2");
    await deleteDoc(doc(db, "bookssenior", id));
  };

  const deleteJuniorVideo = async (id) => {
    console.log("How about now3");
    await deleteDoc(doc(db, "videosjunior", id));
  };

  const deleteSeniorVideo = async (id) => {
    console.log("How about now4");
    await deleteDoc(doc(db, "videosssenior", id));
  };

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userEmail = user.email;
        if (userEmail === "steve@nicetyfarm.org") {
          setAdminEmail(userEmail);
        }
      } else {
      }
    });
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const q = query(collection(db, "booksjunior"));
    const unSubscribe = onSnapshot(q, (querySnapshot) => {
      const companyBlogsArr = [];
      querySnapshot.forEach((doc) => {
        companyBlogsArr.push({ ...doc.data(), id: doc.id });
      });
      setBooksJunior(companyBlogsArr);
    });
    return () => unSubscribe();
  }, []);

  useEffect(() => {
    const q = query(collection(db, "bookssenior"));
    const unSubscribe = onSnapshot(q, (querySnapshot) => {
      const companyBlogsArr = [];
      querySnapshot.forEach((doc) => {
        companyBlogsArr.push({ ...doc.data(), id: doc.id });
      });
      setBooksSenior(companyBlogsArr);
    });
    return () => unSubscribe();
  }, []);

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

  const addBook = async (e) => {
    e.preventDefault();
    if (level === "Junior-Secondary") {
      await setDoc(doc(db, "booksjunior", type + subject + date), {
        id: type + subject + date,
        title: title,
        level: level,
        subject: subject,
        type: type,
        fileUrl: fileUrl,
      });
      alert("Book Added Successfully");
    } else if (level === "Senior-Secondary") {
      await setDoc(doc(db, "bookssenior", type + subject + date), {
        id: type + subject + date,
        title: title,
        level: level,
        subject: subject,
        type: type,
        fileUrl: fileUrl,
      });
      alert("Book Added Successfully");
    } else {
      await setDoc(doc(db, "booksteacher", type + subject + date), {
        id: type + subject + date,
        title: title,
        level: level,
        subject: subject,
        type: type,
        fileUrl: fileUrl,
      });
      alert("Book Added Successfully");
    }
  };

  const addVideo = async (e) => {
    e.preventDefault();
    if (level === "Junior-Secondary") {
      await setDoc(doc(db, "videosjunior", subject + date), {
        id: subject + date,
        topic: topic,
        level: level,
        subject: subject,
        fileUrl: fileUrl,
      });
      // setTitle("");
      // setDescription("");
      // setAssignee("No one");
      alert("Video Added Successfully");
    } else if (level === "Senior-Secondary") {
      await setDoc(doc(db, "videosssenior", subject + date), {
        id: subject + date,
        topic: topic,
        level: level,
        subject: subject,
        fileUrl: fileUrl,
      });
      // setTitle("");
      // setDescription("");
      // setAssignee("No one");
      alert("Video Added Successfully");
    }
  };

  const addPastpaper = async (e) => {
    e.preventDefault();
    if (level === "Junior-Secondary") {
      await setDoc(doc(db, "pastpapersjunior", subject + year + date), {
        id: subject + year + date,
        year: year,
        level: level,
        subject: subject,
        fileUrl: fileUrl,
        term: term,
        category: category,
      });
      alert("Video Added Successfully");
    } else if (level === "Senior-Secondary") {
      await setDoc(doc(db, "pastpaperssenior", subject + year + date), {
        id: subject + year + date,
        year: year,
        level: level,
        subject: subject,
        fileUrl: fileUrl,
        term: term,
        category: category,
      });
      alert("Video Added Successfully");
    }
  };

  function openModal() {
    setVal(1);
    setIsOpen(true);
  }

  function openModal2() {
    setVal(2);
    setIsOpen(true);
  }

  function openModal3() {
    setVal(3);
    setIsOpen(true);
  }

  function openModal4() {
    setVal(4);
    setIsOpen(true);
  }

  function openModal5() {
    setVal(5);
    setIsOpen(true);
  }

  function openModal6() {
    setVal(6);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <h2>Library</h2>
      {adminEmail ? (
        <ul className="el-container">
          <li className="el">
            <button type="button" onClick={() => openModal()}>
              Add Books
            </button>
          </li>
          <li className="el">
            <button type="button" onClick={() => openModal2()}>
              Add Videos
            </button>
          </li>
          <li className="el">
            <button type="button" onClick={() => openModal3()}>
              Add Past Papers
            </button>
          </li>
          <li className="el">
            <button type="button" onClick={() => openModal4()}>
              Add Quizzes
            </button>
          </li>
          <li className="el">
            <button type="button" onClick={() => openModal5()}>
              Add Practicals
            </button>
          </li>
          <li className="el">
            <button type="button" onClick={() => openModal6()}>
              Add Assignments
            </button>
          </li>
        </ul>
      ) : (
        ""
      )}
      <br /> <br />
      <h3>Books</h3>
      <p>Junior Secondary</p>
      <ul className="quiz-sub-container">
        {booksJunior.map((book, index) => (
          <li className="quiz-sub">
            <Link to={book.fileUrl}>{book.title}</Link>
            {adminEmail ? (
              <div className="delet" onClick={() => {deleteJuniorBook(book.id)}}>
                {delet}
              </div>
            ) : (
              ""
            )}
          </li>
        ))}
      </ul>
      <br />
      <br />
      <br />
      <p>Senior Secondary</p>
      <ul className="quiz-sub-container">
        {booksSenior.map((book, index) => (
          <li className="quiz-sub">
            <Link to={book.fileUrl}>{book.title} </Link>
            {adminEmail ? (
              <div className="delet" onClick={() => {deleteSeniorBook(book.id)}}>
                {delet}
              </div>
            ) : (
              ""
            )}
          </li>
        ))}
      </ul>
      <br /> <br />
      <h3>Videos</h3>
      <h3>Junior Secondary</h3>
      <div className="vid-sub-container">
        {videosJunior.map((video, index) => (
          <div className="video-container" autoPlay="true" kind="captions">
            <p>
              {video.subject} - {video.topic}
            </p>
            <video className="w-100 h-80 rounded-" controls>
              <source src={video.fileUrl} type="video/mp4" />
              <track src="captions_en.vtt" kind="captions" />
            </video>
            {adminEmail ? (
              <button onClick={() => {deleteJuniorVideo(video.id)}}>
                Delete Video
              </button>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
      <br />
      <h3>Senior Secondary</h3>
      <div className="vid-sub-container">
        {videosSenior.map((video, index) => (
          <div className="video-container" autoPlay="true" kind="captions">
            <p>
              {video.subject} - {video.topic}
            </p>
            <video className="w-100 h-80 rounded-" controls>
              <source src={video.fileUrl} type="video/mp4" />
              <track src="captions_en.vtt" kind="captions" />
            </video>
            {adminEmail ? (
              <button onClick={() => {deleteSeniorVideo(video.id)}}>
                Delete Video
              </button>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
      <br /> <br />
      <h3>Pastpapers</h3>
      <AddFile
        val={val}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        customStyles={customStyles}
        title={title}
        setTitle={setTitle}
        level={level}
        setLevel={setLevel}
        type={type}
        setType={setType}
        topic={topic}
        setTopic={setTopic}
        year={year}
        setYear={setYear}
        subject={subject}
        setSubject={setSubject}
        term={term}
        setTerm={setTerm}
        category={category}
        setCategory={setCategory}
        fileUrl={fileUrl}
        setFileUrl={setFileUrl}
        addBook={addBook}
        addVideo={addVideo}
        addPastpaper={addPastpaper}
      />
      <ul className=""></ul>
    </>
  );
};

export default Library;
