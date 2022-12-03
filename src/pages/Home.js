import { Box, Button, Typography } from '@mui/material';
import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SlickSlider from '../feature/home/SlickSlider'
import ProductItem from '../feature/products/ProductItem';
import { getAllProductsAsync, productsSelector } from '../store/reducer/productSlice';

const Home = () => {
  const ListProducts = useSelector(productsSelector);
  const dispatch = useDispatch();

  console.log(ListProducts);

  useEffect(() => {
    dispatch(getAllProductsAsync());
  }, []);
  return (
    <Fragment>
      <SlickSlider />
      <Box sx={{ width: '100%', height: 'max-content', maxWidth: 1200, margin: '0 auto', mt: 4 }}>

        <Typography variant="h4" component="h4" sx={{ fontWeight: 600, fontSize: '24px', lineHeight: '28px', color: '#000000', mb: 2 }}>
          Sản phẩm mới
        </Typography>

        <Box sx={{
          width: '100%',
          height: '100%',
          display: 'grid',
          marginTop: '24px',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridGap: '20px',
          
        }}>
          {!!ListProducts && ListProducts.map((product, index) => (
            index < 4 && <ProductItem key={product.id} product={product} />
          ))}
        </Box>
      </Box>
    </Fragment>
  )
}

export default Home