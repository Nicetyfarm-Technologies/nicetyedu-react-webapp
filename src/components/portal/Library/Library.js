import React, { useState, useEffect } from "react";
import Modal from "react-modal";
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
// import './Dashboard.css'
import MinNav from "../minNav/MinVav";
import m1 from "./mathbooks/m1.pdf";
import m2 from "./mathbooks/m2.pdf";
import AddFile from "./AddFile";

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

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const addBook = async(e) => {
    e.preventDefault();
    if(level === "Junior-Secondary") {
      await setDoc(
        doc(db, "booksjunior", type + subject + date), {
          id: type + subject + date,
          title: title,
          level: level,
          subject: subject,
          type: type,
          fileUrl: fileUrl,
        }
      );
      // setTitle("");
      // setDescription("");
      // setAssignee("No one");
      alert("Book Added Successfully");  
    } else if(level === "Senior-Secondary") {
      await setDoc(
        doc(db, "bookssenior", type + subject + date), {
          id: type + subject + date,
          title: title,
          level: level,
          subject: subject,
          type: type,
          fileUrl: fileUrl,
        }
      );
      // setTitle("");
      // setDescription("");
      // setAssignee("No one");
      alert("Book Added Successfully");
    } else {
      await setDoc(
        doc(db, "booksteacher", type + subject + date), {
          id: type + subject + date,
          title: title,
          level: level,
          subject: subject,
          type: type,
          fileUrl: fileUrl,
        }
      );
      // setTitle("");
      // setDescription("");
      // setAssignee("No one");
      alert("Book Added Successfully");
    }
  }

  const addVideo = async(e) => {
    e.preventDefault();
    if(level === "Junior-Secondary") {
      await setDoc(
        doc(db, "videosjunior", subject + date), {
          id: subject + date,
          topic: topic,
          level: level,
          subject: subject,
          fileUrl: fileUrl,
        }
      );
      // setTitle("");
      // setDescription("");
      // setAssignee("No one");
      alert("Video Added Successfully");  
    } else if(level === "Senior-Secondary") {
      await setDoc(
        doc(db, "videosssenior", subject + date), {
          id: subject + date,
          topic: topic,
          level: level,
          subject: subject,
          fileUrl: fileUrl,
        }
      );
      // setTitle("");
      // setDescription("");
      // setAssignee("No one");
      alert("Video Added Successfully");
    }
  }

  const addPastpaper = async(e) => {
    e.preventDefault();
    if(level === "Junior-Secondary") {
      await setDoc(
        doc(db, "pastpapersjunior", subject + date), {
          id: subject + date,
          topic: topic,
          level: level,
          subject: subject,
          fileUrl: fileUrl,
        }
      );
      // setTitle("");
      // setDescription("");
      // setAssignee("No one");
      alert("Video Added Successfully");  
    } else if(level === "Senior-Secondary") {
      await setDoc(
        doc(db, "pastpaperssenior", subject + date), {
          id: subject + date,
          topic: topic,
          level: level,
          subject: subject,
          fileUrl: fileUrl,
        }
      );
      // setTitle("");
      // setDescription("");
      // setAssignee("No one");
      alert("Video Added Successfully");
    }
  }

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
    <div className="portal-content">
      <MinNav />
      <div className="portal-page-content">
        <h2>Library</h2>
        <ul className="el-container">
          {/* <li className='el'><Link to="/studentsdashboard/announcements">Announcements</Link></li> */}
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
          {/* <li className='el'><Link to="/studentsdashboard/timetables">Time Table</Link></li> */}
        </ul>

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

        <ul className="">
          
        </ul>
      </div>
    </div>
  );
};

export default Library;
