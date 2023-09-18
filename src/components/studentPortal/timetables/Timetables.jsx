import React from "react";
import StudentsMinNav from "../minNav/MinVav";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { NavLink } from "react-router-dom";

const Timetables = () => {

  return (
    <div className="portal-content">
      <StudentsMinNav />
      <div className="portal-page-content">
        {/* <h2>Students' Assignments</h2> */}
        <br />
        
        <ul className="quiz-sub-container">
            <div className="coming-soon">Coming Soon</div>
        </ul>
      </div>
    </div>
  );
};

export default Timetables;
