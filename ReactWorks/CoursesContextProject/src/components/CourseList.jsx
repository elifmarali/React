import React, { useContext } from "react";
import CourseContext from "../context/CourseContext";
import CourseItem from "./CourseItem";

function CourseList() {
  const { courses } = useContext(CourseContext);
  return (
    <div className="coursesContainer">
      {courses.map((course, index) => {
        return <CourseItem course={course} key={index}></CourseItem>;
      })}
    </div>
  );
}

export default CourseList;
