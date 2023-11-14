import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
function Navbar() {
  const { basliklar } = useContext(GlobalContext);
  return (
    <div>
      <ul className="ulBar">
        {basliklar.map((baslik, index) => {
          return (
            <li key={index} href="#">
              <a href="#"> {baslik}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Navbar;
