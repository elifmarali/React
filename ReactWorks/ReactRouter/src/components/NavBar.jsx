import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink to="/" className="link">
        Home
      </NavLink>
      <NavLink to="/aboutUs" className="link">
        About
      </NavLink>
      <NavLink to="/history" className="link">
        History
      </NavLink>
    </nav>
  );
}

export default NavBar;
