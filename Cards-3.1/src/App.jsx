import React from "react";
import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Course";
import Angular from "./assets/images/angular.jpg";
import Bootsrap from "./assets/images/bootstrap5.png";
import KompleWeb from "./assets/images/kompleweb.jpg";
import Ccsharp from "./assets/images/ccsharp.png";

function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Kurslarim</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Course
                title="Angular"
                description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, necessitatibus!"
                image={Angular}
              />
            </div>
            <div className="column">
              <Course
                title="Bootstrap"
                description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, necessitatibus!"
                image={Bootsrap}
              />
            </div>
            <div className="column">
              <Course
                title="WEB"
                description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, necessitatibus!"
                image={KompleWeb}
              />
            </div>
            <div className="column">
              <Course
                title="Frontend"
                description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, necessitatibus!"
                image={Ccsharp}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
