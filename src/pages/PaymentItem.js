import { Box, Button, Checkbox, IconButton, Link, OutlinedInput, styled, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';

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

const PaymentItem = ({ item, quantity, id, index, checkedState, handleOnChange, getFormattedPrice, cartItems, setTotal }) => {
    const dispatch = useDispatch();
    const [quantityItem, setQuantityItem] = React.useState(quantity);
    const [totalItem, setTotalItem] = React.useState(quantity * item.price);

    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <tr style={{ padding: '10px 0', borderBottom: '1px solid #cbcbcb' }}>
            <td className="left-section">
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
                        <img src={item?.image1} alt={item.name} width="100px" height="100px" />
                        <Typography variant="body1"
                            component={Link}
                            href={`/products/${item?.shoesID?.id}`}
                            sx={{
                                ml: 1,
                                textWrap: 'wrap',
                                fontSize: '14px',
                            }}>{item?.name}</Typography>
                    </Box>
                </Box>
                {/* <label htmlFor={`custom-checkbox-${index}`}>{item?.name}</label> */}
            </td>
            <td style={{
                // display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px' 
            }}>
                <Box sx={{
                    // display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '10px' 
                }}>
                    <p>{getFormattedPrice(item.price)}</p>
                </Box>
            </td>
            <td style={{
            }}>
                <Box sx={{
                    display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
                }}>
                    <p>
                        {quantity}
                    </p>
                </Box>
            </td>
            <td>
                <Box>
                    <p>{getFormattedPrice(item.price * quantityItem)}</p>
                </Box>
            </td>
        </tr>
    )
}

export default PaymentItem