import { createContext, useEffect, useState } from "react";
import axios from "axios";
const CourseContext = createContext();
function CourseProvider({ children }) {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("http://localhost:3000/courses");
      setCourses(response.data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  };

  const courseDeleteByName = async (deleteName) => {
    const deletedAfterArray = courses.filter((course) => {
      return deleteName !== course.courseName;
    });
    setCourses(deletedAfterArray);
  };

  const sharedValuesAndMethods = {
    fetchData,
    courses,
    courseDeleteByName,
    isLoading,
  };
  return (
    <CourseContext.Provider value={sharedValuesAndMethods}>
      {children}{" "}
    </CourseContext.Provider>
  );
}
export { CourseProvider };
export default CourseContext;
