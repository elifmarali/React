import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useTitle from "../useTitle";

function TitleOne() {
  const [num, setNum] = useState(0);
  useTitle(num);
  return (
    <div>
      <button onClick={() => setNum(num + 1)}>Number - {num}</button>
    </div>
  );
}

export default TitleOne;
