import { Box, Button, OutlinedInput, styled, TextField } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { updateCartAsync, updateQuantity } from '../../store/reducer/cartSlice';

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

    const handleOnChangeQuantity = (e) => {
        console.log("value change", e.target.value);
        const value = document.getElementById(`quantity-${index}`).value;
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

    return (
        <tr style={{ padding: '10px 0', borderBottom: '1px solid #cbcbcb' }}>
            <td className="left-section">
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <input
                        type="checkbox"
                        id={`custom-checkbox-${index}`}
                        name={item?.name}
                        value={item?.name}
                        checked={checkedState[index]}
                        onChange={() => handleOnChange(index)}
                    />
                    <h3>{item.name}</h3>
                </Box>
                {/* <label htmlFor={`custom-checkbox-${index}`}>{item?.name}</label> */}
            </td>
            <td style={{
                // display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px' 
            }}>
                <img src={item?.image1} alt={item.name} width="100px" height="100px" />
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
                        value={Number(quantityItem)}
                        onChange={handleOnChangeQuantity}
                    />
                    <ButtonQuantity variant="outlined" onClick={() => {
                        setQuantityItem(Number(quantityItem) + 1);
                        dispatch(updateQuantity({ cartID: id, quantity: Number(quantityItem) + 1 }));
                        dispatch(updateCartAsync({ cartID: id, quantity: Number(quantityItem) + 1 }));
                        if (checkedState[index]) {
                            setTotal(total => total + item.price);
                        }
                    }}>+</ButtonQuantity>
                </Box>
            </td>
        </tr>
    )
}

export default CartItem