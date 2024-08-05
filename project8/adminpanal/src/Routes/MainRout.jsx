import React from 'react'
import { Route, Routes } from 'react-router-dom'

import DataCrud from '../Adminpanal/DataCrud'
import PrivateRoute from './PrivateRoute'
import UserData from '../Adminpanal/UserData'
const MainRout = () => {
  return (
    <Routes>
        {/* <Route path='/' element={<Home/>}></Route> */}
      <Route path='/UserDetails' element={<UserData/>}></Route>
       
        <Route path='/datacrud' element={
         
          <DataCrud/>
         
      }></Route>
        {/* <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route> */}

    </Routes>
  )
}

export default MainRout