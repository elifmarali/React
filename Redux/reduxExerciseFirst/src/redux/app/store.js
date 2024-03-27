import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../featurs/counter/counterSlice"
import countryReducer from "../featurs/country/countrySlice"
const store = configureStore({
    reducer: {
        counter: counterReducer,
        country: countryReducer
    }
})

export default store;