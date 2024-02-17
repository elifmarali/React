import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
// import AboutUs from "./components/AboutUs";
import NavBar from "./components/NavBar";
import Mission from "./components/Mission";
import WrongPath from "./components/WrongPath";
import History from "./components/History";
import Team from "./components/Team";
import Company from "./components/Company";
import Members from "./components/Members";
import MemberDetail from "./components/MemberDetail";
const LazyAboutUs = React.lazy(() => import("./components/AboutUs"));
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/aboutUs"
          element={
            <React.Suspense>
              <LazyAboutUs></LazyAboutUs>
            </React.Suspense>
          }
        ></Route>
        <Route path="/mission" element={<Mission />}></Route>
        <Route path="/history" element={<History />}>
          <Route path="company" element={<Company />}></Route>
          <Route path="team" element={<Team />}></Route>
        </Route>
        <Route path="/members" element={<Members />}></Route>
        <Route path="/members/:memberID" element={<MemberDetail />}></Route>
        <Route path="*" element={<WrongPath />}></Route>
      </Routes>
    </>
  );
}

export default App;
