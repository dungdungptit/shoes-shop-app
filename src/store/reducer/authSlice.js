import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL_AUTH } from '../../utils/axiosApi';

// login
export const loginAsync = createAsyncThunk('auth/login', async (user) => {
    const response = await axios.get(`${BASE_URL_AUTH}/customer/login`, {params : user});
    // console.log(response.data);
    return response.data;
});

// register
export const registerAsync = createAsyncThunk('auth/register', async (user) => {
    const response = await axios.post(`${BASE_URL_AUTH}/customer/register`, user);
    console.log(response.data);
    return response.data.data;
});


const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        token: null,
        isAuth: false,
        isLoading: false,
        error: null,
    },
    reducers: {
        // logout
        logout: (state, action) => {
            state.user = null;
            state.token = null;
            state.isAuth = false;
        },
    },
    extraReducers: {
        // login
        [loginAsync.pending]: (state, action) => {
            console.log('pending');
            state.isLoading = true;
        },
        [loginAsync.fulfilled]: (state, action) => {
            console.log('success');
            console.log(action.payload);
            state.isLoading = false;
            state.user = action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload));
            state.isAuth = true;
        },
        [loginAsync.rejected]: (state, action) => {
            console.log('error');
            state.isLoading = false;
            state.error = action.payload;
        },

        // register
        [registerAsync.pending]: (state, action) => {
            state.isLoading = true;
        },
        [registerAsync.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
            state.isAuth = true;
        },
        [registerAsync.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    },
})

const authReducer = authSlice.reducer

export const { logout } = authSlice.actions

export const authSelector = (state) => state.authReducer;

export default authReducer;