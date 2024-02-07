import React from "react";
import "./App.css";
function Course({
  courseId,
  courseTitle,
  courseContent,
  coursePrice,
  handleClickDelete,
}) {
  return (
    <div className="cardContainer">
      <div className="cardTopContainer">
        <h2>{courseTitle}</h2>
        <h4>{coursePrice}TL</h4>
      </div>
      <div className="cardContentSection">{courseContent}</div>
      <button
        className="deleteButton"
        onClick={() => {
          handleClickDelete(courseId);
        }}
      >
        Kursu Sil
      </button>
    </div>
  );
}
export default Course;
