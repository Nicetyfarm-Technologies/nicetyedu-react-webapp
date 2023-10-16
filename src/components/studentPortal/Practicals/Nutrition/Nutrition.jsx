import React from "react";
import { DndProvider } from 'react-dnd';
import {MultiBackend} from 'react-dnd-multi-backend';
import {HTML5Backend} from 'react-dnd-html5-backend';
import {TouchBackend} from 'react-dnd-touch-backend';
import StudentsMinNav from "../../minNav/MinVav";
import "./Nutrition.css";
import Reagent from "./Reagent";
import TestSub from "./TestSub";
import TestTube from "./TestTube";


const HTML5toTouch = {
  backends: [
    {
      backend: HTML5Backend,
    },
    {
      backend: TouchBackend,
      options: { enableMouseEvents: true }, // Enable mouse events for touch
    },
  ],
};

function Nutrition() {
  return (
    <DndProvider backend={MultiBackend} options={HTML5toTouch}>
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
      </DndProvider>
  );
}

export default Nutrition;
