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
            width: '16px',
            height: '16px',
            '& button': {
                width: '16px',
                height: '16px',
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
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <SlickSliderStyle>
            <Slider {...settings}>
                <SliderItem>
                    <Stack direction="row" spacing={2} sx={{ width: '100%', height: '100%', maxWidth: 1200, margin: '0 auto', }}>
                        <SliderContent>
                            <Typography variant="h3" sx={{ color: 'black', textAlign: "start" }}>GI??Y NIKE SB DELTA FORCE VULC NAM - TR???NG</Typography>
                            <Typography variant="h5" sx={{ color: 'black', fontSize: 18, mt: 4, mb: 1 }}>Gi??y Nike SB Delta Force Vulc m???u gi??y th???i trang basic kh??ng bao gi??? l???i m???t, ch???c ch???n ai c??ng s??? c???n m???t ????i ????? c?? th??? ??i b???t c??? n??i ????u ?????u r???t ph?? h???p...</Typography>
                            <Button variant="contained" sx={{ backgroundColor: 'black', color: 'white', marginTop: '20px' }}>Mua ngay</Button>
                        </SliderContent>
                        <SliderImage>
                            <img className="slick-slide-item-img" src="https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787373/PTTK/Item2/giay-nike-sb-delta-force-vulc-nam-trang-01-550x550_lzlcja.jpg" alt="" />
                        </SliderImage>
                    </Stack>
                </SliderItem>
                <SliderItem>
                    <Stack direction="row" spacing={2} sx={{ width: '100%', height: '100%', maxWidth: 1200, margin: '0 auto', }}>
                        <SliderContent>
                            <Typography variant="h3" sx={{ color: 'black', textAlign: "start" }}>GI??Y ADIDAS SUPERNOVA+ NAM - ??EN TR???NG</Typography>
                            <Typography variant="h5" sx={{ color: 'black', fontSize: 18, mt: 4, mb: 1 }}>Gi??y adidas Supernova+ l?? m???u gi??y th??? thao c?? thi???t k??? r???t ?????p, c??ng v???i ???? l?? c??ng ngh??? ?????nh cao v???i nh???ng v???t li???u cao c???p ?????c quy???n c???a Adidas. adidas Supernova+ l?? m???u gi??y m?? d??n th??? thao kh??ng th??? b??? qua....</Typography>
                            <Button variant="contained" sx={{ backgroundColor: 'black', color: 'white', marginTop: '20px' }}>Mua ngay</Button>
                        </SliderContent>
                        <SliderImage>
                            <img className="slick-slide-item-img" src="https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668791356/PTTK/Item5/giay-adidas-supernova_-nam-den-trang-02-550x550_vgynxu.jpg" alt="" />
                        </SliderImage>
                    </Stack>
                </SliderItem>
                <SliderItem>
                    <Stack direction="row" spacing={2} sx={{ width: '100%', height: '100%', maxWidth: 1200, margin: '0 auto', }}>
                        <SliderContent>
                            <Typography variant="h3" sx={{ color: 'black', textAlign: "start" }}>GI??Y NIKE AIR FLIGHT LEGACY LAKERS NAM - TR???NG</Typography>
                            <Typography variant="h5" sx={{ color: 'black', fontSize: 18, mt: 4, mb: 1 }}>Gi??y Nike Air Flight Legacy m???t m???u gi??y th???i trang c??? trung ?????y m?? ho???c. L???y c???m h???ng t??? d??ng gi??y b??ng r??? n???i ti???ng, Nike Air Flight Legacy ch???c ch???n l?? s???n ph???m m?? t??n ????? th???i trang kh??ng th??? b??? qua...</Typography>
                            <Button variant="contained" sx={{ backgroundColor: 'black', color: 'white', marginTop: '20px' }}>Mua ngay</Button>
                        </SliderContent>
                        <SliderImage>
                            <img className="slick-slide-item-img" src="https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787790/PTTK/Item4/giay-nike-air-flight-legacy-lakers-nam-trang-01-550x550_kuxijy.jpg" alt="" />
                        </SliderImage>
                    </Stack>
                </SliderItem>
                <SliderItem>
                    <Stack direction="row" spacing={2} sx={{ width: '100%', height: '100%', maxWidth: 1200, margin: '0 auto', }}>
                        <SliderContent>
                            <Typography variant="h3" sx={{ color: 'black', textAlign: "start" }}>GI??Y NIKE QUEST 4 NAM- X??M CAM</Typography>
                            <Typography variant="h5" sx={{ color: 'black', fontSize: 18, mt: 4, mb: 1 }}> Gi??y Gi??y Nike Quest 4 l?? m???u gi??y ???????c thi???t k??? c???c k??? ?????p v?? tinh t??? v???i ?????c ??i???m r???t tho??ng kh??, ??m v?? r???t nh???. ????y l?? m???u gi??y c?? th??? s??? d???ng trong m???i ho???t ?????ng h??ng ng??y...</Typography>
                            <Button variant="contained" sx={{ backgroundColor: 'black', color: 'white', marginTop: '20px' }}>Mua ngay</Button>
                        </SliderContent>
                        <SliderImage>
                            <img className="slick-slide-item-img" src="https://res.cloudinary.com/dp4fkm6ke/image/upload/v1668787505/PTTK/Item3/giay-nike-quest-4-nam-xam-cam-01-550x550_lrgcfm.jpg" alt="" />
                        </SliderImage>
                    </Stack>
                </SliderItem>

            </Slider>
        </SlickSliderStyle>
    );

}

export default SlickSlider