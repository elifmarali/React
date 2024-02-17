import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Menu from "./components/Menu";
import NavBar from "./components/NavBar";
import useTitle from "./hooks/useTitle";
import { Routes, Route } from "react-router-dom";
function App() {
  useTitle();
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
