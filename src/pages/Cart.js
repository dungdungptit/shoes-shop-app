import { Box, Button, styled, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { dataProducts } from '../../src/data/products';
import CartItem from '../feature/cart/CartItem';
import { cartSelector, cartsSelector, getCartByCustomerIdAsync, updateCartAsync } from '../store/reducer/cartSlice';
import "../../src/components/table-style.css";

const CartStyle = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  maxWidth: 1200,
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  gap: '20px',
  paddingTop: '24px',
  justifyContent: 'space-between',
}));

const ButtonQuantity = styled(Button)(({ theme }) => ({
  width: 40,
  height: 32,
  minWidth: 40,
  minHeight: 32,
  borderRadius: 0,
  border: '1px solid #cbcbcb',
  backgroundColor: '#fff',
  color: '#000',
  "&:hover": {
    backgroundColor: '#fff',
    border: '1px solid #cbcbcb',
  }
}));

const getFormattedPrice = (price) => `${price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}`;

const Cart = () => {
  const [checkedState, setCheckedState] = useState(
    new Array(dataProducts.length).fill(false)
  );
  const [isCheckAll, setIsCheckAll] = useState(false);

  const [total, setTotal] = useState(0);

  const cartItems = useSelector(cartsSelector);
  // const cartItems = [
  //   {
  //     "id": 7,
  //     "customer": {
  //       "id": 17,
  //       "phone": "123456789",
  //       "mail": "dungx@gmail.com",
  //       "gender": null
  //     },
  //     "item": {
  //       "id": 1,
  //       "shoesID": {
  //         "id": 1,
  //         "size1": "39",
  //         "size2": "40",
  //         "size3": "41",
  //         "quantity": 20,
  //         "description": "Bảng màu của “Solar Red” gồm sắc đỏ mặt trời cùng xanh mòng biển trên nền trắng tuyết, tối giản nhưng vừa đủ để tái hiện những thiết kế đặc trưng của Bruce Kilgore’s thập niên 80. Không những vậy, chất liệu da phủ khắp phần upper với những đường cắt xẻ tinh tế và công nghệ Air êm ái từ đế giày sẽ cho bạn một cảm giác vừa hoài cổ lại vừa trẻ trung, năng động.",
  //         "producer": {
  //           "id": 1,
  //           "name": "Nike",
  //           "address": "a"
  //         },
  //         "brand": "Nike",
  //         "category": {
  //           "id": 1,
  //           "name": "Giày Nike"
  //         }
  //       },
  //       "price": 2541600,
  //       "name": "GIÀY NIKE AIR FORCE 1 SHADOW SE WOMEN’S “SOLAR RED” DB3902-100",
  //       "image1": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668762493/PTTK/Item1/16032022040324_50_1_ful7xc_amfe4f.jpg",
  //       "image2": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668762474/PTTK/Item1/50_4_thumb_rbvnxq_xefy7i.jpg",
  //       "image3": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668762445/PTTK/Item1/50_2_thumb_m8fkrj_nn8cux.jpg",
  //       "rating": "4.5"
  //     },
  //     "quantity": 3
  //   },
  //   {
  //     "id": 8,
  //     "customer": {
  //       "id": 17,
  //       "phone": "123456789",
  //       "mail": "dungx@gmail.com",
  //       "gender": null
  //     },
  //     "item": {
  //       "id": 2,
  //       "shoesID": {
  //         "id": 2,
  //         "size1": "38",
  //         "size2": "39",
  //         "size3": "40",
  //         "quantity": 20,
  //         "description": "Giày Nike SB Delta Force Vulc mẫu giày thời trang basic không bao giờ lỗi mốt, chắc chắn ai cũng sẽ cần một đôi để có thể đi bất cứ nơi đâu đều rất phù hợp. Nike SB Delta Force Vulc phần upper có chất liệu da cao cấp, đế cao su tự nhiên bền đẹp với thời gian.",
  //         "producer": {
  //           "id": 1,
  //           "name": "Nike",
  //           "address": "a"
  //         },
  //         "brand": "Nike",
  //         "category": {
  //           "id": 1,
  //           "name": "Giày Nike"
  //         }
  //       },
  //       "price": 2100000,
  //       "name": "GIÀY NIKE SB DELTA FORCE VULC NAM - TRẮNG",
  //       "image1": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787408/PTTK/Item2/giay-nike-sb-delta-force-vulc-nam-trang-04-550x550_yq7rh9.jpg",
  //       "image2": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787373/PTTK/Item2/giay-nike-sb-delta-force-vulc-nam-trang-01-550x550_lzlcja.jpg",
  //       "image3": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787345/PTTK/Item2/giay-nike-sb-delta-force-vulc-nam-trang-02-550x550_mq3zsw.jpg",
  //       "rating": "4.4"
  //     },
  //     "quantity": 1
  //   },
  //   {
  //     "id": 9,
  //     "customer": {
  //       "id": 17,
  //       "phone": "123456789",
  //       "mail": "dungx@gmail.com",
  //       "gender": null
  //     },
  //     "item": {
  //       "id": 3,
  //       "shoesID": {
  //         "id": 3,
  //         "size1": "38",
  //         "size2": "40",
  //         "size3": "41",
  //         "quantity": 20,
  //         "description": "Giày Giày Nike Quest 4 là mẫu giày được thiết kế cực kỳ đẹp và tinh tế với đặc điểm rất thoáng khí, êm và rất nhẹ. Đây là mẫu giày có thể sử dụng trong mọi hoạt động hàng ngày. Với phần upper làm bằng chất liệu vải mesh mềm mại và thoáng giúp vận động thoải mái. Phần đế giữa bằng vật liệu siêu nhẹ khiến cho Nike Quest 4 là mẫu giày rất được yêu thích.",
  //         "producer": {
  //           "id": 1,
  //           "name": "Nike",
  //           "address": "a"
  //         },
  //         "brand": "Nike",
  //         "category": {
  //           "id": 1,
  //           "name": "Giày Nike"
  //         }
  //       },
  //       "price": 2899000,
  //       "name": "GIÀY NIKE QUEST 4 NAM- XÁM CAM",
  //       "image1": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787586/PTTK/Item3/giay-nike-quest-4-nam-xam-cam-02-550x550_bdaekv.jpg",
  //       "image2": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787517/PTTK/Item3/giay-nike-quest-4-nam-xam-cam-04-550x550_sgyl1p.jpg",
  //       "image3": "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787505/PTTK/Item3/giay-nike-quest-4-nam-xam-cam-01-550x550_lrgcfm.jpg",
  //       "rating": "4.3"
  //     },
  //     "quantity": 1
  //   }
  // ]
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('user'));
  // console.log(user);
  // useEffect(() => {
  //   dispatch(getCartByCustomerIdAsync(user.customerID.id));
  // }, [dispatch]);
  console.log(cartItems);

  const handleCheckAll = () => {
    setCheckedState(new Array(cartItems.length).fill(!isCheckAll));
    setIsCheckAll(!isCheckAll);
    const totalPrice = cartItems.reduce((total, product) => {
      return total + product.item.price * product.quantity;
    }, 0);
    setTotal(isCheckAll ? 0 : totalPrice);
  };

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
    setIsCheckAll(updatedCheckedState.every(Boolean));

    const totalPrice = cartItems.reduce((total, product, index) => {
      return total + (updatedCheckedState[index] ? product.item.price * product.quantity : 0);
    }, 0);
    setTotal(totalPrice);
  };

  return (
    <CartStyle>
      <div className="App">
        <div class="table-responsive">
          <table class="table table-primary">
            <thead>
              <tr>
                <th scope="col"><input type="checkbox" onChange={handleCheckAll} checked={isCheckAll} /> Sản phẩm</th>
                <th scope="col">Đơn giá</th>
                <th scope="col">Số lượng</th>
                <th scope="col">Số tiền</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(({ id, item, quantity }, index) => {
                return (
                  <CartItem
                    key={index}
                    id={id}
                    item={item}
                    quantity={quantity}
                    checkedState={checkedState}
                    handleOnChange={handleOnChange}
                    index={index}
                    getFormattedPrice={getFormattedPrice}
                    cartItems={cartItems}
                    setTotal={setTotal}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="toppings-list-item">
          <div className="left-section">Total:</div>
          <div className="right-section">{getFormattedPrice(total)}</div>
        </div>
      </div>
    </CartStyle >
  )
}

export default Cart