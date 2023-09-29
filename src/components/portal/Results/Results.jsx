import React from "react";
import './Results.css'
import MinNav from "../minNav/MinVav";
import { Link } from "react-router-dom";

const Results = () => {
  return (
    <div className="portal-content">
      <MinNav />
      <div className="portal-page-content">
        <h2>Results</h2><br />
        <div className="practicals">
        <Link to="/dashboard/results/create" activestyle="true">Create New Term</Link>
          <Link to="/dashboard/results/ca" activestyle="true">Continuous Assessments</Link>
          <Link to="/dashboard/results/end" activestyle="true">End of Term</Link>
          <Link to="/dashboard/results/input" activestyle="true">Input Results</Link>
        </div>
      </div>
    </div>
  );
};

export default Results;
