import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { cleareCardContianer } from "../redux/Card/CartSlice";

function CourseList() {
  const { cartItems, quantity, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  return (
    <div className="cardsSection">
      <h1>Sepetim</h1>
      {quantity < 1 ? (
        <section className="cartsContainer">
          <div>Sepetiniz Bos</div>
        </section>
      ) : (
        <section className="cartsContainer">
          {cartItems.map((cartItem, index) => {
            return (
              <CartItem key={index} {...cartItem}>
                {" "}
              </CartItem>
            );
          })}
        </section>
      )}
      <footer>
        <span className="line"></span>
        <div>
          <h4>Total Amount : {total}$</h4>
        </div>
        <button
          className="allDelete"
          onClick={() => dispatch(cleareCardContianer())}
        >
          Temizle
        </button>
      </footer>
    </div>
  );
}

export default CourseList;
