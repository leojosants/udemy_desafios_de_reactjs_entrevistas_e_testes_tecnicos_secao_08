import { createSlice } from "@reduxjs/toolkit";

const counter_slice = createSlice(
    {
        name: 'counter',
        initialState: 0,
        reducers: {
            increment: (state) => state + 1,
            decrement: (state) => state - 1,
            reset: () => 0,
        },
    },
);

export const { increment, decrement, reset } = counter_slice.actions;
export default counter_slice.reducer;