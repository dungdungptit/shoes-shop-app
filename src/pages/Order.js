import * as React from 'react';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { Avatar, styled, Box, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, Rating, Toolbar, Typography } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrdersAsync, ordersSelector } from '../store/reducer/orderSlice';
import OrderItem from './OrderItem';

const OrderStyle = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 'max-content',
  maxWidth: 1200,
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '20px',
  paddingTop: '24px',
  justifyContent: 'space-between',
  position: 'relative',
  '& .css-heg063-MuiTabs-flexContainer': {
    width: '100%',
    justifyContent: 'space-between',
  },
}));
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
        <Box sx={{ height: 'max-content', mt: 2 }}>
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

const getVND = (price) => {
  return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
};

const listPayment = (listOrder) => {
  let listPayment = [];
  listOrder.forEach(({ order }) => {
    if (!listPayment.includes(order.payment.id)) {
      listPayment.push(order.payment.id);
    }
  });
  return listPayment;
}

const listPaymentPending = (listOrder) => {
  let listPayment = [];
  listOrder.forEach(({ order }) => {
    if (!listPayment.includes(order.payment.id) && String(order.status).toLocaleLowerCase() === 'pending') {
      listPayment.push(order.payment.id);
    }
  });
  return listPayment;
}

const listPaymentWaiting = (listOrder) => {
  let listPayment = [];
  listOrder.forEach(({ order }) => {
    if (!listPayment.includes(order.payment.id) && String(order.status).toLocaleLowerCase() === 'waiting') {
      listPayment.push(order.payment.id);
    }
  });
  return listPayment;
}

const listPaymentSuccess = (listOrder) => {
  let listPayment = [];
  listOrder.forEach(({ order }) => {
    if (!listPayment.includes(order.payment.id) && String(order.status).toLocaleLowerCase() === 'success') {
      listPayment.push(order.payment.id);
    }
  });
  return listPayment;
}

const listPaymentCancel = (listOrder) => {
  let listPayment = [];
  listOrder.forEach(({ order }) => {
    if (!listPayment.includes(order.payment.id) && String(order.status).toLocaleLowerCase() === 'cancel') {
      listPayment.push(order.payment.id);
    }
  });
  return listPayment;
}

const Order = () => {
  const [value, setValue] = React.useState(0);

  const listOrder = useSelector(ordersSelector)
  const user = JSON.parse(localStorage.getItem('user'));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrdersAsync(user?.customerID.id));
  }, [dispatch]);

  let payment = listPayment(listOrder);
  let paymentPending = listPaymentPending(listOrder);
  let paymentWaiting = listPaymentWaiting(listOrder);
  let paymentSuccess = listPaymentSuccess(listOrder);
  let paymentCancel = listPaymentCancel(listOrder);
  // console.log(payment);
  console.log(listOrder);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // const listOrder = [
  //   {
  //     id: 1,
  //     name: 'Nike Air Max 270 React',
  //     image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/3b9b8b3a-1b1f-4b1f-9b1f-3b9b8b3a1b1f/air-max-270-react-shoe-1JZ7xP.jpg',
  //     price: 200,
  //     quantity: 1,
  //     total: 200,
  //     status: 'pending',
  //     evaluation: 0,
  //   },
  //   {
  //     id: 2,
  //     name: 'Nike Air Max 270 React',
  //     image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/3b9b8b3a-1b1f-4b1f-9b1f-3b9b8b3a1b1f/air-max-270-react-shoe-1JZ7xP.jpg',
  //     price: 200,
  //     quantity: 1,
  //     total: 200,
  //     status: 'waiting',
  //     evaluation: 0,
  //   },
  //   {
  //     id: 3,
  //     name: 'Nike Air Max 270 React',
  //     image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/3b9b8b3a-1b1f-4b1f-9b1f-3b9b8b3a1b1f/air-max-270-react-shoe-1JZ7xP.jpg',
  //     price: 200,
  //     quantity: 1,
  //     total: 200,
  //     status: 'success',
  //     evaluation: 0,
  //   },
  //   {
  //     id: 4,
  //     name: 'Nike Air Max 270 React',
  //     image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/3b9b8b3a-1b1f-4b1f-9b1f-3b9b8b3a1b1f/air-max-270-react-shoe-1JZ7xP.jpg',
  //     price: 200,
  //     quantity: 1,
  //     total: 200,
  //     status: 'cancel',
  //     evaluation: 0,
  //   },
  // ]
  return (
    <OrderStyle>
      <Box sx={{ width: '100%', height: "inherit" }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label={"Tất cả đơn hàng"} {...a11yProps(0)} />
            <Tab label={"Chờ xử lý"} {...a11yProps(1)} />
            <Tab label={"Đang giao"} {...a11yProps(2)} />
            <Tab label={"Đã giao"} {...a11yProps(3)} />
            <Tab label={"Đã hủy"} {...a11yProps(4)} />
            <Tab label={"Chưa đánh giá"} {...a11yProps(5)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {payment.map((paymentId, index) => {
              let totalPrice = 0;
              let shipcost = 0;
              let createdDate = '';
              return (
                <Box key={index} sx={{ width: '100%', bgcolor: 'background.paper', borderRadius: '10px', padding: '20px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
                  {listOrder.map(({ item, order, quantity }, index) => {
                    if (order.payment.id === paymentId) {
                      totalPrice = order.payment.total;
                      shipcost = order.payment.shipment.price;
                      createdDate = Array(order.payment.createdDate).join().replace(/,/g, '-');
                      createdDate = new Date(createdDate).toLocaleDateString('vi-VN', { year: 'numeric', month: 'long', day: 'numeric' });
                      return (<OrderItem key={index} item={item} order={order} quantity={quantity} getVND={getVND} />)
                    }
                  })}
                  <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '20px', padding: '10px 0', }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>Ngày {createdDate}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'column' }}>
                      <Typography variant="body1" sx={{ fontWeight: 'bold', }}>Phí vận chuyển: {getVND(shipcost)}</Typography>
                      <Typography variant="body1" sx={{ fontWeight: 'bold', marginTop: '20px' }}>Tổng tiền: {getVND(totalPrice)}</Typography>
                    </Box>
                  </Box>
                </Box>
              )
            })}
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {paymentPending.map((paymentId, index) => {
              let totalPrice = 0;
              let shipcost = 0;
              let createdDate = '';
              return (
                <Box key={index} sx={{ width: '100%', bgcolor: 'background.paper', borderRadius: '10px', padding: '20px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
                  {listOrder.map(({ item, order, quantity }, index) => {
                    if (String(order.status).toLowerCase() === 'pending') {
                      if (order.payment.id === paymentId) {
                        totalPrice = order.payment.total;
                        shipcost = order.payment.shipment.price;
                        createdDate = Array(order.payment.createdDate).join().replace(/,/g, '-');
                        createdDate = new Date(createdDate).toLocaleDateString('vi-VN', { year: 'numeric', month: 'long', day: 'numeric' });
                        return (<OrderItem key={index} item={item} order={order} quantity={quantity} getVND={getVND} />)
                      }
                    }
                  })}
                  <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '20px', padding: '10px 0', }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>Ngày {createdDate}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'column' }}>
                      <Typography variant="body1" sx={{ fontWeight: 'bold', }}>Phí vận chuyển: {getVND(shipcost)}</Typography>
                      <Typography variant="body1" sx={{ fontWeight: 'bold', marginTop: '20px' }}>Tổng tiền: {getVND(totalPrice)}</Typography>
                    </Box>
                  </Box>
                </Box>
              )
            })}
          </Box>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {paymentWaiting.map((paymentId, index) => {
              let totalPrice = 0;
              let shipcost = 0;
              let createdDate = '';
              return (
                <Box key={index} sx={{ width: '100%', bgcolor: 'background.paper', borderRadius: '10px', padding: '20px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
                  {listOrder.map(({ item, order, quantity }, index) => {
                    if (String(order.status).toLowerCase() === 'waiting') {
                      if (order.payment.id === paymentId) {
                        totalPrice = order.payment.total;
                        shipcost = order.payment.shipment.price;
                        createdDate = Array(order.payment.createdDate).join().replace(/,/g, '-');
                        createdDate = new Date(createdDate).toLocaleDateString('vi-VN', { year: 'numeric', month: 'long', day: 'numeric' });
                        return (<OrderItem key={index} item={item} order={order} quantity={quantity} getVND={getVND} />)
                      }
                    }
                  })}
                  <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '20px', padding: '10px 0', }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>Ngày {createdDate}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'column' }}>
                      <Typography variant="body1" sx={{ fontWeight: 'bold', }}>Phí vận chuyển: {getVND(shipcost)}</Typography>
                      <Typography variant="body1" sx={{ fontWeight: 'bold', marginTop: '20px' }}>Tổng tiền: {getVND(totalPrice)}</Typography>
                    </Box>
                  </Box>
                </Box>
              )
            })}
          </Box>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {paymentSuccess.map((paymentId, index) => {
              let totalPrice = 0;
              let shipcost = 0;
              let createdDate = '';
              return (
                <Box key={index} sx={{ width: '100%', bgcolor: 'background.paper', borderRadius: '10px', padding: '20px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
                  {listOrder.map(({ item, order, quantity }, index) => {
                    if (String(order.status).toLowerCase() === 'success') {
                      if (order.payment.id === paymentId) {
                        totalPrice = order.payment.total;
                        shipcost = order.payment.shipment.price;
                        createdDate = Array(order.payment.createdDate).join().replace(/,/g, '-');
                        createdDate = new Date(createdDate).toLocaleDateString('vi-VN', { year: 'numeric', month: 'long', day: 'numeric' });
                        return (<OrderItem key={index} item={item} order={order} quantity={quantity} getVND={getVND} />)
                      }
                    }
                  })}
                  <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '20px', padding: '10px 0', }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>Ngày {createdDate}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'column' }}>
                      <Typography variant="body1" sx={{ fontWeight: 'bold', }}>Phí vận chuyển: {getVND(shipcost)}</Typography>
                      <Typography variant="body1" sx={{ fontWeight: 'bold', marginTop: '20px' }}>Tổng tiền: {getVND(totalPrice)}</Typography>
                    </Box>
                  </Box>
                </Box>
              )
            })}
          </Box>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {paymentCancel.map((paymentId, index) => {
              let totalPrice = 0;
              let shipcost = 0;
              let createdDate = '';
              return (
                <Box key={index} sx={{ width: '100%', bgcolor: 'background.paper', borderRadius: '10px', padding: '20px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
                  {listOrder.map(({ item, order, quantity }, index) => {
                    if (String(order.status).toLowerCase() === 'cancel') {
                      if (order.payment.id === paymentId) {
                        totalPrice = order.payment.total;
                        shipcost = order.payment.shipment.price;
                        createdDate = Array(order.payment.createdDate).join().replace(/,/g, '-');
                        createdDate = new Date(createdDate).toLocaleDateString('vi-VN', { year: 'numeric', month: 'long', day: 'numeric' });
                        return (<OrderItem key={index} item={item} order={order} quantity={quantity} getVND={getVND} />)
                      }
                    }
                  })}
                  <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '20px', padding: '10px 0', }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>Ngày {createdDate}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'column' }}>
                      <Typography variant="body1" sx={{ fontWeight: 'bold', }}>Phí vận chuyển: {getVND(shipcost)}</Typography>
                      <Typography variant="body1" sx={{ fontWeight: 'bold', marginTop: '20px' }}>Tổng tiền: {getVND(totalPrice)}</Typography>
                    </Box>
                  </Box>
                </Box>
              )
            })}
          </Box>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {paymentSuccess.map((paymentId, index) => {
              let totalPrice = 0;
              let shipcost = 0;
              let createdDate = '';
              return (
                <Box key={index} sx={{ width: '100%', bgcolor: 'background.paper', borderRadius: '10px', padding: '20px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
                  {listOrder.map(({ item, order, quantity }, index) => {
                    if (String(order.status).toLowerCase() === 'success') {
                      if (order.payment.id === paymentId) {
                        totalPrice = order.payment.total;
                        shipcost = order.payment.shipment.price;
                        createdDate = Array(order.payment.createdDate).join().replace(/,/g, '-');
                        createdDate = new Date(createdDate).toLocaleDateString('vi-VN', { year: 'numeric', month: 'long', day: 'numeric' });
                        return (<OrderItem key={index} item={item} order={order} quantity={quantity} getVND={getVND} />)
                      }
                    }
                  })}
                  <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '20px', padding: '10px 0', }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>Ngày {createdDate}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'column' }}>
                      <Typography variant="body1" sx={{ fontWeight: 'bold', }}>Phí vận chuyển: {getVND(shipcost)}</Typography>
                      <Typography variant="body1" sx={{ fontWeight: 'bold', marginTop: '20px' }}>Tổng tiền: {getVND(totalPrice)}</Typography>
                    </Box>
                  </Box>
                </Box>
              )
            })}
          </Box>
        </TabPanel>
      </Box>
    </OrderStyle>
  )
}

export default Order