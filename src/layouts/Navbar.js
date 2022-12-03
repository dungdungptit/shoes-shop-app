// material
import { styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton, List, Badge } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
// Logo
import Logo from '../../src/assets/images/output-onlinepngtools.png';

// components
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

//
import MenuIcon from '@mui/icons-material/Menu';
import AccountPopover from './AccountPopover';
// import NotificationsPopover from './NotificationsPopover';
import { useState } from 'react';
import Searchbar from './Searchbar';
import CartOuline from './CartOuline';
import Contact from './Contact';

const DRAWER_WIDTH = 280;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const RootStyle = styled(AppBar)(({ theme }) => ({
    boxShadow: "0 1px 6px 0 rgb(32 33 36 / 28%)",
    backdropFilter: 'blur(6px)',
    position: 'fixed',
    top: 0,
    zIndex: 999,
    color: 'white',
    WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
    backgroundColor: theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.72)' : 'rgba(0, 0, 0, 0.72)',
    [theme.breakpoints.up('lg')]: {
        width: "100%",
    },
    [theme.breakpoints.down('md')]: {
        minWidth: `300px`,
    },
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
    minHeight: APPBAR_MOBILE,
    maxWidth: '1200px',
    width: '100%',
    margin: '0 auto',
    paddingLeft: "0 !important",
    paddingRight: "0 !important",
}));


const pages = [
    { name: 'Trang chủ', linkTo: "home" },
    { name: 'Sản phẩm', linkTo: "products" },
    { name: 'Giới thiệu', linkTo: "about" },
    { name: 'Liên hệ', linkTo: "contact" },
]

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const navigate = useNavigate();

    return (
        <RootStyle>
            <Contact />
            <ToolbarStyle>
                <Box component={Link} to='/' sx={{
                    display: { xs: 'none', md: 'flex' },
                    alignItems: 'center',
                    cursor: 'pointer',
                    justifyContent: 'center',
                    width: 64,
                    height: 64,
                    overflow: 'hidden',
                    mr: 1,
                    borderColor: 'grey.500',
                    backgroundColor: 'white',
                }}>
                    <img src={Logo} alt="logo"
                        style={{
                            width: 80,
                            objectFit: 'contain'
                        }} />
                </Box>


                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {pages.map((page) => (
                            <MenuItem
                                key={page.name}
                                component={Link}
                                to={page.linkTo}
                                onClick={handleCloseNavMenu}>
                                <Typography textAlign="center" color="#000" sx={{ fontWeight: 'bold', fontSize: 14 }}>{page.name}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>

                <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: "center", my: "auto" }}>
                    <Box component={Link} to='/' sx={{
                        display: { xs: 'flex', md: 'none' },
                        alignItems: 'center',
                        cursor: 'pointer',
                        justifyContent: 'center',
                        width: 64,
                        height: 64,
                        overflow: 'hidden',
                        mr: 1,
                        borderColor: 'grey.500',
                        backgroundColor: 'white',
                    }}>
                        <img src={Logo} alt="logo"
                            style={{
                                width: 80,
                                objectFit: 'contain'
                            }} />
                    </Box>
                </Box>

                <List sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                        <Button
                            key={page.name}
                            onClick={handleCloseNavMenu}
                            component={Link}
                            to={page.linkTo}
                            sx={{ my: 0, color: '#000', display: 'block', fontWeight: 'bold', fontSize: 14 }}
                        >
                            {page.name}
                        </Button>
                    ))}
                </List>



                <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
                    <Searchbar />
                    <Box onClick={() => navigate('/cart')}>
                        <CartOuline />
                    </Box>
                    <AccountPopover />
                </Stack>
            </ToolbarStyle>
        </RootStyle>
    )
}

export default Navbar