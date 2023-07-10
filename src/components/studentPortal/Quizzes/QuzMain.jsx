import React from "react";
import "./App.css";
import StudentsMinNav from "../minNav/MinVav";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { NavLink } from "react-router-dom";

const QuizMain = () => {

  return (
    <div className="portal-content">
      <StudentsMinNav />
      <div className="portal-page-content">
        <h2>Examination Quiz</h2>
        <br />
        <p>Select Subject</p>
        <ul className="quiz-sub-container">
            <li className="quiz-sub"><Link to="/studentsdashboard/quizzes/math">Math Quiz</Link></li>
            <li className="quiz-sub"><Link to="/studentsdashboard/quizzes/english">English Quiz</Link></li>
            <li className="quiz-sub"><Link to="/studentsdashboard/quizzes/biology">Biology Quiz</Link></li>
            <li className="quiz-sub"><Link to="/studentsdashboard/quizzes/science">Science Quiz</Link></li>
            <li className="quiz-sub"><Link to="/studentsdashboard/quizzes/accounts">Accounts Quiz</Link></li>
            <li className="quiz-sub"><Link to="/studentsdashboard/quizzes/commerce">Commerce Quiz</Link></li>
            <li className="quiz-sub"><Link to="/studentsdashboard/quizzes/dt">D&T Quiz</Link></li>
            <li className="quiz-sub"><Link to="/studentsdashboard/quizzes/fn">FN Quiz</Link></li>
            <li className="quiz-sub"><Link to="/studentsdashboard/quizzes/art">Art Quiz</Link></li>
            <li className="quiz-sub"><Link to="/studentsdashboard/quizzes/history">History Quiz</Link></li>
            <li className="quiz-sub"><Link to="/studentsdashboard/quizzes/ce">Civic Education Quiz</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default QuizMain;
