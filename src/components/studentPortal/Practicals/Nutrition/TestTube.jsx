import React, { useState } from "react";
import { useDrop } from "react-dnd";

const TestTube = () => {
  const [cellCounts, setCellCounts] = useState({});
  const [substances, setSubstances] = useState([]);
  const [className, setClassName] = useState("petri-dish")
  // const solutionRef = useRef();

  const [, drop] = useDrop({
    accept: "CELL",
    drop: (item) => {
      const { type } = item;
      const updatedCounts = { ...cellCounts };
      updatedCounts[type] = (updatedCounts[type] || 0) + 1;
      setCellCounts(updatedCounts);
      const newArr = [...substances, item]
      setSubstances(newArr);
      // substances.push(item);
      // console.log(substances);
    },
  });

  const shakeTube = (item) => {
    console.log(item);
    const keyToCheck = "Mealie Meal";
    const iodine = "Iodine Solution";
    const benedict = "Benedict Solution";
    const biuret = "Biuret Reagent";
    const fish = "Fish";
    const apple = "Apple";
    const starchExists = substances.some(item => Object.values(item).includes(keyToCheck));
    const iodineExists = substances.some(item => Object.values(item).includes(iodine));
    const benedictExists = substances.some(item => Object.values(item).includes(benedict));
    const biuretExists = substances.some(item => Object.values(item).includes(biuret));
    const appleExists = substances.some(item => Object.values(item).includes(apple));
    const fishExists = substances.some(item => Object.values(item).includes(fish));

    if(starchExists && iodineExists) {
      console.log("Starch is present");
      setClassName("blue-black");
    } else if(fishExists && biuretExists) {
      console.log("Protein is present");
      setClassName("violet");
    } else if(appleExists && benedictExists) {
      console.log("Reducing Sugar is present");
      setClassName("oranged");
    } else if(benedictExists) {
      console.log("Reducing Sugar not present");
      setClassName("lightblue");
    } else if(biuretExists) {
      console.log("Protein not present");
      setClassName("blue");
    } else if(iodineExists) {
      console.log("Starch not present");
      setClassName("yellow-brown");
    } else {
      console.log("none detected");
      setClassName("cleared");
    }
    console.log(substances);
  }

  // const clearReagents = () => {
  //   setCellCounts(0);
  //   setSubstances({});
  // }

  return (
    <div className="food-sam">
      <div ref={drop} className={className}>
        {/* <h2>Mealie Meal</h2> */}
        <div className="cell-counts">
          {Object.keys(cellCounts).map((type) => (
            <p key={type}>
              {type}: {cellCounts[type]} drops
            </p>
          ))}
        </div>
      </div>
      <button type="button" onClick={shakeTube}>Shake/Heat</button>
      {/* <button type="button">Heat In Water Bath</button> */}
      {/* <button type="button" onClick={clearReagents}>Clear Reagents</button> */}
    </div>
  );
};

export default TestTube;
