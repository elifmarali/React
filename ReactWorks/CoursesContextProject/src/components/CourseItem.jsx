import React from "react";
import { useContext } from "react";
import CourseContext from "../context/CourseContext";

function CourseItem({ course }) {
  const { courseDeleteByName } = useContext(CourseContext);

  const courseDeleteClick = () => {
    courseDeleteByName(course.courseName);
  };
  return (
    <div className="courseItem">
      <h4 className="courseItemHeader">{course.courseName}</h4>
      <h6 className="courseItemPrice">{course.coursePrice}</h6>
      <p>{course.courseDescription}</p>
      <button className="deleteButton" onClick={courseDeleteClick}>
        Sil
      </button>
    </div>
  );
}

export default CourseItem;
