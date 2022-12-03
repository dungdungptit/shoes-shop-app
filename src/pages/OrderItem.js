import { Box, Link, Typography } from '@mui/material'
import React, { Fragment } from 'react'

const OrderItem = ({ item, order, quantity, getVND }) => {
    
    return (
        <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Box sx={{ width: '100px', height: '100px', borderRadius: '10px', overflow: 'hidden' }}>
                <img src={item.image1} alt="" style={{ width: '100%', height: '100%' }} />
            </Box>

            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', gap: '10px', justifyContent: 'space-evenly' }}>
                <Typography variant="h6"
                    component={Link}
                    href={`/products/${item.id}`}
                    sx={{
                        flex: 1,
                        textDecoration: 'none',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        minWidth: '200px',
                        maxWidth: '300px',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'wrap',
                        overflow: 'hidden',
                    }}
                >
                    {item.name}
                </Typography>
                <Typography variant="h6"
                    sx={{
                        flex: 1,
                        fontSize: '16px',

                        minWidth: '150px',
                        maxWidth: '150px',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'wrap',
                        overflow: 'hidden',
                    }}
                >{getVND(item.price)}</Typography>
                <Typography variant="h6"
                    sx={{
                        flex: 1,
                        fontSize: '16px',

                        minWidth: '100px',
                        maxWidth: '100px',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'wrap',
                        overflow: 'hidden',
                    }}
                >
                    x {quantity}
                </Typography>
                <Typography variant="h6"
                    sx={{
                        flex: 1,
                        fontSize: '16px',

                        minWidth: '150px',
                        maxWidth: '150px',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'wrap',
                        overflow: 'hidden',
                    }}
                >
                    {getVND(item.price * quantity)}
                </Typography>
                <Typography variant="h6"
                    sx={{
                        flex: 1,
                        fontSize: '16px',

                        minWidth: '80px',
                        maxWidth: '80px',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'wrap',
                        overflow: 'hidden',
                    }}
                >
                    {order.status}
                </Typography>
            </Box>
        </Box>

    )
}

export default OrderItem