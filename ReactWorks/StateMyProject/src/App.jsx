import { useState } from "react";
import "./App.css";
import Course from "./Course";
function getRandomCourse() {
  const courseNames = ["Angular", "Bootstrap", "Ccsharp", "KompleWeb"];
  return courseNames[Math.floor(courseNames.length * Math.random())];
}

function App() {
  const [courses, setCourses] = useState([]);
  const handleClick = () => {
    setCourses([...courses, getRandomCourse()]);
  };
  return (
    <>
      <div className="courseContainer">
        <button onClick={handleClick} className="courseAddButton">
          Kurs Ekle
        </button>
        <div className="imagesContainer">
          {courses.map((course, index) => {
            return <Course courseName={course} key={index} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
