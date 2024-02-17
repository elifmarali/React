import React, { useDeferredValue, useMemo, useState } from "react";

function Character({ input }) {
  const defferedValue = useDeferredValue(input);
  const myList = useMemo(() => {
    const myArray = [];
    for (let i = 0; i < 2000; i++) {
      myArray.push(<div key={i}>{defferedValue}</div>);
    }
    return myArray;
  }, [defferedValue]);
  return myList;
}

export default Character;
