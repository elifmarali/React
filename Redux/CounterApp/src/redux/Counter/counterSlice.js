import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, actions) => {
            state.value += Number(actions.payload)
        }
    }
})

export const { decrement, increment, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;