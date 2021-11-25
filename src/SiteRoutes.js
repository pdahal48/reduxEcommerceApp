import React from "react";
import { Route, Routes } from "react-router-dom";
import CartItemList from "./CartItemList";
import Home from "./Home";
import Products from "./Products";

const SiteRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element = {<Home />}/>
                <Route exact path="/cart" element={<CartItemList />} />
                <Route path="/products" element={<Products />}/>
            </Routes>
        </div>
    )
}

export default SiteRoutes;