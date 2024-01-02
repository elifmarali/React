import { useState } from "react";
import "./App.css";
import AuthContext from "./context/authContext";
import Auth from "./Auth";
function App() {
  const [authStatus, setAuthStatus] = useState(false);
  const authLogin = () => {
    setAuthStatus(!authStatus);
  };
  return (
    <AuthContext.Provider value={{ status: authStatus, login: authLogin }}>
      <Auth></Auth>
    </AuthContext.Provider>
  );
}

export default App;
