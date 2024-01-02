import { useContext, useEffect, useState } from "react";
import "./App.css";
import CourseHeader from "./components/CourseHeader";
import CourseList from "./components/CourseList";
import CourseContext from "./context/CourseContext";
import Loading from "./components/Loading";

function App() {
  const { fetchData, isLoading } = useContext(CourseContext);
  useEffect(() => {
    const fetchDataAndNavigate = async () => {
      await fetchData();
      navigate("/loading");
    };

    fetchDataAndNavigate();
  }, []);
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container">
          {" "}
          <CourseHeader />
          <CourseList />
        </div>
      )}
    </div>
  );
}

export default App;
