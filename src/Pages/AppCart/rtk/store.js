import { configureStore } from "@reduxjs/toolkit";
import { cartSlice, productSlice } from "./slicer";

export const store = configureStore({
    reducer: {
        products: productSlice.reducer, // Use productSlice.reducer as the reducer for 'products'
        cart: cartSlice.reducer, // Use cartSlice.reducer as the reducer for 'cart'
    }
});
