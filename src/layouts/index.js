import React from 'react'
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import Footer from './Footer';


const APP_BAR_MOBILE = 24;
const APP_BAR_DESKTOP = 32;

const RootStyle = styled('div')({
    display: 'flex',
    minHeight: '100%',
    overflow: 'hidden',
    flexDirection: 'column',
});

const MainStyle = styled('div')(({ theme }) => ({
    flexGrow: 1,
    overflow: 'auto',
    minHeight: '100vh',
    // paddingTop: APP_BAR_MOBILE + 24,
    paddingTop: 104,
    backgroundColor: "#f6f9fc",
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up('lg')]: {
        // paddingTop: APP_BAR_DESKTOP + 24,
        // paddingLeft: theme.spacing(2),
        // paddingRight: theme.spacing(2)
    }
}));


const Layout = () => {

    // const user = JSON.parse(localStorage.getItem('user'));

    return (
        <RootStyle>
            <Navbar />
            <MainStyle>
                <Outlet />
            </MainStyle>
            <Footer />
        </RootStyle>
    )
}

export default Layout