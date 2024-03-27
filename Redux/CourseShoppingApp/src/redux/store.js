import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Card/CartSlice"
export const store = configureStore({
    reducer: {
        cart: CartReducer
    }
})