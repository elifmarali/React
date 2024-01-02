import "./App.css";
import Card from "./components/Card";
import Angular from "./assets/images/angular.jpg";
import Bootstrap from "./assets/images/bootstrap5.png";
import Ccsharp from "./assets/images/ccsharp.png";
import KompleWeb from "./assets/images/kompleweb.jpg";

function App() {
  return (
    <div className="cardsContainer">
      <h2>Kurslarim</h2>
      <div className="cards">
        <Card
          title="Angular"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque necessitatibus mollitia magni ipsum, voluptate optio tempore ipsam facere odit recusandae voluptas fugiat, fuga quaerat deleniti et. Ut suscipit iste error."
          image={Angular}
        />
        <Card
          title="Bootstrap 5 Kursu"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque necessitatibus mollitia magni ipsum, voluptate optio tempore ipsam facere odit recusandae voluptas fugiat, fuga quaerat deleniti et. Ut suscipit iste error."
          image={Bootstrap}
        />
        <Card
          title="Komple Web Kursu"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque necessitatibus mollitia magni ipsum, voluptate optio tempore ipsam facere odit recusandae voluptas fugiat, fuga quaerat deleniti et. Ut suscipit iste error."
          image={Ccsharp}
        />
        <Card
          title="Yazilimci Olma Kursu"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque necessitatibus mollitia magni ipsum, voluptate optio tempore ipsam facere odit recusandae voluptas fugiat, fuga quaerat deleniti et. Ut suscipit iste error."
          image={KompleWeb}
        />
      </div>
    </div>
  );
}

export default App;
