import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "./reducer/authSlice";
import productReducer from "./reducer/productSlice";

const store = configureStore({
    reducer: {
        // auth: authReducer,
        productReducer,
    },
});

export default store;