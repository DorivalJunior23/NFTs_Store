import React from "react";

import { Route, Routes, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Create from "../pages/Create";
import EditProfile from "../pages/EditProfile";
import Market from "../pages/Market";
import NftDetails from "../pages/NftDetails";
import SellerProfile from "../pages/SellerProfile";
import Wallet from "../pages/Wallet";

const Routers = () => {
    return <Routes>
        <Route path="/" element={<Navigate to = '/home'/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/market" element={<Market />} />
        <Route path="/create" element={<Create />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/seller-profile" element={<SellerProfile/>}/>
        <Route path="/edit-profile" element={<EditProfile/>}/>
        <Route path="/market/:id" element={<NftDetails/>}/>
    </Routes>
}
export default Routers;