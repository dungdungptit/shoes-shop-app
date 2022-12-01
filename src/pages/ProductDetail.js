import { Box, Button, OutlinedInput, Rating, styled, TextField, Typography } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductByIdAsync, productSelector } from '../store/reducer/productSlice';
import Slider from "react-slick";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ProductDetailTab from '../feature/products/ProductDetailTab';
import { addToCartAsync } from '../store/reducer/cartSlice';

const ProductDetailStyle = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  maxWidth: 1200,
  margin: '24px auto 0',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  gap: '20px',
  padding: '24px',
  justifyContent: 'center',
  backgroundColor: "#fff",
  borderRadius: '8px',
}));

const ProductSlider = styled(Box)(({ theme }) => ({
  height: 500,
  width: 500,
  "& .slick-dots": {
    position: "relative",
    bottom: -20,
    display: "flex !important",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    "& li": {
      width: 120,
      height: 80,
      "& a": {
        width: 120,
        height: 80,
        "& img": {
          borderRadius: 5,
          width: 120,
          height: 80,
          objectFit: 'cover',
        }
      },
      "&.slick-active": {
        "& img": {
          border: '1px solid #cbcbcb',
        }
      }
    }
  },
  "& .slick-prev, .slick-next": {
    display: 'none !important',
  }
}));

const SliderImage = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '500px',
  height: '100%',
  "& img": {
    maxHeight: '400px',
    objectFit: 'cover',
  },
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

const ButtonSize = styled(Button)(({ theme }) => ({
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

const ButtonCart = styled(Button)(({ theme }) => ({
  width: 'auto',
  height: 40,
  minWidth: 'auto',
  minHeight: 40,
  borderRadius: 0,
  border: '1px solid #cbcbcb',
  backgroundColor: '#d23f57',
  borderRadius: 5,
  color: '#fff',
  "&:hover": {
    backgroundColor: '#d23f57',
    border: '1px solid #cbcbcb',
  }
}));


const productDetail = {
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
}
const getDiscount = (price, discount) => {
  return price - (price * discount) / 100;
};

const ProductDetail = () => {
  const params = useParams();
  const [quantity, setQuantity] = useState(1);
  const productId = params.id;
  // localStorage.setItem('user', JSON.stringify(
  //   {
  //     "customerID": {
  //       "id": 17,
  //       "phone": "123456789",
  //       "mail": "dungx@gmail.com",
  //       "gender": null
  //     },
  //     "username": "dungx",
  //     "password": "123456",
  //     "status": null,
  //     "role": "0",
  //     "image": null,
  //     "id": 5
  //   }
  //   ));
    const user = JSON.parse(localStorage.getItem('user'));
  // const product = useSelector(productSelector)
  const product = productDetail;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(product);
  // useEffect(() => {
  //   dispatch(getProductByIdAsync(productId));
  // }, [dispatch]);

  const [currentSlide, setCurrentSlide] = React.useState(
    product ? { images: [product.image1, product.image2, product.image3] } : { images: [productDetail.image1, productDetail.image2, productDetail.image3] }
  );

  useEffect(() => {
    setCurrentSlide(product ? { images: [product.image1, product.image2, product.image3] } : { images: [productDetail.image1, productDetail.image2, productDetail.image3] })
  }, [product])

  const settings = {
    customPaging: (i) => {
      return (
        <a>
          <img src={currentSlide.images[i]} alt="" height={80} width={120} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const handleChangeQuantity = (value) => {
    setQuantity(value);
  }

  const handleDecreaseQuantity = () => {
    if (Number(quantity) > 1) {
      setQuantity(Number(quantity) - 1);
    }
  }

  const handleIncreaseQuantity = () => {
    setQuantity(Number(quantity) + 1);
  }

  // add to cart
  const handleAddToCart = () => {
    const cartItem = {
      customerID: user?.customerID.id,
      itemID: product.id,
      quantity: quantity,
    }
    dispatch(addToCartAsync(cartItem));
  }

  return (
    <Fragment>
      <ProductDetailStyle>
        {product && (
          <ProductSlider >
            <Slider {...settings}>
              <SliderImage>
                <img src={product.image1} height="400px" width="100%" />
              </SliderImage>
              <SliderImage>
                <img src={product.image2} height="400px" width="100%" />
              </SliderImage>
              <SliderImage>
                <img src={product.image3} height="400px" width="100%" />
              </SliderImage>
            </Slider>
          </ProductSlider>
        )}
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, flexDirection: "column", justifyContent: "center" }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#000' }}>{product?.name}</Typography>

          </Box>

          <Typography variant="body1" sx={{ color: '#000' }}>Thương hiệu: {product?.shoesID.brand}</Typography>
          <Typography variant="h6" sx={{ color: '#000', display: 'flex', alignItems: 'center', gap: 1, fontSize: 16, }}>
            Đánh giá: <Rating name="read-only" value={Number(product?.rating)} readOnly precision={0.5} sx={{ fontSize: 20 }} /> (50)
          </Typography>

          <Typography variant="h6" sx={{
            color: '#d0011b',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            '& span': {
              fontSize: 26,
              fontWeight: 'bold',
              textTransform: 'capitalize',
              marginRight: 1,
            },
            '& p': {
              fontSize: 26,
              fontWeight: 'bold',
              color: '#929292',
              textTransform: 'capitalize',
              textDecoration: 'line-through',
            },
          }}>
            <span>{getDiscount(product?.price, 0.1).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
            <p>{product?.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, }}>
            Size:
            <ButtonSize size='small' variant="outlined" sx={{ fontWeight: 'bold', color: '#000' }}>{product?.shoesID.size1}</ButtonSize>
            <ButtonSize size='small' variant="outlined" sx={{ fontWeight: 'bold', color: '#000' }}>{product?.shoesID.size2}</ButtonSize>
            <ButtonSize size='small' variant="outlined" sx={{ fontWeight: 'bold', color: '#000' }}>{product?.shoesID.size3}</ButtonSize>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0, }}>
            Số lượng:
            <ButtonQuantity variant="outlined" sx={{ fontWeight: 'bold', color: '#000', backgroundColor: '#fff', ml: 2 }}
              onClick={handleDecreaseQuantity}
            >-</ButtonQuantity>
            <TextField id="outlined-basic" label="" variant="outlined" size="small" type="number"
              InputProps={{
                inputProps: {
                  max: product?.shoesID.quantity, min: 0
                }
              }}

              sx={{
                width: 50, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center',
                "& .MuiOutlinedInput-input": {
                  padding: 0,
                  textAlign: 'center',
                  height: 32,
                  fontSize: 16,
                  width: 50,
                  outline: 'none',
                  border: 'none',
                  "&::placeholder": {
                    fontSize: 16,
                  },
                },
                "& .MuiOutlinedInput-root": {
                  height: 32,
                  "& fieldset": {
                    border: '1px solid rgba(0,0,0,.09)',
                    borderRadius: 0,
                  },
                  "&:hover fieldset": {
                    border: '1px solid rgba(0,0,0,.09)',
                  },
                  "&.Mui-focused fieldset": {
                    border: '1px solid rgba(0,0,0,.09)',
                  },
                },
              }}
              value={quantity > 0 ? quantity : 1}
              onChange={(e) => handleChangeQuantity(e.target.value)}
            />
            <ButtonQuantity variant="outlined" sx={{ fontWeight: 'bold', color: '#000' }}
              onClick={handleIncreaseQuantity}
            >+</ButtonQuantity>
            <Typography variant="body1" sx={{ ml: 2, color: '#000' }}>{product?.shoesID.quantity} sản phẩm có sẵn</Typography>

          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, }}>
            <ButtonCart variant="contained"
              onClick={handleAddToCart}
              startIcon={<AddShoppingCartIcon />}>Thêm vào giỏ hàng</ButtonCart>
            <ButtonCart variant="contained">Mua ngay</ButtonCart>
          </Box>
        </Box>
      </ProductDetailStyle>

      <ProductDetailTab product={product} />
    </Fragment>
  )
}

export default ProductDetail