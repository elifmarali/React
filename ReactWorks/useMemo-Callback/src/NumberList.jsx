import React, { useEffect, useState } from "react";

function NumberList({ getItems }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    console.log("updating numberList");
    return setItems(getItems());
  }, [getItems]);
  return (
    <ul>
      {items.map((item, index) => {
        return <ol key={index}>{item}</ol>;
      })}
    </ul>
  );
}

export default NumberList;
