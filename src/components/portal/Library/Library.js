import React from 'react';
// import './Dashboard.css'
import MinNav from '../minNav/MinVav';
import m1 from "./mathbooks/m1.pdf";
import m2 from "./mathbooks/m2.pdf";

const Library = () => {
    return (
      <div className="portal-content">
        <MinNav />
        <div className="portal-page-content">
        <h2>Library</h2>
        <ul className="quiz-sub-container">
            <li className="quiz-sub"><a href={m1}>INTRODUCTION TO DIFFERENTIATION</a></li>
            <li className="quiz-sub"><a href={m2}>ADDITIONAL MATHEMATICS PURE & APPLIED</a></li>
        </ul>
        </div>
      </div>
    )
}

export default Library;