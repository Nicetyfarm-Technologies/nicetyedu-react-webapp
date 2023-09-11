import React from 'react';
import "./Practicals.css"
import StudentsMinNav from '../minNav/MinVav';

const Practicals = () => {

    return (
      <div className="portal-content">
        <StudentsMinNav />
        <div className="portal-page-content">
        <h2>Practicals</h2>

        <div className="practicals">
            <a href="/studentsdashboard/practicals/nutrition">Test For Nutrition</a>
            {/* <a href="#">Grade 8 Term 2</a> */}
        </div>
        </div>
      </div>
    )
}

export default Practicals;