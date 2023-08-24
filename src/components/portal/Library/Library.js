import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
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
        />

        <ul className="quiz-sub-container">
          <li className="quiz-sub">
            <a href={m1}>INTRODUCTION TO DIFFERENTIATION</a>
          </li>
          <li className="quiz-sub">
            <a href={m2}>ADDITIONAL MATHEMATICS PURE & APPLIED</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Library;
