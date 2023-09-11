import React from "react";
import StudentsMinNav from "../../minNav/MinVav";
import "./Cells.css";
import MealieMeal from "./MealieMeal";
import Cheese from "./Cheese";
import Coffee from "./Coffee";
import Reagent from "./Reagent";

function Cells() {
  return (
    <div className="portal-content">
      <StudentsMinNav />
      <div className="portal-page-content">
        <div className="App2">
          <h1>Biology Digital Practicals</h1>
          <div className="container2">
            <div className="cell-container">
              <Reagent type="Iodine Solution" />
              <Reagent type=" dilute sodium hydroxide Solution" />
              <Reagent type="  sodium hydroxide Solution" />
              <Reagent type=" Ethanol Solution" />
              <Reagent type=" Benedict Solution" />
            </div>
            <div className="test-sub">
            <MealieMeal />
            <Cheese />
            <Coffee />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cells;
