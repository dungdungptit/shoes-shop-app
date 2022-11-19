import React from 'react'
import { styled } from '@mui/material/styles';
import { Box, IconButton } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const CartButtonStyle = styled(IconButton)(({ theme }) => ({
    color: theme.palette.grey[800],
    marginLeft: theme.spacing(1),
    // [theme.breakpoints.up('lg')]: {
    //     display: 'none',
    // },
}));

const CartOuline = () => {
    return (
        <Box sx={{
            flexGrow: 1,
            borderLeft: "1px solid #000",
        }}>
        <CartButtonStyle>
            <ShoppingCartOutlinedIcon />
        </CartButtonStyle>
        </Box>
    )
}

export default CartOuline