import React from "react";
import { useDispatch } from "react-redux";
import { VscTriangleUp } from "react-icons/vsc";
import { VscTriangleDown } from "react-icons/vsc";
import { cleareItemCourse } from "../redux/Card/CartSlice";
import { increase } from "../redux/Card/CartSlice";
import { decrease } from "../redux/Card/CartSlice";
function CartItem({ id, title, price, img, quantity }) {
  const dispatch = useDispatch();
  return (
    <div className="cartItemsContainer">
      <div>
        <img src={img} alt="" className="cartItemImage" />
      </div>

      <div className="cartInfo">
        <h4>{title}</h4>
        <h6>{price}$</h6>
        <div className="quantityCounter">
          <button>
            <VscTriangleUp onClick={() => dispatch(increase(id))} />
          </button>
          <div> {quantity}</div>
          <button>
            <VscTriangleDown onClick={() => dispatch(decrease(id))} />
          </button>
        </div>
        <button
          className="itemDeleteButton"
          onClick={() => dispatch(cleareItemCourse(id))}
        >
          Sil
        </button>
      </div>
    </div>
  );
}

export default CartItem;
