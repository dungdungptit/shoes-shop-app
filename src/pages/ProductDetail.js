import { Box, Button, Rating, styled, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductByIdAsync, productSelector } from '../store/reducer/productSlice';
import Slider from "react-slick";
import { width } from '@mui/system';

const ProductDetailStyle = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  maxWidth: 1200,
  margin: '24px auto 0',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  gap: '20px',
  paddingTop: '24px',
  justifyContent: 'center',
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

const productDetail = {
  id: 3,
  image1: "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787586/PTTK/Item3/giay-nike-quest-4-nam-xam-cam-02-550x550_bdaekv.jpg",
  image2: "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787517/PTTK/Item3/giay-nike-quest-4-nam-xam-cam-04-550x550_sgyl1p.jpg",
  image3: "https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787505/PTTK/Item3/giay-nike-quest-4-nam-xam-cam-01-550x550_lrgcfm.jpg",
  name: "GIÀY NIKE QUEST 4 NAM- XÁM CAM",
  price: 2899000,
  rating: "4.3",
  shoesID: {
    brand: "Nike",
    category: {
      id: 1,
      name: "Giày Nike",
      description: "Giày Giày Nike Quest 4 là mẫu giày được thiết kế cực kỳ đẹp và tinh tế với đặc điểm rất thoáng khí, êm và rất nhẹ. Đây là mẫu giày có thể sử dụng trong mọi hoạt động hàng ngày. Với phần upper làm bằng chất liệu vải mesh mềm mại và thoáng giúp vận động thoải mái. Phần đế giữa bằng vật liệu siêu nhẹ khiến cho Nike Quest 4 là mẫu giày rất được yêu thích.",
    },
    id: 3,
    producer: {
      id: 1,
      name: "Nike",
      address: "USA",
    },
    quantity: 20,
    size1: 40,
    size2: 41,
    size3: 42,
  }
}


const ProductDetail = () => {
  const params = useParams();
  const productId = params.id;

  // const product = useSelector(productSelector)
  const product = productDetail;
  const dispatch = useDispatch();
  console.log(product);
  useEffect(() => {
    dispatch(getProductByIdAsync(productId));
  }, [dispatch]);

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
  return (
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
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 2, }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, flexDirection: "column", justifyContent: "center" }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'primary.main' }}>{product.name}</Typography>
          <Rating name="read-only" value={product.rating} readOnly precision={0.5} />
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main' }}>{product.price}₫</Typography>
        <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'primary.main' }}>{product.shoesID.category.name}</Typography>
        <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'primary.main' }}>Producer: {product.shoesID.producer.name}</Typography>
        <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'primary.main' }}>Brand: {product.shoesID.brand}</Typography>
        <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'primary.main' }}>Current quantity: {product.shoesID.quantity}</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, }}>
          Size:
          <Button variant="outlined" sx={{ fontWeight: 'bold', color: 'primary.main' }}>{product.shoesID.size1}</Button>
          <Button variant="outlined" sx={{ fontWeight: 'bold', color: 'primary.main' }}>{product.shoesID.size2}</Button>
          <Button variant="outlined" sx={{ fontWeight: 'bold', color: 'primary.main' }}>{product.shoesID.size3}</Button>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, }}>
          Quantity:
          <Button variant="outlined" sx={{ fontWeight: 'bold', color: 'primary.main' }}>-</Button>
          <Button variant="outlined" sx={{ fontWeight: 'bold', color: 'primary.main' }}>1</Button>
          <Button variant="outlined" sx={{ fontWeight: 'bold', color: 'primary.main' }}>+</Button>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, }}>
          <Button variant="contained" sx={{ fontWeight: 'bold', color: '#fff', backgroundColor: 'primary.dark' }}>Add to cart</Button>
          <Button variant="contained" sx={{ fontWeight: 'bold', color: '#fff', backgroundColor: 'primary.dark' }}>Buy now</Button>
        </Box>
      </Box>
    </ProductDetailStyle>

  )
}

export default ProductDetail