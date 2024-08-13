import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Admin from '../Component/Admin';
import AddProduct from '../Component/AddProduct';
import Signup from '../Component/Signup';
import Users from '../Component/Users';
import Product from '../Component/Product';
import Error from '../Component/Eroor';
import EditProduct from '../Component/Edit';

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Admin />} />
      <Route path="/Product" element={<Product />} />
      <Route path="/AddProduct" element={<AddProduct />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Users" element={<Users />} />
      <Route path="/Edit/:id" element={<EditProduct />} />

      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default MainRoute;
