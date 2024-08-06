import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Componenet/Home'
import Product from '../Componenet/Product'
import SingalPro from '../Componenet/SingalPro'
import Login from '../Componenet/Login'
import Signup from '../Componenet/Signup'
import PrivateRoute from './PrivateRoute'
import About from '../Componenet/About'
import News from '../Componenet/News'
import Contact from '../Home/Contact'
import SingleNews from '../Componenet/SingleNews'
import Error from '../Componenet/Error'
import Cart from '../Componenet/Cart'
const MainRout = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/news' element={<News/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/single-news' element={<SingleNews/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/Product' element={
          <PrivateRoute>
            <Product/>
          </PrivateRoute>
          }></Route>
        <Route path='/Product/:id' element={
          <PrivateRoute>
          <SingalPro/>
          </PrivateRoute>
          }></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='*' element={<Error/>}></Route>

    </Routes>
  )
}

export default MainRout