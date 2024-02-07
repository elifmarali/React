import React from "react";
import Course from "./Course";
import "./App.css";

function Courses({ coursesList, removeCourse }) {
  console.log(coursesList);
  return (
    <div className="container">
      <h1>Kurslarim</h1>
      <div className="cardsContainer">
        {coursesList.map((course, index) => {
          return (
            <Course
              key={index}
              courseId={course.id}
              courseTitle={course.title}
              courseContent={course.content}
              coursePrice={course.price}
              handleClickDelete={removeCourse}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Courses;
