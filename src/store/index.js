import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/authSlice";
import productReducer from "./reducer/productSlice";
import cartReducer from "./reducer/cartSlice";
import orderReducer from "./reducer/orderSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        productReducer,
        cartReducer,
        orderReducer
    },
});

export default store;