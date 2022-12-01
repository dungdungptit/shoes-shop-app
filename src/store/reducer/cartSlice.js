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
    const {itemId, customerId} = data;
    const response = await axios.delete(`${BASE_URL}/carts/delete?${itemId}&customerId=${customerId}`);
    return response.data;
});

// delete all item in cart
export const deleteAllItemInCartAsync = createAsyncThunk('cart/deleteAllItemInCart', async (customerId) => {
    const response = await axios.delete(`${BASE_URL}/carts/deleteAll?customerId=${customerId}`);
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
                  "description": "Bảng màu của “Solar Red” gồm sắc đỏ mặt trời cùng xanh mòng biển trên nền trắng tuyết, tối giản nhưng vừa đủ để tái hiện những thiết kế đặc trưng của Bruce Kilgore’s thập niên 80. Không những vậy, chất liệu da phủ khắp phần upper với những đường cắt xẻ tinh tế và công nghệ Air êm ái từ đế giày sẽ cho bạn một cảm giác vừa hoài cổ lại vừa trẻ trung, năng động.",
                  "producer": {
                    "id": 1,
                    "name": "Nike",
                    "address": "a"
                  },
                  "brand": "Nike",
                  "category": {
                    "id": 1,
                    "name": "Giày Nike"
                  }
                },
                "price": 2541600,
                "name": "GIÀY NIKE AIR FORCE 1 SHADOW SE WOMEN’S “SOLAR RED” DB3902-100",
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
                  "description": "Giày Nike SB Delta Force Vulc mẫu giày thời trang basic không bao giờ lỗi mốt, chắc chắn ai cũng sẽ cần một đôi để có thể đi bất cứ nơi đâu đều rất phù hợp. Nike SB Delta Force Vulc phần upper có chất liệu da cao cấp, đế cao su tự nhiên bền đẹp với thời gian.",
                  "producer": {
                    "id": 1,
                    "name": "Nike",
                    "address": "a"
                  },
                  "brand": "Nike",
                  "category": {
                    "id": 1,
                    "name": "Giày Nike"
                  }
                },
                "price": 2100000,
                "name": "GIÀY NIKE SB DELTA FORCE VULC NAM - TRẮNG",
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
                  "description": "Giày Giày Nike Quest 4 là mẫu giày được thiết kế cực kỳ đẹp và tinh tế với đặc điểm rất thoáng khí, êm và rất nhẹ. Đây là mẫu giày có thể sử dụng trong mọi hoạt động hàng ngày. Với phần upper làm bằng chất liệu vải mesh mềm mại và thoáng giúp vận động thoải mái. Phần đế giữa bằng vật liệu siêu nhẹ khiến cho Nike Quest 4 là mẫu giày rất được yêu thích.",
                  "producer": {
                    "id": 1,
                    "name": "Nike",
                    "address": "a"
                  },
                  "brand": "Nike",
                  "category": {
                    "id": 1,
                    "name": "Giày Nike"
                  }
                },
                "price": 2899000,
                "name": "GIÀY NIKE QUEST 4 NAM- XÁM CAM",
                "image1": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787586/PTTK/Item3/giay-nike-quest-4-nam-xam-cam-02-550x550_bdaekv.jpg",
                "image2": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787517/PTTK/Item3/giay-nike-quest-4-nam-xam-cam-04-550x550_sgyl1p.jpg",
                "image3": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787505/PTTK/Item3/giay-nike-quest-4-nam-xam-cam-01-550x550_lrgcfm.jpg",
                "rating": "4.3"
              },
              "quantity": 1
            }
          ],
        cart: null,
        isLoading: false,
        error: null,
    },
    reducers: {
        updateQuantity: (state, action) => {
            const {cartID, quantity} = action.payload;
            const index = state.carts.findIndex((cart) => cart.id === cartID);
            state.carts[index].quantity = quantity;
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

export const {updateQuantity} = cartSlice.actions;

export default cartReducer;