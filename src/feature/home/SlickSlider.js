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
                            <Typography variant="h3" sx={{ color: 'black', textAlign: "start" }}>GIÀY NIKE SB DELTA FORCE VULC NAM - TRẮNG</Typography>
                            <Typography variant="h5" sx={{ color: 'black', fontSize: 18, mt: 4, mb: 1 }}>Giày Nike SB Delta Force Vulc mẫu giày thời trang basic không bao giờ lỗi mốt, chắc chắn ai cũng sẽ cần một đôi để có thể đi bất cứ nơi đâu đều rất phù hợp...</Typography>
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
                            <Typography variant="h3" sx={{ color: 'black', textAlign: "start" }}>GIÀY ADIDAS SUPERNOVA+ NAM - ĐEN TRẮNG</Typography>
                            <Typography variant="h5" sx={{ color: 'black', fontSize: 18, mt: 4, mb: 1 }}>Giày adidas Supernova+ là mẫu giày thể thao có thiết kế rất đẹp, cùng với đó là công nghệ đỉnh cao với những vật liệu cao cấp độc quyền của Adidas. adidas Supernova+ là mẫu giày mà dân thể thao không thể bỏ qua....</Typography>
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
                            <Typography variant="h3" sx={{ color: 'black', textAlign: "start" }}>GIÀY NIKE AIR FLIGHT LEGACY LAKERS NAM - TRẮNG</Typography>
                            <Typography variant="h5" sx={{ color: 'black', fontSize: 18, mt: 4, mb: 1 }}>Giày Nike Air Flight Legacy một mẫu giày thời trang cổ trung đầy mê hoặc. Lấy cảm hứng từ dòng giày bóng rổ nổi tiếng, Nike Air Flight Legacy chắc chắn là sản phẩm mà tín đồ thời trang không thể bỏ qua...</Typography>
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
                            <Typography variant="h3" sx={{ color: 'black', textAlign: "start" }}>GIÀY NIKE QUEST 4 NAM- XÁM CAM</Typography>
                            <Typography variant="h5" sx={{ color: 'black', fontSize: 18, mt: 4, mb: 1 }}> Giày Giày Nike Quest 4 là mẫu giày được thiết kế cực kỳ đẹp và tinh tế với đặc điểm rất thoáng khí, êm và rất nhẹ. Đây là mẫu giày có thể sử dụng trong mọi hoạt động hàng ngày...</Typography>
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