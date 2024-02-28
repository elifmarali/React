import "./App.css";
import { Routes, Route } from "react-router-dom";
import GeneralForm from "./components/GeneralForm";
import PortalForm from "./components/PortalForm";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GeneralForm />}></Route>
        <Route path="/portal" element={<PortalForm />}></Route>
      </Routes>
    </>
  );
}

export default App;
