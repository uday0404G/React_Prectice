import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Component/Home'
import Login from '../Component/Login'
import Signup from '../Component/Signup'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Signup' element={<Signup/>}/>
    </Routes>
    
  )
}

export default MainRoutes
