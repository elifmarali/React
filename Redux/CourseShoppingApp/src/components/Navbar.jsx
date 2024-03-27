import React from "react";
import { BsBasket2Fill } from "react-icons/bs";
import { useSelector } from "react-redux";

function Navbar() {
  const { quantity } = useSelector((store) => store.cart);
  return (
    <div className="navbarContainer">
      <h4 className="navbarHead">Courses Shopping App</h4>
      <div className="navbarRightSection">
        <div className="counter">{quantity}</div>
        <BsBasket2Fill size={20} />
      </div>
    </div>
  );
}

export default Navbar;
