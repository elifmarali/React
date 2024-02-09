import React from "react";
import "./App.css";
function Course({ availableCourse }) {
  return (
    <div className="cardContainer">
      <div className="cardTopContainer">
        <h2>{availableCourse?.title}</h2>
        <h4>{availableCourse?.price}TL</h4>
      </div>
      <div className="cardContentSection">{availableCourse?.content}</div>
    </div>
  );
}

export default Course;
