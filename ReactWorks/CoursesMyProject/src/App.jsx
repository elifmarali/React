import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import Courses from "./Courses";
import Loading from "./Loading";

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchCourses = async () => {
    //hem hata varsa hemde bekleme suresi boyunca loading gozukmesi
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/courses");
      setCourses(response.data);
      setLoading(false);
    } catch (err) {
      setLoading(true);
      console.log(err);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, []);

  const removeOneCourse = (id) => {
    const afterDeleteCourses = courses.filter((course) => course.id !== id);
    setCourses(afterDeleteCourses);
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {courses.length === 0 ? (
            <div className="refreshContainer">
              <div className="refreshText">Kurslarin Hepsini Sildin</div>
              <button
                className="refreshButton"
                onClick={() => {
                  fetchCourses();
                }}
              >
                Kurslari Yenile
              </button>
            </div>
          ) : (
            <Courses coursesList={courses} removeCourse={removeOneCourse} />
          )}
        </>
      )}
    </>
  );
}

export default App;
