import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Status from "./components/Status";
import SwitchButton from "./components/SwitchButton";
import AuthContext from "./context/authContext";

function App() {
  const [authValue, setAuthValue] = useState(false);
  const handleLogin = () => {
    setAuthValue(true);
  };
  return (
    <div className="App">
      <AuthContext.Provider value={{ status: authValue, login: handleLogin }}>
        <div className="FormLogin">
          <Header />
          <Status />
          <SwitchButton />
        </div>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
