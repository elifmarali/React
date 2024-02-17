import React from "react";
import { Data } from "../helpers/Data";
import "../styles/Menu.css";
function Menu() {
  console.log(Data);
  return (
    <div className="menu">
      <h1 className="menuTitle">Burgerlerimiz</h1>
      <div className="burgerCards">
        {Data.map((dataItem, index) => {
          return (
            <div className="burgerCard" key={index}>
              <img src={dataItem.image} alt="" className="burgerImage" />
              <h4 className="burgerTitle">{dataItem.name}</h4>
              <p className="burgerContent">{dataItem.content}</p>
              <div className="burgerPrice">{dataItem.price} TL</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
