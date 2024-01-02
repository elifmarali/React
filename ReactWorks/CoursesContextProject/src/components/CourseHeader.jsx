import React, { useContext } from "react";
import CourseContext from "../context/CourseContext";

function CourseHeader() {
  const { courses, fetchData } = useContext(CourseContext);
  const refreshCourses = () => {
    fetchData();
  };
  return (
    <div>
      {courses.length <= 0 ? (
        <div className="headerContainer">
          {" "}
          <h1 className="courseHeader">Kurslarin Hepsini Sildin</h1>
          <button className="deleteButton" onClick={refreshCourses}>
            Yenile
          </button>
        </div>
      ) : (
        <h1> Kurslarim</h1>
      )}
    </div>
  );
}

export default CourseHeader;
