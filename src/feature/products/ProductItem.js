import { Box, Rating, styled } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductItemStyled = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '100%',
    maxHeight: 'max-content',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    boxShadow: '0px 1px 3px rgb(3 0 71 / 9%)',
    borderRadius: '10px',
    position: 'relative',
    transition: 'all 0.3s ease',
    backgroundColor: '#fff',
    "&:hover": {
        transform: 'scale(1.01)',
        boxShadow: "0px 8px 45px rgb(3 0 71 / 9%)",
    },
    '& .product-item__image': {
        width: '100%',
        height: '100%',
        maxHeight: '300px',
        cursor: 'pointer',
        '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
        },
    },
    '& .product-item__content': {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: '10px 16px',
        '& .product-item__name': {
            '& h3': {
                cursor: 'pointer',
                fontSize: 16,
                fontWeight: 500,
                color: '#333',
                textTransform: 'capitalize',
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
                width: '252px',
            },
        },
        '& .product-item__price': {
            marginTop: '10px',
            width: '100%',
            display: 'flex',
            gap: '10px',
            '& span': {
                fontWeight: "bold",
                fontSize: 16,
                color: '#D23F57',
                textTransform: 'capitalize',
            },
            '& p': {
                fontSize: 16,
                fontWeight: "bold",
                color: '#929292',
                textTransform: 'capitalize',
                textDecoration: 'line-through',
            },
        },
        '& .product-item__rating': {
            marginTop: '8px',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
        },
        '& .product-item__discount': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '48px',
            height: '32px',
            fontSize: "14px",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 500,
            color: '#fff',
            borderRadius: '10px 0 10px 0',
            background: '#faaf00',
        },
    },
}));

const getDiscount = (price, discount) => {
    return price - (price * discount) / 100;
};
const ProductItem = ({ product }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/products/${product.id}`);
    };
    return (
        <ProductItemStyled>
            <Box className="product-item__image"
                onClick={handleClick}
            >
                <img src={product.image1} alt="" />
            </Box>
            <Box className="product-item__content">
                <Box className="product-item__name"
                    onClick={handleClick}
                >
                    <h3>{product.name}</h3>
                </Box>
                <div className="product-item__rating">
                    <Rating name="read-only" value={product.rating} readOnly precision={0.5} sx={{ fontSize: 20 }} />
                </div>
                <div className="product-item__price">
                    <span>{getDiscount(product.price, 0.1).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                    <p>{product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
                </div>
                <div className="product-item__discount">
                    <p>{0.1 * 100}%</p>
                </div>
            </Box>
        </ProductItemStyled>
    )
}

export default ProductItem