import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/authSlice";
import productReducer from "./reducer/productSlice";
import cartReducer from "./reducer/cartSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        productReducer,
        cartReducer,
    },
});

export default store;