import { Link, styled } from '@mui/material';
import { Box } from '@mui/system'
import React from 'react'

const FooterStyle = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[800],
  color: theme.palette.grey[100],
  padding: theme.spacing(2),
  width: "100%",
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  '& > *': {
    margin: theme.spacing(1),
  },
}));

const FooterTop = styled(Box)(({ theme }) => ({
  color: theme.palette.grey[100],
  padding: theme.spacing(2),
  width: '100%',
  maxWidth: "1200px",
  margin: "0 auto",
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  '& > *': {
    margin: theme.spacing(1),
  },
}));

const BoxQuickLink = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: theme.spacing(1),
  '& .quick-link': {
    // margin: theme.spacing(.5),
    color: theme.palette.grey[100],
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'all .3s ease-in-out',
    '&:hover': {
      color: theme.palette.primary.main,
      transform: 'translateX(2px)',
    }
  },
}));

const BoxSubscribe = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: theme.spacing(1),
  '& > *': {
    marginBottom: theme.spacing(.5),
    "& input": {
      width: "60%",
      
      padding: theme.spacing(1),
      border: "none",
      outline: "none",
      borderRadius: theme.spacing(.5),
      fontSize: "1rem",
      color: theme.palette.grey[800],
      "&::placeholder": {
        color: theme.palette.grey[500],
      }
    },
    "& button": {
      // width: "100%",
      padding: theme.spacing(1),
      marginLeft: theme.spacing(1),
      border: "none",
      outline: "none",
      borderRadius: theme.spacing(.5),  
      fontSize: "1rem",
      color: theme.palette.grey[100],
      backgroundColor: theme.palette.primary.main,
      cursor: "pointer",
      transition: 'all .3s ease-in-out',
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
      }
    }
  },
}));

const FooterBottom = styled(Box)(({ theme }) => ({
  color: theme.palette.grey[100],
  borderTop: `1px solid ${theme.palette.grey[100]}`,
  padding: theme.spacing(1),
  width: '100%',
  maxWidth: "1200px",
  margin: "0 auto",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const Footer = () => {
  return (
    <FooterStyle>
      <FooterTop>
        <Box>
          <h3>Truy cập nhanh</h3>
          <BoxQuickLink>
            <Link className='quick-link' to={"#"}>Trang chủ</Link>
            <Link className='quick-link' to={"#"}>Sản phẩm</Link>
            <Link className='quick-link' to={"#"}>Giới thiệu</Link>
            <Link className='quick-link' to={"#"}>Liên hệ</Link>
          </BoxQuickLink>
        </Box>

        <Box>
          <h3>Nhận thông tin khuyến mãi</h3>
          <BoxSubscribe>
            <p>Đăng ký để nhận thông tin khuyến mãi mới nhất</p>
            <form>
              <input type="text" placeholder="Nhập email của bạn" />
              <button>Đăng ký</button>
            </form>
          </BoxSubscribe>
        </Box>
      </FooterTop>

      <FooterBottom>
        <p>© 2021 Shoes Shop. All rights reserved.</p>
      </FooterBottom>
    </FooterStyle>
  )
}

export default Footer