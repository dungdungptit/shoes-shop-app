import { Box, Button, Stack, styled, Typography } from '@mui/material';
import React from 'react'
import Slider from "react-slick";
import slickslider0 from '../../assets/images/slickslide0.png';
import slickslider1 from '../../assets/images/slickslide0.png';
import slickslider2 from '../../assets/images/slickslide0.png';

const SlickSliderStyle = styled(Box)(({ theme }) => ({
    '& .slick-slider': {
        '& .slick-list': {
            '& .slick-track': {
                '& .slick-slide': {
                    '& .slick-slide-item': {
                        '& .slick-slide-item-img': {
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',

                        },
                    },
                },
            },
        },
    },
    width: '100%',
    height: '100%',
    '& .slick-dots': {
        position: "relative",
        bottom: 0,
        '& li': {
            width: '20px',
            height: '20px',
            '& button': {
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                '&:before': {
                    display: 'none',
                },
            },
            '&.slick-active': {
                '& button': {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                },
            },
        },
    },
    overflow: 'hidden',
}));

const SliderItem = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '100%',
    maxHeight: '520px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
}));

const SliderContent = styled(Box)(({ theme }) => ({
    width: '50%',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
}));

const SliderImage = styled(Box)(({ theme }) => ({
    width: '50%',
    maxWidth: '50%',
    height: '100%',
    "& img": {
        maxHeight: '520px',
        objectFit: 'cover',
    },
}));
const SlickSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <SlickSliderStyle>
            <Slider {...settings}>
                <SliderItem>
                    <Stack direction="row" spacing={2} sx={{ width: '100%', height: '100%', maxWidth: 1200, margin: '0 auto', }}>
                        <SliderContent>
                            <Typography variant="h3" sx={{ color: 'black', textAlign: "start" }}>Nike Air Max 270 React</Typography>
                            <Typography variant="h5" sx={{ color: 'black', fontSize: 18, mt: 4, mb: 1 }}>The Nike Air Max 270 React is a new hybrid model that combines the Air Max 270 with the React foam sole.</Typography>
                            <Button variant="contained" sx={{ backgroundColor: 'black', color: 'white', marginTop: '20px' }}>Shop Now</Button>
                        </SliderContent>
                        <SliderImage>
                            <img className="slick-slide-item-img" src={slickslider0} alt="" />
                        </SliderImage>
                    </Stack>
                </SliderItem>
                <SliderItem>
                    <Stack direction="row" spacing={2} sx={{ width: '100%', height: '100%', maxWidth: 1200, margin: '0 auto', }}>
                        <SliderContent>
                            <Typography variant="h3" sx={{ color: 'black', textAlign: "start" }}>Nike Air Max 270 React</Typography>
                            <Typography variant="h5" sx={{ color: 'black', fontSize: 18, mt: 4, mb: 1 }}>The Nike Air Max 270 React is a new hybrid model that combines the Air Max 270 with the React foam sole.</Typography>
                            <Button variant="contained" sx={{ backgroundColor: 'black', color: 'white', marginTop: '20px' }}>Shop Now</Button>
                        </SliderContent>
                        <SliderImage>
                            <img className="slick-slide-item-img" src={slickslider0} alt="" />
                        </SliderImage>
                    </Stack>
                </SliderItem>
                <SliderItem>
                    <Stack direction="row" spacing={2} sx={{ width: '100%', height: '100%', maxWidth: 1200, margin: '0 auto', }}>
                        <SliderContent>
                            <Typography variant="h3" sx={{ color: 'black', textAlign: "start" }}>Nike Air Max 270 React</Typography>
                            <Typography variant="h5" sx={{ color: 'black', fontSize: 18, mt: 4, mb: 1 }}>The Nike Air Max 270 React is a new hybrid model that combines the Air Max 270 with the React foam sole.</Typography>
                            <Button variant="contained" sx={{ backgroundColor: 'black', color: 'white', marginTop: '20px' }}>Shop Now</Button>
                        </SliderContent>
                        <SliderImage>
                            <img className="slick-slide-item-img" src={slickslider0} alt="" />
                        </SliderImage>
                    </Stack>
                </SliderItem>
                <SliderItem>
                    <Stack direction="row" spacing={2} sx={{ width: '100%', height: '100%', maxWidth: 1200, margin: '0 auto', }}>
                        <SliderContent>
                            <Typography variant="h3" sx={{ color: 'black', textAlign: "start" }}>Nike Air Max 270 React</Typography>
                            <Typography variant="h5" sx={{ color: 'black', fontSize: 18, mt: 4, mb: 1 }}>The Nike Air Max 270 React is a new hybrid model that combines the Air Max 270 with the React foam sole.</Typography>
                            <Button variant="contained" sx={{ backgroundColor: 'black', color: 'white', marginTop: '20px' }}>Shop Now</Button>
                        </SliderContent>
                        <SliderImage>
                            <img className="slick-slide-item-img" src={slickslider0} alt="" />
                        </SliderImage>
                    </Stack>
                </SliderItem>

            </Slider>
        </SlickSliderStyle>
    );

}

export default SlickSlider