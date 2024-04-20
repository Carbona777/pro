import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    'productSlice/fetchProducts',
    async () => {
        const res = await fetch('http://localhost:9000/products');
        const data = await res.json();
        return data;
    }
);

export const productSlice = createSlice({
    name: 'productSlice',
    initialState: [],
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            return action.payload; // Update state using mutable operations
        });
    }
});

export const cartSlice = createSlice({
    initialState: [],
    name: 'cartSlice',
    reducers: {
        addToCart: (state, action) => {
            const findProduct = state.find((product) => product.id === action.payload.id);
            if (findProduct) {
                findProduct.quantity += 1;
            } else {
                // Corrected the typo 'quantiti' to 'quantity'
                const productClone = { ...action.payload, quantity: 1 };
                state.push(productClone); // Use the cloned product with quantity 1
            }
        }
        ,
        deleteFromCart: (state, action) => {
            return state.filter((product) => product.id !== action.payload.id);
        }
        ,
        clear: (state, action) => {
            return [];
        }
    }
});


export const { addProduct } = productSlice.actions;
export const { addToCart, deleteFromCart, clear } = cartSlice.actions;

export const productReducer = productSlice.reducer;
export const cartReducer = cartSlice.reducer;
