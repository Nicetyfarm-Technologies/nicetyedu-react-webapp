import React from "react";
import { useDrag } from "react-dnd";

const Reagent = ({ type }) => {
  const [, drag] = useDrag({
    type: "CELL",
    item: { type },
  });

  return (
    <div ref={drag} className="cel">
      <div className="cell">
        <div className="cel-q"></div>
      </div>
      <p>{type}</p>
    </div>
  );
};

export default Reagent;
