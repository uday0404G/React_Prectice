import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../Pages/Home"
import SingleProduct from '../Pages/SingleProduct'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Product from '../Pages/Product'
import Contact from '../Pages/Contact'
import PrivateRoute from './PrivateRoute'

const MainRout = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/product' element={
          <PrivateRoute>
          <Product/>
          </PrivateRoute>
          }/>
        <Route path='/Single/:id' element={ <PrivateRoute><SingleProduct/></PrivateRoute>} />
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/Signup' element={<Signup/>} />
    </Routes>
    </>
  )
}

export default MainRout