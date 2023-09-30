import React from "react";
import Angular from "./assets/images/angular.jpg";
import Bootstrap from "./assets/images/bootstrap5.png";
import Ccsharp from "./assets/images/ccsharp.png";
import KompleWeb from "./assets/images/kompleweb.jpg";
import "./App.css";
function Course({ courseName }) {
  const courseMap = {
    Angular,
    Bootstrap,
    Ccsharp,
    KompleWeb,
  };
  return (
    <div className="courseDiv">
      <img className="course" src={courseMap[courseName]} alt="" />
    </div>
  );
}

export default Course;
