import React, { useContext } from "react";
import AuthContext from "../context/authContext";

function SwitchButton() {
  const { login } = useContext(AuthContext);
  return <button onClick={login}> Giris Yap</button>;
}

export default SwitchButton;
