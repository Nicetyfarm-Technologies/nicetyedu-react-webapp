import React from "react";
import "./Assignments.css";
import StudentsMinNav from "../minNav/MinVav";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { NavLink } from "react-router-dom";

const Assignments = () => {

  return (
    <>
        {/* <h2>Students' Assignments</h2> */}
        <br />
        
        <ul className="quiz-sub-container">
            <div className="coming-soon">Coming Soon</div>
        </ul>
      </>
  );
};

export default Assignments;
