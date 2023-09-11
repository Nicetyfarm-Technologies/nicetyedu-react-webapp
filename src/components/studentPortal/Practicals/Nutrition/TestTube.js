import React, { useState } from "react";
import { useDrop } from "react-dnd";

const TestTube = () => {
  const [cellCounts, setCellCounts] = useState({});

  const [, drop] = useDrop({
    accept: "CELL",
    drop: (item) => {
      const { type } = item;
      const updatedCounts = { ...cellCounts };
      updatedCounts[type] = (updatedCounts[type] || 0) + 1;
      setCellCounts(updatedCounts);
    },
  });

  const clearReagents = () => {
    setCellCounts(0);
  }

  return (
    <div className="food-sam">
      <div ref={drop} className="petri-dish">
        {/* <h2>Mealie Meal</h2> */}
        <div className="cell-counts">
          {Object.keys(cellCounts).map((type) => (
            <p key={type}>
              {type}: {cellCounts[type]} drops
            </p>
          ))}
        </div>
      </div>
      <button type="button">Shake to Mix</button>
      <button type="button">Heat</button>
      <button type="button" onClick={clearReagents}>Clear Reagents</button>
    </div>
  );
};

export default TestTube;
