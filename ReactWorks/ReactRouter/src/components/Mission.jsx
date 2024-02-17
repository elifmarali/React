import React from "react";
import { useNavigate } from "react-router-dom";

function Mission() {
  const nav = useNavigate();
  return (
    <>
      <div>Mission</div>
      <button
        onClick={() => {
          nav("/");
        }}
      >
        Home
      </button>
    </>
  );
}

export default Mission;
