import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../Pages/Home"
import SingleProduct from '../Pages/SingleProduct'
import Signup from '../Pages/Signup'
import Contact from '../Pages/Contact'
import PrivateRoute from './PrivateRoute'
<<<<<<< HEAD
import Login from '../Pages/Login'
import Mainp from '../Pages/Mainp'
=======
import Mainp from '../Pages/Mainp'

>>>>>>> c66129b96c9c2ee603f97558c748c105891bc00a
const MainRout = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/mainp' element={
          <PrivateRoute>
          <Mainp/>
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