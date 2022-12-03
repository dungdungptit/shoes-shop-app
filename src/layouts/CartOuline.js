import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles';
import { Badge, Box, IconButton } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { cartsSelector, countCartSelector, getCartByCustomerIdAsync, setCountCart } from '../store/reducer/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const CartButtonStyle = styled(IconButton)(({ theme }) => ({
    color: theme.palette.grey[800],
    marginLeft: theme.spacing(1),
    // [theme.breakpoints.up('lg')]: {
    //     display: 'none',
    // },
}));

const CartOuline = () => {
    const cartItems = useSelector(cartsSelector);
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('user'));
    const countCart = useSelector(countCartSelector);

    useEffect(() => {
        dispatch(getCartByCustomerIdAsync(user?.customerID.id));
    }, []);
    
    useEffect(() => {
        console.log("render cart");
    }, [countCart, cartItems]);

    return (
        <Box sx={{
            flexGrow: 1,
            borderLeft: "1px solid #000",
        }}>
            <CartButtonStyle>
                <Badge badgeContent={countCart < cartItems.length ? cartItems.length : countCart} color="primary">
                    <ShoppingCartOutlinedIcon />
                </Badge>
            </CartButtonStyle>
        </Box>
    )
}

export default CartOuline