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
          <h1>Test For Nutrition Practicals</h1>
          <div className="container2">
            <div className="cell-container">
              <Reagent type="Iodine Solution" color="iodine"/>
              {/* <Reagent type=" dilute sodium hydroxide Solution" color="sodium"/> */}
              {/* <Reagent type="  sodium hydroxide Solution" color="ethanol"/> */}
              <Reagent type="Biuret Reagent" color="biuret"/>
              <Reagent type="Benedict Solution" color="benedict"/>
            </div>
            <div className="test-sub">
              <TestTube />
            </div>
            <div className="cell-container">
              <TestSub type="Mealie Meal" color="mealie"/>
              <TestSub type="Apple" color="milk"/>
              <TestSub type="Water" color="ethanol"/>
              <TestSub type="Fish" color="fish"/>
              {/* <Reagent type=" Benedict Solution" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nutrition;
