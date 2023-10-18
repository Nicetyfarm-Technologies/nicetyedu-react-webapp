import React from "react";
import './Pastpapers.css';
import m115 from "./grade12eczmath/m115.pdf";
import m116 from "./grade12eczmath/m116.pdf";
import m117 from "./grade12eczmath/m117.pdf";
import m118 from "./grade12eczmath/m118.pdf";
import m119 from "./grade12eczmath/m119.pdf";
import m120 from "./grade12eczmath/m120.pdf";
import m215 from "./grade12eczmath/m215.pdf";
import m216 from "./grade12eczmath/m216.pdf";
import m217 from "./grade12eczmath/m217.pdf";
import m218 from "./grade12eczmath/m218.pdf";
import m219 from "./grade12eczmath/m219.pdf";
import m220 from "./grade12eczmath/m220.pdf";

const MathPastpapers = () => {
  
  return (
    <>
        <h2>G12 ECZ Mathematics Past Papers</h2><br />
        <div className="math-papers">
            <a href={m115}>2015 Mathematics Paper 1</a>
            <a href={m215}>2015 Mathematics Paper 2</a>
            <a href={m116}>2016 Mathematics Paper 1</a>
            <a href={m216}>2016 Mathematics Paper 2</a>
            <a href={m117}>2017 Mathematics Paper 1</a>
            <a href={m217}>2017 Mathematics Paper 2</a>
            <a href={m118}>2018 Mathematics Paper 1</a>
            <a href={m218}>2018 Mathematics Paper 2</a>
            <a href={m119}>2019 Mathematics Paper 1</a>
            <a href={m219}>2019 Mathematics Paper 2</a>
            <a href={m120}>2020 Mathematics Paper 1</a>
            <a href={m220}>2020 Mathematics Paper 2</a>
        </div>
      </>
  );
};

export default MathPastpapers;
