import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";
function App() {
  const [courses, setCourses] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const {
    courseName = "",
    coursePrice = "",
    courseDescription = "",
  } = courses[index] || {};

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:3000/courses");
        setCourses(response.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);
  const newIndexController = (newIndex) => {
    if (newIndex < 0) {
      newIndex = courses.length - 1;
      return newIndex;
    } else if (newIndex > courses.length - 1) {
      newIndex = 0;
    }
    setIndex(newIndex);
  };
  const handlePreviousClick = () => {
    setIndex(() => {
      const newIndex = index - 1;
      return newIndexController(newIndex);
    });
  };
  const handleNextClick = () => {
    setIndex(() => {
      const newIndex = index + 1;
      return newIndexController(newIndex);
    });
  };
  const handleRandomClick = () => {
    setIndex(() => {
      const newIndex = Math.floor(Math.random() * courses.length);
      return newIndexController(newIndex);
    });
  };

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <div className="courseContainer">
          <h1>Kurslarim</h1>
          <button onClick={handleRandomClick}>Random Kurs Ata</button>
          <div className="courseItemContainer">
            <button onClick={handlePreviousClick}>Geri</button>
            <div className="courseItem">
              <h2>{courseName}</h2>
              <h2>{coursePrice}</h2>
              <h2>{courseDescription}</h2>
            </div>
            <button onClick={handleNextClick}>Ileri</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
