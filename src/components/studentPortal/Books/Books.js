import React from "react";
import "./Books.css";
import StudentsMinNav from "../minNav/MinVav";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { NavLink } from "react-router-dom";

const Books = () => {

  return (
    <div className="portal-content">
      <StudentsMinNav />
      <div className="portal-page-content">
        <h2>Students' Books</h2>
        <br />
        <p>Select Subject</p>
        <ul className="quiz-sub-container">
            <li className="quiz-sub"><Link to="/studentsdashboard/books/math">Mathematics</Link></li>
            <li className="quiz-sub"><Link to="/studentsdashboard/books/english">English</Link></li>
            <li className="quiz-sub"><Link to="/studentsdashboard/books/biology">Biology</Link></li>
            <li className="quiz-sub"><Link to="/studentsdashboard/books/science">Science</Link></li>
            <li className="quiz-sub"><Link to="/studentsdashboard/books/accounts">Accounts</Link></li>
            <li className="quiz-sub"><Link to="/studentsdashboard/books/commerce">Commerce</Link></li>
            <li className="quiz-sub"><Link to="/studentsdashboard/books/dt">D&T</Link></li>
            <li className="quiz-sub"><Link to="/studentsdashboard/books/fn">FN</Link></li>
            <li className="quiz-sub"><Link to="/studentsdashboard/books/art">Art</Link></li>
            <li className="quiz-sub"><Link to="/studentsdashboard/books/history">History</Link></li>
            <li className="quiz-sub"><Link to="/studentsdashboard/books/ce">Civic Education</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Books;
