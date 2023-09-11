import React from "react";
import StudentsMinNav from "../../minNav/MinVav";
import "./Nutrition.css";
import Reagent from "./Reagent";
import TestSub from "./TestSub";
import TestTube from "./TestTube";

function Nutrition() {
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
              <TestTube />
            </div>
            <div className="cell-container">
              <TestSub type="Mealie Meal" />
              <TestSub type=" Coffee" />
              <TestSub type="  Cheese" />
              <TestSub type=" Fish" />
              {/* <Reagent type=" Benedict Solution" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nutrition;
