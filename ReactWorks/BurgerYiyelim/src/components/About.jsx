import React from "react";
import Banner from "../assets/banneryeni.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <img src={Banner} alt="" className="aboutImage" />
      <h1 className="aboutTitle">Hakkimizda</h1>
      <p className="aboutText">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius provident
        cumque dolores quibusdam at recusandae, ipsam aliquam nisi velit
        voluptates sequi hic placeat natus, molestiae illo in molestias beatae?
        Odio.
      </p>
    </div>
  );
}

export default About;
