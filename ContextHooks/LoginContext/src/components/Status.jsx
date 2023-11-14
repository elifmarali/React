import React, { useContext } from "react";
import AuthContext from "../context/authContext";

function Status() {
  const { status } = useContext(AuthContext);
  return <div>{status ? "Ohoooo coktan" : "Hayir"}</div>;
}

export default Status;
