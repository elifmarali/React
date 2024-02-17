import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import Banner from "../assets/banneryeni.jpg";

function Home() {
  return (
    <div className="home">
      <div className="order">
        <img src={Banner} alt="" className="banner" />
        <Link to="/menu" className="link">
          <button className="button">Siparis Ver !</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
