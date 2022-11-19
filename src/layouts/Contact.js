import { Box, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import React, { useEffect, useState } from 'react'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';

const ContactContainerSytled = styled(Box)(({ theme }) => ({
    backgroundColor: '#000',
    width: '100%',
    height: '40px',
    transition: 'all 0.5s linear',
}))

const ContactSytled = styled(Box)(({ theme }) => ({
    height: '100%',
    margin: '0 auto',
    maxWidth: '1200px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}))

const ContactLeftStyled = styled(Box)(({ theme }) => ({
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    '& > *': {
        margin: '0 10px',
        cursor: 'pointer',
        '&:hover': {
            color: '#fff'
        }
    }
}))

const AsocialSytled = styled(Box)(({ theme }) => ({
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    '& > *': {
        margin: '0 10px',
        cursor: 'pointer',
        '&:hover': {
            color: '#fff'
        }
    }
}))


const Contact = () => {
    const [scroll, setScroll] = useState(false);
    const handleScroll = () => {
        let currentScrollPos = window.pageYOffset;
        if(currentScrollPos > 0) {
            document.getElementById("header-top").style.display = "none";
            setScroll(true);
        }
        else {
            document.getElementById("header-top").style.display = "block";
            setScroll(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [scroll])
    
    return (
        <ContactContainerSytled id='header-top'>
            <ContactSytled>
                <ContactLeftStyled>
                    {/* Phone */}
                    <Typography variant="body1" color="#fff" sx={{ mr: 2, display: "flex", alignItems: "center", fontSize: 14 }}>
                        <PhoneOutlinedIcon sx={{ mr: 1 }} />
                        +0123456789
                    </Typography>
                    {/* Email */}
                    <Typography variant="body1" color="#fff" sx={{ mr: 2, display: "flex", alignItems: "center", fontSize: 14 }}>
                        <EmailOutlinedIcon sx={{ mr: 1 }} />
                        shoes-shop@gmail
                    </Typography>
                </ContactLeftStyled>

                <AsocialSytled>
                    <Typography variant="body1" color="#fff" sx={{ mr: 1, display: "flex", alignItems: "center" }}>
                        <FacebookIcon />
                    </Typography>
                    <Typography variant="body1" color="#fff" sx={{ mr: 1, display: "flex", alignItems: "center" }}>
                        <InstagramIcon />
                    </Typography>
                    <Typography variant="body1" color="#fff" sx={{ mr: 1, display: "flex", alignItems: "center" }}>
                        <TwitterIcon />
                    </Typography>
                    <Typography variant="body1" color="#fff" sx={{ mr: 1, display: "flex", alignItems: "center" }}>
                        <YouTubeIcon />
                    </Typography>
                    <Typography variant="body1" color="#fff" sx={{ display: "flex", alignItems: "center" }}>
                        <PinterestIcon />
                    </Typography>
                </AsocialSytled>
            </ContactSytled>
        </ContactContainerSytled>
    )
}

export default Contact