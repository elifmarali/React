import { createSlice } from "@reduxjs/toolkit";
import courseItems from "../../courseItems";

const initialState = {
  cartItems: courseItems,
  quantity: 50,
  total: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cleareCardContianer: (state) => {
      state.cartItems = [];
    },
    cleareItemCourse: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, action) => {
      const cardItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cardItem.quantity += 1;
    },
    decrease: (state, action) => {
      const cardItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (!(cardItem.quantity <= 0)) {
        cardItem.quantity -= 1;
      }
    },
    calculateTotals: (state) => {
      let total = 0;
      let quantity = 0;
      state.cartItems.map((item) => {
        total += item.quantity * item.price;
        quantity += item.quantity;
      });
      state.quantity = quantity;
      state.total = total;
    },
  },
});

export const {
  cleareCardContianer,
  cleareItemCourse,
  increase,
  decrease,
  calculateTotals,
} = CartSlice.actions;

export default CartSlice.reducer;
