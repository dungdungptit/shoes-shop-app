import { Box, Button, styled } from '@mui/material'
import React from 'react'

const FillterBox = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '100%',
    minHeight: 'max-content',
    padding: '20px',
    borderRadius: "24px",
    maxWidth: 240,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
}));

const FillterItem = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '100%',
    marginTop: '10px',
    "& button": {
        width: '100%',
        height: '100%',
        padding: '10px 0',
        border: 'none',
        outline: 'none',
        backgroundColor: '#f6f9fc',
        borderRadius: '10px',
        cursor: 'pointer',
        textTransform: 'capitalize',
        fontSize: '14px',
        fontWeight: 500,
        color: '#333',
        transition: 'all 0.3s ease',
        "&:hover": {
            backgroundColor: '#e6e6e6',
        },
        "&.active": {
            backgroundColor: '#D23F57',
            color: '#fff',
        }
    }
}));




const FillterByCategory = () => {
    const [category, setCategory] = React.useState('all');
    const [fillter, setFillter] = React.useState([
        {
            id: 1,
            name: 'all',
            isActive: true,
        },
        {
            id: 2,
            name: 'nike',
            isActive: false,
        },
        {
            id: 3,
            name: 'adidas',
            isActive: false,
        },
        {
            id: 4,
            name: 'puma',
            isActive: false,
        },
        {
            id: 5,
            name: 'vans',
            isActive: false,
        },
    ]);

    const handleFillter = (name) => {
        setCategory(name);
        const newFillter = fillter.map((item) => {
            if (item.name === name) {
                return {
                    ...item,
                    isActive: true,
                };
            }
            return {
                ...item,
                isActive: false,
            };
        });
        setFillter(newFillter);
    };

    return (
        <FillterBox>
            <h3>Category</h3>

            {fillter.map((item) => (
                <FillterItem key={item.id}>
                    <button
                        onClick={() => handleFillter(item.name)}
                        className={item.name === category ? 'active' : ''}
                    >
                        {item.name}
                    </button>
                </FillterItem>
            ))}
        </FillterBox>
    )
}

export default FillterByCategory