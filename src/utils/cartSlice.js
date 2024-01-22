import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            const itemToRemove = action.payload;
            state.items = state.items.filter(item => item?.card?.info?.id !== itemToRemove?.card?.info?.id);
        },
        clearCart:(state)=>{
            state.items = [];
        },
    },
})

export const {addItem,removeItem,clearCart} = cartSlice.actions;

export default cartSlice.reducer;