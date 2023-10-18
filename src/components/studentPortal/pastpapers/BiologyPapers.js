import React from "react";
import './Pastpapers.css'
import StudentsMinNav from "../minNav/MinVav";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import m115 from "./grade12eczbiology/m115.pdf";
import m116 from "./grade12eczbiology/m116.pdf";
import m117 from "./grade12eczbiology/m117.pdf";
import m118 from "./grade12eczbiology/m118.pdf";
import m119 from "./grade12eczbiology/m119.pdf";
import m120 from "./grade12eczbiology/m120.pdf";
import m215 from "./grade12eczbiology/m215.pdf";
import m216 from "./grade12eczbiology/m216.pdf";
import m217 from "./grade12eczbiology/m217.pdf";
import m218 from "./grade12eczbiology/m218.pdf";
import m219 from "./grade12eczbiology/m219.pdf";
import m220 from "./grade12eczbiology/m220.pdf";

const BiologyPastpapers = () => {
  
  return (
    <div className="portal-content">
      <StudentsMinNav />
      <div className="portal-page-content">
        <h2>G12 ECZ Biology Past Papers</h2><br />
        <div className="math-papers">
            <a href={m115}>2015 Biology Paper 1</a>
            <a href={m215}>2015 Biology Paper 2</a>
            <a href={m116}>2016 Biology Paper 1</a>
            <a href={m216}>2016 Biology Paper 2</a>
            <a href={m117}>2017 Biology Paper 1</a>
            <a href={m217}>2017 Biology Paper 2</a>
            <a href={m118}>2018 Biology Paper 1</a>
            <a href={m218}>2018 Biology Paper 2</a>
            <a href={m119}>2019 Biology Paper 1</a>
            <a href={m219}>2019 Biology Paper 2</a>
            <a href={m120}>2020 Biology Paper 1</a>
            <a href={m220}>2020 Biology Paper 2</a>
        </div>
      </div>
    </div>
  );
};

export default BiologyPastpapers;
