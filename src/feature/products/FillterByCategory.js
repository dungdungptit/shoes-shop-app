import { Box, Button, styled } from '@mui/material'
import React from 'react'
import Slider from '@mui/material/Slider';

const marks = [
    {
        value: 0,
        label: '0đ',
    },
    {
        value: 1000000,
        label: '',
    },
    {
        value: 1500000,
        label: '',
    },
    {
        value: 2000000,
        label: '',
    },
    {
        value: 3000000,
        label: '',
    },
    {
        value: 4000000,
        label: '',
    },
    {
        value: 5000000,
        label: '5.000.000đ',
    },
];

function valuetext(value) {
    return `${value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}`;
}

function valueLabelFormat(value) {
    return marks.findIndex((mark) => mark.value === value) + 1;
}

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

const ButtonSize = styled(Button)(({ theme }) => ({
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
}));




const FillterByCategory = () => {
    const [category, setCategory] = React.useState('all');
    const [fillter, setFillter] = React.useState([
        {
            id: 1,
            name: 'Tất cả',
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
        <Box sx={{
            width: '100%',
            height: '100%',
            minHeight: 'max-content',
            maxWidth: 240,
        }}>
            <h3>Thương hiệu</h3>
            <FillterBox>
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
            <Box sx={{ marginTop: '20px' }}>
                <h3>Giá</h3>
                <FillterBox>
                    <FillterItem>
                        <Button variant="contained">Từ thấp đến cao</Button>
                    </FillterItem>
                    <FillterItem>
                        <Button variant="contained">Từ cao đến thấp</Button>
                    </FillterItem>
                    <Slider
                        size="small"
                        defaultValue={0}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        // valueLabelFormat={valueLabelFormat}
                        step={500000}
                        marks={marks}
                        min={0}
                        max={5000000}
                    />
                </FillterBox>
            </Box>

            <Box sx={{ marginTop: '20px' }}>
                <h3>Kích thước</h3>
                <FillterBox sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: '10px',
                }}>
                    <ButtonSize size="small" variant="contained">36</ButtonSize>
                    <ButtonSize size="small" variant="contained">37</ButtonSize>
                    <ButtonSize size="small" variant="contained">38</ButtonSize>
                    <ButtonSize size="small" variant="contained">39</ButtonSize>
                    <ButtonSize size="small" variant="contained">40</ButtonSize>
                    <ButtonSize size="small" variant="contained">41</ButtonSize>
                    <ButtonSize size="small" variant="contained">42</ButtonSize>
                    <ButtonSize size="small" variant="contained">43</ButtonSize>
                    <ButtonSize size="small" variant="contained">44</ButtonSize>
                </FillterBox>
            </Box>

            <Box sx={{ marginTop: '20px' }}>
                <Button variant="contained" sx={{ width: '100%' }}>Lọc</Button>
            </Box>
        </Box>
    )
}

export default FillterByCategory