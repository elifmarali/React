import "bulma/css/bulma.css";
import "./App.css";
import Card from "./Card";
import AngularImage from "./assets/images/angular.jpg";
import BootstrapImage from "./assets/images/bootstrap5.png";
import CcsharpImage from "./assets/images/ccsharp.png";
import KompleWebImage from "./assets/images/kompleweb.jpg";

function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Kurslarim</p>
        </div>
      </section>
      <div className="contianer">
        <section className="section"></section>
        <div className="columns">
          <div className="column">
            <Card
              image={AngularImage}
              title="Angular"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum quaerat quasi iste! Dolor atque voluptate iusto ullam! Aut excepturi vero nostrum voluptatum odio perferendis doloremque mollitia assumenda inventore! Magni."
            ></Card>
          </div>
          <div className="column">
            <Card
              image={BootstrapImage}
              title="Bootstrap 5"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum quaerat quasi iste! Dolor atque voluptate iusto ullam! Aut excepturi vero nostrum voluptatum odio perferendis doloremque mollitia assumenda inventore! Magni."
            ></Card>
          </div>
          <div className="column">
            <Card
              image={CcsharpImage}
              title="Komple Web Kursu"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum quaerat quasi iste! Dolor atque voluptate iusto ullam! Aut excepturi vero nostrum voluptatum odio perferendis doloremque mollitia assumenda inventore! Magni."
            ></Card>
          </div>
          <div className="column">
            <Card
              image={KompleWebImage}
              title="Frontend"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum quaerat quasi iste! Dolor atque voluptate iusto ullam! Aut excepturi vero nostrum voluptatum odio perferendis doloremque mollitia assumenda inventore! Magni."
            ></Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
