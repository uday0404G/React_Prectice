import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Componenet/Home'
import Product from '../Componenet/Product'
import SingalPro from '../Componenet/SingalPro'
import Login from '../Componenet/Login'
import Signup from '../Componenet/Signup'
const MainRout = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Product' element={<Product/>}></Route>
        <Route path='/product/:id' element={<SingalPro/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>

    </Routes>
  )
}

export default MainRout