import styled from '@emotion/styled';
import { Button, FormControl, FormControlLabel, FormLabel, Paper, RadioGroup, Typography, Radio, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'

import PaymentItem from './PaymentItem';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddressPanel from '../feature/payment/AddressPanel';
import { cartsSelector, paymentAsync, setCountCart } from '../store/reducer/cartSlice';

const PaymentStyle = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  maxWidth: 1200,
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '20px',
  paddingTop: '24px',
  justifyContent: 'space-between',
  position: 'relative',
}));

const getCartID = (listCart) => {
  let cartID = "";
  listCart.forEach((item) => {
    cartID += item.id + " ";
  });
  return cartID;
};

const Payment = () => {
  const location = useLocation()
  console.log(location.state);
  const { listCartSelected, total } = location.state;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const user = JSON.parse(localStorage.getItem('user'));

  const [payment, setPayment] = React.useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    district: '',
    ward: '',
    note: '',
  });

  const [loaiThanhToan, setLoaiThanhToan] = React.useState(1);

  const handleChangeThanhToan = (event) => {
    setLoaiThanhToan(Number(event.target.value));
  };

  const [loaiLoaiVanChuyen, setLoaiLoaiVanChuyen] = React.useState(1);
  const [phiVanChuyen, setPhiVanChuyen] = React.useState(16500);

  const [shipment, setShipment] = React.useState({
    name: user?.customerID.fullName,
    price: phiVanChuyen,
    phone: user?.customerID.phone,
    address: user?.customerID.address,
  });

  const handleChangeLoaiVanChuyen = (event) => {
    setLoaiLoaiVanChuyen(Number(event.target.value));
    if (Number(event.target.value) === 1) {
      console.log('Giao h??ng ti???t ki???m');
      setPhiVanChuyen(16500);
      setShipment({
        ...shipment,
        price: 16500,
      });
    } else {
      console.log('Giao h??ng nhanh');
      setShipment({
        ...shipment,
        price: 120000,
      });
      setPhiVanChuyen(120000);
    }
  };

  const cartItems = useSelector(cartsSelector);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      customerID: user?.customerID.id,
      loaiThanhToan: loaiThanhToan,
      cart: getCartID(location.state.listCartSelected),
      total: location.state.total + phiVanChuyen,
      name: shipment.name,
      price: shipment.price,
      phone: shipment.phone,
      address: shipment.address,
    }

    console.log(JSON.stringify(data));
    dispatch(paymentAsync(data)).then((res) => {
      console.log(res);
      if(res.type === 'cart/payment/fulfilled') {
        alert('Thanh to??n th??nh c??ng');
        dispatch(setCountCart(cartItems.length));
        window.location.href = '/order';
      }
    });
  };


  const dispatch = useDispatch()
  const getFormattedPrice = (price) => `${price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}`;
  return (
    <PaymentStyle>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
          Th??ng tin giao h??ng
        </Typography>
        <Paper variant="outlined" sx={{ display: 'flex', flexDirection: "column", width: '100%', alignItems: 'flex-start', mb: 4, p: 2 }}>
          <Box sx={{ display: 'flex', width: "100%" }}>
            <LocationOnIcon />
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }} >
              ?????a ch??? nh???n h??ng
            </Typography>
          </Box>
          <Typography variant="subtitle2" sx={{ mb: 2, display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
            <p>{shipment.name}, {shipment.phone}, {shipment.address}</p>
            <Button variant="outlined" size="small"
              onClick={handleClickOpen}
            >?????a ch??? kh??c</Button>
          </Typography>
        </Paper>
        <AddressPanel payment={payment} setPayment={setPayment} open={open} handleClose={handleClose} handleClickOpen={handleClickOpen} shipment={shipment} setShipment={setShipment} />


        <div className="table-responsive" >
          <table className="table table-primary">
            <thead>
              <tr>
                <th scope="col">
                  <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="p" color="text.primary" sx={{ ml: 1 }}>
                      S???n ph???m
                    </Typography>
                  </Box>
                  {/* <input type="checkbox" onChange={handleCheckAll} checked={isCheckAll} /> S???n ph???m */}
                </th>
                <th scope="col">????n gi??</th>
                <th scope="col">S??? l?????ng</th>
                <th scope="col">Th??nh ti???n</th>
              </tr>
            </thead>
            <tbody>
              {listCartSelected.map(({ id, item, quantity }, index) => {
                return (
                  <PaymentItem
                    key={index}
                    id={id}
                    item={item}
                    quantity={quantity}
                    index={index}
                    getFormattedPrice={getFormattedPrice}
                  />
                );
              })}
            </tbody>
          </table>
        </div>

        <Paper variant="outlined" sx={{ display: 'flex', flexDirection: "column", width: '100%', alignItems: 'flex-start', mt: 4, p: 2, borderBottomRightRadius: 0, borderBottomLeftRadius: 0, }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
            Lo???i v???n chuy???n
          </Typography>
          <FormControl component="fieldset">
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue={1}
              name="radio-buttons-group"
              onChange={handleChangeLoaiVanChuyen}
            >
              <FormControlLabel value={1} control={<Radio />} label="Giao h??ng ti???t ki???m (Nh???n h??ng trong 5-6 ng??y) - 16.500??" />
              <FormControlLabel value={2} control={<Radio />} label="Giao h??ng nhanh (Nh???n h??ng trong 1-2 ng??y) - 120.000??" />
            </RadioGroup>
          </FormControl>
        </Paper>

        <Paper variant="outlined" sx={{ display: 'flex', flexDirection: "column", width: '100%', alignItems: 'flex-start', p: 2, borderRadius: 0 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
            Ph????ng th???c thanh to??n
          </Typography>
          <FormControl component="fieldset">
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue={1}
              name="radio-buttons-group"
              onChange={handleChangeThanhToan}
            >
              <FormControlLabel value={1} control={<Radio />} label="Thanh to??n khi nh???n h??ng" />
              <FormControlLabel value={2} control={<Radio />} label="Thanh to??n qua th??? ATM" />
            </RadioGroup>
          </FormControl>
          {
            loaiThanhToan === 2 && (
              <Box sx={{ display: 'flex', flexDirection: "row", width: '100%', alignItems: 'flex-start', p: 2, gap: "16px" }}>
                <TextField id="cardName" label="T??n ng??n h??ng" variant="outlined"
                  InputProps={{
                    required: true,
                  }}
                />
                <TextField id="cardID" label="M?? th???" variant="outlined"
                  InputProps={{
                    required: true,
                  }}
                />
                <TextField id="cardDate" label="Ng??y h???t h???n" variant="outlined"
                  InputProps={{
                    required: true,
                  }}
                />
                <TextField id="cardCVV" label="M?? CVV" variant="outlined"
                  InputProps={{
                    required: true,
                  }}
                />
              </Box>
            )
          }
        </Paper>

        <Paper
          variant="outlined"
          sx={{
            display: 'flex',
            flexDirection: "column",
            width: '100%',
            alignItems: 'flex-end',
            justifyContent: "space-between",
            p: 2,
            borderTopRightRadius: 0,
            borderTopLeftRadius: 0,
          }}>
          <Typography variant="h6" color="text.primary">
            T???ng ti???n h??ng: {total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
          </Typography>
          <Typography variant="h6" color="text.primary">
            Ph?? v???n chuy???n: {phiVanChuyen.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
          </Typography>
          <Typography variant="h6" color="text.primary">
            T???ng thanh to??n: {(phiVanChuyen + total).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
          </Typography>
          <Button type="submit" variant="contained" sx={{ mt: 2 }}>?????t h??ng</Button>
        </Paper>
      </form>

    </PaymentStyle>
  )
}

export default Payment