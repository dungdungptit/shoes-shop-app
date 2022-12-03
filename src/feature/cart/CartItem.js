import { Box, Button, Checkbox, IconButton, Link, OutlinedInput, styled, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { cartsSelector, deleteItemInCartAsync, getCartByCustomerIdAsync, updateCartAsync, updateQuantity } from '../../store/reducer/cartSlice';

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

const CartItem = ({ item, quantity, id, index, checkedState, handleOnChange, getFormattedPrice, cartItems, setTotal }) => {
    const dispatch = useDispatch();
    const [quantityItem, setQuantityItem] = React.useState(quantity);
    const [totalItem, setTotalItem] = React.useState(quantity * item.price);

    const user = JSON.parse(localStorage.getItem('user'));

    const handleOnChangeQuantity = (e) => {
        console.log("value change", e.target.value);
        let value = document.getElementById(`quantity-${index}`).value;
        if (value > item?.shoesID?.quantity) {
            value = item?.shoesID?.quantity
        }
        if (Number(value) > 0) {
            setQuantityItem(quantityItem => Number(value));
            setTotalItem(Number(value) * item.price);
            console.log(value);
            console.log('quantityItem', quantityItem);
            dispatch(updateCartAsync({ cartID: id, quantity: Number(value) }));
            dispatch(updateQuantity({ cartID: id, quantity: Number(value) }));
            if (checkedState[index]) {
                if (Number(value) > quantity) {
                    setTotal(total => total + (Number(value) - quantityItem) * item.price);
                } else {
                    setTotal(total => total - (quantityItem - Number(value)) * item.price);
                }
            }
            // else{
            //     setTotal(total => total - quantityItem * item.price);
            // }
        }
    }

    useEffect(() => {
        const value = document.getElementById(`quantity-${index}`).value;
        value > item?.shoesID?.quantity ? document.getElementById(`quantity-${index}`).value = item?.shoesID?.quantity : document.getElementById(`quantity-${index}`).value = value;
        // setQuantityItem(quantityItem => Number(value));
        quantityItem > item?.shoesID?.quantity && setQuantityItem(item?.shoesID?.quantity);
        if (checkedState[index]) {
            if (Number(value) > quantity) {
                setTotal(total => total + (Number(value) - quantityItem) * item.price);
            } else {
                setTotal(total => total - (quantityItem - Number(value)) * item.price);
            }
        }
    }, [quantityItem])

    const handleDeleteItem = () => {
        dispatch(deleteItemInCartAsync({ cartID: id }));
        if (checkedState[index]) {
            setTotal(total => total - item.price * quantityItem);
        }
    }

    return (
        <tr style={{ padding: '10px 0', borderBottom: '1px solid #cbcbcb' }}>
            <td className="left-section">
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Checkbox
                        checked={checkedState[index]}
                        onChange={() => handleOnChange(index)}
                        inputProps={{ 'aria-label': 'controlled' }}
                        id={`custom-checkbox-${index}`}
                    />
                    {/* <input
                        type="checkbox"
                        id={`custom-checkbox-${index}`}
                        name={item?.name}
                        value={item?.name}
                        checked={checkedState[index]}
                        onChange={() => handleOnChange(index)}
                    /> */}
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
                    display: 'flex', flexDirection: 'row', alignItems: 'center', width: "inherit"
                }}>
                    <ButtonQuantity variant="outlined" onClick={() => {
                        if (quantityItem > 1) {
                            setQuantityItem(Number(quantityItem) - 1);
                            dispatch(updateQuantity({ cartID: id, quantity: Number(quantityItem) - 1 }));
                            dispatch(updateCartAsync({ cartID: id, quantity: Number(quantityItem) - 1 }));
                            if (checkedState[index]) {
                                setTotal(total => total - item.price);
                            }
                        }
                    }}>-</ButtonQuantity>
                    <TextField
                        id={`quantity-${index}`}
                        type="number"
                        InputProps={{
                            inputProps: {
                                max: item?.shoesID.quantity, min: 0, readOnly: false
                            }
                        }}
                        InputLabelProps={{
                            shrink: true,
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
                        variant="outlined"
                        value={Number(quantityItem) < item?.shoesID.quantity ? Number(quantityItem) : item?.shoesID.quantity}
                        onChange={handleOnChangeQuantity}
                    />
                    <ButtonQuantity variant="outlined" onClick={() => {
                        if (quantityItem < item?.shoesID.quantity) {
                            console.log("quantityItem", quantityItem);
                            setQuantityItem(Number(quantityItem) + 1);
                            dispatch(updateQuantity({ cartID: id, quantity: Number(quantityItem) + 1 }));
                            dispatch(updateCartAsync({ cartID: id, quantity: Number(quantityItem) + 1 }));
                            if (checkedState[index]) {
                                setTotal(total => total + item.price);
                            }
                        }
                    }}>+</ButtonQuantity>
                </Box>
            </td>
            <td>
                <Box>
                    <p>{getFormattedPrice(item.price * quantityItem)}</p>
                </Box>
            </td>
            <td>
                <Box
                    component={"form"} onSubmit={handleDeleteItem}
                >
                    <Typography
                        component={"button"}
                        type="submit"
                        variant="body1"
                        sx={{
                            border: "none",
                            background: "none",
                            color: '#ff0000',
                            cursor: 'pointer',
                            "&:hover": {
                                textDecoration: 'underline',
                            }
                        }}

                    >Xóa</Typography>
                </Box>
            </td>
        </tr>
    )
}

export default CartItem