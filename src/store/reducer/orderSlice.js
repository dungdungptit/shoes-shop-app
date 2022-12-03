import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../utils/axiosApi';

// get all orders
export const getAllOrdersAsync = createAsyncThunk('order/getAllOrders', async (customerID) => {
    const response = await axios.get(`${BASE_URL}/orders/${customerID}`);
    console.log(response);
    return response.data;
});

// get order by id
export const getOrderByIdAsync = createAsyncThunk('order/getOrderById', async (id) => {
    const response = await axios.get(`${BASE_URL}/order/${id}`);
    return response.data;
});

// add evaluation
export const addEvaluationAsync = createAsyncThunk('order/addEvaluation', async (evaluation) => {
    const response = await axios.post(`${BASE_URL}/order/evaluation`, evaluation);
    return response.data;
});

const orderSlice = createSlice({
    name: "order",
    initialState: {
        orders: 
        [],
        // [
        //     {
        //       "id": 1,
        //       "order": {
        //         "id": 9,
        //         "customer": {
        //           "id": 17,
        //           "phone": "123456789",
        //           "mail": "dungx@gmail.com",
        //           "gender": null,
        //           "memberLevel": 0,
        //           "dob": null,
        //           "address": null,
        //           "fullName": null
        //         },
        //         "payment": {
        //           "id": 19,
        //           "createdDate": [
        //             2022,
        //             12,
        //             3
        //           ],
        //           "total": 6758100,
        //           "shipment": {
        //             "id": 10,
        //             "price": 16500,
        //             "address": null,
        //             "phone": "123456789",
        //             "name": null
        //           }
        //         },
        //         "status": "Pending",
        //         "orderDate": [
        //           2022,
        //           12,
        //           3
        //         ]
        //       },
        //       "item": {
        //         "id": 1,
        //         "shoesID": {
        //           "id": 1,
        //           "size1": "39",
        //           "size2": "40",
        //           "size3": "41",
        //           "quantity": 20,
        //           "description": "Bảng màu của “Solar Red” gồm sắc đỏ mặt trời cùng xanh mòng biển trên nền trắng tuyết, tối giản nhưng vừa đủ để tái hiện những thiết kế đặc trưng của Bruce Kilgore’s thập niên 80. Không những vậy, chất liệu da phủ khắp phần upper với những đường cắt xẻ tinh tế và công nghệ Air êm ái từ đế giày sẽ cho bạn một cảm giác vừa hoài cổ lại vừa trẻ trung, năng động.",
        //           "producer": {
        //             "id": 1,
        //             "name": "Nike",
        //             "address": "a"
        //           },
        //           "brand": "Nike",
        //           "category": {
        //             "id": 1,
        //             "name": "Giày Nike"
        //           }
        //         },
        //         "price": 2541600,
        //         "name": "GIÀY NIKE AIR FORCE 1 SHADOW SE WOMEN’S “SOLAR RED” DB3902-100",
        //         "image1": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668762493/PTTK/Item1/16032022040324_50_1_ful7xc_amfe4f.jpg",
        //         "image2": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668762474/PTTK/Item1/50_4_thumb_rbvnxq_xefy7i.jpg",
        //         "image3": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668762445/PTTK/Item1/50_2_thumb_m8fkrj_nn8cux.jpg",
        //         "rating": "4.5"
        //       },
        //       "quantity": 1
        //     },
        //     {
        //       "id": 2,
        //       "order": {
        //         "id": 9,
        //         "customer": {
        //           "id": 17,
        //           "phone": "123456789",
        //           "mail": "dungx@gmail.com",
        //           "gender": null,
        //           "memberLevel": 0,
        //           "dob": null,
        //           "address": null,
        //           "fullName": null
        //         },
        //         "payment": {
        //           "id": 19,
        //           "createdDate": [
        //             2022,
        //             12,
        //             3
        //           ],
        //           "total": 6758100,
        //           "shipment": {
        //             "id": 10,
        //             "price": 16500,
        //             "address": null,
        //             "phone": "123456789",
        //             "name": null
        //           }
        //         },
        //         "status": "Pending",
        //         "orderDate": [
        //           2022,
        //           12,
        //           3
        //         ]
        //       },
        //       "item": {
        //         "id": 2,
        //         "shoesID": {
        //           "id": 2,
        //           "size1": "38",
        //           "size2": "39",
        //           "size3": "40",
        //           "quantity": 20,
        //           "description": "Giày Nike SB Delta Force Vulc mẫu giày thời trang basic không bao giờ lỗi mốt, chắc chắn ai cũng sẽ cần một đôi để có thể đi bất cứ nơi đâu đều rất phù hợp. Nike SB Delta Force Vulc phần upper có chất liệu da cao cấp, đế cao su tự nhiên bền đẹp với thời gian.",
        //           "producer": {
        //             "id": 1,
        //             "name": "Nike",
        //             "address": "a"
        //           },
        //           "brand": "Nike",
        //           "category": {
        //             "id": 1,
        //             "name": "Giày Nike"
        //           }
        //         },
        //         "price": 2100000,
        //         "name": "GIÀY NIKE SB DELTA FORCE VULC NAM - TRẮNG",
        //         "image1": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787408/PTTK/Item2/giay-nike-sb-delta-force-vulc-nam-trang-04-550x550_yq7rh9.jpg",
        //         "image2": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787373/PTTK/Item2/giay-nike-sb-delta-force-vulc-nam-trang-01-550x550_lzlcja.jpg",
        //         "image3": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787345/PTTK/Item2/giay-nike-sb-delta-force-vulc-nam-trang-02-550x550_mq3zsw.jpg",
        //         "rating": "4.4"
        //       },
        //       "quantity": 2
        //     },
        //     {
        //       "id": 3,
        //       "order": {
        //         "id": 10,
        //         "customer": {
        //           "id": 17,
        //           "phone": "123456789",
        //           "mail": "dungx@gmail.com",
        //           "gender": null,
        //           "memberLevel": 0,
        //           "dob": null,
        //           "address": null,
        //           "fullName": null
        //         },
        //         "payment": {
        //           "id": 20,
        //           "createdDate": [
        //             2022,
        //             12,
        //             3
        //           ],
        //           "total": 12218000,
        //           "shipment": {
        //             "id": 11,
        //             "price": 120000,
        //             "address": null,
        //             "phone": "123456789",
        //             "name": null
        //           }
        //         },
        //         "status": "Pending",
        //         "orderDate": [
        //           2022,
        //           12,
        //           3
        //         ]
        //       },
        //       "item": {
        //         "id": 2,
        //         "shoesID": {
        //           "id": 2,
        //           "size1": "38",
        //           "size2": "39",
        //           "size3": "40",
        //           "quantity": 20,
        //           "description": "Giày Nike SB Delta Force Vulc mẫu giày thời trang basic không bao giờ lỗi mốt, chắc chắn ai cũng sẽ cần một đôi để có thể đi bất cứ nơi đâu đều rất phù hợp. Nike SB Delta Force Vulc phần upper có chất liệu da cao cấp, đế cao su tự nhiên bền đẹp với thời gian.",
        //           "producer": {
        //             "id": 1,
        //             "name": "Nike",
        //             "address": "a"
        //           },
        //           "brand": "Nike",
        //           "category": {
        //             "id": 1,
        //             "name": "Giày Nike"
        //           }
        //         },
        //         "price": 2100000,
        //         "name": "GIÀY NIKE SB DELTA FORCE VULC NAM - TRẮNG",
        //         "image1": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787408/PTTK/Item2/giay-nike-sb-delta-force-vulc-nam-trang-04-550x550_yq7rh9.jpg",
        //         "image2": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787373/PTTK/Item2/giay-nike-sb-delta-force-vulc-nam-trang-01-550x550_lzlcja.jpg",
        //         "image3": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787345/PTTK/Item2/giay-nike-sb-delta-force-vulc-nam-trang-02-550x550_mq3zsw.jpg",
        //         "rating": "4.4"
        //       },
        //       "quantity": 3
        //     },
        //     {
        //       "id": 4,
        //       "order": {
        //         "id": 10,
        //         "customer": {
        //           "id": 17,
        //           "phone": "123456789",
        //           "mail": "dungx@gmail.com",
        //           "gender": null,
        //           "memberLevel": 0,
        //           "dob": null,
        //           "address": null,
        //           "fullName": null
        //         },
        //         "payment": {
        //           "id": 20,
        //           "createdDate": [
        //             2022,
        //             12,
        //             3
        //           ],
        //           "total": 12218000,
        //           "shipment": {
        //             "id": 11,
        //             "price": 120000,
        //             "address": null,
        //             "phone": "123456789",
        //             "name": null
        //           }
        //         },
        //         "status": "Pending",
        //         "orderDate": [
        //           2022,
        //           12,
        //           3
        //         ]
        //       },
        //       "item": {
        //         "id": 3,
        //         "shoesID": {
        //           "id": 3,
        //           "size1": "38",
        //           "size2": "40",
        //           "size3": "41",
        //           "quantity": 20,
        //           "description": "Giày Giày Nike Quest 4 là mẫu giày được thiết kế cực kỳ đẹp và tinh tế với đặc điểm rất thoáng khí, êm và rất nhẹ. Đây là mẫu giày có thể sử dụng trong mọi hoạt động hàng ngày. Với phần upper làm bằng chất liệu vải mesh mềm mại và thoáng giúp vận động thoải mái. Phần đế giữa bằng vật liệu siêu nhẹ khiến cho Nike Quest 4 là mẫu giày rất được yêu thích.",
        //           "producer": {
        //             "id": 1,
        //             "name": "Nike",
        //             "address": "a"
        //           },
        //           "brand": "Nike",
        //           "category": {
        //             "id": 1,
        //             "name": "Giày Nike"
        //           }
        //         },
        //         "price": 2899000,
        //         "name": "GIÀY NIKE QUEST 4 NAM- XÁM CAM",
        //         "image1": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787586/PTTK/Item3/giay-nike-quest-4-nam-xam-cam-02-550x550_bdaekv.jpg",
        //         "image2": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787517/PTTK/Item3/giay-nike-quest-4-nam-xam-cam-04-550x550_sgyl1p.jpg",
        //         "image3": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787505/PTTK/Item3/giay-nike-quest-4-nam-xam-cam-01-550x550_lrgcfm.jpg",
        //         "rating": "4.3"
        //       },
        //       "quantity": 2
        //     },
        //     {
        //       "id": 5,
        //       "order": {
        //         "id": 11,
        //         "customer": {
        //           "id": 17,
        //           "phone": "123456789",
        //           "mail": "dungx@gmail.com",
        //           "gender": null,
        //           "memberLevel": 0,
        //           "dob": null,
        //           "address": null,
        //           "fullName": null
        //         },
        //         "payment": {
        //           "id": 21,
        //           "createdDate": [
        //             2022,
        //             12,
        //             3
        //           ],
        //           "total": 6316500,
        //           "shipment": {
        //             "id": 12,
        //             "price": 16500,
        //             "address": null,
        //             "phone": "123456789",
        //             "name": null
        //           }
        //         },
        //         "status": "Pending",
        //         "orderDate": [
        //           2022,
        //           12,
        //           3
        //         ]
        //       },
        //       "item": {
        //         "id": 2,
        //         "shoesID": {
        //           "id": 2,
        //           "size1": "38",
        //           "size2": "39",
        //           "size3": "40",
        //           "quantity": 20,
        //           "description": "Giày Nike SB Delta Force Vulc mẫu giày thời trang basic không bao giờ lỗi mốt, chắc chắn ai cũng sẽ cần một đôi để có thể đi bất cứ nơi đâu đều rất phù hợp. Nike SB Delta Force Vulc phần upper có chất liệu da cao cấp, đế cao su tự nhiên bền đẹp với thời gian.",
        //           "producer": {
        //             "id": 1,
        //             "name": "Nike",
        //             "address": "a"
        //           },
        //           "brand": "Nike",
        //           "category": {
        //             "id": 1,
        //             "name": "Giày Nike"
        //           }
        //         },
        //         "price": 2100000,
        //         "name": "GIÀY NIKE SB DELTA FORCE VULC NAM - TRẮNG",
        //         "image1": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787408/PTTK/Item2/giay-nike-sb-delta-force-vulc-nam-trang-04-550x550_yq7rh9.jpg",
        //         "image2": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787373/PTTK/Item2/giay-nike-sb-delta-force-vulc-nam-trang-01-550x550_lzlcja.jpg",
        //         "image3": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787345/PTTK/Item2/giay-nike-sb-delta-force-vulc-nam-trang-02-550x550_mq3zsw.jpg",
        //         "rating": "4.4"
        //       },
        //       "quantity": 3
        //     },
        //     {
        //       "id": 6,
        //       "order": {
        //         "id": 12,
        //         "customer": {
        //           "id": 17,
        //           "phone": "123456789",
        //           "mail": "dungx@gmail.com",
        //           "gender": null,
        //           "memberLevel": 0,
        //           "dob": null,
        //           "address": null,
        //           "fullName": null
        //         },
        //         "payment": {
        //           "id": 22,
        //           "createdDate": [
        //             2022,
        //             12,
        //             3
        //           ],
        //           "total": 2116500,
        //           "shipment": {
        //             "id": 13,
        //             "price": 16500,
        //             "address": null,
        //             "phone": "123456789",
        //             "name": null
        //           }
        //         },
        //         "status": "Pending",
        //         "orderDate": [
        //           2022,
        //           12,
        //           3
        //         ]
        //       },
        //       "item": {
        //         "id": 2,
        //         "shoesID": {
        //           "id": 2,
        //           "size1": "38",
        //           "size2": "39",
        //           "size3": "40",
        //           "quantity": 20,
        //           "description": "Giày Nike SB Delta Force Vulc mẫu giày thời trang basic không bao giờ lỗi mốt, chắc chắn ai cũng sẽ cần một đôi để có thể đi bất cứ nơi đâu đều rất phù hợp. Nike SB Delta Force Vulc phần upper có chất liệu da cao cấp, đế cao su tự nhiên bền đẹp với thời gian.",
        //           "producer": {
        //             "id": 1,
        //             "name": "Nike",
        //             "address": "a"
        //           },
        //           "brand": "Nike",
        //           "category": {
        //             "id": 1,
        //             "name": "Giày Nike"
        //           }
        //         },
        //         "price": 2100000,
        //         "name": "GIÀY NIKE SB DELTA FORCE VULC NAM - TRẮNG",
        //         "image1": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787408/PTTK/Item2/giay-nike-sb-delta-force-vulc-nam-trang-04-550x550_yq7rh9.jpg",
        //         "image2": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787373/PTTK/Item2/giay-nike-sb-delta-force-vulc-nam-trang-01-550x550_lzlcja.jpg",
        //         "image3": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787345/PTTK/Item2/giay-nike-sb-delta-force-vulc-nam-trang-02-550x550_mq3zsw.jpg",
        //         "rating": "4.4"
        //       },
        //       "quantity": 1
        //     },
        //     {
        //       "id": 7,
        //       "order": {
        //         "id": 13,
        //         "customer": {
        //           "id": 17,
        //           "phone": "123456789",
        //           "mail": "dungx@gmail.com",
        //           "gender": null,
        //           "memberLevel": 0,
        //           "dob": null,
        //           "address": null,
        //           "fullName": null
        //         },
        //         "payment": {
        //           "id": 23,
        //           "createdDate": [
        //             2022,
        //             12,
        //             3
        //           ],
        //           "total": 2116500,
        //           "shipment": {
        //             "id": 14,
        //             "price": 16500,
        //             "address": null,
        //             "phone": "123456789",
        //             "name": null
        //           }
        //         },
        //         "status": "Pending",
        //         "orderDate": [
        //           2022,
        //           12,
        //           3
        //         ]
        //       },
        //       "item": {
        //         "id": 2,
        //         "shoesID": {
        //           "id": 2,
        //           "size1": "38",
        //           "size2": "39",
        //           "size3": "40",
        //           "quantity": 20,
        //           "description": "Giày Nike SB Delta Force Vulc mẫu giày thời trang basic không bao giờ lỗi mốt, chắc chắn ai cũng sẽ cần một đôi để có thể đi bất cứ nơi đâu đều rất phù hợp. Nike SB Delta Force Vulc phần upper có chất liệu da cao cấp, đế cao su tự nhiên bền đẹp với thời gian.",
        //           "producer": {
        //             "id": 1,
        //             "name": "Nike",
        //             "address": "a"
        //           },
        //           "brand": "Nike",
        //           "category": {
        //             "id": 1,
        //             "name": "Giày Nike"
        //           }
        //         },
        //         "price": 2100000,
        //         "name": "GIÀY NIKE SB DELTA FORCE VULC NAM - TRẮNG",
        //         "image1": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787408/PTTK/Item2/giay-nike-sb-delta-force-vulc-nam-trang-04-550x550_yq7rh9.jpg",
        //         "image2": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787373/PTTK/Item2/giay-nike-sb-delta-force-vulc-nam-trang-01-550x550_lzlcja.jpg",
        //         "image3": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787345/PTTK/Item2/giay-nike-sb-delta-force-vulc-nam-trang-02-550x550_mq3zsw.jpg",
        //         "rating": "4.4"
        //       },
        //       "quantity": 1
        //     },
        //     {
        //       "id": 8,
        //       "order": {
        //         "id": 15,
        //         "customer": {
        //           "id": 17,
        //           "phone": "123456789",
        //           "mail": "dungx@gmail.com",
        //           "gender": null,
        //           "memberLevel": 0,
        //           "dob": null,
        //           "address": null,
        //           "fullName": null
        //         },
        //         "payment": {
        //           "id": 25,
        //           "createdDate": [
        //             2022,
        //             12,
        //             3
        //           ],
        //           "total": 2116500,
        //           "shipment": {
        //             "id": 16,
        //             "price": 16500,
        //             "address": null,
        //             "phone": "123456789",
        //             "name": null
        //           }
        //         },
        //         "status": "Pending",
        //         "orderDate": [
        //           2022,
        //           12,
        //           3
        //         ]
        //       },
        //       "item": {
        //         "id": 2,
        //         "shoesID": {
        //           "id": 2,
        //           "size1": "38",
        //           "size2": "39",
        //           "size3": "40",
        //           "quantity": 20,
        //           "description": "Giày Nike SB Delta Force Vulc mẫu giày thời trang basic không bao giờ lỗi mốt, chắc chắn ai cũng sẽ cần một đôi để có thể đi bất cứ nơi đâu đều rất phù hợp. Nike SB Delta Force Vulc phần upper có chất liệu da cao cấp, đế cao su tự nhiên bền đẹp với thời gian.",
        //           "producer": {
        //             "id": 1,
        //             "name": "Nike",
        //             "address": "a"
        //           },
        //           "brand": "Nike",
        //           "category": {
        //             "id": 1,
        //             "name": "Giày Nike"
        //           }
        //         },
        //         "price": 2100000,
        //         "name": "GIÀY NIKE SB DELTA FORCE VULC NAM - TRẮNG",
        //         "image1": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787408/PTTK/Item2/giay-nike-sb-delta-force-vulc-nam-trang-04-550x550_yq7rh9.jpg",
        //         "image2": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787373/PTTK/Item2/giay-nike-sb-delta-force-vulc-nam-trang-01-550x550_lzlcja.jpg",
        //         "image3": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787345/PTTK/Item2/giay-nike-sb-delta-force-vulc-nam-trang-02-550x550_mq3zsw.jpg",
        //         "rating": "4.4"
        //       },
        //       "quantity": 1
        //     },
        //     {
        //       "id": 9,
        //       "order": {
        //         "id": 16,
        //         "customer": {
        //           "id": 17,
        //           "phone": "123456789",
        //           "mail": "dungx@gmail.com",
        //           "gender": null,
        //           "memberLevel": 0,
        //           "dob": null,
        //           "address": null,
        //           "fullName": null
        //         },
        //         "payment": {
        //           "id": 26,
        //           "createdDate": [
        //             2022,
        //             12,
        //             3
        //           ],
        //           "total": 2220000,
        //           "shipment": {
        //             "id": 17,
        //             "price": 120000,
        //             "address": null,
        //             "phone": "123456789",
        //             "name": null
        //           }
        //         },
        //         "status": "Pending",
        //         "orderDate": [
        //           2022,
        //           12,
        //           3
        //         ]
        //       },
        //       "item": {
        //         "id": 2,
        //         "shoesID": {
        //           "id": 2,
        //           "size1": "38",
        //           "size2": "39",
        //           "size3": "40",
        //           "quantity": 20,
        //           "description": "Giày Nike SB Delta Force Vulc mẫu giày thời trang basic không bao giờ lỗi mốt, chắc chắn ai cũng sẽ cần một đôi để có thể đi bất cứ nơi đâu đều rất phù hợp. Nike SB Delta Force Vulc phần upper có chất liệu da cao cấp, đế cao su tự nhiên bền đẹp với thời gian.",
        //           "producer": {
        //             "id": 1,
        //             "name": "Nike",
        //             "address": "a"
        //           },
        //           "brand": "Nike",
        //           "category": {
        //             "id": 1,
        //             "name": "Giày Nike"
        //           }
        //         },
        //         "price": 2100000,
        //         "name": "GIÀY NIKE SB DELTA FORCE VULC NAM - TRẮNG",
        //         "image1": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787408/PTTK/Item2/giay-nike-sb-delta-force-vulc-nam-trang-04-550x550_yq7rh9.jpg",
        //         "image2": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787373/PTTK/Item2/giay-nike-sb-delta-force-vulc-nam-trang-01-550x550_lzlcja.jpg",
        //         "image3": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787345/PTTK/Item2/giay-nike-sb-delta-force-vulc-nam-trang-02-550x550_mq3zsw.jpg",
        //         "rating": "4.4"
        //       },
        //       "quantity": 1
        //     },
        //     {
        //       "id": 10,
        //       "order": {
        //         "id": 18,
        //         "customer": {
        //           "id": 17,
        //           "phone": "123456789",
        //           "mail": "dungx@gmail.com",
        //           "gender": null,
        //           "memberLevel": 0,
        //           "dob": null,
        //           "address": null,
        //           "fullName": null
        //         },
        //         "payment": {
        //           "id": 28,
        //           "createdDate": [
        //             2022,
        //             12,
        //             3
        //           ],
        //           "total": 6758100,
        //           "shipment": {
        //             "id": 19,
        //             "price": 16500,
        //             "address": null,
        //             "phone": "123456789",
        //             "name": null
        //           }
        //         },
        //         "status": "Pending",
        //         "orderDate": [
        //           2022,
        //           12,
        //           3
        //         ]
        //       },
        //       "item": {
        //         "id": 2,
        //         "shoesID": {
        //           "id": 2,
        //           "size1": "38",
        //           "size2": "39",
        //           "size3": "40",
        //           "quantity": 20,
        //           "description": "Giày Nike SB Delta Force Vulc mẫu giày thời trang basic không bao giờ lỗi mốt, chắc chắn ai cũng sẽ cần một đôi để có thể đi bất cứ nơi đâu đều rất phù hợp. Nike SB Delta Force Vulc phần upper có chất liệu da cao cấp, đế cao su tự nhiên bền đẹp với thời gian.",
        //           "producer": {
        //             "id": 1,
        //             "name": "Nike",
        //             "address": "a"
        //           },
        //           "brand": "Nike",
        //           "category": {
        //             "id": 1,
        //             "name": "Giày Nike"
        //           }
        //         },
        //         "price": 2100000,
        //         "name": "GIÀY NIKE SB DELTA FORCE VULC NAM - TRẮNG",
        //         "image1": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787408/PTTK/Item2/giay-nike-sb-delta-force-vulc-nam-trang-04-550x550_yq7rh9.jpg",
        //         "image2": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787373/PTTK/Item2/giay-nike-sb-delta-force-vulc-nam-trang-01-550x550_lzlcja.jpg",
        //         "image3": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787345/PTTK/Item2/giay-nike-sb-delta-force-vulc-nam-trang-02-550x550_mq3zsw.jpg",
        //         "rating": "4.4"
        //       },
        //       "quantity": 6
        //     },
        //     {
        //       "id": 11,
        //       "order": {
        //         "id": 18,
        //         "customer": {
        //           "id": 17,
        //           "phone": "123456789",
        //           "mail": "dungx@gmail.com",
        //           "gender": null,
        //           "memberLevel": 0,
        //           "dob": null,
        //           "address": null,
        //           "fullName": null
        //         },
        //         "payment": {
        //           "id": 28,
        //           "createdDate": [
        //             2022,
        //             12,
        //             3
        //           ],
        //           "total": 6758100,
        //           "shipment": {
        //             "id": 19,
        //             "price": 16500,
        //             "address": null,
        //             "phone": "123456789",
        //             "name": null
        //           }
        //         },
        //         "status": "Pending",
        //         "orderDate": [
        //           2022,
        //           12,
        //           3
        //         ]
        //       },
        //       "item": {
        //         "id": 3,
        //         "shoesID": {
        //           "id": 3,
        //           "size1": "38",
        //           "size2": "40",
        //           "size3": "41",
        //           "quantity": 20,
        //           "description": "Giày Giày Nike Quest 4 là mẫu giày được thiết kế cực kỳ đẹp và tinh tế với đặc điểm rất thoáng khí, êm và rất nhẹ. Đây là mẫu giày có thể sử dụng trong mọi hoạt động hàng ngày. Với phần upper làm bằng chất liệu vải mesh mềm mại và thoáng giúp vận động thoải mái. Phần đế giữa bằng vật liệu siêu nhẹ khiến cho Nike Quest 4 là mẫu giày rất được yêu thích.",
        //           "producer": {
        //             "id": 1,
        //             "name": "Nike",
        //             "address": "a"
        //           },
        //           "brand": "Nike",
        //           "category": {
        //             "id": 1,
        //             "name": "Giày Nike"
        //           }
        //         },
        //         "price": 2899000,
        //         "name": "GIÀY NIKE QUEST 4 NAM- XÁM CAM",
        //         "image1": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787586/PTTK/Item3/giay-nike-quest-4-nam-xam-cam-02-550x550_bdaekv.jpg",
        //         "image2": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787517/PTTK/Item3/giay-nike-quest-4-nam-xam-cam-04-550x550_sgyl1p.jpg",
        //         "image3": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787505/PTTK/Item3/giay-nike-quest-4-nam-xam-cam-01-550x550_lrgcfm.jpg",
        //         "rating": "4.3"
        //       },
        //       "quantity": 3
        //     },
        //     {
        //       "id": 12,
        //       "order": {
        //         "id": 19,
        //         "customer": {
        //           "id": 17,
        //           "phone": "123456789",
        //           "mail": "dungx@gmail.com",
        //           "gender": null,
        //           "memberLevel": 0,
        //           "dob": null,
        //           "address": null,
        //           "fullName": null
        //         },
        //         "payment": {
        //           "id": 29,
        //           "createdDate": [
        //             2022,
        //             12,
        //             3
        //           ],
        //           "total": 4761600,
        //           "shipment": {
        //             "id": 20,
        //             "price": 120000,
        //             "address": null,
        //             "phone": "123456789",
        //             "name": null
        //           }
        //         },
        //         "status": "Pending",
        //         "orderDate": [
        //           2022,
        //           12,
        //           3
        //         ]
        //       },
        //       "item": {
        //         "id": 1,
        //         "shoesID": {
        //           "id": 1,
        //           "size1": "39",
        //           "size2": "40",
        //           "size3": "41",
        //           "quantity": 20,
        //           "description": "Bảng màu của “Solar Red” gồm sắc đỏ mặt trời cùng xanh mòng biển trên nền trắng tuyết, tối giản nhưng vừa đủ để tái hiện những thiết kế đặc trưng của Bruce Kilgore’s thập niên 80. Không những vậy, chất liệu da phủ khắp phần upper với những đường cắt xẻ tinh tế và công nghệ Air êm ái từ đế giày sẽ cho bạn một cảm giác vừa hoài cổ lại vừa trẻ trung, năng động.",
        //           "producer": {
        //             "id": 1,
        //             "name": "Nike",
        //             "address": "a"
        //           },
        //           "brand": "Nike",
        //           "category": {
        //             "id": 1,
        //             "name": "Giày Nike"
        //           }
        //         },
        //         "price": 2541600,
        //         "name": "GIÀY NIKE AIR FORCE 1 SHADOW SE WOMEN’S “SOLAR RED” DB3902-100",
        //         "image1": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668762493/PTTK/Item1/16032022040324_50_1_ful7xc_amfe4f.jpg",
        //         "image2": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668762474/PTTK/Item1/50_4_thumb_rbvnxq_xefy7i.jpg",
        //         "image3": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668762445/PTTK/Item1/50_2_thumb_m8fkrj_nn8cux.jpg",
        //         "rating": "4.5"
        //       },
        //       "quantity": 1
        //     },
        //     {
        //       "id": 13,
        //       "order": {
        //         "id": 19,
        //         "customer": {
        //           "id": 17,
        //           "phone": "123456789",
        //           "mail": "dungx@gmail.com",
        //           "gender": null,
        //           "memberLevel": 0,
        //           "dob": null,
        //           "address": null,
        //           "fullName": null
        //         },
        //         "payment": {
        //           "id": 29,
        //           "createdDate": [
        //             2022,
        //             12,
        //             3
        //           ],
        //           "total": 4761600,
        //           "shipment": {
        //             "id": 20,
        //             "price": 120000,
        //             "address": null,
        //             "phone": "123456789",
        //             "name": null
        //           }
        //         },
        //         "status": "Pending",
        //         "orderDate": [
        //           2022,
        //           12,
        //           3
        //         ]
        //       },
        //       "item": {
        //         "id": 2,
        //         "shoesID": {
        //           "id": 2,
        //           "size1": "38",
        //           "size2": "39",
        //           "size3": "40",
        //           "quantity": 20,
        //           "description": "Giày Nike SB Delta Force Vulc mẫu giày thời trang basic không bao giờ lỗi mốt, chắc chắn ai cũng sẽ cần một đôi để có thể đi bất cứ nơi đâu đều rất phù hợp. Nike SB Delta Force Vulc phần upper có chất liệu da cao cấp, đế cao su tự nhiên bền đẹp với thời gian.",
        //           "producer": {
        //             "id": 1,
        //             "name": "Nike",
        //             "address": "a"
        //           },
        //           "brand": "Nike",
        //           "category": {
        //             "id": 1,
        //             "name": "Giày Nike"
        //           }
        //         },
        //         "price": 2100000,
        //         "name": "GIÀY NIKE SB DELTA FORCE VULC NAM - TRẮNG",
        //         "image1": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787408/PTTK/Item2/giay-nike-sb-delta-force-vulc-nam-trang-04-550x550_yq7rh9.jpg",
        //         "image2": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787373/PTTK/Item2/giay-nike-sb-delta-force-vulc-nam-trang-01-550x550_lzlcja.jpg",
        //         "image3": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787345/PTTK/Item2/giay-nike-sb-delta-force-vulc-nam-trang-02-550x550_mq3zsw.jpg",
        //         "rating": "4.4"
        //       },
        //       "quantity": 1
        //     }
        //   ],
        order: null,
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: {
        // get all orders
        [getAllOrdersAsync.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getAllOrdersAsync.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.orders = action.payload;
        },
        [getAllOrdersAsync.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        // get order by id
        [getOrderByIdAsync.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getOrderByIdAsync.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.order = action.payload;
        },
        [getOrderByIdAsync.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        // add evaluation
        [addEvaluationAsync.pending]: (state, action) => {
            state.isLoading = true;
        },
        [addEvaluationAsync.fulfilled]: (state, action) => {
            state.isLoading = false;
        },  
        [addEvaluationAsync.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
});

const orderReducer = orderSlice.reducer;
export const ordersSelector = state => state.orderReducer.orders;
export const orderSelector = state => state.orderReducer.order;

export default orderReducer;
