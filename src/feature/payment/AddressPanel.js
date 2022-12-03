import { Box, Button, Dialog, DialogTitle, FormControl, InputLabel, OutlinedInput } from '@mui/material';
import React from 'react'
import { local } from '../../utils/axiosApi';
// tên tỉnh thành phố
const tenTinh = local.map((item, index) => {
    return item.name;
});

// tên quận huyện
const tenQuan = local.map((item, index) => {
    return item.districts.map((item, index) => {
        return item.name;
    });
});

// tên phường xã
const tenPhuong = local.map((item, index) => {
    return item.districts.map((item, index) => {
        return item.wards.map((item, index) => {
            return item.name;
        });
    });
});
const AddressPanel = ({ payment, setPayment, open, handleClose, handleClickOpen, shipment, setShipment }) => {

    const [tinh, setTinh] = React.useState(tenTinh);
    const [quan, setQuan] = React.useState([]);
    const [phuong, setPhuong] = React.useState([]);
    const onCitySelect = (e) => {
        setPayment({ ...payment, city: e.target.value });
        setQuan(tenQuan[e.target.selectedIndex - 1]);
    };

    const onDistrictSelect = (e) => {
        setPayment({ ...payment, district: e.target.value });
        setPhuong(
            tenPhuong[document.getElementById('city').selectedIndex - 1][e.target.selectedIndex - 1]
        );
    };

    const onWardSelect = (e) => {
        setPayment({ ...payment, ward: e.target.value });
    };
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setPayment({
            ...payment,
            [name]: value,
        });
        setShipment({
            ...shipment,
            address: `${e.target.value}, ${payment.ward}, ${payment.district}, ${payment.city}`,
        });
    };

    const handleSave = () => {
        handleClose();
    };

    return (
        <Dialog onClose={handleClose} open={open}
            sx={{
                '& .MuiDialog-paper': {
                    width: 360,
                    height: "max-content",
                    margin: '0 auto',
                    borderRadius: 1,
                    boxShadow: 3,
                    px: 2,
                    pb: 2,
                },
            }}
        >
            <DialogTitle>Địa chỉ mới</DialogTitle>
            <FormControl sx={{ mb: 2 }}>
                <InputLabel htmlFor="name">Họ và tên</InputLabel>
                <OutlinedInput
                    type="text"
                    name="name"
                    id="name"
                    defaultValue={shipment.name}
                    onChange={(e) => setShipment({ ...shipment, name: e.target.value })}
                />
            </FormControl>
            <FormControl sx={{ mb: 2 }}>
                <InputLabel htmlFor="phone">Số điện thoại</InputLabel>
                <OutlinedInput
                    type="text"
                    name="phone"
                    id="phone"
                    defaultValue={shipment.phone}
                    onChange={(e) => setShipment({ ...shipment, phone: e.target.value })}
                />
            </FormControl>

            <div>
                <label htmlFor="city">Tỉnh/Thành phố</label>
                <select
                    style={{ width: '100%', height: 40, borderRadius: 1, border: '1px solid #ced4da' }}
                    name="city"
                    id="city"
                    value={payment.city}
                    onChange={onCitySelect}
                >
                    <option value="">Chọn tỉnh thành phố</option>
                    {tinh.map((item, index) => {
                        return (
                            <option key={index} value={item}>
                                {item}
                            </option>
                        );
                    })}
                </select>
            </div>
            <div style={{marginTop: "16px"}}>
                <label htmlFor="district">Quận/Huyện</label>
                <select
                    style={{ width: '100%', height: 40, borderRadius: 1, border: '1px solid #ced4da' }}
                    name="district"
                    id="district"
                    value={payment.district}
                    onChange={onDistrictSelect}
                >
                    <option value="">Chọn quận huyện</option>
                    {quan.map((item, index) => {
                        return (
                            <option key={index} value={item}>
                                {item}
                            </option>
                        );
                    })}
                </select>
            </div>
            <div style={{marginTop: "16px"}}>
                <label htmlFor="ward">Phường/Xã</label>
                <select
                    style={{ width: '100%', height: 40, borderRadius: 1, border: '1px solid #ced4da' }}
                    name="ward"
                    id="ward"
                    value={payment.ward}
                    onChange={onWardSelect}
                >
                    <option value="">Chọn phường xã</option>
                    {phuong.map((item, index) => {
                        return (
                            <option key={index} value={item}>
                                {item}
                            </option>
                        );
                    })}
                </select>
            </div>
            <FormControl sx={{ mt: 2 }}>
                <InputLabel htmlFor="address">Địa chỉ cụ thể</InputLabel>
                <OutlinedInput
                    type="text"
                    name="address"
                    id="address"
                    value={payment.address}
                    onChange={handleChange}
                />
            </FormControl>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    mt: 2,
                    gap: 1,
                }}
            >
                <Button onClick={handleClose}>Hủy</Button>
                <Button onClick={handleSave}>Lưu</Button>
            </Box>
        </Dialog>
    )
}

export default AddressPanel