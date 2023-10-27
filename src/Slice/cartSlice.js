import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItems: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            return {items:[]}; //This new object will be replaced inside originalState = {items:[]}
        }
    }
})

export const { addItems, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;