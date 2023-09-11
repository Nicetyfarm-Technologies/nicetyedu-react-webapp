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
    const starchExists = substances.some(item => Object.values(item).includes(keyToCheck));
    const iodineExists = substances.some(item => Object.values(item).includes(iodine));

    if(starchExists && iodineExists) {
      console.log("Starch is present");
      setClassName("blue-black");
    } else {
      console.log("Starch not present");
      setClassName("yellow-brown");
    }
    console.log(substances);
  }

  const clearReagents = () => {
    setCellCounts(0);
    setSubstances({});
  }

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
      <button type="button" onClick={shakeTube}>Shake to Mix</button>
      <button type="button">Heat</button>
      {/* <button type="button" onClick={clearReagents}>Clear Reagents</button> */}
    </div>
  );
};

export default TestTube;
