import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../utils/axiosApi';

// get add to cart
export const addToCartAsync = createAsyncThunk('cart/addToCart', async (data) => {
    const {customerID, itemID, quantity} = data;
    const response = await axios.get(`${BASE_URL}/items/addCart`, {params: {customerID, itemID, quantity}});
    console.log(response);
    return response.data;
});

// get cart by customer id
export const getCartByCustomerIdAsync = createAsyncThunk('cart/getCartByCustomerId', async (customerId) => {
    const response = await axios.get(`${BASE_URL}/carts/${customerId}`);
    return response.data;
});

// put update cart
export const updateCartAsync = createAsyncThunk('cart/updateCart', async (data) => {
    console.log(data);
    const response = await axios.put(`${BASE_URL}/carts/edit`, null, {params : data});
    return response.data;
});

// delete 1 item in cart
export const deleteItemInCartAsync = createAsyncThunk('cart/deleteItemInCart', async (data) => {
    const {cartID} = data;
    const response = await axios.delete(`${BASE_URL}/carts/delete`, {params: {cartID}});
    return response.data;
});

// delete all item in cart
export const deleteAllItemInCartAsync = createAsyncThunk('cart/deleteAllItemInCart', async (customerID) => {
    const response = await axios.delete(`${BASE_URL}/carts/deleteAll`, {params: {customerID}});
    return response.data;
});

// payment
export const paymentAsync = createAsyncThunk('cart/payment', async (data) => {
    const response = await axios.post(`${BASE_URL}/payment`, data);
    return response.data;
});
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        carts: [
            {
              "id": 7,
              "customer": {
                "id": 17,
                "phone": "123456789",
                "mail": "dungx@gmail.com",
                "gender": null
              },
              "item": {
                "id": 1,
                "shoesID": {
                  "id": 1,
                  "size1": "39",
                  "size2": "40",
                  "size3": "41",
                  "quantity": 20,
                  "description": "B???ng m??u c???a ???Solar Red??? g???m s???c ????? m???t tr???i c??ng xanh m??ng bi???n tr??n n???n tr???ng tuy???t, t???i gi???n nh??ng v???a ????? ????? t??i hi???n nh???ng thi???t k??? ?????c tr??ng c???a Bruce Kilgore???s th???p ni??n 80. Kh??ng nh???ng v???y, ch???t li???u da ph??? kh???p ph???n upper v???i nh???ng ???????ng c???t x??? tinh t??? v?? c??ng ngh??? Air ??m ??i t??? ????? gi??y s??? cho b???n m???t c???m gi??c v???a ho??i c??? l???i v???a tr??? trung, n??ng ?????ng.",
                  "producer": {
                    "id": 1,
                    "name": "Nike",
                    "address": "a"
                  },
                  "brand": "Nike",
                  "category": {
                    "id": 1,
                    "name": "Gi??y Nike"
                  }
                },
                "price": 2541600,
                "name": "GI??Y NIKE AIR FORCE 1 SHADOW SE WOMEN???S ???SOLAR RED??? DB3902-100",
                "image1": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668762493/PTTK/Item1/16032022040324_50_1_ful7xc_amfe4f.jpg",
                "image2": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668762474/PTTK/Item1/50_4_thumb_rbvnxq_xefy7i.jpg",
                "image3": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668762445/PTTK/Item1/50_2_thumb_m8fkrj_nn8cux.jpg",
                "rating": "4.5"
              },
              "quantity": 3
            },
            {
              "id": 8,
              "customer": {
                "id": 17,
                "phone": "123456789",
                "mail": "dungx@gmail.com",
                "gender": null
              },
              "item": {
                "id": 2,
                "shoesID": {
                  "id": 2,
                  "size1": "38",
                  "size2": "39",
                  "size3": "40",
                  "quantity": 20,
                  "description": "Gi??y Nike SB Delta Force Vulc m???u gi??y th???i trang basic kh??ng bao gi??? l???i m???t, ch???c ch???n ai c??ng s??? c???n m???t ????i ????? c?? th??? ??i b???t c??? n??i ????u ?????u r???t ph?? h???p. Nike SB Delta Force Vulc ph???n upper c?? ch???t li???u da cao c???p, ????? cao su t??? nhi??n b???n ?????p v???i th???i gian.",
                  "producer": {
                    "id": 1,
                    "name": "Nike",
                    "address": "a"
                  },
                  "brand": "Nike",
                  "category": {
                    "id": 1,
                    "name": "Gi??y Nike"
                  }
                },
                "price": 2100000,
                "name": "GI??Y NIKE SB DELTA FORCE VULC NAM - TR???NG",
                "image1": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787408/PTTK/Item2/giay-nike-sb-delta-force-vulc-nam-trang-04-550x550_yq7rh9.jpg",
                "image2": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787373/PTTK/Item2/giay-nike-sb-delta-force-vulc-nam-trang-01-550x550_lzlcja.jpg",
                "image3": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787345/PTTK/Item2/giay-nike-sb-delta-force-vulc-nam-trang-02-550x550_mq3zsw.jpg",
                "rating": "4.4"
              },
              "quantity": 1
            },
            {
              "id": 9,
              "customer": {
                "id": 17,
                "phone": "123456789",
                "mail": "dungx@gmail.com",
                "gender": null
              },
              "item": {
                "id": 3,
                "shoesID": {
                  "id": 3,
                  "size1": "38",
                  "size2": "40",
                  "size3": "41",
                  "quantity": 20,
                  "description": "Gi??y Gi??y Nike Quest 4 l?? m???u gi??y ???????c thi???t k??? c???c k??? ?????p v?? tinh t??? v???i ?????c ??i???m r???t tho??ng kh??, ??m v?? r???t nh???. ????y l?? m???u gi??y c?? th??? s??? d???ng trong m???i ho???t ?????ng h??ng ng??y. V???i ph???n upper l??m b???ng ch???t li???u v???i mesh m???m m???i v?? tho??ng gi??p v???n ?????ng tho???i m??i. Ph???n ????? gi???a b???ng v???t li???u si??u nh??? khi???n cho Nike Quest 4 l?? m???u gi??y r???t ???????c y??u th??ch.",
                  "producer": {
                    "id": 1,
                    "name": "Nike",
                    "address": "a"
                  },
                  "brand": "Nike",
                  "category": {
                    "id": 1,
                    "name": "Gi??y Nike"
                  }
                },
                "price": 2899000,
                "name": "GI??Y NIKE QUEST 4 NAM- X??M CAM",
                "image1": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787586/PTTK/Item3/giay-nike-quest-4-nam-xam-cam-02-550x550_bdaekv.jpg",
                "image2": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787517/PTTK/Item3/giay-nike-quest-4-nam-xam-cam-04-550x550_sgyl1p.jpg",
                "image3": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787505/PTTK/Item3/giay-nike-quest-4-nam-xam-cam-01-550x550_lrgcfm.jpg",
                "rating": "4.3"
              },
              "quantity": 1
            }
          ],
        cart: null,
        countCart: 0,
        isLoading: false,
        error: null,
    },
    reducers: {
        updateQuantity: (state, action) => {
            const {cartID, quantity} = action.payload;
            const index = state.carts.findIndex((cart) => cart.id === cartID);
            state.carts[index].quantity = quantity;
        },
        setCountCart: (state, action) => {
            state.countCart = action.payload;
        },
    },
    extraReducers: {
        // add to cart
        [addToCartAsync.pending]: (state, action) => {
            state.isLoading = true;
        },
        [addToCartAsync.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.cart = action.payload;
        },
        [addToCartAsync.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        // get cart by customer id
        [getCartByCustomerIdAsync.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getCartByCustomerIdAsync.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.carts = action.payload;
        },
        [getCartByCustomerIdAsync.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        // update cart
        [updateCartAsync.pending]: (state, action) => {
            state.isLoading = true;
        },
        [updateCartAsync.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.cart = action.payload;
        },
        [updateCartAsync.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        // delete 1 item in cart
        [deleteItemInCartAsync.pending]: (state, action) => {
            state.isLoading = true;
        },
        [deleteItemInCartAsync.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.cart = action.payload;
        },
        [deleteItemInCartAsync.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        // delete all item in cart
        [deleteAllItemInCartAsync.pending]: (state, action) => {
            state.isLoading = true;
        },
        [deleteAllItemInCartAsync.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.cart = action.payload;
        },
        [deleteAllItemInCartAsync.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

    }
});

const cartReducer = cartSlice.reducer;

export const cartsSelector = state => state.cartReducer.carts;
export const cartSelector = state => state.cartReducer.cart;
export const countCartSelector = state => state.cartReducer.countCart;

export const {updateQuantity, setCountCart} = cartSlice.actions;


export default cartReducer;