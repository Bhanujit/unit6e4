import React from "react";
import { Route, Routes } from "react-router-dom";
import Editpage from "./Add";
import Homepage from "./Homepage";
import { Product } from "./Product";
import ProductsPage from "./Products";
import Add from './Add'
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Products" element={<ProductsPage />} />
      <Route path ="/Products/:id" element={<Product/>} />
      <Route path = "/Add" element={<Add/>} />
    </Routes>
  );
};

export default MainRoutes;
