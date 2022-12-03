import { Box, Pagination, styled } from '@mui/material';
import React, { useEffect } from 'react'
import ProductItem from './ProductItem';
import { dataProducts } from '../../data/products';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsAsync, productsSelector } from '../../store/reducer/productSlice';

const ListProductsContainer = styled(Box)(({ theme }) => ({
    flexGrow: 1,
    width: '100%',
    height: '100%',
    minHeight: '100vh',
    maxWidth: 960,

}));


const ListProductsStyle = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '100%',
    display: 'grid',
    marginTop: '24px',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '20px',
    [theme.breakpoints.down('md')]: {
        gridTemplateColumns: 'repeat(3, 1fr)',
    },
    [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [theme.breakpoints.down('xs')]: {
        gridTemplateColumns: 'repeat(1, 1fr)',
    },
}));


const ListProducts = () => {
    const [page, setPage] = React.useState(1);

    const ListProducts = useSelector(productsSelector);
    // const ListProducts = dataProducts;
    const [data, setData] = React.useState([]);
    const dispatch = useDispatch();

    console.log(ListProducts);

    useEffect(() => {
        dispatch(getAllProductsAsync());
        setData(ListProducts);
    }, [dispatch]);

    const handleChange = (event, value) => {
        setPage(value);
        setData(ListProducts.slice((value - 1) * 6, value * 6));
    };

    useEffect(() => {
        setData(ListProducts.slice((page - 1) * 6, page * 6));
    }, [page, ListProducts]);
    return (
        <ListProductsContainer>
            <ListProductsStyle>
                {!!data && data.map((product, index) => (
                    <ProductItem key={index} product={product} />
                ))}
            </ListProductsStyle>
            <Pagination
                sx={{ mt: 3, mb: 5, width: '100%', display: 'flex', justifyContent: 'flex-end' }}
                count={
                    ListProducts.length % 6 === 0 ? ListProducts.length / 6 : Math.floor(ListProducts.length / 6) + 1
                } page={page} onChange={handleChange} />
        </ListProductsContainer>
    )
}

export default ListProducts