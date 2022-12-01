import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from "axios";
import { BASE_URL } from '../../utils/axiosApi';

// get all products
export const getAllProductsAsync = createAsyncThunk('products/getAllProducts', async () => {
    const response = await axios.get(`${BASE_URL}/items/allItem`);
    console.log(response);
    return response.data;
});

// get product by id
export const getProductByIdAsync = createAsyncThunk('products/getProductById', async (id) => {
    const response = await axios.get(`${BASE_URL}/items/item/${id}`);
    return response.data;
});

const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        product: null,
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: {
        // get all products
        [getAllProductsAsync.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getAllProductsAsync.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
        },
        [getAllProductsAsync.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        // get product by id
        [getProductByIdAsync.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getProductByIdAsync.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.product = action.payload;
        },
        [getProductByIdAsync.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})

const productReducer = productSlice.reducer;

export const productsSelector = state => state.productReducer.products;
export const productSelector = state => state.productReducer.product;

export default productReducer;