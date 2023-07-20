import React from "react";
import "./Books.css";
import StudentsMinNav from "../minNav/MinVav";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import m1 from "./mathbooks/m1.pdf";
import m2 from "./mathbooks/m2.pdf";

const MathBooks = () => {

  return (
    <div className="portal-content">
      <StudentsMinNav />
      <div className="portal-page-content">
        <h2>Mathematics Books</h2>
        <br />
        <p>Select Subject</p>
        <ul className="quiz-sub-container">
            <li className="quiz-sub"><a href={m1}>INTRODUCTION TO DIFFERENTIATION</a></li>
            <li className="quiz-sub"><a href={m2}>ADDITIONAL MATHEMATICS PURE & APPLIED</a></li>
        </ul>
      </div>
    </div>
  );
};

export default MathBooks;
