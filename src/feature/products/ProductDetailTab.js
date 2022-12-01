import * as React from 'react';
import Button from '@mui/material/Button';

import CloseIcon from '@mui/icons-material/Close';

import { Avatar, Box, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, Rating, Toolbar, Typography } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ height: '225px' }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


export default function ProductDetailTab({ product }) {
    const { t } = useTranslation();
    // console.log(item);

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{
            width: "100%",
            maxWidth: 1200,
            margin: "0 auto",
            marginTop: "80px",
            height: "400px",
            backgroundColor: "transparent",
            transition: "height 0.3s ease-in-out",
        }}>
            <Box sx={{ width: '100%', height: "inherit" }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label={"Mô tả"} {...a11yProps(0)} />
                        <Tab label={"Đánh giá (3)"} {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <Box sx={{
                        mt: 3
                    }}>
                        <Typography variant="h6" component="div" sx={{ fontWeight: "bold", fontSize: 18, mb: 2 }}> Chi tiết sản phẩm </Typography>
                        <Typography variant="body1" sx={{ color: '#000', mb: 1 }}>Kho hàng: {product?.shoesID.quantity}</Typography>
                        <Typography variant="body1" sx={{ color: '#000', mb: 1 }}>Nhà sản xuất: {product?.shoesID.producer.name}</Typography>
                        <Typography variant="body1" sx={{ color: '#000' }}>Mô tả: {product?.shoesID.description}</Typography>
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Box sx={{
                        mt: 3
                    }}>
                        {/* đánh giá */}
                        <Box sx={{ width: '100%', bgcolor: 'tranparent' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <Avatar sx={{ bgcolor: 'red' }}>R</Avatar>
                                <Box sx={{ ml: 2, }}>
                                    <Typography variant="body1" sx={{ color: '#000' }}>Nguyễn Văn A</Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Rating name="read-only" value={5} sx={{fontSize: 20}} readOnly />
                                        <Typography variant="body1" sx={{ color: '#000', ml: 1 }}>5 sao</Typography>
                                        <Typography variant="body1" sx={{ color: '#2B3445', fontSize: 14, ml: 1 }}>20/10/2021</Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Typography variant="body1" sx={{ color: '#4b566b', fontSize: 14, }}>Giao hàng nhanh, quần mặc đứng fromm , mk kao m65 m size l , lên đồ rất ôk , đã đặt thêmm của shopp thêm hai màu còn lại</Typography>
                        </Box>
                        <Box sx={{ width: '100%', bgcolor: 'tranparent', mt: 4 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <Avatar sx={{ bgcolor: 'red' }}>R</Avatar>
                                <Box sx={{ ml: 2, }}>
                                    <Typography variant="body1" sx={{ color: '#000' }}>Nguyễn Văn A</Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Rating name="read-only" value={5} sx={{fontSize: 20}} readOnly />
                                        <Typography variant="body1" sx={{ color: '#000', ml: 1 }}>5 sao</Typography>
                                        <Typography variant="body1" sx={{ color: '#2B3445', fontSize: 14, ml: 1 }}>20/10/2021</Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Typography variant="body1" sx={{ color: '#4b566b', fontSize: 14, }}>Giao hàng nhanh, quần mặc đứng fromm , mk kao m65 m size l , lên đồ rất ôk , đã đặt thêmm của shopp thêm hai màu còn lại</Typography>
                        </Box>
                        <Box sx={{ width: '100%', bgcolor: 'tranparent', mt: 4 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <Avatar sx={{ bgcolor: 'red' }}>R</Avatar>
                                <Box sx={{ ml: 2, }}>
                                    <Typography variant="body1" sx={{ color: '#000' }}>Nguyễn Văn A</Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Rating name="read-only" value={5} sx={{fontSize: 20}} readOnly />
                                        <Typography variant="body1" sx={{ color: '#000', ml: 1 }}>5 sao</Typography>
                                        <Typography variant="body1" sx={{ color: '#2B3445', fontSize: 14, ml: 1 }}>20/10/2021</Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Typography variant="body1" sx={{ color: '#4b566b', fontSize: 14, }}>Giao hàng nhanh, quần mặc đứng fromm , mk kao m65 m size l , lên đồ rất ôk , đã đặt thêmm của shopp thêm hai màu còn lại</Typography>
                        </Box>

                    </Box>
                </TabPanel>
            </Box>
        </Box>
    );

}