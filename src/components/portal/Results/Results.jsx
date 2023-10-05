import React from "react";
import './Results.css';
import { Link } from "react-router-dom";

const Results = () => {
  return (
    <>
        <h2>Results</h2><br />
        <div className="practicals">
        <Link to="/dashboard/results/create" activestyle="true">Create New Term</Link>
          <Link to="/dashboard/results/ca" activestyle="true">Continuous Assessments</Link>
          <Link to="/dashboard/results/end" activestyle="true">End of Term</Link>
          <Link to="/dashboard/results/input" activestyle="true">Input Results</Link>
        </div>
    </>
  );
};

export default Results;
