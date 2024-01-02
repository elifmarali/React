import React from "react";
import "./App.css";
import Angular from "./assets/images/angular.jpg";
import Bootstrap from "./assets/images/bootstrap5.png";
import Ccsharp from "./assets/images/ccsharp.png";
import KompleWeb from "./assets/images/kompleweb.jpg";
function Course({ courseName }) {
  const courseMap = {
    Angular: Angular,
    Bootstrap: Bootstrap,
    Ccsharp: Ccsharp,
    KompleWeb: KompleWeb,
  };
  console.log(courseMap[courseName]);
  return (
    <div className="imageContainer">
      <img
        src={courseMap[courseName]}
        alt={courseName}
        className="courseImage"
      />
    </div>
  );
}
export default Course;
