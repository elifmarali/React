import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const nav = useNavigate();
  return (
    <>
      <div>Home</div>
      <button
        onClick={() => {
          nav("/mission");
        }}
      >
        Mission
      </button>
    </>
  );
}

export default Home;
