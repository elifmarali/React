import React, { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function ExpandablePanel({ children, userName, header }) {
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="panelDiv">
      <div className="betweenContainer">
        {header}{" "}
        <button className="buttons" onClick={() => handleClick()}>
          {expanded ? <GoChevronDown /> : <GoChevronLeft />}
        </button>
      </div>
      {expanded && <div>{children}</div>}
    </div>
  );
}

export default ExpandablePanel;
