import "./App.css";
import Question from "./components/Question";
import Answer from "./components/Answer";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [loginMi, setLoginMi] = useState(false);
  const loginInfo = (term) => {
    setLoginMi(term);
  };
  return (
    <div>
      <Question />
      <Answer loginMiProps={loginMi} />
      <Button onLogin={loginInfo} />
    </div>
  );
}

export default App;
