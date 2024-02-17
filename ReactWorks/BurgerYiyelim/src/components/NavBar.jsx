import React from "react";
import BurgerLogo from "../assets/burgerlogo.png";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
function NavBar() {
  return (
    <div className="navbar">
      <div className="main">
        <img src={BurgerLogo} alt="" className="navbarImg" />
        <div className="mainLink">
          <Link to="/">Ana Sayfa</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">Hakkimizda</Link>
          <Link to="/contact">Iletisim</Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
