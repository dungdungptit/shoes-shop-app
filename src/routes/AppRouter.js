import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../layouts'
import {
    Home,
    Products,
    ProductDetail,
    Cart,
    Payment,
    Order,
    NotFound,
    Login,
    Register
} from "../pages"


const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                {/* <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> */}
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/order" element={<Order />} />
                <Route path="*" element={<NotFound />} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    )
}

export default AppRouter