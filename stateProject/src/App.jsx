import { useState } from "react";
import "./App.css";
import Course from "./Course";
function getRandomCourse() {
  const coursesArray = ["Angular", "Bootstrap", "Ccsharp", "KompleWeb"];
  return coursesArray[Math.floor(Math.random() * coursesArray.length)];
}

function App() {
  const [course, setCourse] = useState([]);
  function handleClick() {
    setCourse([...course, getRandomCourse()]);
  }
  return (
    <>
      <button onClick={handleClick}>Course Add</button>
      {course.map((course, index) => {
        <Course courseName={course} key={index}></Course>;
      })}
    </>
  );
}

export default App;
