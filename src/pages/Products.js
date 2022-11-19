import { Box, styled } from '@mui/material'
import React from 'react'
import FillterByCategory from '../feature/products/FillterByCategory';
import ListProducts from '../feature/products/ListProducts';

const ShopStyle = styled(Box)(({ theme }) => ({
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

const Products = () => {
  return (
    <ShopStyle>
      <FillterByCategory />
      <ListProducts />
    </ShopStyle>
  )
}

export default Products