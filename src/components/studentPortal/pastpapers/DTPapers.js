import React from "react";
import './Pastpapers.css'
import StudentsMinNav from "../minNav/MinVav";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import m115 from "./grade12eczdt/m115.pdf";
import m116 from "./grade12eczdt/m116.pdf";
import m117 from "./grade12eczdt/m117.pdf";
import m118 from "./grade12eczdt/m118.pdf";
import m119 from "./grade12eczdt/m119.pdf";
import m120 from "./grade12eczdt/m120.pdf";
import m215 from "./grade12eczdt/m215.pdf";
import m216 from "./grade12eczdt/m216.pdf";
import m217 from "./grade12eczdt/m217.pdf";
import m218 from "./grade12eczdt/m218.pdf";
import m219 from "./grade12eczdt/m219.pdf";
import m220 from "./grade12eczdt/m220.pdf";

const DTPastpapers = () => {
  
  return (
    <div className="portal-content">
      <StudentsMinNav />
      <div className="portal-page-content">
        <h2>G12 ECZ DT Past Papers</h2><br />
        <div className="math-papers">
            <a href={m115}>2015 DT Paper 1</a>
            <a href={m215}>2015 DT Paper 2</a>
            <a href={m116}>2016 DT Paper 1</a>
            <a href={m216}>2016 DT Paper 2</a>
            <a href={m117}>2017 DT Paper 1</a>
            <a href={m217}>2017 DT Paper 2</a>
            <a href={m118}>2018 DT Paper 1</a>
            <a href={m218}>2018 DT Paper 2</a>
            <a href={m119}>2019 DT Paper 1</a>
            <a href={m219}>2019 DT Paper 2</a>
            <a href={m120}>2020 DT Paper 1</a>
            <a href={m220}>2020 DT Paper 2</a>
        </div>
      </div>
    </div>
  );
};

export default DTPastpapers;
