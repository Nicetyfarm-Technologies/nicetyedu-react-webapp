import React from "react";
import './Results.css'
import MinNav from "../minNav/MinVav";
import { Link } from "react-router-dom";

const CreateTerm = () => {
  return (
    <div className="portal-content">
      <MinNav />
      <div className="portal-page-content">
        <h2>Create Term</h2><br />
        <div className="practicals"></div>
      </div>
    </div>
  );
};

export default CreateTerm;
