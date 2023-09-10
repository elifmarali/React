import React from "react";
import Angular from "./assets/images/angular.jpg";
import Bootstrap from "./assets/images/bootstrap5.png";
import Ccsharp from "./assets/images/ccsharp.png";
import KompleWeb from "./assets/images/kompleweb.jpg";
const courseMap = {
  Angular: Angular,
  Bootstrap: Bootstrap,
  Ccsharp: Ccsharp,
  KompleWeb: KompleWeb,
};
function Course({ courseName }) {
  console.log(courseMap[courseName]);
  return (
    <div>
      <img src={courseMap[courseName]} alt="" />
    </div>
  );
}

export default Course;
