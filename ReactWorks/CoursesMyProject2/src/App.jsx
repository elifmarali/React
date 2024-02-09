import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Course from "./Course";
import Loading from "./Loading";
function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [availableIndex, setAvailableIndex] = useState(0);
  const [availableCourse, setAvailableCourse] = useState();
  let random;
  const fetchData = async () => {
    setLoading(true);
    try {
      setLoading;
      const response = await axios.get("http://localhost:3000/courses");
      setCourses(response.data);
      setLoading(false);
    } catch (err) {
      setLoading(true);
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
    setAvailableIndex(0);
  }, []);
  const handleClickReduce = () => {
    if (availableIndex <= 0) {
      setAvailableIndex(courses.length - 1);
    } else {
      setAvailableIndex(availableIndex - 1);
    }
  };
  const handleClickIncrease = () => {
    if (availableIndex >= courses.length - 1) {
      setAvailableIndex(0);
    } else {
      setAvailableIndex(availableIndex + 1);
    }
  };
  useEffect(() => {
    setAvailableCourse(courses[availableIndex]);
  }, [availableIndex, courses]);

  const handleChangeClick = () => {
    random = Math.floor(Math.random() * courses.length);
    if (random === availableIndex) {
      random = Math.floor(Math.random() * courses.length);
    } else {
      setAvailableIndex(random);
    }
  };

  return (
    <div>
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="container">
          {" "}
          <h2>Kurslarim</h2>
          <button onClick={handleChangeClick} className="changeButton">
            Rastegele Kurs Getir
          </button>
          <div className="coursesContainer">
            <button className="buttonReduce" onClick={handleClickReduce}>
              -
            </button>
            <Course availableCourse={availableCourse} />
            <button className="buttonIncrease" onClick={handleClickIncrease}>
              +
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
